import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
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
import Binary from './assets/binary.jpg'
import ContactPage from './components/ContactPage';
interface Selection {
  type?: string;
  level?: string;
}

function App() {
  const [selection, setSelection] = useState<Selection>({});
  const [modalContent, setModalContent] = useState<React.ReactNode | null>(null);
  const navigate = useNavigate();

  // Resets the app state
  const resetSelection = () => {
    setSelection({});
    navigate('/'); // Redirect to the landing page
  };

  // Back button logic
  const goBack = () => {
    const currentPath = window.location.pathname;
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
    <>
      
      {/* <div
      className="relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:`url(${Binary})`,
      }}
    >
      {/* Transparent Overlay *
      <div   className="absolute inset-0 z-10"
     style={{
      backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5))',
    }}></div> */}

      {/* Main Content */}
      {/* <div className="relative z-10"> */}
        {/* Navbar */}
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
      <div className="fixed top-20 left-4 z-50">
        { window.location.pathname !== '/' && window.location.pathname !== '/contact' && (
          <button
            onClick={goBack}
            className="px-6 py-3 bg-indigo-500 text-white rounded-lg shadow-md hover:bg-indigo-600 transition-all flex items-center space-x-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            <span>Back</span>
          </button>
        )}
      </div>
      <div className="fixed top-20 right-4 z-50">
        { window.location.pathname !== '/' && window.location.pathname !== '/contact' && (
          <button
            onClick={resetSelection}
            className="px-6 py-3 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition-all flex items-center space-x-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            <span>Reset</span>
          </button>
        )}
      </div>
      <div className="min-h-screen bg-gradient-to-r from-indigo-100 via-blue-100 to-green-100 px-8 lg:px-18 ">
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
         <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer/>
      {/* </div> */}
      </div>
    </>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}