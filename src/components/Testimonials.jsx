import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "Benji Weiser",
    role: "Product Manager (Pugpig)",
    text: "Arpita's design and engineering skills are exceptional. It's super helpful to get reliable opinions about what we should do to address problems in a way that's best for our users."
  },
  {
    name: "Charles Dairo",
    role: "CEO CKDIGITAL",
    text: "Arpita seamlessly combines technical talent with all-round professionalism. It was a pleasure working with her, and I highly recommend her for high-stakes digital products."
  },
  {
    name: "Sponge Fairhurst",
    role: "Head of Engineering (Pugpig)",
    text: "Arpita's work always makes me happy! I love that I can provide an idea or complex data task and she works her magic to deliver something functional and beautiful."
  },
  {
    name: "Christian Nwamba",
    role: "Senior Advocacy Amazon",
    text: "Arpita is a highly talented developer and designer, known for her remarkable creativity and ease of collaboration on technical challenges."
  }
];

const Testimonials = () => {
  return (
    <section className="py-32 relative bg-brand-bg overflow-hidden border-t border-brand-dark/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-baseline justify-between mb-24 gap-4">
          <div className="space-y-4">
            <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs">Reputation</span>
            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter">TRUSTED BY</h2>
          </div>
          <p className="text-brand-dark/40 max-w-sm text-lg font-medium">
            Here are a few kind words people have to say about collaborating and solving problems with me.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-brand-dark/5 border border-brand-dark/5 rounded-[40px] overflow-hidden">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="bg-brand-bg p-12 md:p-16 flex flex-col justify-between gap-12 hover:bg-white transition-colors duration-700"
            >
              <p className="text-2xl md:text-3xl font-medium text-brand-dark leading-tight tracking-tight">
                "{t.text}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-black text-xl">
                  {t.name[0]}
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark">{t.name}</h4>
                  <p className="text-xs font-bold uppercase tracking-widest text-brand-dark/40">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Brand Logos Placeholder */}
        <div className="mt-32 pt-16 border-t border-brand-dark/5">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-12 opacity-20 grayscale">
            {["Pugpig", "CKDIGITAL", "Modus", "BusinessMantra", "Hi5 Foundation", "Khelomore"].map((brand, i) => (
              <span key={i} className="text-2xl md:text-3xl font-black tracking-tighter uppercase">{brand}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
