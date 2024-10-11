import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">NomadHomes</h3>
            <p className="mb-4">Your home away from home in Dubai.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-secondary"><Facebook size={20} /></a>
              <a href="#" className="hover:text-secondary"><Twitter size={20} /></a>
              <a href="#" className="hover:text-secondary"><Instagram size={20} /></a>
              <a href="#" className="hover:text-secondary"><Linkedin size={20} /></a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-secondary">Home</a></li>
              <li><a href="#properties" className="hover:text-secondary">Properties</a></li>
              <li><a href="#pricing" className="hover:text-secondary">Pricing</a></li>
              <li><a href="#about" className="hover:text-secondary">About Us</a></li>
              <li><a href="#contact" className="hover:text-secondary">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-secondary">Terms of Service</a></li>
              <li><a href="#" className="hover:text-secondary">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-secondary">Cookie Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="mb-4">Stay updated with our latest offers and news.</p>
            <form className="flex">
              <input type="email" placeholder="Your email" className="flex-grow px-3 py-2 rounded-l-md focus:outline-none" />
              <button type="submit" className="bg-secondary hover:bg-secondary-light px-4 py-2 rounded-r-md transition duration-300">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; 2023 NomadHomes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;