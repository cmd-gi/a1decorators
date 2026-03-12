import React from 'react';
import { motion } from 'framer-motion';

const standards = [
  {
    icon: "palette",
    title: "Custom Design",
    description: "No templates here. Every design is hand-crafted to match your unique story and personality."
  },
  {
    icon: "diamond",
    title: "Affordable Luxury",
    description: "We deliver ultra-high-end aesthetics at competitive pricing that respects your budget."
  },
  {
    icon: "schedule",
    title: "Punctual Execution",
    description: "Our logistics are flawless. We ensure every petal and light is in place well before your guests arrive."
  }
];

const Standards = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="py-24 px-6 md:px-20 bg-background-dark overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4">Quality Assurance</h2>
          <h3 className="text-3xl md:text-5xl font-black text-white">The A1 Standard</h3>
        </motion.div>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {standards.map((standard, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              whileHover={{ scale: 1.02, backgroundColor: "rgba(30, 30, 30, 0.8)" }}
              className="p-10 rounded-3xl border border-primary/20 bg-neutral-dark/40 transition-colors"
            >
              <div className="bg-primary/20 size-14 rounded-2xl flex items-center justify-center text-primary mb-6">
                <span className="material-symbols-outlined text-3xl">{standard.icon}</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-4">{standard.title}</h4>
              <p className="text-slate-400 leading-relaxed">{standard.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Standards;
