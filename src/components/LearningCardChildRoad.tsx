import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

type Props = {
  stage: {
    step: number;
    title: string;
    description: string;
    tags: string[];
  };
  index: number;
};

export default function LearningCardChildRoad({ stage, index }: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="p-6 bg-white rounded-2xl shadow-xl border border-indigo-200 text-center sm:text-left text-gray-800"
    >
      <h3 className="text-xl font-bold text-indigo-600 mb-2">
        {stage.step}. {stage.title}
      </h3>
      <p className="text-gray-700">{stage.description}</p>

      <div className="flex flex-wrap justify-center sm:justify-start mt-4 gap-2">
        {stage.tags.map((tag, tagIndex) => (
          <span
            key={tagIndex}
            className="bg-indigo-100 text-indigo-700 text-xs font-semibold px-3 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
