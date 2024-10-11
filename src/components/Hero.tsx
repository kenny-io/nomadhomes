import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Dubai Skyline"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="container mx-auto px-4 z-10 text-white">
        <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">
          Your Home Away From Home in Dubai
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl">
          Experience luxurious living with flexible, all-inclusive rentals for digital nomads and professionals.
        </p>
        <a href="#contact" className="btn-primary text-lg px-8 py-3">
          Book Your NomadHome
        </a>
      </div>
    </section>
  );
};

export default Hero;