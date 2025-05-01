import { useInView } from 'react-intersection-observer';

export const ProcessSection = () => {
  const steps = [
    {
      icon: '✨',
      title: '1. Explore Your Interests',
      desc: 'Take a free trial, discover what excites you — games, websites, apps, robotics, and more.'
    },
    {
      icon: '🚀',
      title: '2. Personalized Roadmap',
      desc: 'Together, we create a plan tailored to your goals: learning new skills, building real projects, or preparing for future careers.'
    },
    {
      icon: '🌱',
      title: '3. Create, Build, and Grow',
      desc: 'Step-by-step, you’ll build confidence by making real things — small games, websites, apps, or projects you\'re proud to show off.'
    }
  ];

  return (
    <section id="process" className=" my-20 z-10 text-center p-12 max-w-6xl py-20 mx-auto">
      <h2 className="text-4xl font-bold text-cyan-400 mb-8">Your Learning Journey</h2>
      <p className="text-lg text-gray-300 leading-relaxed mb-12">
        Every learner's path is unique — but every journey starts with a single step. Here's how we guide you:
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step, i) => {
          const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
          const delay = `${i * 0.3}s`;

          return (
            <div
              key={i}
              ref={ref}
              className={`bg-white/10 p-6 rounded-lg shadow-lg hover:scale-105 transition-all duration-700 transform ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
              style={{ transitionDelay: delay }}
            >
              <div className="text-5xl mb-4">{step.icon}</div>
              <h3 className="text-2xl font-semibold text-cyan-300 mb-4">{step.title}</h3>
              <p className="text-gray-300">{step.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
