import React from 'react';

const About = () => {
  return (
    <section className="py-24 px-6 md:px-20 bg-background-light dark:bg-background-dark" id="about">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent-purple/20 rounded-full blur-3xl"></div>
          <img
            className="rounded-3xl shadow-2xl relative z-10 border border-primary/10"
            alt="Elegant event planning table setting with candles"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCP1q-esX6LCQX_Y29zIPR_Oo89LAxbTjt_ufgL5LNL-sdjbC7_aIFvevqmsSsCzlVK2fS5545iv0hYxAbvSFHYg0uAbRMYCsIMatzALwGi-x8f-8q33l_8irAnSEEl8JlVo2LcbIeKKw4w7Regv82k0JkaHXqKSd6NCtEO00NNcFrCyazz0AFc4ZItATPakb-0mUD0-T7n-eLptXxvY1sXkRp2eZLCUcSEwYeSEfxGgmoUXOY_VAteHGzndqHVEgARy6KkiljFtyY"
          />
        </div>
        <div className="flex flex-col gap-6">
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm">About A1 Decorators</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight">
            The Artisans of <br/><span className="text-accent-purple">Atmosphere</span>
          </h3>
          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
            At A1 Decorators & Events, we believe every celebration is a unique narrative waiting to be told. We specialize in bespoke services that transform ordinary spaces into extraordinary realms of luxury and joy.
          </p>
          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
            With an eye for detail and a heart for celebration, our Udupi-based team blends traditional warmth with modern aesthetic sophistication.
          </p>
          <div className="flex gap-4 pt-4">
            <div className="flex flex-col">
              <span className="text-3xl font-black text-primary">500+</span>
              <span className="text-xs uppercase tracking-widest text-slate-500">Events Held</span>
            </div>
            <div className="h-12 w-px bg-primary/20 mx-4"></div>
            <div className="flex flex-col">
              <span className="text-3xl font-black text-primary">12+</span>
              <span className="text-xs uppercase tracking-widest text-slate-500">Years Exp</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
