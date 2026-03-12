import React from 'react';

const CTA = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto glass-card rounded-[3rem] p-10 md:p-20 text-center flex flex-col items-center gap-8 border-primary/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-purple/20 rounded-full blur-[100px]"></div>
        <h3 className="text-3xl md:text-5xl font-black text-white relative z-10">Ready to Host an <br/>Event of a Lifetime?</h3>
        <p className="text-slate-300 text-lg max-w-xl relative z-10">Contact us today to receive a customized quote for your upcoming celebration in Udupi or surrounding areas.</p>
        <div className="flex flex-col sm:flex-row gap-4 relative z-10">
          <button className="bg-primary text-white px-10 py-4 rounded-2xl font-bold neon-glow hover:scale-105 transition-transform flex items-center gap-2">
            <span className="material-symbols-outlined">call</span>
            Call Us Now
          </button>
          <button className="bg-white/10 text-white border border-white/20 backdrop-blur-md px-10 py-4 rounded-2xl font-bold hover:bg-white/20 transition-all flex items-center gap-2">
            <span className="material-symbols-outlined">mail</span>
            Inquire Online
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
