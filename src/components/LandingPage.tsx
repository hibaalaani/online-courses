import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PricingSection from './PricingSection';
// import { useInView } from 'react-intersection-observer';
import { VisionSection } from './Shared/VisionSection';
import { ProcessSection } from './Shared/ProcessSection';
import CTA from './CTA';

interface LandingPageProps {
  onNext: (choice: string) => void;
}
const LandingPage: React.FC<LandingPageProps> = ({ onNext }) => {
 
  const navigate = useNavigate();
  const [showOptions, setShowOptions] = useState(false);
  // const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  
  const handleBeginnerNavigate = () => {
    navigate("/beginner-roadmap");
  };

  return (
    <div className="pt-2 relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-indigo-900 via-purple-900 to-indigo-900 animate-backgroundShift text-white ">
      {/* 🎨 Floating lights */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-green-400 rounded-full blur-2xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 right-20 w-32 h-32 bg-cyan-400 rounded-full blur-2xl opacity-20 animate-pulse"></div>

      {/* Main Content */}
      <div className="z-10 text-center p-6 max-w-4xl "> 


      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
     

 
   {/* Wave 1 */}
   <svg className="absolute w-[400%] h-full animate-waveSlow opacity-20" viewBox="0 0 2880 320" preserveAspectRatio="none">
    <path
      fill="none"
      stroke="#00ffff"
      strokeWidth="0.5"
      d="M0,160 C720,80 2160,240 2880,160"
    />
  </svg>

  {/* Wave 2 */}
  <svg className="absolute w-[400%] h-full top-10 animate-waveMedium opacity-15" viewBox="0 0 2880 320" preserveAspectRatio="none">
    <path
      fill="none"
      stroke="#38bdf8"
      strokeWidth="0.5"
      d="M0,200 C960,180 1920,220 2880,200"
    />
  </svg>

  {/* Wave 3 */}
  <svg className="absolute w-[400%] h-full top-20 animate-waveFast opacity-10" viewBox="0 0 2880 320" preserveAspectRatio="none">
    <path
      fill="none"
      stroke="#a855f7"
      strokeWidth="0.5"
      d="M0,240 C720,260 2160,200 2880,240"
    />
  </svg>

    </div>

    <div className="relative z-10 text-center p-6">

 
{/* Hero Section */}
<div className="flex flex-col items-center justify-center min-h-screen text-center px-4 relative px-4 py-32 sm:py-40 text-center overflow-hidden ">


<div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden group">
  <div className="animate-spinSlow group-hover:animate-none transition-all duration-300">
    <svg
      viewBox="0 0 1000 1000"
      className="w-[40rem] md:w-[50rem] md:w-[1000px] max-w-none h-auto aspect-[1/1]"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <path
          id="heroRing"
          d="M500,500 m -400,0 a 400,400 0 1,1 800,0 a 400,400 0 1,1 -800,0"
        />
      </defs>
      <text
        fill="#22d3ee"
        fontSize="18"
        fontWeight="600"
        letterSpacing="3"
      >
        <textPath href="#heroRing" startOffset="0%">
          coding is easy with Bug to Byte • join your journey • discover your
          skills • build, learn, grow • empower your future • turn curiosity
          into creation • bug to byte • the code is easy{" "}
          <tspan fill="gold">
          ✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨
          </tspan>
        </textPath>
      </text>
    </svg>
  </div>
</div>

  <h1 id ='CTA' className="text-5xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
    Transform Curiosity Into Creation 🚀
  </h1>

  <p className="text-lg text-gray-300 max-w-2xl mb-10 leading-relaxed">
    Whether you're a curious kid, an ambitious teen, or a beginner adult — 
    at Bug to Byte, we guide you step-by-step from your first line of code 
    to building real-world projects you’ll be proud of.
  </p>

  {!showOptions ? (
    <button
      onClick={() => setShowOptions(true)}
      className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-lg rounded-full font-semibold hover:from-blue-500 hover:to-cyan-400 transition-all shadow-lg"
    >
      Start Your Journey
    </button>
  ) : (
    <div id='cta-options' className="flex flex-col md:flex-row items-center justify-center gap-6">
    <button
      onClick={() => navigate("/learn")}
      className="px-8 py-4 bg-indigo-500 hover:bg-indigo-400 transition text-white rounded-full font-semibold shadow-lg hover:shadow-cyan-400/50 hover:scale-105 duration-300"
      style={{ animationDelay: '0.1s', animationFillMode: 'both' }}
    >
      Learn Coding
    </button>
  
    <button
      onClick={() => navigate("/build")}
      className="px-8 py-4 bg-amber-500 hover:bg-amber-400 transition text-white rounded-full font-semibold shadow-lg hover:shadow-amber-400/50 hover:scale-105 duration-300"
      style={{ animationDelay: '0.3s', animationFillMode: 'both' }}
    >
      Build a Project
    </button>
  
    <button
      onClick={handleBeginnerNavigate}
      className="px-8 py-4 bg-green-500 hover:bg-green-400 transition text-white rounded-full font-semibold shadow-lg hover:shadow-green-400/50 hover:scale-105 duration-300"
      style={{ animationDelay: '0.5s', animationFillMode: 'both' }}
    >
      Kids Learning (9–17)
    </button>
  </div>
  

  )}
</div></div></div>


      {/* Our Vision Section */}
      <VisionSection/>
      {/* <section id="vision" className="z-10 text-center p-12 max-w-6xl py-20">
  <h2 className="text-4xl font-bold text-cyan-400 mb-8">Our Mission</h2>
  <p className="text-lg text-gray-300 leading-relaxed mb-12">
    At Bug to Byte, we believe learning to code should be simple, fun, and inspiring for everyone — from curious kids to ambitious teens and beginner adults.
  </p>

  <div className="grid md:grid-cols-3 gap-8">
    {/* Card 1 
    <div className="bg-white/10 p-6 rounded-lg shadow-lg hover:scale-105 transition">
      <div className="text-5xl mb-4">🎨</div>
      <h3 className="text-2xl font-semibold text-cyan-300 mb-4">Unlock Creativity</h3>
      <p className="text-gray-300">
        Coding is more than syntax — it’s a canvas. We help children and beginners turn imagination into real, working projects.
      </p>
    </div>

    {/* Card 2 
    <div className="bg-white/10 p-6 rounded-lg shadow-lg hover:scale-105 transition">
      <div className="text-5xl mb-4">🛠️</div>
      <h3 className="text-2xl font-semibold text-cyan-300 mb-4">Build Real Skills</h3>
      <p className="text-gray-300">
        From the first block of code to complete apps and websites, we guide you with real-world skills that build confidence step-by-step.
      </p>
    </div>

    {/* Card 3 
    <div className="bg-white/10 p-6 rounded-lg shadow-lg hover:scale-105 transition">
      <div className="text-5xl mb-4">🌟</div>
      <h3 className="text-2xl font-semibold text-cyan-300 mb-4">Grow with Confidence</h3>
      <p className="text-gray-300">
        Our mentorship is personal, encouraging, and built for every learner. You're not just learning — you're growing into a creator.
      </p>
    </div>
  </div>
</section> */}

<ProcessSection/>
      {/* Our Process Section */}
      {/* <section id="process" className="z-10 text-center p-12 max-w-6xl py-20">
  <h2 className="text-4xl font-bold text-cyan-400 mb-8">Your Learning Journey</h2>
  <p className="text-lg text-gray-300 leading-relaxed mb-12">
    Every learner's path is unique — but every journey starts with a single step.  
    Here's how we guide you:
  </p>

  <div className="grid md:grid-cols-3 gap-8"> */}
    {/* Step 1 */}
    {/* <div className="bg-white/10 p-6 rounded-lg shadow-lg hover:scale-105 transition">
      <div className="text-5xl mb-4">✨</div>
      <h3 className="text-2xl font-semibold text-cyan-300 mb-4">1. Explore Your Interests</h3>
      <p className="text-gray-300">
        Take a free trial, discover what excites you — games, websites, apps, robotics, and more.
      </p>
    </div>

    /* Step 2 
    <div className="bg-white/10 p-6 rounded-lg shadow-lg hover:scale-105 transition">
      <div className="text-5xl mb-4">🚀</div>
      <h3 className="text-2xl font-semibold text-cyan-300 mb-4">2. Personalized Roadmap</h3>
      <p className="text-gray-300">
        Together, we create a plan tailored to your goals: learning new skills, building real projects, or preparing for future careers.
      </p>
    </div> */}

    {/* Step 3 */}
    {/* <div className="bg-white/10 p-6 rounded-lg shadow-lg hover:scale-105 transition">
      <div className="text-5xl mb-4">🌟</div>
      <h3 className="text-2xl font-semibold text-cyan-300 mb-4">3. Create, Build, and Grow</h3>
      <p className="text-gray-300">
        Step-by-step, you’ll build confidence by making real things — small games, websites, apps, or projects you're proud to show off.
      </p>
    </div>
  </div>
      </section> */}
    
<PricingSection/>


{/* CTA section */}
   <CTA setShowOptions={setShowOptions} />
{/* 
<section id="cta" className=" z-10 text-center px-6 sm:px-12 max-w-6xl py-20 mx-auto my-24">
  <div className="bg-gradient-to-r from-purple-900 to-indigo-500 p-6 sm:p-12 md:p-20 rounded-2xl shadow-2xl">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
      Ready to Build Your First Project? 🚀
    </h2>
    <p className="text-sm sm:text-base md:text-lg text-white mb-6 sm:mb-8 max-w-2xl mx-auto">
      Dive into hands-on coding, unleash your creativity, and bring your ideas to life — one line of code at a time.
    </p>
    <button
      className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-indigo-700 font-semibold rounded-full text-sm sm:text-lg hover:bg-gray-200 transition"
      onClick={() => {
        const element = document.getElementById('CTA');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          setShowOptions(true);
        }
      }}
    >
      Start Your Journey
    </button>
  </div>
 
</section>
  */}
   
    </div>
  );
};

export default LandingPage;
