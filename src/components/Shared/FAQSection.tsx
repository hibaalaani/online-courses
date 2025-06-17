// src/components/Shared/FAQSection.tsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "What age groups do you teach?",
    answer: "We offer tailored coding lessons for children and teens aged 7 to 18, with curricula adjusted to suit different developmental stages and learning styles."
  },
  {
    question: "What do students learn in the free trial lesson?",
    answer: "The free trial is a personalized introductory session where your child will experience basic coding concepts through a fun, interactive activity, often using Scratch for younger learners. It's a great way to see if Bug to Byte is a good fit!"
  },
  {
    question: "What technical requirements are there for online classes?",
    answer: "Students will need a computer (Windows, macOS, or Chromebook), a stable internet connection, and a webcam/microphone. We'll provide any necessary software setup instructions before the class."
  },
  {
    question: "What if my child has no prior coding experience?",
    answer: "No problem at all! Our curriculum is designed for absolute beginners and progresses at a comfortable pace. We start with visual block coding to make learning intuitive."
  },
  {
    question: "Are your instructors qualified and background-checked?",
    answer: "Yes, all our instructors are experienced educators with a passion for coding and working with children. They undergo thorough background checks and continuous training to ensure a safe and effective learning environment."
  },
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-ingido-900 text-white">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-indigo-300 mb-12 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <button
                className="w-full flex justify-between items-center p-6 text-xl font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors duration-200 hover:bg-gray-700"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span>{openIndex === index ? '−' : '+'}</span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="p-6 pt-0 text-gray-300"
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;