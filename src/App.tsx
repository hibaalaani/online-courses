import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import LearnOverview from './components/Learn/LearnOverview';
import BuildOverview from './components/Build/BuildOverview';
import BookingOverview from './components/BookingOverview';
import BookingForm from './components/BookingForm';
import BeginnerTopics from './components/Learn/BeginnerTopics';
import IntermediateTopics from './components/Learn/IntermediateTopics';
import AdvancedTopics from './components/Learn/AdvancedTopics';
import BeginnerProjects from './components/Build/BeginnerProjects';
import IntermediateProjects from './components/Build/IntermediateProjects';
import AdvancedProjects from './components/Build/AdvancedProjects';
import Navbar from './components/Shared/Navbar';
import Footer from './components/Shared/Footer';
// import Binary from './assets/binary.jpg'
import ContactPage from './components/ContactPage';
import { TopicsProvider } from './context/TopicsContext';
import Register from './components/Register';
import Login from './components/Login';
import { UserProvider } from './context/UserContext';
import Dashboard from './components/Dashboard';
interface Selection {
  type?: string;
  level?: string;
}

function App() {
  const [selection, setSelection] = useState<Selection>({});
  const [modalContent, setModalContent] = useState<React.ReactNode | null>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  // Resets the app state
  const resetSelection = () => {
    setSelection({});
    navigate('/'); // Redirect to the landing page
  };
  console.log(import.meta.env.VITE_API_URL_USER_BASE_URL);
  // Back button logic
  const goBack = () => {
    // const currentPath = currentPath;
    if (currentPath.includes('/learn/booking')) {
      navigate('/learn/overview'); // Go back to the overview
    } else if (currentPath.includes('/learn/overview')) {
      navigate('/learn'); // Go back to the level selection
    } else if (currentPath.includes('/learn')) {
      navigate('/'); // Go back to the landing page
    } else if (currentPath.includes('/build/booking')) {
      navigate('/build/overview');
    } else if (currentPath.includes('/build/overview')) {
      navigate('/build');
    } else if (currentPath.includes('/build')) {
      navigate('/');
    }
  };

  const handleSelection = (key: keyof Selection, value: string) => {
    setSelection((prev) => ({ ...prev, [key]: value }));
  };

  const openModal = (content: React.ReactNode) => {
    setModalContent(content);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  return (
    <TopicsProvider>
      <UserProvider>
     
      <Navbar />

      {/* Modal */}
      {modalContent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
            >
              ✖
            </button>
            {modalContent}
          </div>
        </div>
      )}

      {/* Back and Reset Buttons */}
      <div className="fixed top-20 left-4 z-50 flex flex-col space-y-2 md:space-y-0 md:space-x-4 md:flex-row">
        { currentPath !== '/' && currentPath !== '/contact' && currentPath !== '/login' && currentPath !== '/register'&& currentPath !== '/dashboard'&&(
          <button
            onClick={goBack}
            className="flex items-center px-4 py-2 bg-indigo-500 text-white text-sm rounded-lg shadow-md hover:bg-indigo-600 transition-all md:px-6 md:py-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 md:h-5 md:w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            <span className="ml-2">Back</span>
          </button>
        )}
      {/* </div> */}
      {/* <div className="fixed top-20 right-4 z-50 pt-16"> */}
        { currentPath !== '/' && currentPath !== '/contact' && currentPath !== '/login' && currentPath !== '/register'&& currentPath !== '/dashboard'&&(
          <button
            onClick={resetSelection}
            className="flex items-center px-4 py-2 bg-red-500 text-white text-sm rounded-lg shadow-md hover:bg-red-600 transition-all md:px-6 md:py-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 md:h-5 md:w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            <span className="ml-2">Reset</span>
          </button>
        )}
      </div>
      
        {/* Main Content */}
      <div className="min-h-screen bg-gradient-to-r from-indigo-100 via-blue-100 to-green-100 px-8 lg:px-18 pt-16">
      {/* Routes */}
      <Routes>
        <Route
          path="/"
          element={
            <LandingPage
              onNext={(choice) => {
                handleSelection('type', choice);
                navigate(`${choice}`); // Navigate to LearnOverview by default
              }}
            />
          }
        />
        <Route
          path="/learn"
          element={
            <LearnOverview
              onSelectModal={(level) => {
                if (level === 'beginner') openModal(<BeginnerTopics />);
                if (level === 'intermediate') openModal(<IntermediateTopics />);
                if (level === 'advanced') openModal(<AdvancedTopics />);
              }}
              onNext={(level) => {
                handleSelection('level', level);
                navigate(`/learn/overview`); // Navigate to overview before booking
              }}
            />
          }
        />
        <Route
          path="/learn/overview"
          element={
            <BookingOverview
              selection={selection}
              onNext={() => navigate('/learn/booking')}
            />
          }
        />
        <Route
          path="/learn/booking"
          element={<BookingForm selection={selection} />}
        />
        <Route
          path="/build"
          element={
            <BuildOverview
              onSelectModal={(level) => {
                if (level === 'beginner') openModal(<BeginnerProjects />);
                if (level === 'intermediate') openModal(<IntermediateProjects />);
                if (level === 'advanced') openModal(<AdvancedProjects />);
              }}
              onNext={(level) => {
                handleSelection('level', level);
                navigate(`/build/overview`);
              }}
            />
          }
        />
        <Route
          path="/build/overview"
          element={
            <BookingOverview
              selection={selection}
              onNext={() => navigate('/build/booking')}
            />
          }
        />
        <Route
          path="/build/booking"
          element={<BookingForm selection={selection} />}
        />
         <Route path="/login" element={<Login />} />
<Route path="/register" element={<Register />} />
<Route path="/contact" element={<ContactPage />} />
<Route path="/dashboard" element={<Dashboard />} />

      </Routes>
      <Footer/>
      {/* </div> */}
      </div>
      </UserProvider>
    </TopicsProvider>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
