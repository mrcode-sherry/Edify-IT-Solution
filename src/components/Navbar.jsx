"use client";
import { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-none fixed top-0 z-50 w-full md:px-20 overflow-hidden">
      <nav
        className={`flex px-5 bg-black bg-opacity-90 md:border border-b md:mt-5 justify-between border-white border-opacity-30 items-center py-3 md:py-2 transition-all duration-300 
        ${isScrolled ? "md:w-[65%] md:px-5 md:rounded-lg" : "md:w-full md:px-5"} mx-auto`}
      >
        {/* Logo */}
        <img src="EdifyLogo.png" alt="" width={125} height={125}/>

        {/* Menu Icon for Mobile */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(true)}>
          <Menu size={28} />
        </button>

        {/* Navigation Links */}
        <ul className="hidden md:flex gap-6 text-white text-lg text-[16.3px]">
          <li><a href="#" className="hover:text-blue-500 transition">Home</a></li>
          <li><a href="#" className="hover:text-blue-500 transition">About Us</a></li>
          <li><a href="#" className="hover:text-blue-500 transition">Services</a></li>
          <li><a href="#" className="hover:text-blue-500 transition">Portfolio</a></li>
          <li><a href="#" className="hover:text-blue-500 transition">Blogs</a></li>
        </ul>

        {/* Button */}
        <button className="hidden md:block px-6 py-1 btn text-[17px] shadow-none border-none text-white rounded-lg transition">
          {isScrolled ? <ArrowUpRight size={20} className="w-50 items-center text-center flex justify-center"/> : "Free Consultation"}
        </button>

        {/* Mobile Menu Panel */}
        <div
          className={`fixed top-0 left-0 h-screen w-[70%] bg-black bg-opacity-95 text-white flex flex-col items-start py-9 px-6 space-y-6 transform transition-transform duration-300 
          ${isOpen ? "translate-x-0" : "-translate-x-full"} md:hidden duration-1000`}
        >
          {/* Close Button */}
          <button className="absolute top-5 right-5 text-white" onClick={() => setIsOpen(false)}>
            <X size={28} />
          </button>

          <a href="#" className="hover:text-blue-500 transition text-lg">Process</a>
          <a href="#" className="hover:text-blue-500 transition text-lg">Services</a>
          <a href="#" className="hover:text-blue-500 transition text-lg">Benefits</a>
          <a href="#" className="hover:text-blue-500 transition text-lg">Plans</a>
          <a href="#" className="hover:text-blue-500 transition text-lg">Contact</a>

          <button className="w-full px-6 py-1 btn border-none shadow-none text-white rounded-lg transition">
            Get In Touch
          </button>
        </div>
      </nav>
    </div>
  );
}
