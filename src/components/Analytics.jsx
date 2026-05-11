import React from 'react';
import { motion } from 'framer-motion';
import { BarChart2, TrendingUp, Database, ArrowUpRight } from 'lucide-react';

const analyticsProjects = [
  {
    title: "Supply Chain Analysis",
    description: "End-to-end performance analysis using Python & SQL. Optimized logistics routes and inventory management for a major retail dataset.",
    tools: ["Python", "SQL", "Pandas"],
    metric: "15% Efficiency",
    icon: Database,
    color: "bg-blue-500/5"
  },
  {
    title: "Fuel Price Forecasting",
    description: "Time-series forecasting model to predict fuel prices based on global market trends and economic indicators.",
    tools: ["Power BI", "Scikit-Learn"],
    metric: "92% Accuracy",
    icon: TrendingUp,
    color: "bg-orange-500/5"
  },
  {
    title: "Real-Time Monitoring",
    description: "Interactive dashboard for live data streaming and visualization, providing instant insights for decision-making.",
    tools: ["Streamlit", "Plotly"],
    metric: "Live Updates",
    icon: BarChart2,
    color: "bg-green-500/5"
  }
];

const AnalyticsWidget = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    className={`p-10 rounded-[40px] border border-brand-dark/5 hover:border-primary/20 transition-all group relative overflow-hidden ${project.color}`}
  >
    <div className="flex justify-between items-start mb-12">
      <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-brand-dark/40 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm border border-brand-dark/5">
        <project.icon size={28} />
      </div>
      <div className="text-right">
        <span className="text-[10px] font-bold uppercase tracking-widest text-brand-dark/40 block mb-1">Impact</span>
        <span className="text-xl font-bold text-brand-dark">{project.metric}</span>
      </div>
    </div>
    
    <h3 className="text-2xl font-bold mb-4 tracking-tight">{project.title}</h3>
    <p className="text-brand-dark/70 text-base mb-8 leading-relaxed font-medium">
      {project.description}
    </p>
    
    <div className="flex items-center justify-between pt-6 border-t border-brand-dark/5">
      <div className="flex gap-2">
        {project.tools.map((tool, i) => (
          <span key={i} className="text-[10px] font-bold text-brand-dark/50 uppercase tracking-widest">
            {tool}
          </span>
        ))}
      </div>
      <motion.button 
        whileHover={{ x: 5 }}
        className="text-primary"
      >
        <ArrowUpRight size={20} />
      </motion.button>
    </div>
  </motion.div>
);

const Analytics = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-6">
          <div className="space-y-4">
            <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs">Intelligence</span>
            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter">DATA DRIVEN</h2>
          </div>
          <p className="text-brand-dark/40 max-w-md text-lg leading-relaxed">
            Translating complex datasets into actionable business intelligence through advanced visualization and predictive modeling.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {analyticsProjects.map((project, i) => (
            <AnalyticsWidget key={i} project={project} index={i} />
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 glass rounded-[40px] md:rounded-[60px] overflow-hidden bg-brand-dark border-none"
        >
          <div className="p-8 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="space-y-6 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary text-[10px] font-bold uppercase tracking-widest">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" /> Live Analysis Environment
              </div>
              <h3 className="text-4xl md:text-6xl text-white font-bold tracking-tighter">Interactive Power BI Showcase</h3>
              <p className="text-white/70 max-w-xl text-lg font-medium">
                Explore my full-scale data visualization portfolio featuring real-time supply chain monitoring systems.
              </p>
            </div>
            <a 
              href="https://share.streamlit.io/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-premium bg-primary text-white hover:scale-105 whitespace-nowrap px-12 text-lg shrink-0 flex items-center justify-center"
            >
              Launch Dashboard
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Analytics;
