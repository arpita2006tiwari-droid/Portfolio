import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
            
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="lg:col-span-5 relative"
            >
              <div className="aspect-[4/5] rounded-[40px] md:rounded-[60px] overflow-hidden bg-brand-bg group">
                <img 
                  src="/me.jpg" 
                  alt="Arpita Tiwari" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                />
              </div>
              
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
            </motion.div>

            <div className="lg:col-span-7 space-y-12">
              <div className="space-y-6">
                <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs block">The Visionary</span>
                <h2 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9]">
                  CRAFTING <br /> DIGITAL <br /> EXCELLENCE
                </h2>
              </div>
              
              <div className="space-y-8 text-brand-dark/80 text-xl md:text-2xl leading-relaxed font-medium">
                <p>
                  Hello! I am <span className="text-brand-dark font-black underline decoration-primary/30">Arpita Tiwari</span>, a dedicated and creative developer with a passion for shaping the digital world.
                </p>
                <p className="text-brand-dark/50">
                  I specialize in designing intuitive interfaces and efficient systems, creating engaging experiences for online platforms. My focus is on seamless functionality and memorable user interactions.
                </p>
                <p className="text-brand-dark/50">
                  Whether it's building a high-performance sports management platform or deep-diving into supply chain data, my goal is always the same: to create unforgettable digital stories that drive results.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8 border-t border-brand-dark/5">
                <div className="space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-brand-dark/20">Specialization</span>
                  <ul className="space-y-1">
                    {["Full-Stack Engineering", "UI/UX Strategy", "Data Analytics", "Product Design"].map((item, i) => (
                      <li key={i} className="text-sm font-bold text-brand-dark/60 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-brand-dark/20">Current Location</span>
                  <p className="text-lg font-bold text-brand-dark">Mumbai, India</p>
                  <p className="text-xs text-brand-dark/40 font-medium italic">Available for global collaboration</p>
                </div>
              </div>
              
              <div className="pt-10">
                <a 
                  href="#contact" 
                  className="group inline-flex items-center gap-4 text-2xl font-bold text-brand-dark hover:text-primary transition-all duration-500"
                >
                  <span className="underline decoration-primary/30 underline-offset-8 group-hover:decoration-primary group-hover:translate-x-2 transition-all">
                    Let's Build Something
                  </span>
                  <div className="w-12 h-12 rounded-full border border-brand-dark/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all duration-500 group-hover:translate-x-4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform group-hover:scale-110">
                      <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
