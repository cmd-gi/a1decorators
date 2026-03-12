import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Standards from './components/Standards';
import Portfolio from './components/Portfolio';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Standards />
        <Portfolio />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
