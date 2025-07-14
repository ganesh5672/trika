import React from 'react';
import Hero from '../components/Hero';
import FeaturedCollections from '../components/FeaturedCollections';
import SmartFeatures from '../components/SmartFeatures';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';

const Home = () => {
  return (
    <div>
      <Hero />
      <FeaturedCollections />
      <SmartFeatures />
      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default Home;