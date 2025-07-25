import { useState  } from "react";
import BookingPage from "./Shared/BookingPage"; 
import { useUser } from "../context/UserContext"; 
import LearningCardChildRoad from "./LearningCardChildRoad";
const learningPath = [
  {
    step: 1,
    title: "Ages 7-9: Dive into Scratch",
    description: "Start with visual block-based coding to build interactive stories, animations, and games, developing fundamental logic and problem-solving skills.",
    tags: ["🧩 Scratch", "🎨 Animation", "🧠 Logic", "🎮 Games"]
  },
  {
    step: 2,
    title: "Ages 10-13: CodeCombat & Python Fundamentals",
    description: "Transition from blocks to text-based coding through engaging game-based challenges, building a strong foundation in Python syntax and concepts.",
    tags: ["🕹️ CodeCombat", "🐍 Python Basics", "🧩 Game Logic", "📚 Syntax"]
  },
  {
    step: 3,
    title: "Ages 14-17: Python Projects & Web Basics",
    description: "Apply Python to create mini-applications, automation scripts, and delve into the essentials of web development with HTML and CSS to build first web pages.",
    tags: ["🐍 Python", "🎮 Projects", "🌐 HTML", "🎨 CSS", "⚙️ Automation"]
  },
  {
    step: 4,
    title: "Ages :(online) Advanced Python & Web Dev",
    description: "Explore advanced Python topics, JavaScript for interactivity, and potentially frameworks for web development. Focus on building more complex, real-world applications.",
    tags: ["🐍 Advanced Python", "✨ JavaScript", "🖥️ Web Development", "🛠️ Frameworks"]
  },
];

function BeginnerRoadmap() { 
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const { user } = useUser(); // Ensure user context is set up correctly for this to work

  return (
    <div className="p-6 sm:p-10 md:p-20 max-w-5xl mx-auto mt-10 ">
      <h2 className="text-3xl font-bold text-center mb-10 text-indigo-300">
        Our Age-Specific Learning Paths 🎓
      </h2>
      <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
        At Bug to Byte, we tailor our curriculum to match the learning style and developmental stage of every student, from curious 7-year-olds to ambitious 18-year-olds.
      </p>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
        {learningPath.map((stage, index) => (
           <LearningCardChildRoad key={stage.step} stage={stage} index={index} />
          ))}
  </div>
  

      {/* Free Trial Booking Section */}
      {!bookingSuccess ? (
        <div className="mt-16 p-6 bg-white shadow-md rounded-2xl text-center text-gray-800"> {/* Added text-gray-800 */}
          <h2 className="text-2xl font-bold text-indigo-600 mb-2">
            Ready to Start? Book Your FREE Trial Session! 🎉
          </h2>
          <p className="text-gray-600 mb-4">
            Experience the Bug to Byte difference with a free, personalized coding lesson for your child. Pick a one hour that works for you below!
          </p>
          <BookingPage
            onBookingConfirmed={() => setBookingSuccess(true)}
            user={{
              name: user?.username || null, // Ensure safety with optional chaining and null
              email: user?.email || null, // Ensure safety with optional chaining and null
            }}
          />
        </div>
      ) : (
        <div className="text-center p-4 text-green-600 font-semibold mt-6">
          ✅ Booking Confirmed! We will contact you at{" "}
          <strong>{user?.email || "your provided email"}</strong> for session details.
        </div>
      )}
    </div>
  );
}

export default BeginnerRoadmap;