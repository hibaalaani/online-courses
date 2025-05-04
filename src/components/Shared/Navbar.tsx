import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, logout } = useUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <motion.nav
      className="bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 shadow-lg fixed top-0 w-full z-50"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 70 }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <Link to="/" className="flex items-center space-x-2">
          {/* <img
            src="/transparent.png"
            alt="Bug to Byte Logo"
            className="w-20 h-auto drop-shadow-[0_0_8px_#22d3ee] hover:scale-105 transform transition duration-300"
          /> */}
          <span className="text-white text-xl font-bold tracking-wide animate-pulse">
            Bug to Byte
          </span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          {['/', '/learn', '/build', '/contact', '/kids-7-17'].map((path) => (
            <Link
              key={path}
              to={path}
              className="text-white hover:text-yellow-300 text-lg transition duration-300 relative group"
            >
              {path === '/' ? 'Home' : path.replace('/', '').replace('-', ' ')}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-300 group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
          {user.username ? (
            <>
           <Link
              
              to='/dashboard'
              className="text-white hover:text-yellow-300 transition relative group"
            >
           Hi {user.username}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-300 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <button
                onClick={handleLogout}
                className="text-white hover:text-red-300 transition relative group"
              >
                Logout
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-red-300 group-hover:w-full transition-all duration-300"></span>
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-white hover:text-yellow-300 transition relative group">
                Login
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-300 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link to="/register" className="text-white hover:text-yellow-300 transition relative group">
                Register
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-300 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </>
          )}
        </div>

        <button
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                isMobileMenuOpen
                  ? 'M6 18L18 6M6 6l12 12'
                  : 'M4 6h16M4 12h16M4 18h16'
              }
            />
          </svg>
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-indigo-600 shadow-lg py-4">
          <div className="flex flex-col items-center space-y-4">
            {['/', '/learn', '/build', '/contact', '/beginner-roadmap'].map((path) => (
              <Link
                key={path}
                to={path}
                className="text-white hover:text-yellow-300 text-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                {path === '/' ? 'Home' : path.replace('/', '').replace('-', ' ')}
              </Link>
            ))}
            {user.username ? (
              <>
                <span className="text-white font-semibold">Hi, {user.username}</span>
                <button
                  onClick={handleLogout}
                  className="text-red-300 hover:text-red-500"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-white hover:text-yellow-300" onClick={() => setMobileMenuOpen(false)}>
                  Login
                </Link>
                <Link to="/register" className="text-white hover:text-yellow-300" onClick={() => setMobileMenuOpen(false)}>
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
