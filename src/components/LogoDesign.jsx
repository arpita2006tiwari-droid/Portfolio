import React from 'react';
import { motion } from 'framer-motion';
import sportifyLogoImg from '/sportifylogo.png';
import bsLogoImg from '/bslogo.png';
import serviceIconsImg from '/service-icons.png';

const logos = [
  {
    name: "Sportify",
    image: sportifyLogoImg,
    description: "Dynamic identity for a premium sports venue management platform.",
    color: "bg-orange-50"
  },
  {
    name: "Business Mantra",
    image: bsLogoImg,
    description: "Modern, professional branding for a creative agency ecosystem.",
    color: "bg-blue-50"
  },
  {
    name: "Service Ecosystem",
    image: serviceIconsImg,
    description: "Comprehensive iconography and visual language for digital services.",
    color: "bg-gray-50"
  }
];

const LogoDesign = () => {
  return (
    <section id="logo-design" className="py-32 bg-brand-bg-alt">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-baseline justify-between mb-20 gap-8">
          <div className="space-y-4">
            <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs">Visual Identity</span>
            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter">LOGO DESIGN</h2>
          </div>
          <p className="text-brand-dark/40 max-w-md text-lg leading-relaxed">
            Crafting memorable brand marks that bridge the gap between business strategy and visual storytelling.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {logos.map((logo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="group cursor-none"
            >
              <div className={`aspect-square rounded-[40px] ${logo.color} border border-brand-dark/5 overflow-hidden flex items-center justify-center p-12 transition-transform duration-700 group-hover:scale-[0.98]`}>
                <motion.img
                  src={logo.image}
                  alt={logo.name}
                  className="w-full h-full object-contain filter drop-shadow-xl transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="mt-8 space-y-2 text-center md:text-left px-4">
                <h3 className="text-2xl font-bold tracking-tight">{logo.name}</h3>
                <p className="text-brand-dark/60 text-sm leading-relaxed">
                  {logo.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoDesign;
