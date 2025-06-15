import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      text: 'Dr. Smith and her team are absolutely amazing! I was terrified of dental procedures, but they made me feel so comfortable and at ease. My teeth whitening results exceeded my expectations.',
      treatment: 'Teeth Whitening'
    },
    {
      name: 'Michael Chen',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      text: 'I had dental implants done here and the entire process was seamless. The staff is professional, the facility is pristine, and the results are perfect. Highly recommend!',
      treatment: 'Dental Implants'
    },
    {
      name: 'Emily Rodriguez',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      text: 'Best dental experience ever! The team went above and beyond to ensure my comfort during my root canal. What I thought would be painful was actually quite comfortable.',
      treatment: 'Root Canal Therapy'
    },
    {
      name: 'David Thompson',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      text: 'My Invisalign treatment was fantastic. Dr. Smith explained everything clearly and the results are exactly what I hoped for. My confidence has skyrocketed!',
      treatment: 'Invisalign'
    },
    {
      name: 'Lisa Wang',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      text: 'Emergency dental care at its finest! When I had a dental emergency on a weekend, they were there for me. Professional, caring, and efficient service.',
      treatment: 'Emergency Care'
    },
    {
      name: 'Robert Martinez',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      text: 'The veneers I got here completely transformed my smile. The attention to detail and craftsmanship is outstanding. I smile with confidence now!',
      treatment: 'Porcelain Veneers'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Patient Testimonials
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Hear what our patients have to say 
            about their experience at SmileCare Dental Clinic.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-blue-50 p-8 rounded-xl">
              <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600">Patient Satisfaction Rate</div>
            </div>
            <div className="bg-green-50 p-8 rounded-xl">
              <div className="text-4xl font-bold text-green-600 mb-2">4.9</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div className="bg-purple-50 p-8 rounded-xl">
              <div className="text-4xl font-bold text-purple-600 mb-2">500+</div>
              <div className="text-gray-600">Five-Star Reviews</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-blue-600">{testimonial.treatment}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                
                <div className="relative">
                  <Quote className="absolute top-0 left-0 w-8 h-8 text-blue-200 -mt-2 -ml-2" />
                  <p className="text-gray-600 leading-relaxed italic pl-6">
                    {testimonial.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Join Our Happy Patients
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Experience the same exceptional care that has earned us hundreds 
            of five-star reviews. Schedule your appointment today!
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200">
            Book Your Appointment
          </button>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;