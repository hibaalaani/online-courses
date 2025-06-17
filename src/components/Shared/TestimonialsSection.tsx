// src/components/Shared/TestimonialsSection.tsx
import React from 'react';

const testimonials = [
  {
    quote: "Bug to Byte transformed my son's screen time into productive learning. He loves the projects!",
    author: "Sarah J., Parent of Leo (Age 9)"
  },
  {
    quote: "The instructors are amazing! My daughter went from zero coding knowledge to building her own Scratch game in just a few weeks.",
    author: "Ahmed R., Parent of Nora (Age 11)"
  },
  {
    quote: "As a busy parent, the flexible scheduling and engaging lessons made it so easy. Highly recommend!",
    author: "Maria K., Parent of Sofia (Age 14)"
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-900 to-indigo-900 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-cyan-300 mb-12">What Parents Are Saying</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white/10 p-8 rounded-xl shadow-lg border border-white/20 hover:scale-105 transition-transform duration-300">
              <p className="text-lg italic mb-6">"{testimonial.quote}"</p>
              <p className="font-semibold text-indigo-200">- {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;