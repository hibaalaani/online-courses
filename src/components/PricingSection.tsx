import { useInView } from 'react-intersection-observer';

const PricingSection = () => {
  const plans = [
    {
      title: '9-Month Full Payment',
      subtitle: '36 Sessions (1 Payment)',
      price: '900 EUR',
      oldPrice: '1080 EUR',
      discount: '-20%',
      perSession: '25 EUR',
      perHour: '12.5 EUR',
      monthly: '100 EUR',
      bgColor: 'from-cyan-400 to-blue-500',
    },
    {
      title: 'Quarterly Plan',
      subtitle: '12 Sessions (3 Payments)',
      price: '990 EUR',
      oldPrice: '1080 EUR',
      discount: '-10%',
      perSession: '27.5 EUR',
      perHour: '13.75 EUR',
      monthly: '110 EUR',
      bgColor: 'from-purple-400 to-pink-500',
    },
    {
      title: 'Flexible Plan',
      subtitle: '4 Sessions (9 Payments)',
      price: '1080 EUR',
      oldPrice: '',
      discount: '',
      perSession: '30 EUR',
      perHour: '15 EUR',
      monthly: '120 EUR',
      bgColor: 'from-indigo-500 to-purple-600',
    },
  ];

  return (
    <section className="my-20  py-24 px-6 text-white text-center bg-gradient-to-b from-indigo-900 via-purple-900 to-indigo-600 rounded-3xl">
      <h2 className="text-4xl font-bold text-cyan-400 mb-14">Choose Your Plan</h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {plans.map((plan, index) => {
          const delay = `${index * 0.3}s`;
          const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

          return (
            <div
              key={index}
              ref={ref}
              className={`bg-white/10 p-8 rounded-3xl shadow-2xl relative border border-white/20 transition-all duration-700 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 '}`}
              style={{ transitionDelay: delay }}
            >
              {plan.discount && (
                <div className="absolute -top-6 -right-6 bg-pink-500 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg">
                  {plan.discount}
                </div>
              )}

              <p className="text-sm text-gray-300 mb-3">{plan.subtitle}</p>
              <h3 className="text-4xl font-extrabold text-pink-400 mb-3">
                {plan.price}
                <span className="text-base text-gray-400 line-through ml-3">{plan.oldPrice}</span>
              </h3>
              <p className="uppercase text-xs tracking-wider text-gray-400 mb-6">Total for 36 Sessions</p>

              <div className="border-t border-gray-600 pt-5 space-y-3 text-left text-sm">
                <p><span className="font-bold text-white">Monthly:</span> {plan.monthly}</p>
                <p><span className="font-bold text-white">Price/Session:</span> {plan.perSession}</p>
                <p><span className="font-bold text-white">Price/Hour:</span> {plan.perHour}</p>
                <p><span className="font-bold text-white">Session Duration:</span> 90 min</p>
              </div>

              <div className="mt-8">
                <img src="transparent.png" alt="Icon" className="h-10 mx-auto bg-white rounded-full p-1" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PricingSection;
