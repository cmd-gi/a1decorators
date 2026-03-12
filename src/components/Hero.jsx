import React from 'react';

const Hero = () => {
  return (
    <section className="relative w-full h-[85vh] flex items-center justify-center p-4 md:p-10">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background-dark/20 via-background-dark/60 to-background-dark z-10"></div>
        <img
          className="w-full h-full object-cover"
          alt="Luxury floral wedding decoration with pink lighting"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAczr7Jw_ncOX4IvOFwHN8RPU36AjvhTELPMiSgQyXnHNQGDdITHhm5VaWw0DtrK_ZVxdf0bf8-FOrAsbZnS6tgBIor9-wXo_Y2qIFK4vLNpvt0HizPMtWhbrpYlWC3BCV_gKIgumpTZ3D8RywUz_yAnNsblZV_ZEY1fYUvAogSpsMWY5UdFMIq5GOYKC_7eknh2O80_4sqibtNyxsBf0fG8eH364shnh46S3ITjrL_fB5cTOPwqSgNYX9wgz1_cMhj6b4CBOhd4cw"
        />
      </div>
      <div className="relative z-20 max-w-4xl text-center flex flex-col items-center gap-8">
        <div className="space-y-4">
          <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm block mb-2">Ultra-Premium Experiences</span>
          <h1 className="text-white text-5xl md:text-7xl font-black leading-tight tracking-tight drop-shadow-2xl">
            Creating <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-purple">Unforgettable</span> Celebrations in Udupi
          </h1>
          <p className="text-slate-300 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            Redefining elegance with bespoke event decoration services that turn your grandest visions into vibrant reality.
          </p>
        </div>
        <button className="glass-card flex items-center gap-3 px-8 py-4 rounded-2xl text-white font-bold text-lg border border-primary/40 hover:bg-primary/20 transition-all group">
          <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">send</span>
          Book Your Event via WhatsApp
        </button>
      </div>
    </section>
  );
};

export default Hero;
