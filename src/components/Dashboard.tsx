import { useUser } from '../context/UserContext'
import { useLocation } from 'react-router-dom';

export default function Dashboard() {


const {user } = useUser()
const location = useLocation();
  return (
   
    <div className="min-h-screen bg-gradient-to-r from-indigo-100 via-blue-100 to-green-100 px-6 lg:px-20 py-10 flex items-center justify-center">
    <div className="m-20 lg:w-full max-w-3xl bg-white shadow-lg rounded-lg p-8">
       {/* Success Message */}
       {location.state?.successMessage && (
          <p className="text-green-600 text-center mb-4">
            {location.state.successMessage}
          </p>
        )}
      {/* Heading Section */}
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-indigo-600">
          Welcome, {user.username}!
        </h1>
        <p className="text-gray-600 mt-2">
          Have a question or need assistance? We're here to help! Explore your dashboard below.
        </p>
      </div>

      {/* User Info Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-indigo-600">Your Profile</h2>
        <p className="text-gray-700 mt-2">Email: {user.email}</p>
        <p className="text-gray-700">Username: {user.username}</p>
        <p className="text-gray-700">Registration Date: {user.joined.split("T")[0]}{/* Add date from user data if available */}</p>
      </div>

      {/* Quick Links */}
      {/* <div className="mt-8">
        <h2 className="text-2xl font-semibold text-indigo-600">Quick Links</h2>
        <ul className="mt-4">
          <li>
            <a
              href="/topics"
              className="text-blue-500 hover:underline"
            >
              Explore Topics
            </a>
          </li>
          <li>
            <a
              href="/projects"
              className="text-blue-500 hover:underline"
            >
              View Projects
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="text-blue-500 hover:underline"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div> */}

      {/* Recent Activity */}
      {/* <div className="mt-8">
        <h2 className="text-2xl font-semibold text-indigo-600">Recent Activity</h2>
        <p className="text-gray-700 mt-2"> */}
          {/* Fetch and display user's recent activity here */}
          {/* No recent activity to display.
        </p>
      </div>

      {/* Recommendations
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-indigo-600">Recommended for You</h2>
        <ul className="mt-4">
          <li>
            <a
              href="/topic/recommended"
              className="text-blue-500 hover:underline"
            >
              Recommended Topic: Intro to React
            </a>
          </li>
          <li>
            <a
              href="/project/recommended"
              className="text-blue-500 hover:underline"
            >
              Recommended Project: Build a Weather App
            </a>
          </li>
        </ul>
      </div> */}
    </div>
  </div>
  )
}
