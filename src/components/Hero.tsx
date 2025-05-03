import React from 'react';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/3735149/pexels-photo-3735149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-transparent"></div>

      {/* Hero content */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Shree Siddhivinayak Ayurveda Panchakarma Center
        </h1>
        <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
          Ayurveda is an ancient healing science that nurtures body, mind, and spirit, promoting balance, vitality, and lifelong wellness.
        </p>
        <a href="#appointment">
          <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold rounded-full transition transform hover:scale-105 focus:outline-none">
            Book My Appointment
          </button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
