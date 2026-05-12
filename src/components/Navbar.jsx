import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'py-4' : 'py-8'}`}>
      <div className="container mx-auto px-6">
        <div className={`px-8 py-4 rounded-full flex items-center justify-between transition-all duration-500 ${isScrolled ? 'glass shadow-2xl border-white/20' : 'bg-transparent border-transparent shadow-none'}`}>
          
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-brand-dark text-white rounded-full flex items-center justify-center font-black text-xl tracking-tighter group-hover:bg-primary transition-colors">
              AT
            </div>
            <span className="font-bold text-lg tracking-tighter hidden md:block">Arpita Tiwari</span>
          </a>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-bold uppercase tracking-widest text-brand-dark/60 hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a href="mailto:arpita2006tiwari@gmail.com" className="btn-premium bg-brand-dark text-white hover:bg-primary py-3 px-6 text-xs uppercase tracking-widest font-bold">
              Hire Me
            </a>
          </div>

          <button 
            className="md:hidden w-10 h-10 flex items-center justify-center text-brand-dark"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-24 left-6 right-6 glass p-8 rounded-3xl md:hidden z-40"
          >
            <div className="flex flex-col gap-6 items-center">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-bold uppercase tracking-widest text-brand-dark/60 hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a href="mailto:arpita2006tiwari@gmail.com" className="w-full btn-premium bg-brand-dark text-white py-4 text-sm uppercase tracking-widest font-bold text-center">
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
