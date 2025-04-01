"use client";
import { useState } from "react";
import { FaSearch, FaBars, FaChevronDown } from "react-icons/fa";
import Link from "next/link";

const categories = [
  { name: "DESIGNERS", subcategories: ["Gucci", "Off-White", "Balenciaga"] },
  { name: "MENSWEAR", subcategories: ["Jackets", "Hoodies", "T-Shirts"] },
  { name: "WOMENSWEAR", subcategories: ["Dresses", "Skirts", "Tops"] },
  { name: "SNEAKERS" }, 
  { name: "STAFF PICKS" },
  { name: "COLLECTIONS" },
  { name: "EDITORIAL" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  // Toggle dropdown
  const toggleDropdown = (category: string) => {
    setOpenDropdown(openDropdown === category ? null : category);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-15 bg-white text-black shadow-md flex items-center justify-between px-5 py-3">
    
    <div className="gap-7 flex flex-row mx-0">
      {/* Logo */}
      <Link href="/">
        <h1 className="text-3xl font-bold">boohoo</h1>
      </Link>

      <div className="flex flex-row mt-2 text-1xl gap-3">
        <p>WOMENS</p>
        <p>MENS</p>
      </div>

       {/* Search Bar - Hidden on Small Screens */}
      <div>
        <input
          type="text"
          placeholder="What are you looking for ?"
          className="w-full outline-none px-2 py-2 text-black"
        />
      </div>
    </div>

      {/* Hamburger Menu Button */}
      <button className="md:hidden text-2xl" onClick={() => setMenuOpen(true)}>
        <FaBars />
      </button>

      {/* Backdrop (Closes Menu on Click) */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/30 z-10" onClick={() => setMenuOpen(false)}></div>
      )}

      {/* Mobile Hamburger Menu */}
      <div
        className={`fixed text-left top-0 right-0 h-full w-3/4 max-w-[300px] bg-white shadow-lg z-20 transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="p-5 flex flex-col space-y-4">
          <button className="border border-black px-4 py-2 text-sm text-left hover:bg-gray-300 transition">
            SELL
          </button>
          <button className="border border-gray-300 px-4 py-2 text-sm text-left hover:bg-gray-300 transition">
            SIGN UP
          </button>
          <Link href="/login">
            <button className="bg-black text-white px-4 py-2 text-sm text-left hover:bg-gray-300 hover:text-black transition">
              LOG IN
            </button>
          </Link>

          {/* Category Dropdowns */}
          <div className="border-t pt-3 mt-2 text-left">
            {categories.map((item) => (
              <div key={item.name} className="w-full">
                {item.subcategories ? (
                  <button
                    className="w-full flex justify-between text-left px-4 py-2 text-sm font-bold hover:bg-gray-300 transition"
                    onClick={() => toggleDropdown(item.name)}
                  >
                    {item.name}
                    <FaChevronDown
                      className={`transform transition ${
                        openDropdown === item.name ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                ) : (
                  <button className="w-full px-4 py-2 text-sm font-bold hover:bg-gray-300 transition">
                    {item.name}
                  </button>
                )}

                {/* Subcategories */}
                {openDropdown === item.name && item.subcategories && (
                  <ul className="space-y-2 text-left">
                    {item.subcategories.map((sub) => (
                      <li key={sub} className="text-gray-600 text-sm hover:text-black">
                        {sub}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
