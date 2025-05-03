import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import AppointmentForm from './components/AppointmentForm';
import Contact from './components/Contact';
import Doctors from './components/Doctors';
// import Gallery from './components/Gallery';
import Footer from './components/footer';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <div className="min-h-screen font-sans text-gray-800">
      <Header />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Doctors />
      <AppointmentForm />
      <About />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;