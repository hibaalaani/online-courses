import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    
    <nav className="bg-transparent text-white px-4 py-4 fixed top-0 w-full z-20">
      
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4">
        {/* Logo */}
        <div>
          <Link to="/" className="text-indigo-600 text-2xl font-bold hover:text-indigo-800 transition">
            Coding Platform
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-gray-700 hover:text-indigo-600 transition">
            Home
          </Link>
          <Link to="/learn" className="text-gray-700 hover:text-indigo-600 transition">
            Learn
          </Link>
          <Link to="/build" className="text-gray-700 hover:text-indigo-600 transition">
            Build
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-indigo-600 transition">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-700 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={
                  isMobileMenuOpen
                    ? 'M6 18L18 6M6 6l12 12' // X icon for closing menu
                    : 'M4 6h16M4 12h16m-7 6h7' // Hamburger icon
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-100 shadow-md">
          <div className="flex flex-col items-center space-y-4 py-4">
            <Link
              to="/"
              className="text-gray-700 hover:text-indigo-600 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/learn"
              className="text-gray-700 hover:text-indigo-600 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Learn
            </Link>
            <Link
              to="/build"
              className="text-gray-700 hover:text-indigo-600 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Build
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-indigo-600 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
