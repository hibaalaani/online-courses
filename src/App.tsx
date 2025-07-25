import React, {useState} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import LandingPage from "./components/LandingPage";

import Navbar from "./components/Shared/Navbar";
import Footer from "./components/Shared/Footer";
import ContactPage from "./components/ContactPage";
import {TopicsProvider} from "./context/TopicsContext";
import Register from "./components/Register";
import Login from "./components/Login";
import {UserProvider} from "./context/UserContext";
import Dashboard from "./components/Dashboard";
import BeginnerRoadmap from "./components/ChildRoad";
import FloatingStars from "./components/Shared/FloatingStars";
import LearningPathsOverview from "./components/LearningPathsOverview";
import CurriculumDetailPage from "./components/Curriculum/CurriculumDetailPage";
import BookingForm from "./components/BookingForm";
import PromoLandingPage from "./components/PromoLandingPage";
import PromoLandingPageAR from "./components/PromoLandingPageAR";

interface Selection {
  type?: string;
  level?: string;
}

function App() {
  const [, setSelection] = useState<Selection>({});
  const [modalContent, setModalContent] = useState<React.ReactNode | null>(
    null
  );
  const navigate = useNavigate();
 

  const handleSelection = (key: keyof Selection, value: string) => {
    setSelection((prev) => ({...prev, [key]: value}));
  };

 

  const closeModal = () => {
    setModalContent(null);
  };

  return (
    <TopicsProvider>
      <UserProvider>  
        
        <div className="flex flex-col min-h-screen overflow-hidden relative">
      {/* <MatrixBackground /> */}
        
          <Navbar />
          {modalContent && (
            <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
              <div className="bg-white p-6 rounded-lg shadow-xl max-w-lg w-full relative">
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
          <main className="relative flex-grow z-10 bg-gradient-to-b from-gray-900 to-indigo-900 text-indigo-600">
            <div className="absolute inset-0 -z-10 overflow-hidden">
              <FloatingStars />
            </div>
            <Routes>
              <Route
                path="/"
                element={
                  <LandingPage
                    onNext={(choice: string) => {
                      handleSelection("type", choice);
                      navigate(`${choice}`);
                    }}
                  />
                }
              />
            
              <Route
                path="/curriculum"
                element={<LearningPathsOverview pageType="curriculum" />}
              />
    {/* The :ageGroup parameter will be read by CurriculumDetailPage using useParams */}
    <Route path="/curriculum/:ageGroup" element={<CurriculumDetailPage />} />
           
  {/* NEW ROUTE FOR BOOKING FORM */}
  <Route path="/booking" element={<BookingForm />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/kids" element={<BeginnerRoadmap />} />
              <Route path="/promo-en" element={<PromoLandingPage />} />
              <Route path="/promo-ar" element={<PromoLandingPageAR />} />

            </Routes>
          </main>

          <div className="mt-auto z-10 relative">
            {/* <HomePage/> */}

            <Footer />
          </div>
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
