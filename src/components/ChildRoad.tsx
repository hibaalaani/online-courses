import { useState } from "react";
import BookingPage from "./Shared/BookingPage";
import { useUser } from "../context/UserContext";
import { motion } from 'framer-motion';

// Learning roadmap for kids (ages 9-13)
const beginnerLearningPath = [
  {
    step: 1,
    title: "Start with Scratch",
    description: "Learn block-based coding to build simple animations and games.",
    tags: ["🧩 Scratch", "🎨 Animation", "🧠 Logic"]
  },
  {
    step: 2,
    title: "Continue with Code Combat",
    description: "Use game-based learning to build Python logic with block-style code.",
    tags: ["🕹️ CodeCombat", "🐍 Python Basics", "🧩 Game Logic"]
  },
  {
    step: 3,
    title: "Introduction to Python",
    description: "Understand basic programming concepts with Python.",
    tags: ["🐍 Python", "📦 Variables", "🔁 Loops"]
  },
  {
    step: 4,
    title: "Python Mini Projects",
    description: "Create small games and automation scripts.",
    tags: ["🐍 Python", "🎮 Games", "⚙️ Automation"]
  },
  {
    step: 5,
    title: "Intro to Web Development",
    description: "Learn HTML & CSS to create simple web pages.",
    tags: ["🌐 HTML", "🎨 CSS", "🖥️ Web Basics"]
  },
  {
    step: 6,
    title: "Build a Small Website",
    description: "Use HTML, CSS, and JavaScript to make an interactive site.",
    tags: ["🌐 HTML", "🎨 CSS", "✨ JavaScript"]
  },
];

function BeginnerRoadmap() {
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const { user } = useUser();

  return (
    <div className="p-6 sm:p-10 md:p-20 max-w-5xl mx-auto mt-10">
      <h2 className="text-3xl font-bold text-center mb-10 text-indigo-300">
        Beginner Learning Roadmap 🎓
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {beginnerLearningPath.map((stage, index) => {
          const fromDirection = index % 2 === 0 ? "-100%" : "100%";

          return (
            <motion.div
              key={stage.step}
              initial={{ opacity: 0, x: fromDirection }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ type: "spring", stiffness: 80, damping: 20 }}
              className="p-6 bg-white rounded-2xl shadow-xl border border-indigo-200 text-center sm:text-left"
            >
              <h3 className="text-xl font-bold text-indigo-600 mb-2">
                {stage.step}. {stage.title}
              </h3>
              <p className="text-gray-700">{stage.description}</p>

              <div className="flex flex-wrap justify-center sm:justify-start mt-4 gap-2">
                {stage.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="bg-indigo-100 text-indigo-700 text-xs font-semibold px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {!bookingSuccess ? (
        <div className="mt-16 p-6 bg-white shadow-md rounded-2xl text-center">
          <h2 className="text-2xl font-bold text-indigo-600 mb-2">
            Book a Free Trial Session 🎉
          </h2>
          <p className="text-gray-600 mb-4">
            If it's your first time, book a free session for your child!
          </p>
          <BookingPage
            onBookingConfirmed={() => setBookingSuccess(true)}
            user={{
              name: user.username,
              email: user.email,
            }}
          />
        </div>
      ) : (
        <div className="text-center p-4 text-green-600 font-semibold mt-6">
          ✅ Booking Confirmed! We will contact you at <strong>{user.email}</strong> for session details.
        </div>
      )}
    </div>
  );
}

export default BeginnerRoadmap;
