// ✅ Arabic Promo Version
// File: PromoLandingPageAR.tsx
import { useNavigate } from 'react-router-dom';

const PromoLandingPageAR = () => {
  const navigate = useNavigate();

  const handleBooking = () => navigate('/booking');

  const content = {
    title: 'من الصفر الى الاحتراف للاطفال!',
    subtitle:'حيث تنطلق عقول الأطفال نحو البرمجة ! ' ,
    heading: 'افتح الباب للمستقبل\nمغامرات الذكاء الاصطناعي والبرمجة',
    subheading: 'دروس تفاعلية للأطفال من عمر ٧ إلى ١٧ عامًا',
    features: [
      { text: 'تعزز الثقة بالنفس', icon: '🚀', color: 'bg-green-200' },
      { text: 'تقوي المنطق', icon: '🧠', color: 'bg-red-200' },
      { text: 'تنمي الإبداع', icon: '🎨', color: 'bg-yellow-200' },
      { text: 'تحسن مهارات حل المشكلات', icon: '💡', color: 'bg-blue-200' },
    ],
    cta: 'احجز درسًا تجريبيًا مجانيًا الآن!',
    bottomCTA: 'ابدأ رحلة البرمجة لأطفالك اليوم!',
  };

  return (
    <div dir="rtl" className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex flex-col items-center px-4 py-12 sm:py-20 font-sans relative overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute top-1/4 left-0 w-48 h-48 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-1/4 left-1/4 w-56 h-56 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="text-center mb-8 z-10">
        <h1 className="text-5xl md:text-6xl font-extrabold text-blue-800 tracking-tight leading-tight drop-shadow-lg">{content.title}</h1>
        <p className="text-lg text-purple-700 mt-2 font-semibold">{content.subtitle}</p>
      </div>

      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-xl p-6 md:p-12 flex flex-col lg:flex-row-reverse items-center justify-between gap-8 relative z-10 border-4 border-purple-300 transform transition-transform duration-500 hover:scale-[1.01]">
        <div className="flex-1 text-center lg:text-right">
          <h2 className="text-4xl md:text-5xl font-extrabold text-purple-700 mb-4 leading-tight whitespace-pre-line">{content.heading}</h2>
          <h3 className="text-2xl text-gray-700 mb-6 font-medium">{content.subheading}</h3>

          <div className="grid grid-cols-2 md:grid-cols-2 gap-4 mb-8">
            {content.features.map((f, i) => <FeatureBubble key={i} {...f} />)}
          </div>

          <button
            onClick={handleBooking}
            className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-extrabold py-4 px-8 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 active:scale-95 animate-bounce-subtle">
            {content.cta}
          </button>
        </div>

        <div className="flex-1 flex justify-center lg:justify-start mt-8 lg:mt-0">
          <img
            src="/little-girl-uses-laptop-late-night.jpg"
            alt="تعلم البرمجة والذكاء الاصطناعي"
            className="w-full max-w-md object-cover rounded-3xl shadow-2xl border-4 border-yellow-400 transform rotate-3 hover:rotate-0 transition-transform duration-500"
          />
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white bg-opacity-95 shadow-2xl p-4 z-20 flex justify-center items-center backdrop-blur-sm">
        <button
          onClick={handleBooking}
          className="bg-gradient-to-r from-teal-500 to-green-500 hover:from-teal-600 hover:to-green-600 text-white font-extrabold px-8 py-4 rounded-full shadow-xl text-lg transform transition-all duration-300 hover:scale-105 active:scale-95 animate-pulse-subtle">
          {content.bottomCTA}
        </button>
      </div>
    </div>
  );
};

const FeatureBubble = ({ text, color, icon }: { text: string; color: string; icon: string }) => (
  <span className={`${color} text-gray-800 rounded-full px-5 py-2 font-bold text-base flex items-center justify-center shadow-md border-2 border-dashed border-gray-300 transform hover:scale-105 transition-transform duration-200`}>
    <span className="ml-2 text-xl">{icon}</span> {text}
  </span>
);

export default PromoLandingPageAR;
