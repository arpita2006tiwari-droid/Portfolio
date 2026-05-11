import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Download, Mail, ExternalLink } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const roles = [
  "Full-Stack Developer",
  "UI/UX Designer",
  "Web Designer",
  "Frontend Engineer",
  "Logo Designer",
  "Brand Designer",
  "Data Analyst",
  "Dashboard Developer",
  "Creative Technologist"
];


const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-brand-bg">
      {/* Background Blobs */}
      <div className="bg-blob bg-primary/10 -top-20 -left-20" />
      <div className="bg-blob bg-accent/10 bottom-0 -right-20" style={{ animationDelay: '-10s' }} />
      
      <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
        
        {/* Main Composition */}
        <div className="relative w-full max-w-2xl aspect-[4/5] md:aspect-[1/1] flex items-center justify-center">
          
          {/* Top Typography */}
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-0 md:-top-10 left-0 right-0 text-center text-[12vw] md:text-[10vw] font-bold tracking-tighter leading-none z-0 pointer-events-none text-brand-dark/20 uppercase"
            style={{ fontFamily: 'Clash Display' }}
          >
            ARPITA
          </motion.h1>

          {/* Portrait Image Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            style={{ y: y1 }}
            className="relative w-[280px] h-[350px] md:w-[450px] md:h-[550px] rounded-[40px] md:rounded-[80px] overflow-hidden shadow-2xl z-10 group bg-white p-2 border border-white/50"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent mix-blend-overlay group-hover:opacity-0 transition-opacity duration-700" />
            <img 
              src="/me.jpg" 
              alt="Arpita Tiwari" 
              className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105 rounded-[32px] md:rounded-[72px]"
            />
            {/* Image Inner Glow */}
            <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-[40px] md:rounded-[80px]" />
          </motion.div>

          {/* Bottom Typography */}
          <motion.h1 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute bottom-0 md:-bottom-10 left-0 right-0 text-center text-[12vw] md:text-[10vw] font-bold tracking-tighter leading-none z-20 pointer-events-none text-brand-dark/20 uppercase"
            style={{ fontFamily: 'Clash Display' }}
          >
            TIWARI
          </motion.h1>

        </div>

        {/* Right Intro Content (Mobile: Below) */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-full lg:w-[450px] space-y-8 text-center lg:text-left z-30"
        >
          <div className="space-y-1">
            <span className="text-primary font-bold tracking-widest uppercase text-xs">Creative Developer & Designer</span>
            <div className="h-12 overflow-hidden">
              <motion.h2 
                key={roleIndex}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -40, opacity: 0 }}
                className="text-3xl md:text-4xl font-bold text-brand-dark"
              >
                {roles[roleIndex]}
              </motion.h2>
            </div>
          </div>
          
          <p className="text-brand-dark/60 leading-relaxed text-sm md:text-base">
            Crafting immersive digital experiences through elegant design and powerful engineering. Specializing in high-end creative development and data-driven storytelling.
          </p>

        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="hidden lg:flex flex-col gap-8 absolute left-0 top-1/2 -translate-y-1/2 z-30"
        >
          {[
            { Icon: FaGithub, href: "https://github.com/arpita2006tiwari-droid" },
            { Icon: FaLinkedin, href: "https://www.linkedin.com/in/arpitatiwari16" },
            { Icon: FaInstagram, href: "#" }, // No link provided for Instagram
            { Icon: Mail, href: "mailto:arpita2006tiwari@gmail.com" }
          ].map((item, i) => (
            <motion.a
              key={i}
              href={item.href}
              target={item.href.startsWith('http') ? "_blank" : undefined}
              rel={item.href.startsWith('http') ? "noopener noreferrer" : undefined}
              whileHover={{ x: 10, color: '#DC2626' }}
              className="text-brand-dark/40 transition-colors"
            >
              <item.Icon size={24} />
            </motion.a>
          ))}
        </motion.div>

      </div>

    </section>
  );
};

export default Hero;
