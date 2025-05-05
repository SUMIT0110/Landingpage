import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Therapies';
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
      <main id="home">
        <Hero />
      </main>
      <section id="therapies">
        <Services />
      </section>
      <section id="why-us">
        <WhyChooseUs />
      </section>
      <section id="doctors">
        <Doctors />
      </section>
      <section id="appointment">
        <AppointmentForm />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;