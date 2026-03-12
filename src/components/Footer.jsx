import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-background-dark border-t border-primary/20 pt-20 pb-10 px-6 md:px-20" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary p-1 rounded-lg text-white">
                <span className="material-symbols-outlined text-xl">layers</span>
              </div>
              <h2 className="text-white text-xl font-black tracking-tight uppercase">A1 Decorators</h2>
            </div>
            <p className="text-slate-400 leading-relaxed mb-6">Udupi's most trusted event decoration partner. Making memories vibrant since 2012.</p>
            <div className="flex gap-4">
              <a className="size-10 rounded-full border border-primary/20 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary transition-all" href="#">
                <span className="material-symbols-outlined text-sm">public</span>
              </a>
              <a className="size-10 rounded-full border border-primary/20 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary transition-all" href="#">
                <span className="material-symbols-outlined text-sm">share</span>
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a className="hover:text-primary transition-colors" href="#">Home</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Our Portfolio</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Pricing Plans</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Testimonials</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a className="hover:text-primary transition-colors" href="#">Weddings & Engagements</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Corporate Events</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Themed Birthdays</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Outdoor Beach Decor</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-lg">location_on</span>
                <span>Main Road, Near Krishna Temple, <br/>Udupi, Karnataka 576101</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-lg">call</span>
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-lg">mail</span>
                <span>hello@a1decorators.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-xs uppercase tracking-widest">
          <p>© 2024 A1 Decorators & Events. All rights reserved.</p>
          <div className="flex gap-8">
            <a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
            <a className="hover:text-white transition-colors" href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
