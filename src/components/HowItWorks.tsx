import React from 'react';
import { Search, Home, Key } from 'lucide-react';

const steps = [
  { icon: Search, title: 'Browse', description: 'Explore our curated selection of properties' },
  { icon: Home, title: 'Choose', description: 'Select the perfect home for your stay' },
  { icon: Key, title: 'Move In', description: 'Enjoy a seamless check-in process' },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-padding">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How It Works</h2>
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center max-w-xs">
              <div className="bg-primary rounded-full p-4 mb-4">
                <step.icon className="text-white" size={32} />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;