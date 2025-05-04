import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface CTAProps {
  setShowOptions: (show: boolean) => void; // Expecting a prop to control option visibility
}

const CTA: React.FC<CTAProps> = ({ setShowOptions }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [sparkles, setSparkles] = useState<
    { id: number; x: number; y: number; size: number; opacity: number }[]
  >([]);

  useEffect(() => {
    if (isHovered && buttonRef.current) {
      const buttonRect = buttonRef.current.getBoundingClientRect();
      const centerX = buttonRect.left + buttonRect.width / 2;
      const centerY = buttonRect.top + buttonRect.height / 2;

      const interval = setInterval(() => {
        const angle = Math.random() * 2 * Math.PI;
        const radius = Math.random() * buttonRect.width * 0.6;
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);
        const size = Math.random() * 4 + 2;
        const opacity = Math.random() * 0.8 + 0.2;
        const id = Date.now() + Math.random();

        setSparkles((prev) => [...prev, { id, x, y, size, opacity }]);

        setTimeout(() => {
          setSparkles((prev) => prev.filter((s) => s.id !== id));
        }, 800); // Duration of the sparkle
      }, 150); // Frequency of sparkles

      return () => clearInterval(interval);
    } else {
      setSparkles([]);
    }
  }, [isHovered]);

  const buttonVariants = {
    initial: {},
    hover: {
      scale: 1.05,
      y: -3,
      boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.3)',
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.95,
    },
  };

  const containerVariants = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] } },
  };

  const headingVariants = {
    initial: { y: -20, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.7, delay: 0.2 } },
  };

  const textVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5, delay: 0.4 } },
  };

  const sparkleVariants = {
    initial: { opacity: 0, scale: 0.5 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, scale: 0, transition: { duration: 0.2 } },
  };

  return (
    <motion.section
      id="cta"
      className="z-10 text-center px-6 sm:px-12 max-w-6xl py-20 mx-auto my-24"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      <motion.div
        className="bg-gradient-to-r rom-indigo-900 via-purple-900 to-indigo-600 p-6 sm:p-12 md:p-20 rounded-2xl shadow-2xl relative overflow-hidden"
      >
        {/* Animated Background Gradient (Subtle Movement) */}
      <motion.div
  className="absolute inset-0 opacity-25 blur-xl"
  animate={{
    background: [
      'linear-gradient(45deg, #6366F1, #A78BFA, #E0E7FF)',
      'linear-gradient(90deg, #6366F1, #D8B4FE, #A3A3F7)',
      'linear-gradient(135deg, #6366F1, #818CF8, #6D28D9)',
      'linear-gradient(45deg, #6366F1, #A78BFA, #E0E7FF)', // loop back
    ],
  }}
  transition={{
    duration: 15,
    ease: 'linear',
    repeat: Infinity,
  }}
/>

        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 relative"
          variants={headingVariants}
        >
          Ready to Build Your First Project? ✨
        </motion.h2>
        <motion.p
          className="text-sm sm:text-base md:text-lg text-white mb-6 sm:mb-8 max-w-2xl mx-auto relative"
          variants={textVariants}
        >
          Dive into hands-on coding, unleash your creativity, and bring your ideas to life — one line of code at a time.
        </motion.p>
        <motion.button
          ref={buttonRef}
          className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-indigo-700 font-semibold rounded-full text-sm sm:text-lg hover:bg-indigo-100 active:bg-indigo-300 transition-all duration-200 relative overflow-hidden"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => {
            const element = document.getElementById('CTA'); // Ensure ID matches your section
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
              setShowOptions(true); // Call the setShowOptions function
            }
          }}
        >
          <span className="relative z-10">Start Your Journey</span>
          {/* Sparkle Effect on Hover */}
          {sparkles.map((sparkle) => (
            <motion.div
              key={sparkle.id}
              className="absolute bg-yellow-300 rounded-full pointer-events-none"
              style={{
                left: sparkle.x - sparkle.size / 2,
                top: sparkle.y - sparkle.size / 2,
                width: sparkle.size,
                height: sparkle.size,
                opacity: sparkle.opacity,
              }}
              variants={sparkleVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            />
          ))}
          {/* Subtle Shine Effect */}
          <motion.div
            className="absolute top-0 left-0 w-full h-full bg-white bg-opacity-10 z-0 rounded-full transform skew-x-[-20deg] translate-x-[-150px]"
            animate={isHovered ? { translateX: ['-150px', '200px'] } : { translateX: '-150px' }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          />
        </motion.button>
      </motion.div>
    </motion.section>
  );
};

export default CTA;