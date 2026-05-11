import React, { useState } from "react";

import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-inner border-2 border-green-500">
            <img
              src="https://afinfosys.netlify.app/logo512.png"
              style={{ width: "100%", borderRadius: "50px" }}
              alt="A.F. Infosys Logo"
            />
          </div>
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-blue-900 leading-tight">
              A.F. Infosys
            </h1>
            <p className="text-xs text-slate-500 font-medium">
              Government Record Management Expert
            </p>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 font-medium text-slate-700">
          <a href="/#about" className="hover:text-blue-600 transition-colors">
            About Us
          </a>
          <a
            href="/#services"
            className="hover:text-blue-600 transition-colors"
          >
            Services
          </a>
          <a href="/#work" className="hover:text-blue-600 transition-colors">
            Work
          </a>
          <a href="/#contact" className="hover:text-blue-600 transition-colors">
            Contact
          </a>
          <NavLink
            to="/terms-and-conditions"
            className="hover:text-blue-600 transition-colors"
          >
            Terms & Conditions
          </NavLink>
          <NavLink
            to="/privacy-policy"
            className="hover:text-blue-600 transition-colors"
          >
            Privacy Policy
          </NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-slate-700 focus:outline-none"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 py-4 px-4 shadow-lg">
          <div className="flex flex-col space-y-4 font-medium text-slate-700">
            <a
              href="/"
              onClick={toggleMenu}
              className="block py-2 hover:text-blue-600"
            >
              Home
            </a>
            <a
              href="/#about"
              onClick={toggleMenu}
              className="block py-2 hover:text-blue-600"
            >
              About Us
            </a>
            <a
              href="/#services"
              onClick={toggleMenu}
              className="block py-2 hover:text-blue-600"
            >
              Services
            </a>
            <a
              href="/#work"
              onClick={toggleMenu}
              className="block py-2 hover:text-blue-600"
            >
              Work
            </a>
            <a
              href="/#contact"
              onClick={toggleMenu}
              className="block py-2 hover:text-blue-600"
            >
              Contact
            </a>
            <NavLink
              to="/terms-and-conditions"
              onClick={toggleMenu}
              className="hover:text-blue-600 transition-colors"
            >
              Terms & Conditions
            </NavLink>
            <NavLink
              to="/privacy-policy"
              onClick={toggleMenu}
              className="hover:text-blue-600 transition-colors"
            >
              Privacy Policy
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
