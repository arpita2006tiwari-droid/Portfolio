import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, FaPython, FaChartBar, FaFigma, FaPalette, FaMobileAlt, FaSearch } from 'react-icons/fa';
import { SiTailwindcss, SiPostgresql, SiMongodb, SiPandas, SiStreamlit, SiNextdotjs, SiFramer, SiFlutter } from 'react-icons/si';

const stacks = [
  { name: "React", icon: FaReact, category: "Frontend" },
  { name: "Next.js", icon: SiNextdotjs, category: "Frontend" },
  { name: "Tailwind", icon: SiTailwindcss, category: "Frontend" },
  { name: "Framer", icon: SiFramer, category: "Animation" },
  { name: "Flutter", icon: SiFlutter, category: "Mobile" },
  { name: "Node.js", icon: FaNodeJs, category: "Backend" },
  { name: "Python", icon: FaPython, category: "Data" },
  { name: "PostgreSQL", icon: SiPostgresql, category: "Database" },
  { name: "MongoDB", icon: SiMongodb, category: "Database" },
  { name: "Figma", icon: FaFigma, category: "Design" },
  { name: "Power BI", icon: FaChartBar, category: "Analytics" },
  { name: "Pandas", icon: SiPandas, category: "Data" },
  { name: "UI/UX", icon: FaPalette, category: "Design" },
  { name: "SEO", icon: FaSearch, category: "Marketing" }
];

const Skills = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-baseline justify-between mb-20 gap-4">
          <div className="space-y-4">
            <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs">Expertise</span>
            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter">MY STACKS</h2>
          </div>
          <p className="text-brand-dark/40 max-w-sm text-lg font-medium">
            Commitment to staying updated with the latest design trends and techniques.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-px bg-brand-dark/5 border border-brand-dark/5 rounded-[40px] overflow-hidden">
          {stacks.map((stack, i) => (
            <motion.div
              key={i}
              whileHover={{ backgroundColor: "rgba(220, 38, 38, 0.03)" }}
              className="bg-brand-bg p-10 flex flex-col items-center justify-center gap-6 group transition-colors duration-500"
            >
              <div className="w-16 h-16 rounded-2xl bg-brand-dark/5 flex items-center justify-center text-brand-dark/20 group-hover:text-primary group-hover:bg-primary/5 transition-all duration-500">
                <stack.icon size={32} />
              </div>
              <div className="text-center">
                <span className="block text-sm font-bold text-brand-dark">{stack.name}</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-dark/20">{stack.category}</span>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Marquee Skills */}
        <div className="mt-32 flex overflow-hidden py-10 relative border-y border-brand-dark/5">
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex gap-20 whitespace-nowrap items-center"
          >
            {[...Array(2)].map((_, index) => (
              <div key={index} className="flex gap-20 items-center">
                <span className="text-4xl md:text-7xl font-black text-brand-dark/5 uppercase tracking-tighter">Creative Development</span>
                <div className="w-4 h-4 rounded-full bg-primary/20" />
                <span className="text-4xl md:text-7xl font-black text-brand-dark/5 uppercase tracking-tighter">Data Visualization</span>
                <div className="w-4 h-4 rounded-full bg-primary/20" />
                <span className="text-4xl md:text-7xl font-black text-brand-dark/5 uppercase tracking-tighter">UI/UX Strategy</span>
                <div className="w-4 h-4 rounded-full bg-primary/20" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
