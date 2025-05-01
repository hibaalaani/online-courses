import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, logout } = useUser();
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate('/');
  };


  // first solution , was not working and wasn't update the user
  // useEffect(() => {
  //   // Check if the user is logged in by retrieving their username from localStorage
  //   const storedUsername = localStorage.getItem('username');
  //   setUsername(storedUsername);
  // }, []);

  // const handleLogout = () => {
  //   // Clear user data and navigate to the home page
  //   localStorage.clear();
  //   setUsername(null);
  //   navigate('/');
  // };
  return (
    
    <nav className="bg-indigo-200 text-white  shadow-md fixed top-0 w-full z-20 ">
      
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="relative inline-block group">


{/* these have been committed , extra svg ring around the logo */}
        {/* <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden animate-spinSlow">
  <svg
    viewBox="0 0 1000 1000"
    className="w-[30rem] md:w-[40rem] animate-spin-slow group-hover:animate-none transition-all duration-300"
    preserveAspectRatio="xMidYMid meet"
  >
    <defs>
      <path
        id="heroRing"
        d="M500,500 m -400,0 a 400,400 0 1,1 800,0 a 400,400 0 1,1 -800,0"
      />
      <filter id="heroGlow" x="-50%" y="-50%" width="200%" height="200%">
        <feDropShadow dx="0" dy="0" stdDeviation="1.5" floodColor="#22d3ee" />
        <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#22d3ee" />
      </filter>
    </defs>

    <text
      fill="#4b22ee"
      fontSize="18"
      fontWeight="600"
      letterSpacing="3"
      // filter="url(#heroGlow)"
    >
      <textPath href="#heroRing" startOffset="0%">
        coding is easy with Bug to Byte • join your journey • discover your skills • build, learn, grow • empower your future • turn curiosity into creation • bug to byte • the code is easy <tspan fill='gold'>••••••••••••••••••••••••••••••••••••••••••••••••••</tspan>
      </textPath>
    </text>
  </svg>
</div> */}


 <Link to="/" className="text-indigo-600 w-2xl font-bold hover:text-indigo-800 transition">
 <img src="/transparent.png" alt="Bug to Byte Logo"   className="w-16 md:w-16 drop-shadow-[0_0_4px_#22d3ee] transition-transform relative z-10 w-full h-12 hover:animate-bounce " />
 {/* logo style with bounce  */}
  {/* <img src="/transparent.png" alt="Bug to Byte Logo"   className="w-14 md:w-16 drop-shadow-[0_0_4px_#22d3ee] w-12 hover:animate-bounce transition-transform relative z-10 w-full h-12 animate-[wiggle_4s_infinite]" /> */}
  </Link>
</div>
        

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-gray-700 hover:text-indigo-600 transition relative group cursor-pointer">
            Home
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link to="/learn" className="text-gray-700 hover:text-indigo-600 transition relative group cursor-pointer">
            Learn
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link to="/build" className="text-gray-700 hover:text-indigo-600 transition relative group cursor-pointer">
            Build
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-indigo-600 transition relative group cursor-pointer">
            Contact
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
          </Link>

          <Link to="/beginner-roadmap" className="text-gray-700 hover:text-indigo-600 transition relative group cursor-pointer">
            9-17 years
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
          </Link>
           {/* Conditional Rendering for Auth Links */}
           {user.username ? (
            <>
              <Link to="/dashboard" className="text-gray-700 hover:text-indigo-600 transition relative group cursor-pointer">
                <span className="text-gray-700">
                  Hello, <span className="font-bold">{user.username}</span>
                </span>
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <button onClick={handleLogout} className="text-red-600 hover:text-red-800 transition relative group cursor-pointer">
                Logout
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-gray-700 hover:text-indigo-600 transition relative group cursor-pointer">Login <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-cyan-400 group-hover:w-full transition-all duration-300"></span></Link>
             
              <Link to="/register" className="text-gray-700 hover:text-indigo-600 transition relative group cursor-pointer">Register <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-cyan-400 group-hover:w-full transition-all duration-300"></span></Link>
             
            </>
          )}
        </div>
        {/* </div> */}

        {/* Mobile Menu Button */}
        {/* <div className="md:hidden"> */}
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-indigo-800 hover:text-indigo-300 focus:outline-none"
          >
             {/* {isMobileMenuOpen ? '✕' : '☰'} */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 "
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
        {/* </div> */}
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
             {/* Conditional Rendering for Auth Links */}
             {user.username ? (
              <>
                <Link to="/dashboard" className="text-gray-700 hover:text-indigo-600 transition" onClick={() => setMobileMenuOpen(false)}>
                  <span className="text-gray-700">
                    Hello, <span className="font-bold">{user.username}</span>
                  </span>
                </Link>
                <button onClick={handleLogout} className="text-red-600 hover:text-red-800 transition">Logout</button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-gray-700 hover:text-indigo-600 transition" onClick={() => setMobileMenuOpen(false)}>Login</Link>
                <Link to="/register" className="text-gray-700 hover:text-indigo-600 transition" onClick={() => setMobileMenuOpen(false)}>Register</Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
