import {useState} from "react";
import {useNavigate} from "react-router-dom";
import PricingSection from "./PricingSection";
// import { useInView } from 'react-intersection-observer';
import {VisionSection} from "./Shared/VisionSection";
import {ProcessSection} from "./Shared/ProcessSection";
import CTA from "./CTA";
import TechShowcase from "./TechShowcase";
import ScrollingTechShowcase from "./ScrollingTechShowcase";
import LearningTrack from "./Test";

interface LandingPageProps {
  onNext: (choice: string) => void;
}
const LandingPage: React.FC<LandingPageProps> = ({onNext}) => {
  console.log(onNext);
  const navigate = useNavigate();
  const [showOptions, setShowOptions] = useState(false);
  // const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const handleBeginnerNavigate = () => {
    navigate("/kids");
  };
 
  return (
    <div className="pt-2 relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-gray-900 via-indigo-900 to-black-900 animate-backgroundShift text-white ">
      {/* 🎨 Floating lights */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-green-400 rounded-full blur-2xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 right-20 w-32 h-32 bg-cyan-400 rounded-full blur-2xl opacity-20 animate-pulse"></div>
      <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Main Content */}
      <div className="z-10 text-center p-6 max-w-screen-xl mx-auto">

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

        <div className="z-10 text-center p-6 max-w-screen-xl mx-auto">
          
          {/* Hero Section */}

          <div className="flex flex-col-reverse lg:flex-row items-center justify-between w-full max-w-6xl min-h-[90vh] px-4 sm:px-6 lg:px-12 gap-10 md:gap-14">



          <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-sm h-auto aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
    
    {/* 👇 Actual image */}
    <img
      // src="four-kids-using-laptop-electronic-parts-build-robot.jpg" 
      src="alis3.png"
      alt="Kids learning programming"
      className="w-full h-full object-cover rounded-2xl"
    />

    {/* 👇 Blur layer */}
    {/* <div className="absolute inset-0 bg-black/1.2 backdrop-blur-sm rounded-2xl z-10" /> */}


</div>
{/* I replaced the animation ring with the photo above  */}
              {/* <div className="relative w-[360px] h-[360px] animate-spinSlow">
                {[
                  "Bug to Byte",
                  "Learn to Code",
                  "Fun & Games",
                  "Real Projects",
                  "Creative Logic",
                  "Python & JS",
                  "Teens & Kids",
                  "Build Websites",
                ].map((text, index) => {
                  const angle = (360 / 8) * index;
                  const radius = 120;
                  const x = radius * Math.cos((angle * Math.PI) / 180);
                  const y = radius * Math.sin((angle * Math.PI) / 180);
                  return (
                    <span
                      key={index}
                      className="absolute text-sm sm:text-base text-cyan-300 font-semibold"
                      style={{
                        top: `calc(50% + ${y}px - 0.75rem)`,
                        left: `calc(50% + ${x}px - 2rem)`,
                        transform: `rotate(${angle}deg)`,
                        transformOrigin: "center",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {text}
                    </span>
                  );
                })}
              </div> */}
            </div>

            {/* 🎯 Hero Text and CTA on the Right */}
            <div id = 'CTA'className="w-full md:w-1/2 text-center md:text-left space-y-6">

              <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
              Transform Curiosity Into Creation <span className="inline-block">🚀</span>
              </h1>
              <p className="text-gray-300 max-w-lg mx-auto md:mx-0 text-base sm:text-lg">
      Whether you're a curious kid, an ambitious teen, or a beginner adult — Bug to Byte guides you from your first line of code to building real-world projects you’ll be proud of.
    </p>

              {!showOptions ? (
                <button
                  onClick={() => setShowOptions(true)}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-lg rounded-full font-semibold hover:from-blue-500 hover:to-cyan-400 transition-all shadow-lg"
                >
                  Start Your Journey
                </button>
              ) : (
                <div
                  id="cta-options"
                  className="flex flex-col md:flex-row items-center justify-center gap-6"
                >
                  <button
                    onClick={() => navigate("/learn")}
                    className="min-w-[12rem] px-6 py-3 bg-indigo-500 whitespace-nowrap hover:bg-indigo-400 transition text-white rounded-full font-semibold shadow-lg hover:shadow-cyan-400/50 hover:scale-105 duration-300"
                    style={{animationDelay: "0.1s", animationFillMode: "both"}}
                  >
                    Learn Coding
                  </button>

                  <button
                    onClick={() => navigate("/build")}
                    className="min-w-[12rem] px-6 py-3 bg-amber-500 whitespace-nowrap hover:bg-amber-400 transition text-white rounded-full font-semibold shadow-lg hover:shadow-amber-400/50 hover:scale-105 duration-300"
                    style={{animationDelay: "0.3s", animationFillMode: "both"}}
                  >
                    Build a Project
                  </button>

                  <button
                    onClick={handleBeginnerNavigate}
                    className="min-w-[12rem] px-6 py-3 bg-green-500 hover:bg-green-400 transition text-white rounded-full font-semibold shadow-lg hover:shadow-green-400/50 hover:scale-105 duration-300 whitespace-nowrap"
                    style={{animationDelay: "0.5s", animationFillMode: "both"}}
                  >
                    Kids Learning 9-17
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>   
          {/* Our Vision Section */}
        <VisionSection />

        <TechShowcase />

   
        <ProcessSection />

        <PricingSection />

        <ScrollingTechShowcase/>
        {/* <LearningTrack/> */}
        <CTA setShowOptions={setShowOptions} />
      </div>  </div>
    </div>
  );
};

export default LandingPage;
