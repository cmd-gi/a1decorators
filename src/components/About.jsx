import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section className="py-16 md:py-24 px-6 md:px-20 bg-background-light dark:bg-background-dark overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <motion.div 
          className="relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInLeft}
        >
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent-purple/20 rounded-full blur-3xl"></div>
          <img
            className="rounded-3xl shadow-2xl relative z-10 border border-primary/10 w-full aspect-[4/3] object-cover"
            alt="Elegant event planning table setting"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCP1q-esX6LCQX_Y29zIPR_Oo89LAxbTjt_ufgL5LNL-sdjbC7_aIFvevqmsSsCzlVK2fS5545iv0hYxAbvSFHYg0uAbRMYCsIMatzALwGi-x8f-8q33l_8irAnSEEl8JlVo2LcbIeKKw4w7Regv82k0JkaHXqKSd6NCtEO00NNcFrCyazz0AFc4ZItATPakb-0mUD0-T7n-eLptXxvY1sXkRp2eZLCUcSEwYeSEfxGgmoUXOY_VAteHGzndqHVEgARy6KkiljFtyY"
            loading="lazy"
          />
        </motion.div>
        <motion.div 
          className="flex flex-col gap-5 md:gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeInRight} className="text-primary font-bold tracking-widest uppercase text-[10px] md:text-sm">About A1 Decorators</motion.h2>
          <motion.h3 variants={fadeInRight} className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight">
            The Artisans of <br/><span className="text-accent-purple">Atmosphere</span>
          </motion.h3>
          <motion.p variants={fadeInRight} className="text-slate-600 dark:text-slate-300 text-base md:text-lg leading-relaxed">
            At A1 Decorators & Events, we believe every celebration is a unique narrative waiting to be told. We specialize in bespoke services that transform ordinary spaces into extraordinary realms of luxury and joy.
          </motion.p>
          <motion.p variants={fadeInRight} className="text-slate-600 dark:text-slate-300 text-base md:text-lg leading-relaxed">
            With an eye for detail and a heart for celebration, our Udupi-based team blends traditional warmth with modern aesthetic sophistication.
          </motion.p>
          <motion.div variants={fadeInRight} className="grid grid-cols-2 gap-8 pt-4">
            <div className="flex flex-col">
              <span className="text-3xl font-black text-primary">500+</span>
              <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Events Held</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-black text-primary">12+</span>
              <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Years Exp</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
