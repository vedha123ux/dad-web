"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useLanguage } from "./LanguageContext";

const Navbar = () => {
  const { toggleLanguage } = useLanguage(); // optional toggle if you're keeping it
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Places", href: "/places" },
    { label: "Loads", href: "/loads" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-bold text-orange-600">🚛 Sri Jayamurgan</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <span className="text-slate-600 hover:text-orange-500 text-sm font-medium uppercase tracking-wide transition-transform hover:scale-105">
                  {item.label}
                </span>
              </Link>
            ))}

            {/* Optional: Language Button (just icon for now) */}
            <button
              onClick={toggleLanguage}
              className="ml-4 flex items-center bg-gray-100 text-gray-800 px-3 py-1 rounded-md text-sm font-semibold hover:bg-gray-200 transition"
            >
              <span className="mr-1">🌐</span> Language
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-700 hover:text-orange-500"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-2 space-y-2 px-4 pb-4 border-t">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <span
                  onClick={() => setMenuOpen(false)}
                  className="block text-gray-700 hover:text-orange-500 font-medium"
                >
                  {item.label}
                </span>
              </Link>
            ))}
            {/* Optional Language Button for Mobile */}
            <button
              onClick={() => {
                toggleLanguage();
                setMenuOpen(false);
              }}
              className="w-full bg-gray-100 text-gray-800 px-4 py-2 rounded-md text-sm font-semibold hover:bg-gray-200 transition"
            >
              🌐 Language
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
