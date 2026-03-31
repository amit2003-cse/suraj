"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex flex-col items-start px-2 py-1">
              <span className="text-3xl font-bold text-brand tracking-widest uppercase">SURAJ</span>
              <span className="text-xs font-semibold bg-black text-white px-1 tracking-wider uppercase">EDUCATION ACADEMY</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-800 hover:text-brand font-semibold">Home</Link>
            <Link href="#courses" className="text-gray-800 hover:text-brand font-semibold">Courses</Link>
            <Link href="#about" className="text-gray-800 hover:text-brand font-semibold">About Us</Link>
            <Link href="#contact" className="text-gray-800 hover:text-brand font-semibold">Contact</Link>
            <Link 
              href="https://api.whatsapp.com/send?phone=919711458977&text=welcome%20to%20best%20about%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full font-bold shadow-sm transition"
            >
              Chat on WhatsApp
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-brand focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block px-3 py-2 text-gray-800 font-semibold hover:bg-gray-100">Home</Link>
            <Link href="#courses" className="block px-3 py-2 text-gray-800 font-semibold hover:bg-gray-100">Courses</Link>
            <Link href="#about" className="block px-3 py-2 text-gray-800 font-semibold hover:bg-gray-100">About Us</Link>
            <Link href="#contact" className="block px-3 py-2 text-gray-800 font-semibold hover:bg-gray-100">Contact</Link>
            <Link 
              href="https://api.whatsapp.com/send?phone=919711458977&text=welcome%20to%20best%20about%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-3 py-2 text-green-600 font-bold hover:bg-gray-100"
            >
              Chat on WhatsApp
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
