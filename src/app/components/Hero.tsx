"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight, FaChevronDown } from "react-icons/fa";

const slides = [
  { image: "/images/carousel1.jpg", title: "GRAIL SALE S/S '25", subtitle: "Become a Featured Seller" },
  { image: "/images/Contentful-Hero.jpg", title: "Exclusive Drops", subtitle: "Get the Latest Streetwear" },
  { image: "/images/carousel3.jpg", title: "Limited Edition", subtitle: "Rare Sneakers & Apparel" },
  { image: "/images/carousel4.jpg", title: "Trending Styles", subtitle: "Upgrade Your Wardrobe" },
];

const categories = [
  { name: "DESIGNERS", subcategories: ["Gucci", "Off-White", "Balenciaga"] },
  { name: "MENSWEAR", subcategories: ["Jackets", "Hoodies", "T-Shirts"] },
  { name: "WOMENSWEAR", subcategories: ["Dresses", "Skirts", "Tops"] },
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (category: string) => {
    setOpenDropdown(openDropdown === category ? null : category);
  };

  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  const nextSlide = () => setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section className="pt-18 bg-white text-black">
      <hr className="border-gray-300" />

      {/* Navbar */}
      <nav className="flex justify-center bg-white text-black py-3 shadow-md relative z-10">
        <ul className="flex space-x-10 text-sm font-bold">
          {categories.map((item) => (
            <div key={item.name} className="relative">
              {/* Main Category */}
              <li
                className="flex items-center space-x-1 cursor-pointer hover:text-gray-500 transition"
                onClick={() => toggleDropdown(item.name)}
              >
                <span>{item.name}</span> <FaChevronDown size={12} />
              </li>

              {/* Dropdown */}
              {openDropdown === item.name && (
                <ul className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md w-40 py-2 text-left border border-gray-200 z-20">
                  {item.subcategories.map((sub) => (
                    <li key={sub} className="px-4 py-2 hover:bg-gray-100 transition">
                      {sub}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          {/* Regular Menu Items */}
          {["SNEAKERS", "STAFF PICKS", "COLLECTIONS", "EDITORIAL"].map((item) => (
            <li key={item} className="cursor-pointer hover:text-gray-500 transition">
              {item}
            </li>
          ))}
        </ul>
      </nav>

      {/* Custom Carousel */}
      <div className="relative w-full h-[500px] bg-white text-black">
        <Image src={slides[currentIndex].image} alt={slides[currentIndex].title} fill priority className="object-cover" />

        {/* Overlay Content */}
        <div className="absolute inset-0 bg-opacity-50 flex flex-col items-center justify-center text-white text-center px-4">
          <h2 className="text-xl font-bold">{slides[currentIndex].title}</h2>
          <p className="text-3xl font-bold mt-2">{slides[currentIndex].subtitle}</p>
          <button className="mt-4 px-6 py-3 text-lg font-semibold border border-white hover:bg-white hover:text-black transition">
            Learn More
          </button>
        </div>

        {/* Left & Right Navigation */}
        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 p-3 rounded-full hover:bg-opacity-50 transition"
          onClick={prevSlide}
        >
          <FaChevronLeft className="text-white text-2xl" />
        </button>

        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 p-3 rounded-full hover:bg-opacity-50 transition"
          onClick={nextSlide}
        >
          <FaChevronRight className="text-white text-2xl" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`h-3 w-3 rounded-full cursor-pointer ${currentIndex === index ? "bg-white" : "bg-gray-400"}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
