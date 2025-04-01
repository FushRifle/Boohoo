"use client";
import { FaTwitter, FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-black py-4 px-8 text-sm font-bold mt-7">

      <div className="w-full flex justify-between items-center">
        {/* Left Side - Links */}
        <div className="flex flex-wrap gap-4 text-[12px] sm:gap-6">
          <a href="#" className="hover:text-gray-500 transition">ABOUT</a>
          <a href="#" className="hover:text-gray-500 transition">YOUR PRIVACY CHOICES</a>
          <a href="#" className="hover:text-gray-500 transition">HELP & FAQ</a>
          <a href="#" className="hover:text-gray-500 transition">TERMS</a>
          <a href="#" className="hover:text-gray-500 transition">PRIVACY</a>
          <a href="#" className="hover:text-gray-500 transition">TRUST</a>
          <a href="#" className="hover:text-gray-500 transition">ACCESSIBILITY</a>
          <a href="#" className="hover:text-gray-500 transition">CONTACT</a>
          <a href="#" className="hover:text-gray-500 transition">JOBS</a>
          <a href="#" className="hover:text-gray-500 transition">iOS APP</a>
        </div>

        {/* Right Side - Social Icons & Copyright */}
        <div className="flex items-center gap-4">
          <a href="#" className="text-gray-500 hover:text-black transition text-xl">
            <FaTwitter />
          </a>
          <a href="#" className="text-gray-500 hover:text-black transition text-xl">
            <FaInstagram />
          </a>
          <a href="#" className="text-gray-500 hover:text-black transition text-xl">
            <FaFacebook />
          </a>
          <a href="#" className="text-gray-500 hover:text-black transition text-xl">
            <FaTiktok />
          </a>

          {/* Copyright */}
          <span className="text-gray-500 ml-4">© Prelura 2025. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
