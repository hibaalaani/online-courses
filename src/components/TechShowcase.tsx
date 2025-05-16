import React from "react";
import { motion } from 'framer-motion';
const techLogos = [
//   {src: "/logos/scratch-100.png", alt: "Scratch"}, 
  {src: "/logos/scratch-80.png", alt: "Scratch"}, 
  {src: "/logos/CC.png", alt: "Code Combat"},
  {src: "/logos/website-48.png", alt: "https"},

//   {src: "/logos/website-100.png", alt: "https"},
  {src: "/logos/html5-48.png", alt: "HTML5"},

  {src: "/logos/css-48.png", alt: "CSS3"},


  {src: "/logos/python-48.png", alt: "Python"},
  {src: "/logos/chatgpt-48.png", alt: "OpenAI"},
  {src: "/logos/minecraft-48.png", alt: "Minecraft"},

  {src: "/logos/javascript-64.png", alt: "Remotion"},
  {src: "/logos/react-100.png", alt: "Dash Robots"},
  {src: "/logos/youtube-48.png", alt: "YouTube"},
];

const TechShowcase: React.FC = () => {
    const radius = 140;

    return (
      <section className=" py-20 px-6 sm:px-12 rounded border border-indigo-700">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Text Column */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-6">
              Fun, Friendly Tech for Young Creators 🎮🚀
            </h2>
            <p className="text-white text-lg leading-relaxed mb-4">
              At <strong>Bug to Byte</strong>, we introduce kids to the most exciting tools in coding and tech.
              From building with <strong>Scratch</strong> and <strong>CodeCombat</strong>, to exploring games like <strong>Minecraft</strong>, they’ll learn real skills in a playful way.
            </p>
            <p className="text-white text-lg leading-relaxed">
              Our hands-on programs teach HTML, CSS, JavaScript, Python, AI tools, and more — all designed to grow imagination, confidence, and curiosity!
            </p>
          </div>
  
          {/* Logo Ring Animation */}
          <div className="md:w-1/2 relative w-[350px] h-[350px] mx-auto">
            <motion.div
              className="absolute inset-0"
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                ease: 'linear',
                duration: 25,
              }}
            >
              {techLogos.map((logo, index) => {
                const angle = (360 / techLogos.length) * index;
                const rad = (angle * Math.PI) / 180;
                const x = radius * Math.cos(rad);
                const y = radius * Math.sin(rad);
  
                return (
                  <img
                    key={index}
                    src={logo.src}
                    alt={logo.alt}
                    className="absolute w-12 h-12 sm:w-14 sm:h-14 object-contain hover:scale-110 transition-transform duration-300"
                    style={{
                      left: `calc(50% + ${x}px - 1.75rem)`,
                      top: `calc(50% + ${y}px - 1.75rem)`,
                    }}
                  />
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>
    );
};

export default TechShowcase;
