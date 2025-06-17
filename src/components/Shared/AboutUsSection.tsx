// src/components/Shared/AboutUsSection.tsx
import React from 'react';
// import { motion } from 'framer-motion'; // Uncomment if you want to add animations

const AboutUsSection: React.FC = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-gray-900 to-indigo-900 text-white">
      {/* Subtle background glow/light effects for style consistency */}
      <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-purple-400 rounded-full blur-3xl opacity-10 animate-blob"></div>
      <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-blue-400 rounded-full blur-3xl opacity-10 animate-blob animation-delay-2000"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Our Story & Mission */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-extrabold text-indigo-300 mb-6">
            About <span className="inline-block text-cyan-400">Bug to Byte</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            At Bug to Byte, we're more than just a coding academy; we're a launchpad for young innovators. We believe that every child holds immense potential, and through the power of code, they can transform their curiosity into tangible creations and future opportunities.
          </p>
        </div>

        {/* Our Core Values */}
        <div className="mb-20">
          <h3 className="text-4xl font-bold text-center text-cyan-400 mb-12">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1: Curiosity */}
            <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-purple-500/30 transition-all duration-300 hover:scale-105 hover:border-purple-400">
              <div className="text-5xl mb-4 text-purple-400">💡</div>
              <h4 className="text-2xl font-bold text-white mb-3">Ignite Curiosity</h4>
              <p className="text-gray-300">
                We foster a safe and exciting environment where questioning, exploring, and experimenting are celebrated. Learning is an adventure.
              </p>
            </div>
            {/* Value 2: Empowerment */}
            <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-blue-500/30 transition-all duration-300 hover:scale-105 hover:border-blue-400">
              <div className="text-5xl mb-4 text-blue-400">💪</div>
              <h4 className="text-2xl font-bold text-white mb-3">Empower Creation</h4>
              <p className="text-gray-300">
                From their first line of code, students build real projects, gaining confidence and seeing their ideas come to life.
              </p>
            </div>
            {/* Value 3: Excellence */}
            <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-green-500/30 transition-all duration-300 hover:scale-105 hover:border-green-400">
              <div className="text-5xl mb-4 text-green-400">✨</div>
              <h4 className="text-2xl font-bold text-white mb-3">Cultivate Excellence</h4>
              <p className="text-gray-300">
                We provide high-quality, up-to-date curriculum and dedicated mentorship, ensuring a deep and lasting understanding of coding concepts.
              </p>
            </div>
          </div>
        </div>

        {/* Meet Our Team (Briefly) */}
        <div className="mb-20 text-center">
          <h3 className="text-4xl font-bold text-indigo-400 mb-12">Meet Our Passionate Team</h3>
          <div className="flex flex-col md:flex-row items-center justify-center md:space-x-12">
          <div className="w-full max-w-[12rem] h-auto aspect-square rounded-full overflow-hidden bg-gray-700 flex items-center justify-center text-gray-400 text-6xl mb-6 md:mb-0 shadow-xl border-4 border-indigo-500 mx-auto md:mx-0">
              {/* Placeholder for a team photo or avatar */}
              <img src="/path-to-your-team-photo.jpg" alt="Our Team" className="w-full h-full object-cover" />
              {/* Or simply: 🧑‍💻 */}
            </div>
            <div className="max-w-2xl text-left md:text-left">
              <p className="text-lg text-gray-300 mb-4">
                Our team at Bug to Byte is comprised of dedicated educators and experienced developers who share a profound passion for technology and teaching. We are committed to inspiring the next generation of problem-solvers and digital creators.
              </p>
              <p className="text-lg text-gray-300">
                Every instructor is carefully selected for their expertise, patience, and ability to make complex topics simple and fun. We're here to guide, mentor, and celebrate every "Aha!" moment.
              </p>
              {/* Optional: Link to a full "Our Team" page */}
              {/* <a href="/our-team" className="text-cyan-400 hover:underline mt-4 inline-block">Learn more about our instructors &rarr;</a> */}
            </div>
          </div>
        </div>

        {/* Our Unique Approach */}
        {/* <div className="text-center">
          <h3 className="text-4xl font-bold text-purple-400 mb-12">Our Unique Approach to Learning</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10"> */}
            {/* Approach 1 */}
            {/* <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-indigo-500/30 transition-all duration-300 hover:scale-105 hover:border-indigo-400">
              <div className="text-5xl mb-4 text-indigo-400">🎯</div>
              <h4 className="text-2xl font-bold text-white mb-3">Project-Based & Playful</h4>
              <p className="text-gray-300">
                We move beyond theory. Our students learn by building, creating games, animations, and real-world applications that keep them engaged and excited about coding.
              </p>
            </div> */}
            {/* Approach 2 */}
            {/* <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-teal-500/30 transition-all duration-300 hover:scale-105 hover:border-teal-400">
              <div className="text-5xl mb-4 text-teal-400">🧑‍🏫</div>
              <h4 className="text-2xl font-bold text-white mb-3">Personalized & Supportive</h4>
              <p className="text-gray-300">
                Small class sizes and experienced instructors ensure personalized attention. We meet each child where they are, guiding them through challenges with patience and encouragement.
              </p>
            </div> */}
            {/* Add more unique approaches if applicable, e.g., age-specific, continuous learning */}
          {/* </div> 
        </div>*/}
      </div>
    </section>
  );
};

export default AboutUsSection;