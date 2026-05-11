import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-brand-dark/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-brand-dark text-white rounded-full flex items-center justify-center font-black text-xl tracking-tighter">
              AT
            </div>
            <div className="text-sm font-bold uppercase tracking-widest text-brand-dark/40">
              © 2025 Arpita Tiwari
            </div>
          </div>
          
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-brand-dark/40">
            <a href="#" className="hover:text-primary transition-colors">Instagram</a>
            <a href="https://www.linkedin.com/in/arpitatiwari16" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LinkedIn</a>
            <a href="https://github.com/arpita2006tiwari-droid" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">GitHub</a>
            <a href="#" className="hover:text-primary transition-colors">Behance</a>
          </div>
          
          <div className="text-[10px] font-bold uppercase tracking-widest text-brand-dark/20">
            Built with React & Passion
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
