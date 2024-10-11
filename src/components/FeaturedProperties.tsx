import React from 'react';
import { Link } from 'react-router-dom';
import { properties } from '../data/properties';

const FeaturedProperties = () => {
  return (
    <section id="properties" className="section-padding bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Featured Properties</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div key={property.id} className="bg-white rounded-lg overflow-hidden shadow-md">
              <img src={property.images[0]} alt={property.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="font-heading font-semibold text-xl mb-2">{property.name}</h3>
                <p className="text-gray-600 mb-2">{property.location}</p>
                <p className="text-primary font-bold mb-4">{property.price}</p>
                <p className="text-gray-700 mb-4 line-clamp-3">{property.description}</p>
                <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
                  <span>{property.bedrooms} Bedrooms</span>
                  <span>{property.bathrooms} Bathrooms</span>
                  <span>{property.furnished ? 'Furnished' : 'Unfurnished'}</span>
                </div>
                <Link to={`/apartment/${property.id}`} className="btn-primary block text-center">View Details</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;