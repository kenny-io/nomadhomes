import React from 'react';
import Hero from '../components/Hero';
import Benefits from '../components/Benefits';
import HowItWorks from '../components/HowItWorks';
import FeaturedProperties from '../components/FeaturedProperties';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import About from '../components/About';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Benefits />
      <HowItWorks />
      <FeaturedProperties />
      <Testimonials />
      <Pricing />
      <About />
      <FAQ />
      <Contact />
    </>
  );
};

export default HomePage;