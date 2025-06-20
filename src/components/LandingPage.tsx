import { useNavigate } from "react-router-dom";
import PricingSection from "./PricingSection";
// Updated import: Renamed from VisionSection
import { WhyChooseUsSection } from "./Shared/WhyChooseUsSection";
import { ProcessSection } from "./Shared/ProcessSection";
import CTA from "./CTA"; // This CTA is for the section *below* the hero
import TechShowcase from "./TechShowcase";
import ScrollingTechShowcase from "./ScrollingTechShowcase";
// import LearningTrack from "./Test"; // Unused import

// Import new components (you'll need to create these files)
import AboutUsSection from "./Shared/AboutUsSection"; // Corrected import path for your AboutUsSection
import TestimonialsSection from "./Shared/TestimonialsSection"; // Example import path
import FAQSection from "./Shared/FAQSection"; // Example import path
import { Helmet } from 'react-helmet-async';
interface LandingPageProps {
  onNext: (choice: string) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onNext }) => {
  console.log(onNext); // Consider removing console.logs for production
  const navigate = useNavigate();

  // The 'showOptions' state is no longer needed as we're directly routing to the free trial
  // const [showOptions, setShowOptions] = useState(false);

  // Function to navigate to the free trial page (your /kids route)
  const handleFreeTrialNavigate = () => {
    navigate("/kids"); // Assuming /kids is where your free trial booking lives
  };

  return (
<>
    <Helmet>
    <title>Bug to Byte | Fun Programming for Kids and Teens</title>
    <meta name="description" content="Join Bug to Byte to learn Python, Scratch, and JavaScript through real projects! Designed for kids, teens, and curious adults." />
    <link rel="canonical" href="https://online-courses-yyn0.onrender.com/" />
  </Helmet>

    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-gray-900 via-indigo-900 to-black-900 animate-backgroundShift text-white ">
      {/* 🎨 Floating lights */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-green-400 rounded-full blur-2xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 right-20 w-32 h-32 bg-cyan-400 rounded-full blur-2xl opacity-20 animate-pulse"></div>
      <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content Container */}
        {/* Adjusted padding and removed redundant nesting here */}
        <div className="z-10 text-center mx-auto">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
            {/* Wave 1 */}
            <svg
              className="absolute w-[400%] h-full animate-waveSlow opacity-20"
              viewBox="0 0 2880 320"
              preserveAspectRatio="none"
            >
              <path
                fill="none"
                stroke="#00ffff"
                strokeWidth="0.5"
                d="M0,160 C720,80 2160,240 2880,160"
              />
            </svg>

            {/* Wave 2 */}
            <svg
              className="absolute w-[400%] h-full top-10 animate-waveMedium opacity-15"
              viewBox="0 0 2880 320"
              preserveAspectRatio="none"
            >
              <path
                fill="none"
                stroke="#38bdf8"
                strokeWidth="0.5"
                d="M0,200 C960,180 1920,220 2880,200"
              />
            </svg>

            {/* Wave 3 */}
            <svg
              className="absolute w-[400%] h-full top-20 animate-waveFast opacity-10"
              viewBox="0 0 2880 320"
              preserveAspectRatio="none"
            >
              <path
                fill="none"
                stroke="#a855f7"
                strokeWidth="0.5"
                d="M0,240 C720,260 2160,200 2880,240"
              />
            </svg>
          </div>

          {/* Hero Section - Adjustments for spacing */}
          <div className="relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between w-full max-w-6xl py-16 lg:py-24 px-4 sm:px-6 lg:px-12 gap-10 md:gap-14">
            {/* Image Column */}
            {/* Added mt-8 for vertical spacing from button on small screens */}
            <div className="w-full md:w-1/2 flex justify-center mt-8 lg:mt-0">
              <div className="relative w-full max-w-sm h-auto aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                {/* 👇 Actual image */}
                <img
                  src="alis3.webp" // Ensure this path is correct relative to your public folder or build
                  alt="Kids learning programming"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>

            {/* 🎯 Hero Text and CTA on the Right */}
            <div id="CTA" className="w-full md:w-1/2 text-center md:text-left space-y-6">
              {/* Added mt-12 for space from nav on smaller screens */}
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white mt-12 lg:mt-0">
                Transform Curiosity Into Creation{" "}
                <span className="inline-block">🚀</span>
              </h1>
              <p className="text-gray-300 max-w-lg mx-auto md:mx-0 text-base sm:text-lg">
                Whether you're a curious kid, an ambitious teen, or a beginner adult —
                Bug to Byte guides you from your first line of code to building
                real-world projects you’ll be proud of.
              </p>

              {/* Direct "Claim Your FREE Trial" CTA */}
              <button
                onClick={handleFreeTrialNavigate}
                className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-lg rounded-full font-semibold hover:from-blue-500 hover:to-cyan-400 transition-all shadow-lg"
              >
                Claim Your FREE Trial
              </button>
            </div>
          </div>
        </div>

        {/* --- MAIN PAGE SECTIONS --- */}

        {/* About Us Section */}
        <div className="pt-20 lg:pt-32"> 
        <AboutUsSection />
        </div>
        {/* Your Vision Section */}
        <div className="pt-20 lg:pt-32"> 
        <WhyChooseUsSection />
</div>

        {/* Tech Showcase */}
        <div className="pt-20 lg:pt-32"> 

        <TechShowcase />
</div>

<div className="pt-20 lg:pt-32"> 
        {/* Learning Process Section */}
        <ProcessSection />
</div>
        {/* Pricing Section */}
        <PricingSection />

        {/* Scrolling Tech Showcase */}
        <ScrollingTechShowcase />
        <div className="pt-20 lg:pt-32"> 
        {/* Testimonials Section Placeholder */}
        <TestimonialsSection />
        </div>
        <div className="pt-20 lg:pt-32"> 
        {/* FAQ Section Placeholder */}
        <FAQSection />
</div>
        {/* The existing CTA component (if it's for another general CTA on the page) */}
        <CTA setShowOptions={() => {}} /> {/* Pass a no-op function for setShowOptions as it's no longer used within CTA context here */}
      </div>
    </div>
    </>
  );
};

export default LandingPage;