import React, { useState } from "react";

// Learning roadmap for kids (ages 9-13)
const beginnerLearningPath = [
  { step: 1, title: "Start with Scratch", description: "Learn block-based coding to build simple animations and games." },
  { step: 2, title: "Introduction to Python", description: "Understand basic programming concepts with Python." },
  { step: 3, title: "Python Mini Projects", description: "Create small games and automation scripts." },
  { step: 4, title: "Intro to Web Development", description: "Learn HTML & CSS to create simple web pages." },
  { step: 5, title: "Build a Small Website", description: "Use HTML, CSS, and JavaScript to make an interactive site." },
];

function BeginnerRoadmap() {
  // State for booking form
  const [childName, setChildName] = useState("");
  const [parentEmail, setParentEmail] = useState("");
  const [sessionDate, setSessionDate] = useState("");
  const [sessionTime, setSessionTime] = useState("");
  const [bookingSuccess, setBookingSuccess] = useState(false);

  // Handle form submission
  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (childName && parentEmail && sessionDate && sessionTime) {
      setBookingSuccess(true);
      // Here, you can integrate with an API to store booking details in a database
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">Beginner Learning Roadmap 🎓</h1>

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

      {/* Free Session Booking Section */}
      <div className="mt-10 p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-center text-indigo-600">Book a Free Trial Session 🎉</h2>
        <p className="text-center text-gray-600 mb-4">If it's your first time, book a free 30-minute session for your child!</p>

        {!bookingSuccess ? (
          <form onSubmit={handleBookingSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-semibold">Child's Name</label>
              <input
                type="text"
                value={childName}
                onChange={(e) => setChildName(e.target.value)}
                className="w-full p-2 border rounded-lg"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold">Parent's Email</label>
              <input
                type="email"
                value={parentEmail}
                onChange={(e) => setParentEmail(e.target.value)}
                className="w-full p-2 border rounded-lg"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold">Select Date</label>
              <input
                type="date"
                value={sessionDate}
                onChange={(e) => setSessionDate(e.target.value)}
                className="w-full p-2 border rounded-lg"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold">Select Time</label>
              <input
                type="time"
                value={sessionTime}
                onChange={(e) => setSessionTime(e.target.value)}
                className="w-full p-2 border rounded-lg"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full p-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition"
            >
              Book Free Session
            </button>
          </form>
        ) : (
          <div className="text-center p-4 text-green-600 font-semibold">
            ✅ Booking Confirmed! We will contact you at <strong>{parentEmail}</strong> for session details.
          </div>
        )}
      </div>
    </div>
  );
}

export default BeginnerRoadmap;
