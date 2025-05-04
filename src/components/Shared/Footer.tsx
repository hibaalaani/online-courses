import React, { useEffect, useState } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const [gradientAngle, setGradientAngle] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setGradientAngle((prev) => (prev + 1) % 360);
    }, 70);
    return () => clearInterval(intervalId);
  }, []);

  const animatedGradient = `linear-gradient(${gradientAngle}deg, #6366F1, #8B5CF6, #A78BFA, #C4B5FD, #D8B4FE)`;
  // const socialIconsVariants = {
  //   initial: { scale: 0.8, opacity: 0, y: 10 },
  //   animate: { scale: 1, opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.1 } },
  // };

  const socialIconVariants = {
    initial: { scale: 0, rotate: -45 },
    animate: { scale: 1, rotate: 0, transition: { type: 'spring', damping: 10, stiffness: 200 } },
    hover: { scale: 1.1, y: -5, rotate: 15, transition: { duration: 0.2 } },
  };
  return (
    <motion.footer
      className="text-white py-6 px-4 w-full "
      style={{ background: animatedGradient }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center " >
        {/* Socials */}
        <div className="flex space-x-6 mb-4 md:mb-0">
          {[{ icon: FaFacebook, url: "https://facebook.com" },
            { icon: FaTwitter, url: "https://twitter.com" },
            { icon: FaInstagram, url: "https://instagram.com" },
            { icon: FaLinkedin, url: "https://linkedin.com" },
            { icon: FaGithub, url: "https://github.com" }
          ].map(({ icon: Icon, url }, idx) => (
            <motion.a
              key={idx}
              href={url}
              target="_blank"
              rel="noreferrer"
              variants={socialIconVariants}
              className="hover:text-yellow-300 transition"
              whileHover={{ scale: 1.1 }}
            >
              <Icon size={24} />
            </motion.a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-md text-center">
          <p className="mb-1 animate-pulse">Empowering kids and teens with code! 🚀</p>
          <p>© {new Date().getFullYear()} Bug to Byte. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
