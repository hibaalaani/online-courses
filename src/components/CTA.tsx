// 📁 components/CTA.tsx
import React, { useRef } from 'react';
import { motion } from 'framer-motion';

interface CTAProps {
  setShowOptions: (show: boolean) => void;
}

const CTA: React.FC<CTAProps> = ({ setShowOptions }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <motion.section
      id="cta"
      className="z-10 text-center px-6 sm:px-12 max-w-6xl py-20 mx-auto my-24"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="bg-gradient-to-r bg-gradient-to-b from-gray-900 via-indigo-900 to-black-900 p-6 sm:p-12 md:p-20 rounded-2xl shadow-2xl relative overflow-hidden">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Ready to Build Your First Project? ✨
        </h2>
        <p className="text-base sm:text-lg text-white mb-8 max-w-2xl mx-auto">
          Dive into hands-on coding, unleash your creativity, and bring your ideas to life — one line of code at a time.
        </p>
        <motion.button
          ref={buttonRef}
          className="px-8 py-4 bg-white text-indigo-700 font-semibold rounded-full text-lg hover:bg-indigo-100 active:bg-indigo-300 transition-all duration-300"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            const element = document.getElementById('CTA');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
              setShowOptions(true);
            }
          }}
        >
          Start Your Journey
        </motion.button>
      </div>
    </motion.section>
  );
};

export default CTA;
