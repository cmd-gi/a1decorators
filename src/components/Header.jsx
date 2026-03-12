import React from 'react';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/20 bg-background-dark/80 backdrop-blur-md px-6 md:px-10 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-primary p-1.5 rounded-lg text-white">
            <span className="material-symbols-outlined text-2xl">layers</span>
          </div>
          <h2 className="text-white text-xl font-extrabold tracking-tight">A1 Decorators</h2>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a className="text-slate-300 hover:text-primary transition-colors text-sm font-medium" href="#">Home</a>
          <a className="text-slate-300 hover:text-primary transition-colors text-sm font-medium" href="#about">About</a>
          <a className="text-slate-300 hover:text-primary transition-colors text-sm font-medium" href="#services">Services</a>
          <a className="text-slate-300 hover:text-primary transition-colors text-sm font-medium" href="#portfolio">Portfolio</a>
          <a className="text-slate-300 hover:text-primary transition-colors text-sm font-medium" href="#contact">Contact</a>
        </nav>
        <div className="flex items-center gap-4">
          <button className="hidden sm:flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-xl text-sm font-bold neon-glow hover:bg-primary/90 transition-all">
            <span className="material-symbols-outlined text-lg">chat</span>
            WhatsApp Us
          </button>
          <div className="size-10 rounded-full border-2 border-primary/30 p-0.5">
            <img
              className="rounded-full object-cover size-full"
              alt="Client profile picture"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFM6PRQOI9qbSZ-UVSddlkeQ_-BKCo-fToqE5EE4kUcHK1mzSdP9sNlXllM6MOxkHmRF8hJwEIlpqlDuCc6QoLtQCMvUuuaW_vLMcGl5X1E5QMh33-nxHOE6YpgkQuMXuJG8i-lmGRIegKrf9rufZ2nQGT3VXoBHqVUn2S_4e1qinev9aYDfqIGAsgUFpe9DYM16SNHJhexnsAvn_ev_Oxbeg1CE-oW--nIbgw7j04qOqTWya1JHi5m5NB4I3qzhWinG3GK2uBgco"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
