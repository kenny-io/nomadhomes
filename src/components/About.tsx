import React from 'react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About NomadHomes</h2>
          <p className="text-lg mb-8">
            NomadHomes was born out of a passion for creating a seamless living experience for digital nomads and mobile professionals in Dubai. We understand the unique needs of those who seek both the comforts of home and the excitement of a new city.
          </p>
          <p className="text-lg mb-8">
            Our mission is to provide flexible, high-quality accommodations that allow our residents to focus on their work and explore all that Dubai has to offer, without the hassles of traditional renting.
          </p>
          <p className="text-lg">
            With NomadHomes, you're not just finding a place to stay – you're joining a community of like-minded professionals and experiencing the best of Dubai living.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;