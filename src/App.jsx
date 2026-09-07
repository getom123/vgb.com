// src/App.jsx
import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Services from './Components/Services';
import HowItWorks from './Components/HowItWorks';
import Portfolio from './Components/Portfolio';
import WhyChooseUs from './Components/WhyChooseUs';
import Testimonials from './Components/Testimonials';
import Pricing from './Components/Pricing';
import FAQ from './Components/FAQ';
import CTA from './Components/CTA';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <HowItWorks />
        <Portfolio />
        <WhyChooseUs />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;