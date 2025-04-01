"use client";
import { FaSearch } from "react-icons/fa";


export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 mb-9 w-full z-10 flex items-center justify-center px-6 py-4 shadow-md bg-white text-black">

      {/* Logo */}
      <h1 className="text-3xl font-bold flex justify-center items-center ml-30">PRELURA</h1>

      {/* Search Bar */}
      <div className="flex text-sm items-center flex-grow mx-6 max-w-[35rem] border border-black overflow-hidden">
        <FaSearch className="text-gray-500 mx-3" />
        <input
          type="text"
          placeholder="Search for anything"
          className="w-full outline-none px-2 py-2 text-black"
        />
        <button className="px-5 py-1 mr-1 border border-l text-[12px] font-bold border-gray-300 hover:bg-gray-300 transition">
          SEARCH
        </button>
      </div>

      {/* Buttons */}
      <div className="flex space-x-7 ml-40">
        <button className="px-2  border text-[12px]">SELL</button>
        <button className="px-2 py-1 border border-gray-300 text-[12px]">
          SIGN UP
        </button>
        <button className="px-2 py-1 bg-black text-white text-[12px]">
          LOG IN
        </button>
      </div>
    </nav>
  );
}
