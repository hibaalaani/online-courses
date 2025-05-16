import React from 'react';

const HomePage = () => {
  return (
    <div className="bg-gradient-to-b from-indigo-900 via-purple-900 to-indigo-900 text-white font-sans">
      {/* Header */}
      <header className="py-6 px-8 flex justify-between items-center border-b border-white/10">
        <h1 className="text-2xl font-bold tracking-wide">Bug to Byte</h1>
        <nav className="space-x-6">
          <a href="#features" className="hover:text-cyan-400">Features</a>
          <a href="#pricing" className="hover:text-cyan-400">Pricing</a>
          <a href="#contact" className="hover:text-cyan-400">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center min-h-[90vh] px-6 sm:px-10">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight max-w-3xl">
          Transform Curiosity <br /> Into Creation 🚀
        </h2>
        <p className="mt-6 max-w-xl text-lg text-gray-300">
          We help kids, teens, and beginners learn to code through fun, project-based sessions and guidance every step of the way.
        </p>
        <button className="mt-10 px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full font-semibold hover:from-blue-500 hover:to-cyan-400 transition-all shadow-lg">
          Start Your Journey
        </button>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-6 max-w-6xl mx-auto text-center">
        <h3 className="text-3xl font-bold text-cyan-400 mb-12">Why Learn with Us?</h3>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Hands-on Projects",
              desc: "Build real apps, games, and websites as you learn."
            },
            {
              title: "Beginner Friendly",
              desc: "No experience? No problem. We start from zero."
            },
            {
              title: "Fun & Interactive",
              desc: "Sessions designed to be exciting and creative."
            }
          ].map((feature, i) => (
            <div key={i} className="bg-white/10 p-6 rounded-xl shadow-md border border-white/10">
              <h4 className="text-xl font-semibold mb-2 text-cyan-300">{feature.title}</h4>
              <p className="text-sm text-gray-300">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-6 max-w-6xl mx-auto text-center">
        <h3 className="text-3xl font-bold text-cyan-400 mb-12">Choose Your Plan</h3>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Full Course",
              price: "900 EUR",
              subtitle: "36 sessions • 1 payment",
              tag: "-20%"
            },
            {
              title: "Quarterly",
              price: "990 EUR",
              subtitle: "12 sessions • 3 payments",
              tag: "-10%"
            },
            {
              title: "Flexible",
              price: "1080 EUR",
              subtitle: "4 sessions • 9 payments"
            }
          ].map((plan, i) => (
            <div key={i} className="bg-white/10 p-6 rounded-2xl shadow-xl relative border border-white/10 flex flex-col justify-between h-full">
              {plan.tag && (
                <div className="absolute -top-4 right-4 bg-pink-500 px-3 py-1 rounded-full text-xs font-bold">
                  {plan.tag}
                </div>
              )}
              <h4 className="text-xl font-bold text-pink-300 mb-2">{plan.title}</h4>
              <p className="text-3xl font-extrabold mb-2">{plan.price}</p>
              <p className="text-gray-400 text-sm mb-6">{plan.subtitle}</p>
              <button className="mt-auto bg-white text-indigo-700 px-4 py-2 rounded-full font-semibold hover:bg-indigo-100 transition">
                Enroll Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gradient-to-t from-indigo-900 via-purple-900 to-indigo-800 py-12 text-center text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()} Bug to Byte. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
