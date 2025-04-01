"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight, FaChevronDown } from "react-icons/fa";

const slides = [
  { image: "/hero1.png"},
  { image: "/hero5.gif"},
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
    <section className="relative mt-10 md:mt-10 py-6 md:py-10 bg-white text-black h-full max-w-9xl mx-auto">
      <hr className="border-gray-300" />

      {/* Navbar */}
      <nav className="flex justify-center bg-white text-black py-3 shadow-md relative z-10">
        <ul className="hidden md:flex flex-row gap-20 text-[12px] font-bold">
          {categories.map((item) => (
            <div key={item.name} className="relative">
              <li
                className="flex items-center space-x-1 cursor-pointer hover:text-gray-500 transition"
                onClick={() => toggleDropdown(item.name)}
              >
                <span>{item.name}</span> <FaChevronDown size={12} />
              </li>

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

          {["SNEAKERS", "STAFF PICKS", "COLLECTIONS", "EDITORIAL"].map((item) => (
            <li key={item} className="cursor-pointer hover:text-gray-500 transition">
              {item}
            </li>
          ))}
        </ul>
      </nav>

      {/* Custom Carousel */}
      <div className="relative w-full h-[200rem] md:h-[700px]">
        <Image src={slides[currentIndex].image} alt="hero-section" fill priority className="object-cover" />

        {/* Left & Right Navigation */}
        <button
          className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 p-2 md:p-3 hover:bg-opacity-50 transition"
          onClick={prevSlide}
        >
          <FaChevronLeft className="text-black text-xl md:text-2xl" />
        </button>

        <button
          className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 p-2 md:p-3 hover:bg-opacity-50 transition"
          onClick={nextSlide}
        >
          <FaChevronRight className="text-black text-xl md:text-2xl" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`h-4 w-4 md:h-3 md:w-3 rounded-full cursor-pointer ${currentIndex === index ? "bg-white" : "bg-black"}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
