import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '$1,500',
    features: ['Studio apartment', 'Flexible 1-3 month lease', 'Basic furnishings', 'High-speed internet'],
  },
  {
    name: 'Pro',
    price: '$2,500',
    features: ['1 bedroom apartment', 'Flexible 1-6 month lease', 'Premium furnishings', 'High-speed internet', 'Weekly cleaning'],
  },
  {
    name: 'Executive',
    price: '$4,000',
    features: ['2 bedroom apartment', 'Flexible 1-12 month lease', 'Luxury furnishings', 'High-speed internet', 'Daily cleaning', 'Concierge service'],
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="section-padding">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Transparent Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="font-heading font-semibold text-2xl mb-4">{plan.name}</h3>
              <p className="text-4xl font-bold text-primary mb-6">{plan.price}<span className="text-base font-normal text-gray-600">/month</span></p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="text-green-500 mr-2" size={20} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="btn-primary w-full">Choose Plan</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;