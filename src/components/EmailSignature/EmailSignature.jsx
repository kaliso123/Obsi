import React from 'react';
import { Mail, Phone, Globe, Linkedin, Twitter } from 'lucide-react';
import logo from '../../assets/ob.png';

const EmailSignature = ({ 
  name = "John Doe", 
  title = "Marketing Manager",
  email = "john.doe@obsidium.dev",
  phone1 = "(+383) 45 354 743",
  phone2 = "(+383) 45 439 223",
  website = "www.obsidium.dev",
  linkedinUrl = "https://linkedin.com/in/johndoe",
  twitterUrl = "https://twitter.com/johndoe"
}) => {
  return (
    <div className="bg-gradient-to-r from-gray-900 via-obsidium-900 to-gray-900 p-6 rounded-lg shadow-lg max-w-2xl">
      <div className="flex items-center space-x-6">
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-obsidium-500/30">
            <img 
              src={logo} 
              alt="Obsidium Logo" 
              className="w-12 h-14 object-contain"
              crossOrigin="anonymous"
            />
          </div>
        </div>

        {/* Vertical Divider */}
        <div className="h-20 w-px bg-gradient-to-b from-transparent via-obsidium-500 to-transparent"></div>

        {/* Contact Information */}
        <div className="flex-1 space-y-3">
          {/* Name and Title */}
          <div>
            <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
            <p className="text-obsidium-300 font-medium">{title}</p>
            <div className="flex items-center mt-1">
              <span className="text-obsidium-400 font-semibold text-lg">Obsidium</span>
              <span className="text-obsidium-500 ml-2 text-sm">• Web Development</span>
            </div>
          </div>

          {/* Contact Details */}
          <div className="space-y-2">
            <div className="flex items-center space-x-3">
              <Mail size={14} className="text-obsidium-400" />
              <a 
                href={`mailto:${email}`} 
                className="text-white hover:text-obsidium-300 transition-colors text-sm"
              >
                {email}
              </a>
            </div>
            
            <div className="flex items-center space-x-3">
              <Phone size={14} className="text-obsidium-400" />
              <div className="flex flex-col">
                <a 
                  href={`tel:${phone1.replace(/\s/g, '')}`} 
                  className="text-white hover:text-obsidium-300 transition-colors text-sm"
                >
                  {phone1}
                </a>
                <a 
                  href={`tel:${phone2.replace(/\s/g, '')}`} 
                  className="text-white hover:text-obsidium-300 transition-colors text-sm"
                >
                  {phone2}
                </a>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Globe size={14} className="text-obsidium-400" />
              <a 
                href={`https://${website}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-obsidium-300 transition-colors text-sm"
              >
                {website}
              </a>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center space-x-3 pt-2">
            <a 
              href={linkedinUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-obsidium-600/20 hover:bg-obsidium-600/40 p-2 rounded-full transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={16} className="text-obsidium-300" />
            </a>
            <a 
              href={twitterUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-obsidium-600/20 hover:bg-obsidium-600/40 p-2 rounded-full transition-all duration-300 hover:scale-110"
            >
              <Twitter size={16} className="text-obsidium-300" />
            </a>
          </div>
        </div>

        {/* Decorative Element */}
        <div className="flex-shrink-0">
          <div className="w-1 h-20 bg-gradient-to-b from-obsidium-500 via-obsidium-600 to-obsidium-500 rounded-full"></div>
        </div>
      </div>

      {/* Bottom Accent Line */}
      <div className="mt-4 h-px bg-gradient-to-r from-transparent via-obsidium-500 to-transparent"></div>
    </div>
  );
};

export default EmailSignature;