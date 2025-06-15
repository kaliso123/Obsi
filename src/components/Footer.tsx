import React from 'react';
import { Link } from 'react-router-dom';
import { Stethoscope, Facebook, Twitter, Instagram, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Stethoscope className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold">SmileCare</h1>
                <p className="text-sm text-gray-400">Dental Clinic</p>
              </div>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              Providing exceptional dental care with a gentle touch. Your smile is our priority, 
              and we're committed to helping you achieve optimal oral health in a comfortable environment.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <MapPin size={16} className="mr-3 text-blue-400" />
                <span className="text-gray-400">123 Dental Street, City, ST 12345</span>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-3 text-blue-400" />
                <span className="text-gray-400">(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-3 text-blue-400" />
                <span className="text-gray-400">info@smilecare.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 text-center">
          <p className="text-gray-400">
            © 2024 SmileCare Dental Clinic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;