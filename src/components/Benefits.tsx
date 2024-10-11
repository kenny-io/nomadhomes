import React from 'react';
import { DollarSign, Calendar, MapPin, Wifi } from 'lucide-react';

const benefits = [
  {
    icon: DollarSign,
    title: 'All-Inclusive Pricing',
    description: 'No hidden fees, everything you need in one price',
  },
  {
    icon: Calendar,
    title: 'Flexible Leases',
    description: 'Stay for a month or a year, its up to you',
  },
  {
    icon: MapPin,
    title: 'Prime Locations',
    description: 'Live in the heart of Dubais most exciting neighborhoods',
  },
  {
    icon: Wifi,
    title: 'High-Speed Internet',
    description: 'Stay connected with lightning-fast Wi-Fi',
  },
];

const Benefits = () => {
  return (
    <section className="section-padding bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Why Choose NomadHomes?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <benefit.icon className="mx-auto text-primary mb-4" size={40} />
              <h3 className="font-heading font-semibold text-xl mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
