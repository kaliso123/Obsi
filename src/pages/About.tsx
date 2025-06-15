import React from 'react';
import { Award, Users, Calendar, Heart } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, number: '5000+', label: 'Happy Patients' },
    { icon: Calendar, number: '15+', label: 'Years Experience' },
    { icon: Award, number: '50+', label: 'Awards Won' },
    { icon: Heart, number: '98%', label: 'Satisfaction Rate' }
  ];

  const values = [
    {
      title: 'Excellence',
      description: 'We strive for excellence in every aspect of dental care, from diagnosis to treatment.'
    },
    {
      title: 'Compassion',
      description: 'We understand dental anxiety and provide gentle, compassionate care to all patients.'
    },
    {
      title: 'Innovation',
      description: 'We stay current with the latest dental technologies and treatment methods.'
    },
    {
      title: 'Integrity',
      description: 'We believe in honest communication and transparent treatment planning.'
    }
  ];

  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              About SmileCare
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dedicated to providing exceptional dental care with a personal touch. 
              Your oral health and comfort are our top priorities.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                SmileCare Dental Clinic was founded in 2009 with a simple mission: to provide 
                exceptional dental care in a comfortable, welcoming environment. What started 
                as a small practice has grown into a full-service dental clinic serving 
                thousands of patients in our community.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We believe that visiting the dentist shouldn't be stressful. That's why we've 
                designed our clinic to be a calming space where patients can feel at ease while 
                receiving the highest quality dental care.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our commitment to continuing education and the latest dental technologies ensures 
                that our patients receive the most effective and comfortable treatments available.
              </p>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/6812561/pexels-photo-6812561.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Modern dental clinic interior"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Meet Dr. Smith */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/5207262/pexels-photo-5207262.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Dr. Sarah Smith, DDS"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Meet Dr. Sarah Smith
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Dr. Sarah Smith is the founder and lead dentist at SmileCare Dental Clinic. 
                With over 15 years of experience in general and cosmetic dentistry, she is 
                passionate about helping patients achieve their healthiest, most beautiful smiles.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Education & Certifications</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-600">Doctor of Dental Surgery (DDS) - Harvard School of Dental Medicine</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-600">Certified in Cosmetic Dentistry</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-600">Member of American Dental Association</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-600">Invisalign Certified Provider</span>
                </li>
              </ul>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Dr. Smith is committed to staying current with the latest advances in dental 
                technology and treatment methods, regularly attending continuing education courses 
                and dental conferences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do and shape the experience 
              we provide to every patient who walks through our doors.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;