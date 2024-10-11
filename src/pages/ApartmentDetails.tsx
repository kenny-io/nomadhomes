import React from 'react';
import { useParams } from 'react-router-dom';
import { properties } from '../data/properties';
import { Check, X } from 'lucide-react';

const ApartmentDetails = () => {
  const { id } = useParams<{ id: string }>();
  const property = properties.find(p => p.id === parseInt(id || '0'));

  if (!property) {
    return <div className="container mx-auto px-4 py-8">Property not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{property.name}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="mb-6">
            <img src={property.images[0]} alt={property.name} className="w-full h-64 object-cover rounded-lg" />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {property.images.slice(1).map((image, index) => (
              <img key={index} src={image} alt={`${property.name} - ${index + 2}`} className="w-full h-24 object-cover rounded-lg" />
            ))}
          </div>
        </div>
        <div>
          <p className="text-2xl font-bold text-primary mb-4">{property.price}</p>
          <p className="text-gray-600 mb-4">{property.location}</p>
          <p className="mb-6">{property.description}</p>
          <h2 className="text-xl font-semibold mb-4">Additional Information</h2>
          <ul className="space-y-2">
            <li><span className="font-semibold">Bedrooms:</span> {property.bedrooms}</li>
            <li><span className="font-semibold">Bathrooms:</span> {property.bathrooms}</li>
            <li><span className="font-semibold">Parking:</span> {property.parking ? 'Available' : 'Not available'}</li>
            <li><span className="font-semibold">Furnished:</span> {property.furnished ? 'Yes' : 'No'}</li>
            <li><span className="font-semibold">Utilities:</span> {property.utilities}</li>
            <li className="flex items-center">
              <span className="font-semibold mr-2">Pets Allowed:</span>
              {property.petsAllowed ? <Check className="text-green-500" size={20} /> : <X className="text-red-500" size={20} />}
            </li>
            <li className="flex items-center">
              <span className="font-semibold mr-2">Smoking:</span>
              {property.smoking ? <Check className="text-green-500" size={20} /> : <X className="text-red-500" size={20} />}
            </li>
            <li><span className="font-semibold">Minimum Stay:</span> {property.minimumStay}</li>
          </ul>
          <button className="btn-primary mt-8 w-full">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default ApartmentDetails;