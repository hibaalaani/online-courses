import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [username, setUsername] = useState<string | null>(null);

  const navigate = useNavigate();
  useEffect(() => {
    // Check if the user is logged in by retrieving their username from localStorage
    const storedUsername = localStorage.getItem('username');
    setUsername(storedUsername);
  }, []);

  const handleLogout = () => {
    // Clear user data and navigate to the home page
    localStorage.clear();
    setUsername(null);
    navigate('/');
  };
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
           {/* Conditional Rendering for Auth Links */}
           {username ? (
            <>
              <span className="text-gray-700">
                Hello, <span className="font-bold">{username}</span>
              </span>
              <button
                onClick={handleLogout}
                className="text-red-600 hover:text-red-800 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-gray-700 hover:text-indigo-600 transition">
                Login
              </Link>
              <Link to="/register" className="text-gray-700 hover:text-indigo-600 transition">
                Register
              </Link>
            </>
          )}
        </div>
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
      {/* </div> */}

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
             {/* Conditional Rendering for Auth Links */}
             {username ? (
              <>
                <span className="text-gray-700">
                  Hello, <span className="font-bold">{username}</span>
                </span>
                <button
                  onClick={handleLogout}
                  className="text-red-600 hover:text-red-800 transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-gray-700 hover:text-indigo-600 transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="text-gray-700 hover:text-indigo-600 transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
