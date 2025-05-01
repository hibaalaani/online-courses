import { useUser } from '../context/UserContext'
import { useLocation } from 'react-router-dom';

export default function Dashboard() {


const {user } = useUser()
const location = useLocation();
  //Should check the user to ensure user and user.joined exist before trying to split
  const registrationDate = user?.joined ? user.joined.split("T")[0] : 'Not available';
console.log(user)
  return (
   
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-purple-900 to-indigo-900 px-6 lg:px-20 py-10 flex items-center justify-center">
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
        <b>Welcome,</b> {user?.username || 'Guest'}!
        </h1>
        <p className="text-gray-600 mt-2 text-xl">
          Have a question or need assistance? We're here to help! Explore your dashboard below.
        </p>
      </div>

      {/* User Info Section */}
       {/* User Info Section */}
       <div className="mt-8">
          <h2 className="text-2xl font-semibold text-indigo-600">Your Profile</h2>
          <p className="text-gray-700 mt-2"><b>Email: </b> {user?.email || 'Not available'}</p>
          <p className="text-gray-700"><b>Name: </b> {user?.username || 'Guest'}</p>
          <p className="text-gray-700"><b>Registration Date: </b> {registrationDate}</p>
        </div>

    
    </div>
  </div>
  )
}
