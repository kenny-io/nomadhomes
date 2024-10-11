import React from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'UX Designer',
    quote:
      'NomadHomes made my transition to Dubai seamless. The apartment was stunning and the service impeccable.',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Software Engineer',
    quote:
      'As a digital nomad, finding a place that feels like home is crucial. NomadHomes exceeded my expectations.',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
  },
  {
    id: 3,
    name: 'Emma Rodriguez',
    role: 'Marketing Consultant',
    quote:
      'The flexibility and prime location of my NomadHome allowed me to fully immerse myself in Dubais vibrant culture.',
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-primary text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          What Our Nomads Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-primary-light p-6 rounded-lg"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full mx-auto mb-4"
              />
              <p className="text-lg italic mb-4">"{testimonial.quote}"</p>
              <p className="font-semibold">{testimonial.name}</p>
              <p className="text-sm">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
