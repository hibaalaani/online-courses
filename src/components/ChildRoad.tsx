import { useState } from "react";
import BookingPage from "./Shared/BookingPage";
import {useUser} from "../context/UserContext"

// Learning roadmap for kids (ages 9-13)
const beginnerLearningPath = [
  { step: 1, title: "Start with Scratch", description: "Learn block-based coding to build simple animations and games." },
  { step: 2, title: "Introduction to Python", description: "Understand basic programming concepts with Python." },
  { step: 3, title: "Python Mini Projects", description: "Create small games and automation scripts." },
  { step: 4, title: "Intro to Web Development", description: "Learn HTML & CSS to create simple web pages." },
  { step: 5, title: "Build a Small Website", description: "Use HTML, CSS, and JavaScript to make an interactive site." },
];

function BeginnerRoadmap() {
  
  const [bookingSuccess, setBookingSuccess] = useState(false);

const {user } = useUser();

  return (
    <div className="p-20 max-w-3xl mx-auto mt-10">
      <h2 className="text-3xl font-bold text-center mb-6 text-indigo-300">Beginner Learning Roadmap 🎓</h2>

      {/* Learning Path Section */}
      <div className="space-y-6">
        {beginnerLearningPath.map((stage) => (
          <div key={stage.step} className="p-4 rounded-lg border bg-gray-100 border-gray-400">
            <h2 className="text-lg font-semibold">
              {stage.step}. {stage.title}
            </h2>
            <p>{stage.description}</p>
          </div>
        ))}
      </div>

    

        {!bookingSuccess ? (
          <>
            {/* Free Session Booking Section */}
      <div className="mt-10 p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-center text-indigo-600">Book a Free Trial Session 🎉</h2>
        <p className="text-center text-gray-600 mb-4">If it's your first time, book a free session for your child!</p>
        <BookingPage onBookingConfirmed={() => setBookingSuccess(true)}   user={{
        name: user.username,
        email:user.email,
      }}/>
          </div>
         </>
        ) : (
          <div className="text-center p-4 text-green-600 font-semibold">
            ✅ Booking Confirmed! We will contact you at <strong>your email</strong> for session details.
          </div>
        )}
   
    </div>
  );
}

export default BeginnerRoadmap;
