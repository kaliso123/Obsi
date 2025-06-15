import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Heart, Clock, Award } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: Shield,
      title: 'Safe & Sterile',
      description: 'State-of-the-art sterilization protocols for your safety'
    },
    {
      icon: Heart,
      title: 'Gentle Care',
      description: 'Compassionate treatment with minimal discomfort'
    },
    {
      icon: Clock,
      title: '24/7 Emergency',
      description: 'Emergency dental care available around the clock'
    },
    {
      icon: Award,
      title: 'Expert Team',
      description: 'Highly qualified dentists with years of experience'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Your Smile,
                <span className="text-blue-600"> Our Priority</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Experience exceptional dental care in a comfortable, modern environment. 
                Our expert team is dedicated to helping you achieve and maintain optimal oral health.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition-all duration-200 flex items-center justify-center group"
                >
                  Book Appointment
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
                <Link
                  to="/services"
                  className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-all duration-200 flex items-center justify-center"
                >
                  View Services
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-blue-100 rounded-2xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/6812521/pexels-photo-6812521.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Modern dental office with patient and dentist"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Shield className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold text-gray-900">100% Safe</p>
                    <p className="text-sm text-gray-600">Sterilized Equipment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose SmileCare?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine advanced dental technology with compassionate care to provide 
              you with the best possible dental experience.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl hover:bg-blue-50 transition-all duration-200 group"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors duration-200">
                  <feature.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/6812472/pexels-photo-6812472.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Friendly dentist in modern clinic"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Welcome to SmileCare Dental Clinic
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                For over 15 years, we've been providing comprehensive dental care to families 
                in our community. Our state-of-the-art facility and experienced team ensure 
                that every visit is comfortable, efficient, and effective.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We believe that everyone deserves a healthy, beautiful smile, and we're 
                committed to making that vision a reality for each of our patients.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors duration-200"
              >
                Learn More About Us
                <ArrowRight size={20} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Start Your Journey to Better Oral Health?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Don't wait to take care of your smile. Schedule your appointment today 
            and experience the difference quality dental care can make.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-all duration-200 inline-flex items-center justify-center"
            >
              Schedule Appointment
            </Link>
            <Link
              to="/faq"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-all duration-200 inline-flex items-center justify-center"
            >
              View FAQ
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;