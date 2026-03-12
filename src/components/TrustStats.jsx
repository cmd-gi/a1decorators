import React from 'react';
import { motion } from 'framer-motion';

const TrustStats = () => {
  const stats = [
    { id: "rating", value: "4.9", label: "Google Rating (35+)", isGradient: true },
    { id: "events", value: "350+", label: "Events Curated", isGradient: false },
    { id: "custom", value: "Custom", label: "Theme Designs", isGradient: false },
    { id: "location", value: "Udupi", label: "Primary Hub", isGradient: false },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.15,
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-16 border-y border-white/5 bg-background-dark/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {stats.map((stat, index) => (
            <motion.div key={index} variants={itemVariants} className="flex flex-col items-center">
              <div className={`text-4xl font-extrabold mb-2 ${stat.isGradient ? 'text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-purple' : 'text-white'}`}>
                {stat.value}
              </div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustStats;
