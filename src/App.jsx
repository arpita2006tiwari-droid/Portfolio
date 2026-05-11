import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Analytics from './components/Analytics';
import Skills from './components/Skills';
import Experience from './components/Experience';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <main className="relative bg-brand-bg">
      <div className="grain-overlay" />
      <Navbar />
      <Hero />
      
      <div className="space-y-0">
        <Projects />
        <Analytics />
        <Skills />
        <About />
        <Testimonials />
        <Experience />
        <Contact />
      </div>
      
      <Footer />
    </main>
  );
}

export default App;
