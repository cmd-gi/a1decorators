import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
    { name: "Shop", href: "shop.html" },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full z-[100] bg-background-dark/90 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-serif font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-purple uppercase">
            A1 DECORATORS
          </div>
          
          <div className="hidden md:flex items-center space-x-10 text-[11px] font-bold uppercase tracking-[0.2em] text-white">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <button 
            className="md:hidden text-white flex items-center justify-center p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="material-symbols-outlined text-3xl">
              {isOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed top-20 left-0 w-full bg-background-dark z-[90] border-t border-white/10 md:hidden"
          >
            <div className="flex flex-col items-center gap-8 py-10 text-[14px] font-bold uppercase tracking-[0.2em] text-white">
              {navLinks.map((link, i) => (
                <motion.a
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="relative group px-4 py-2"
                >
                  {link.name}
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
                </motion.a>
              ))}
              
              <div className="mt-4 w-full px-8">
                <button 
                  className="w-full flex items-center justify-center gap-3 bg-primary text-white py-4 rounded-xl font-bold text-xs tracking-[0.2em] uppercase neon-glow"
                  onClick={() => window.open('https://wa.me/919535370484', '_blank')}
                >
                  <span className="material-symbols-outlined text-sm">chat</span>
                  WhatsApp Us
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
