import React, { Suspense, lazy } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';

// Lazy load below-the-fold components
const TrustStats = lazy(() => import('./components/TrustStats'));
const About = lazy(() => import('./components/About'));
const Services = lazy(() => import('./components/Services'));
const Standards = lazy(() => import('./components/Standards'));
const Portfolio = lazy(() => import('./components/Portfolio'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

const LoadingFallback = () => (
  <div className="w-full h-32 flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative flex min-h-screen w-full flex-col bg-background-dark"
    >
      <Header />
      <main>
        <Hero />
        <Suspense fallback={<LoadingFallback />}>
          <TrustStats />
          <About />
          <Services />
          <Standards />
          <Portfolio />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={<div className="h-20" />}>
        <Footer />
      </Suspense>
    </motion.div>
  );
}

export default App;
