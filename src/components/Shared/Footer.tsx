import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="  bg-gradient-to-r from-indigo-100 via-blue-100 to-green-100 px-4 sm:px-6 lg:px-8 shadow-md ">
      <div className="max-w-7xl mx-auto py-6 flex flex-col md:flex-row justify-between items-center">
        {/* Links */}
        <div className="flex space-x-6">
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

        {/* Copyright */}
        <div className="text-gray-700 mt-4 md:mt-0">
          © {new Date().getFullYear()} Coding Platform. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
