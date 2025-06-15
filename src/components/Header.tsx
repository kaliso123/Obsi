import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Stethoscope, Phone, Mail, Clock } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/testimonials', label: 'Reviews' },
    { path: '/faq', label: 'FAQ' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top info bar */}
      <div className="bg-blue-600 text-white py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <Phone size={14} className="mr-2" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail size={14} className="mr-2" />
                <span>info@smilecare.com</span>
              </div>
              <div className="flex items-center">
                <Clock size={14} className="mr-2" />
                <span>Mon-Fri: 8AM-6PM</span>
              </div>
            </div>
            <div className="text-sm">
              <span>Emergency Care Available 24/7</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Stethoscope className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">SmileCare</h1>
              <p className="text-xs text-gray-600 hidden sm:block">Dental Clinic</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium transition-colors duration-200 text-sm xl:text-base relative ${
                  isActive(item.path)
                    ? 'text-blue-600'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {item.label}
                {isActive(item.path) && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600 rounded-full"></div>
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href="tel:+15551234567"
              className="text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200 text-sm lg:text-base"
            >
              Call Now
            </a>
            <Link
              to="/contact"
              className="bg-blue-600 text-white px-4 lg:px-6 py-2 lg:py-2.5 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 text-sm lg:text-base"
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
          {/* Mobile contact info */}
          <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
            <div className="flex flex-col space-y-2 text-sm text-gray-600">
              <div className="flex items-center">
                <Phone size={14} className="mr-2 text-blue-600" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Clock size={14} className="mr-2 text-blue-600" />
                <span>Mon-Fri: 8AM-6PM | Emergency 24/7</span>
              </div>
            </div>
          </div>

          {/* Mobile navigation links */}
          <nav className="px-4 py-4">
            <div className="space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-3 py-3 rounded-lg font-medium transition-colors duration-200 ${
                    isActive(item.path)
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Mobile CTA buttons */}
            <div className="mt-6 space-y-3">
              <a
                href="tel:+15551234567"
                className="block w-full text-center border-2 border-blue-600 text-blue-600 px-4 py-3 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Call Now: (555) 123-4567
              </a>
              <Link
                to="/contact"
                className="block w-full text-center bg-blue-600 text-white px-4 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Appointment
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;