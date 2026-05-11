import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, Send } from 'lucide-react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="bg-brand-dark rounded-[40px] md:rounded-[80px] p-8 md:p-24 relative overflow-hidden border border-white/5 shadow-2xl">
          {/* Decorative background */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 opacity-50" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 opacity-30" />
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="space-y-16">
              <div className="space-y-6">
                <span className="text-primary font-bold tracking-[0.4em] uppercase text-xs block mb-4">Let's Connect</span>
                <h2 className="text-6xl md:text-9xl font-bold tracking-tighter text-white uppercase leading-[0.8] mb-8">START A <br/> CONVERSATION</h2>
              </div>
              
              <p className="text-white/70 text-xl md:text-2xl leading-relaxed mx-auto max-w-2xl font-medium">
                Available for internships, freelance projects, and collaborations. Let's build something extraordinary together.
              </p>
              
              <div className="flex flex-col items-center space-y-12 pt-10">
                <a href="mailto:arpita2006tiwari@gmail.com" className="flex flex-col items-center gap-8 group">
                  <div className="w-28 h-28 rounded-[40px] bg-white/10 flex items-center justify-center text-white group-hover:bg-primary group-hover:scale-110 transition-all duration-700 shadow-2xl">
                    <Mail size={48} />
                  </div>
                  <div className="text-center">
                    <span className="text-xs font-bold uppercase tracking-[0.3em] text-white/40 block mb-3">Email Me</span>
                    <span className="text-2xl md:text-5xl font-bold text-white group-hover:text-primary transition-all duration-500 underline underline-offset-8 decoration-white/10 group-hover:decoration-primary/50">arpita2006tiwari@gmail.com</span>
                  </div>
                </a>
                
                <div className="flex gap-6 pt-10">
                  {[
                    { icon: FaLinkedin, href: "https://www.linkedin.com/in/arpitatiwari16" },
                    { icon: FaGithub, href: "https://github.com/arpita2006tiwari-droid" },
                    { icon: FaInstagram, href: "#" }
                  ].map((item, i) => (
                    <a key={i} href={item.href} target={item.href.startsWith('http') ? "_blank" : undefined} rel={item.href.startsWith('http') ? "noopener noreferrer" : undefined} className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-white/40 hover:bg-primary hover:text-white transition-all duration-500 hover:-translate-y-2">
                      <item.icon size={24} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
