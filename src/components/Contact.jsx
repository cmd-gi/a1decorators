import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const revealVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-background-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 lg:gap-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Left Column: Info & Map */}
          <motion.div variants={revealVariants} className="flex flex-col h-full">
            <h2 className="text-white text-4xl md:text-6xl font-black mb-8 md:mb-10 leading-tight">
              Let's Design Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-purple">Moment</span>
            </h2>
            <p className="text-slate-400 mb-10 md:mb-12 font-light text-base md:text-lg">
              Every great celebration starts with a conversation. Let's make yours extraordinary.
            </p>

            <div className="space-y-8 md:space-y-10 mb-10 md:mb-12">
              <div className="flex items-center gap-5 md:gap-6 group">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-white/5 rounded-xl md:rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                  <span className="material-symbols-outlined text-xl md:text-2xl">phone</span>
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-widest mb-1 font-bold">Call Us Directly</div>
                  <div className="text-lg md:text-xl font-medium text-white">+91 95353 70484</div>
                </div>
              </div>
              <div className="flex items-center gap-5 md:gap-6 group">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-white/5 rounded-xl md:rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                  <span className="material-symbols-outlined text-xl md:text-2xl">map</span>
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-widest mb-1 font-bold">Our Studio</div>
                  <div className="text-lg md:text-xl font-medium text-white">Kuthpady, Udyavara, Udupi, KA</div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="w-full h-64 md:h-72 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl mt-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3882.5615112103005!2d74.71782027508243!3d13.315309087032533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbcbba11d6ca1e5%3A0x275bef3908947ce9!2sA1%20Decorators%20%26%20Events!5e0!3m2!1sen!2sin!4v1772703606143!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            variants={revealVariants}
            className="glass-card p-8 md:p-14 rounded-[2.5rem] md:rounded-[3.5rem] border border-white/5 shadow-2xl mt-8 lg:mt-0"
          >
            <form action="https://formsubmit.co/vionfernandes@gmail.com" method="POST" target="_blank" className="space-y-6 md:space-y-8">
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value="New Event Inquiry - A1 Decorators" />
              <input type="hidden" name="_template" value="table" />

              <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                <div className="space-y-2 md:space-y-3">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest px-1">Full Name</label>
                  <input type="text" name="name" id="name" required placeholder="Ex: Rahul Shetty" className="w-full bg-white/5 border border-white/10 rounded-xl md:rounded-2xl px-5 md:px-6 py-3 md:py-4 focus:outline-none focus:border-primary transition-all text-sm text-white placeholder:text-slate-600" />
                </div>
                <div className="space-y-2 md:space-y-3">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest px-1">Phone</label>
                  <input type="tel" name="phone" id="phone" required placeholder="+91 99999 00000" className="w-full bg-white/5 border border-white/10 rounded-xl md:rounded-2xl px-5 md:px-6 py-3 md:py-4 focus:outline-none focus:border-primary transition-all text-sm text-white placeholder:text-slate-600" />
                </div>
              </div>

              <div className="space-y-2 md:space-y-3">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest px-1">Event Type</label>
                <div className="relative">
                  <select name="event_type" id="event-type" className="w-full bg-white/5 border border-white/10 rounded-xl md:rounded-2xl px-5 md:px-6 py-3 md:py-4 focus:outline-none focus:border-primary transition-all text-sm text-slate-400 appearance-none cursor-pointer">
                    <option value="Birthday">Birthday</option>
                    <option value="Engagement">Engagement</option>
                    <option value="Baby Shower">Baby Shower</option>
                    <option value="Beach Event">Beach Event</option>
                    <option value="Proposal">Proposal Decor</option>
                    <option value="Mehendi">Mehendi / Sangeet</option>
                    <option value="Other">Other Celebration</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none">expand_more</span>
                </div>
              </div>

              <div className="space-y-2 md:space-y-3">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest px-1">Event Vision</label>
                <textarea name="event_vision" id="vision" rows="4" placeholder="Briefly describe your dream setup..." className="w-full bg-white/5 border border-white/10 rounded-xl md:rounded-2xl px-5 md:px-6 py-3 md:py-4 focus:outline-none focus:border-primary transition-all text-sm text-white placeholder:text-slate-600 focus:ring-1 focus:ring-primary/20"></textarea>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 md:py-5 bg-gradient-to-r from-primary to-accent-purple rounded-xl md:rounded-2xl font-bold text-xs md:text-sm uppercase tracking-widest text-white hover:shadow-[0_0_40px_rgba(244,37,157,0.4)] transition-all"
              >
                Submit Inquiry
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
