import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: "Sportify",
    year: "2026",
    role: "Lead Full-Stack Developer",
    services: ["Venue Management", "Coach Tracking", "Analytics Dashboard"],
    description: "The definitive platform for sports in Mumbai, delivering a premium, high-performance ecosystem for basketball venue management and elite coach tracking across the city's premier facilities.",
    metrics: {
      label: "Efficiency Increase",
      value: "45%"
    },
    tags: ["React", "Firebase", "Framer Motion"],
    link: "https://arpita2006tiwari-droid.github.io/Sportify_main/#features",
    github: "#",
    image: "/sportify.png",
    logo: "/sportifylogo.png",
    color: "bg-[#FFF8F4] border-orange-200/50"
  },
  {
    title: "Business Mantra",
    year: "2024",
    role: "Creative Technologist",
    services: ["Brand Strategy", "Digital Experience", "Web Engineering"],
    description: "Modern corporate website focusing on brand identity and streamlined business workflows for creative agencies. Implemented advanced 3D transitions.",
    metrics: {
      label: "Conversion Rate",
      value: "+120%"
    },
    tags: ["Next.js", "GSAP", "Three.js"],
    link: "https://businessmantra.co/",
    github: "#",
    image: "/bs.png",
    logo: "/bslogo.png",
    color: "bg-[#F4F9FF] border-blue-200/50"
  },
  {
    title: "NGO Foundation",
    year: "2024",
    role: "Product Engineer",
    services: ["Identity Tracking", "Document Management", "Insights Portal"],
    description: "A full-featured portal for Hi5 Youth Foundation, facilitating student tracking, attendance insights, and secure document management for large-scale operations.",
    metrics: {
      label: "Active Users",
      value: "5k+"
    },
    tags: ["React", "PostgreSQL", "Node.js"],
    link: "#",
    github: "#",
    image: "/ngo.png",
    color: "bg-[#F4FFF8] border-green-200/50"
  },
  {
    title: "Attendance App",
    year: "2023",
    role: "Mobile App Developer",
    services: ["Mobile Strategy", "Real-time Tracking", "Analytics"],
    description: "Efficient mobile-optimized application for real-time student attendance and performance data analytics. Scaled to multiple centers across the region.",
    metrics: {
      label: "Data Accuracy",
      value: "99.9%"
    },
    tags: ["React Native", "Expo", "Redux"],
    link: "#",
    github: "#",
    image: "/attendance.png",
    color: "bg-[#F9F4FF] border-purple-200/50"
  }
];

const ProjectCard = ({ project, index }) => {
  return (
    <div className="sticky top-32 mb-32">
      <motion.div 
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`backdrop-blur-3xl p-8 md:p-16 rounded-[40px] md:rounded-[60px] border shadow-2xl overflow-hidden ${project.color} group`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-8 order-2 lg:order-1">
            <div className="space-y-2">
              <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-brand-dark/60">
                <span>{project.year}</span>
                <span className="w-1 h-1 rounded-full bg-primary" />
                <span>{project.role}</span>
              </div>
              <h3 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight group-hover:text-primary transition-colors duration-500 flex items-center gap-4">
                {project.logo && <img src={project.logo} alt="" className="h-12 md:h-16 w-auto object-contain" />}
                {project.title}
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-8 py-6 border-y border-brand-dark/10">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-dark/40 block mb-2">{project.metrics.label}</span>
                <span className="text-4xl font-bold text-brand-dark">{project.metrics.value}</span>
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-dark/40 block mb-2">Services</span>
                <div className="flex flex-wrap gap-x-4 gap-y-1">
                  {project.services.map((s, i) => (
                    <span key={i} className="text-xs font-medium text-brand-dark/80">{s}</span>
                  ))}
                </div>
              </div>
            </div>

            <p className="text-lg text-brand-dark/80 leading-relaxed max-w-xl">
              {project.description}
            </p>

            <div className="flex items-center gap-6 pt-4">
              <div className="flex gap-4">
                <a href={project.github} className="w-12 h-12 rounded-full border border-brand-dark/10 flex items-center justify-center hover:bg-brand-dark hover:text-white transition-all"><FaGithub size={20} /></a>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-brand-dark/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all"><ExternalLink size={20} /></a>
              </div>
            </div>
          </div>

          <div className="relative aspect-[4/3] rounded-[32px] md:rounded-[48px] overflow-hidden order-1 lg:order-2 bg-brand-dark/5">
            {project.image ? (
              <div className="w-full h-full relative overflow-hidden">
                <motion.img 
                  src={project.image} 
                  alt={project.title}
                  className={`w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 ${
                    project.title === "Sportify" ? "-translate-y-[12%] scale-[1.2] origin-top" : 
                    project.title === "Business Mantra" ? "object-top scale-[1.05]" : 
                    project.title === "Brand Identity Design" ? "object-contain p-12 bg-white" : "object-top"
                  }`}
                />
              </div>
            ) : (
              <div className="w-full h-full flex items-center justify-center text-brand-dark/5 font-black text-6xl md:text-8xl uppercase tracking-tighter select-none rotate-[-10deg] group-hover:scale-110 transition-transform duration-1000">
                {project.title}
              </div>
            )}
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </div>

        </div>
      </motion.div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-6">
          <div className="space-y-4">
            <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs">Selection</span>
            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter">RECENT WORKS</h2>
          </div>
          <p className="text-brand-dark/40 max-w-md text-lg leading-relaxed">
            I craft user-focused designs that drive conversions and resonate with audiences. A curation of my best work.
          </p>
        </div>

        <div className="relative">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>
        
        <div className="mt-32 text-center relative z-20">
          <button className="btn-premium bg-brand-dark text-white hover:bg-primary px-12 text-lg">
            See more works
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
