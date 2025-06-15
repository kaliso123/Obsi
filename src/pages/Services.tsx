import React from 'react';
import { Smile, Sparkles, Wrench, Zap, Clock, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Smile,
      title: 'General Dentistry',
      description: 'Comprehensive oral health care including cleanings, fillings, and preventive treatments.',
      features: ['Regular Cleanings', 'Cavity Fillings', 'Root Canal Therapy', 'Extractions'],
      price: 'Starting at $75'
    },
    {
      icon: Sparkles,
      title: 'Teeth Whitening',
      description: 'Professional whitening treatments to brighten your smile by several shades.',
      features: ['In-Office Whitening', 'Take-Home Kits', 'Safe & Effective', 'Long-lasting Results'],
      price: 'Starting at $299'
    },
    {
      icon: Wrench,
      title: 'Dental Implants',
      description: 'Permanent tooth replacement solution that looks and feels like natural teeth.',
      features: ['Titanium Implants', 'Crown Placement', 'Bone Grafting', 'Full Mouth Restoration'],
      price: 'Starting at $1,200'
    },
    {
      icon: Shield,
      title: 'Orthodontics',
      description: 'Straighten your teeth with traditional braces or clear aligners like Invisalign.',
      features: ['Traditional Braces', 'Invisalign', 'Retainers', 'Progress Monitoring'],
      price: 'Starting at $3,500'
    },
    {
      icon: Zap,
      title: 'Emergency Care',
      description: '24/7 emergency dental services for urgent dental problems and pain relief.',
      features: ['24/7 Availability', 'Pain Management', 'Urgent Repairs', 'Same-Day Treatment'],
      price: 'Call for pricing'
    },
    {
      icon: Smile,
      title: 'Cosmetic Dentistry',
      description: 'Enhance your smile with veneers, bonding, and other aesthetic treatments.',
      features: ['Porcelain Veneers', 'Dental Bonding', 'Smile Makeovers', 'Gum Contouring'],
      price: 'Starting at $500'
    }
  ];

  return (
    <div className="py-12 sm:py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Our Services
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Comprehensive dental care tailored to meet all your oral health needs. 
            From routine cleanings to complex procedures, we've got you covered.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group"
              >
                <div className="p-6 sm:p-8">
                  <div className="bg-blue-100 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-blue-200 transition-colors duration-200">
                    <service.icon className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-4 sm:mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-xs sm:text-sm text-gray-600">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="border-t border-gray-100 pt-4 sm:pt-6">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                      <span className="text-base sm:text-lg font-semibold text-blue-600">
                        {service.price}
                      </span>
                      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 text-sm w-full sm:w-auto">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              Our Treatment Process
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              We follow a comprehensive approach to ensure you receive the best possible care.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 text-lg sm:text-xl font-bold">
                1
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Consultation</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Initial examination and discussion of your dental health goals.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 text-lg sm:text-xl font-bold">
                2
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Diagnosis</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Comprehensive evaluation using advanced diagnostic tools.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 text-lg sm:text-xl font-bold">
                3
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Treatment Plan</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Customized treatment plan tailored to your specific needs.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 text-lg sm:text-xl font-bold">
                4
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Treatment</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Professional treatment with ongoing support and care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8 max-w-3xl mx-auto">
            Schedule your consultation today and take the first step towards 
            a healthier, more beautiful smile.
          </p>
          <button className="bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200 text-sm sm:text-base">
            Book Your Appointment
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;