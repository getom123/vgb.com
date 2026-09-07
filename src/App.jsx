// src/App.jsx
import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Services from './Components/Services';
import Portfolio from './Components/Portfolio';
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
        <Portfolio />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;