import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <Home className="text-primary mr-2" size={24} />
          <span className="font-heading font-bold text-xl text-primary">NomadHomes</span>
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link to="/#how-it-works" className="text-gray-600 hover:text-primary">How It Works</Link>
          <Link to="/#properties" className="text-gray-600 hover:text-primary">Properties</Link>
          <Link to="/#pricing" className="text-gray-600 hover:text-primary">Pricing</Link>
          <Link to="/#about" className="text-gray-600 hover:text-primary">About</Link>
          <Link to="/#contact" className="btn-primary">Book Now</Link>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4">
          <nav className="flex flex-col space-y-4 px-4">
            <Link to="/#how-it-works" className="text-gray-600 hover:text-primary">How It Works</Link>
            <Link to="/#properties" className="text-gray-600 hover:text-primary">Properties</Link>
            <Link to="/#pricing" className="text-gray-600 hover:text-primary">Pricing</Link>
            <Link to="/#about" className="text-gray-600 hover:text-primary">About</Link>
            <Link to="/#contact" className="btn-primary text-center">Book Now</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;