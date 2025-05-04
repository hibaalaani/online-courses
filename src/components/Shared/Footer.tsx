import React, { useState, useEffect } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';

const Footer: React.FC = () => {
  const controls = useAnimation();
  const [isVisible, setIsVisible] = useState(false);
  const [gradientAngle, setGradientAngle] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            controls.start({ y: 0, opacity: 1 });
          } else {
            setIsVisible(false);
            controls.start({ y: 100, opacity: 0 });
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    const footerElement = document.querySelector('footer');
    if (footerElement) {
      observer.observe(footerElement);
    }

    return () => {
      if (footerElement) {
        observer.unobserve(footerElement);
      }
    };
  }, [controls]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setGradientAngle((prevAngle) => (prevAngle + 1) % 360);
    }, 50); // Adjust speed as needed
    return () => clearInterval(intervalId);
  }, []);

  const animatedGradient = `linear-gradient(${gradientAngle}deg, #6366F1, #818CF8, #A78BFA, #C4B5FD, #E0E7FF, #D8B4FE, #C5B4FE, #A3A3F7, #8B5CF6, #6D28D9)`;

  const socialIconsVariants = {
    initial: { scale: 0.8, opacity: 0, y: 10 },
    animate: { scale: 1, opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.1 } },
  };

  const socialIconVariants = {
    initial: { scale: 0, rotate: -45 },
    animate: { scale: 1, rotate: 0, transition: { type: 'spring', damping: 10, stiffness: 200 } },
    hover: { scale: 1.1, y: -5, rotate: 15, transition: { duration: 0.2 } },
  };

  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
  };



  return (
    <motion.footer
      className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white mt-0 "
      style={{ background: animatedGradient }}
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 70 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center">
          {/* Social Media Icons */}
          <motion.div
          className="flex space-x-6 mb-4 md:mb-0"
          variants={socialIconsVariants}
          initial="initial"
          animate={isVisible ? 'animate' : 'initial'}
        >
          <motion.a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-300 transition"
            aria-label="Facebook"
            variants={socialIconVariants}
            whileHover="hover"
          >
            <FaFacebook size={28} />
          </motion.a>
          <motion.a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-300 transition"
            aria-label="Twitter"
            variants={socialIconVariants}
            whileHover="hover"
          >
            <FaTwitter size={28} />
          </motion.a>
          <motion.a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-300 transition"
            aria-label="Instagram"
            variants={socialIconVariants}
            whileHover="hover"
          >
            <FaInstagram size={28} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-300 transition"
            aria-label="LinkedIn"
            variants={socialIconVariants}
            whileHover="hover"
          >
            <FaLinkedin size={28} />
          </motion.a>
          <motion.a
            href="https://www.github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-300 transition"
            aria-label="GitHub"
            variants={socialIconVariants}
            whileHover="hover"
          >
            <FaGithub size={28} />
          </motion.a>
        </motion.div>

        {/* Description or Site Info */}
        <motion.div
          className="text-center text-sm md:text-base"
          variants={textVariants}
          initial="initial"
          animate={isVisible ? 'animate' : 'initial'}
        >
          <p className="mb-2 animate-pulse text-lg">Empowering kids and teens with code! 🚀</p>
          <p>© {new Date().getFullYear()} Bug to Byte. All rights reserved.</p>
        </motion.div>
      </div>
      {/* Animated Border Top */}
      <motion.div
        className="absolute top-0 left-0 w-full h-1 bg-yellow-300 origin-left"
        initial={{ scaleX: 0 }}
        animate={isVisible ? { scaleX: 1, transition: { duration: 0.8, ease: [0.68, -0.55, 0.27, 1.55] } } : { scaleX: 0 }}
      />
    </motion.footer>
  );
};

export default Footer;
