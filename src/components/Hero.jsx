import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    },
  };

  const imageVariants = {
    hidden: { scale: 1.1, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { duration: 1.5, ease: "easeOut" }
    },
  };

  return (
    <section id="home" className="relative w-full min-h-[90vh] md:h-[85vh] flex items-center justify-center p-6 md:p-10 overflow-hidden">
      <motion.div 
        className="absolute inset-0 z-0"
        initial="hidden"
        animate="visible"
        variants={imageVariants}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background-dark/20 via-background-dark/60 to-background-dark z-10"></div>
        <img
          className="w-full h-full object-cover"
          alt="Luxury floral wedding decoration"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAczr7Jw_ncOX4IvOFwHN8RPU36AjvhTELPMiSgQyXnHNQGDdITHhm5VaWw0DtrK_ZVxdf0bf8-FOrAsbZnS6tgBIor9-wXo_Y2qIFK4vLNpvt0HizPMtWhbrpYlWC3BCV_gKIgumpTZ3D8RywUz_yAnNsblZV_ZEY1fYUvAogSpsMWY5UdFMIq5GOYKC_7eknh2O80_4sqibtNyxsBf0fG8eH364shnh46S3ITjrL_fB5cTOPwqSgNYX9wgz1_cMhj6b4CBOhd4cw"
          loading="eager"
        />
      </motion.div>
      <motion.div 
        className="relative z-20 max-w-4xl text-center flex flex-col items-center gap-6 md:gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="space-y-4">
          <motion.span 
            variants={itemVariants}
            className="text-primary font-bold tracking-[0.2em] uppercase text-[10px] md:text-sm block mb-2"
          >
            Ultra-Premium Experiences
          </motion.span>
          <motion.h1 
            variants={itemVariants}
            className="text-white text-4xl md:text-7xl font-black leading-tight tracking-tight drop-shadow-2xl"
          >
            Creating <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-purple">Unforgettable</span> Celebrations in Udupi
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="text-slate-300 text-base md:text-xl font-light max-w-2xl mx-auto leading-relaxed px-2"
          >
            Redefining elegance with bespoke event decoration services that turn your grandest visions into vibrant reality.
          </motion.p>
        </div>
        <motion.button 
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="glass-card flex items-center gap-3 px-6 md:px-8 py-3.5 md:py-4 rounded-2xl text-white font-bold text-base md:text-lg border border-primary/40 hover:bg-primary/20 transition-all group"
          onClick={() => window.open('https://wa.me/919535370484', '_blank')}
        >
          <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">send</span>
          Book Your Event via WhatsApp
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
