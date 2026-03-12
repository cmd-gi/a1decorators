import React from 'react';

const services = [
  {
    title: "Birthdays",
    description: "Custom themes from whimsical to grand.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDKeT891uKX4QnsqqWhxb-BTJAygfDhEBcNRzWcgYP4vNzayotJ6pJ-O1_lQ2Xy0L_WNqjIxENJRBEhw9NW42roQWdb-e54BGPQpI-fo_MWNq0RTN2GK1QignjSvBs4kOw59ixQrqDENfaz8LSpiMpn1RlqQfhkHpHS5-UC7p3Dd4G3u5WB9OztKviCWfhe7JEdoT3TdCuHlx_n-Gi6jxMYwapbPKzMczj5Vc-SUWtY4gf6jkte5g3xA4-9icOJYeCGNkgVNbvwMJc"
  },
  {
    title: "Baby Showers",
    description: "Celebrating new beginnings with grace.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuANs6CV0ruhZNXMWRHu6NH8t_FrOEIJJIoUtlgeJh6bs4a941e1ujOUxgG3CdMwrxS4_zFjTwE5hk8L23GfKlx8RPsXEft2vzqQVDNs-7ARYuTfmXuBX3uOBrBFi5jP2Nr_rguT82m2JoK9P7549SZ2y0QykFMlhZXqb_gDV_clFIWef7osEseUYJExM8SJu044QgqY2AiFJRgrSlPsGHxnUX7pXsndmm4sl8jwuSH4Z8wWJJPiP7i_i2JVmRuKGuv15lcrHN4RlIg"
  },
  {
    title: "Engagements",
    description: "Elegant setups for your first 'Yes'.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDnFm0lwGH-IBfJqjqzFpeM4My9m4LYeWJ4OTGodqXFs_HeWi38FpqZZYCTP0G0bnB1NRSwGzEn_W7TSuX1Z0ixkP_CBds58kFf11YUw1wzIb4gn4HhnJiD8dgIU8l5qnIQSv8X4wCnf6Ov1qezP2FsxG_pIG9YYXXE5-z4YJWWTpWnFWYDxVMpXugUHlqkiLSA4HY6ZXJC7Dkz6Jco5kGcTolb-BzgLXqqNPuKEPDzGV9JTmtc2Yy92wYEMKbxymab0wIjGomQfVQ"
  },
  {
    title: "Beach Events",
    description: "Udupi's finest coastline celebrations.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAHawHx5fJygf0egcjhL_i8qkkIvQov3KDqJbyfruVakBjUO7opOM_avTbofz7vvZtVx8-X3LnvL3Mc33pDOjFLYhuRfsX-nY2ilRpycUolgWaWjqRoe0Qfgc5pbjFXjktJ9LvADrcukB5vOUA6viiZh6dyuOTwNqd2qCFKoXxY2bJI9ieKCFNpHDgbO-G3nKOL1-zXkibC4__M7cUCFG28MrFFH8WQMnJNQbSvBR9tCxOElwW09NuGzWHYyuJ4ORdeY12u99vlbOA"
  }
];

const Services = () => {
  return (
    <section className="py-24 px-6 md:px-20 bg-background-light dark:bg-background-dark/50" id="services">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Our Expertise</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-white">Curating Specialized Events</h3>
          </div>
          <a className="text-primary font-bold flex items-center gap-2 hover:gap-4 transition-all group" href="#">
            View All Services <span className="material-symbols-outlined">arrow_right_alt</span>
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="group relative overflow-hidden rounded-3xl aspect-[4/5] bg-neutral-dark border border-primary/10">
              <img
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-500"
                alt={service.title}
                src={service.image}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <h4 className="text-xl font-bold text-white mb-2">{service.title}</h4>
                <p className="text-slate-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
