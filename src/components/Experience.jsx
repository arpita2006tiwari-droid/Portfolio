import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    year: "2026",
    title: "AI-Driven Solutions Architect",
    company: "Future Innovations",
    description: "Pioneering the integration of Agentic AI and advanced machine learning into scalable enterprise ecosystems. Bridging the gap between human creativity and autonomous systems."
  },
  {
    year: "2025",
    title: "Senior Creative Developer",
    company: "Freelance / Studio",
    description: "Leading high-end digital transformations for startups and creative agencies. Specializing in interactive storytelling and premium UI/UX."
  },
  {
    year: "2024",
    title: "Full-Stack Web Developer",
    company: "Portfolio Projects",
    description: "Built scalable applications including Sportify and NGO Management systems. Integrated complex data visualizations and real-time tracking."
  },
  {
    year: "2023",
    title: "Data Analyst & UI Designer",
    company: "Learning & Growth",
    description: "Mastered the intersection of data science and design. Focused on translating analytics into beautiful, user-centric dashboards."
  },
  {
    year: "2022",
    title: "Foundations of Engineering",
    company: "Initial Journey",
    description: "Started the journey into core programming, mastering JavaScript, Python, and the fundamentals of modern web architecture."
  }
];

const Experience = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16">
          <div className="md:w-1/3">
            <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs">The Journey</span>
            <h2 className="text-5xl font-bold tracking-tighter mt-4 mb-8">MILESTONES & EXPERIENCE</h2>
            <p className="text-brand-dark/40 leading-relaxed">
              A chronological evolution of my skills, projects, and professional growth in the tech and design industry.
            </p>
          </div>
          
          <div className="md:w-2/3 space-y-12">
            {experiences.map((exp, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="relative pl-12 border-l border-brand-dark/5 pb-12 last:pb-0"
              >
                <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-brand-bg border-2 border-primary z-10" />
                <div className="absolute left-0 top-2 -translate-x-1/2 w-12 h-px bg-primary/20" />
                
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <span className="text-6xl md:text-8xl font-black text-brand-dark/10 absolute -left-12 md:-left-24 top-0 pointer-events-none select-none">
                      {exp.year}
                    </span>
                    <h3 className="text-2xl font-bold">{exp.title}</h3>
                    <span className="text-primary text-sm font-medium">{exp.company}</span>
                  </div>
                </div>
                <p className="text-brand-dark/60 leading-relaxed max-w-xl">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
