import React, { useState } from 'react';
import { X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const beforeAfterImages = [
    {
      before: 'https://images.pexels.com/photos/6812565/pexels-photo-6812565.jpeg?auto=compress&cs=tinysrgb&w=800',
      after: 'https://images.pexels.com/photos/6812580/pexels-photo-6812580.jpeg?auto=compress&cs=tinysrgb&w=800',
      treatment: 'Teeth Whitening'
    },
    {
      before: 'https://images.pexels.com/photos/6812572/pexels-photo-6812572.jpeg?auto=compress&cs=tinysrgb&w=800',
      after: 'https://images.pexels.com/photos/6812574/pexels-photo-6812574.jpeg?auto=compress&cs=tinysrgb&w=800',
      treatment: 'Dental Veneers'
    },
    {
      before: 'https://images.pexels.com/photos/6812576/pexels-photo-6812576.jpeg?auto=compress&cs=tinysrgb&w=800',
      after: 'https://images.pexels.com/photos/6812578/pexels-photo-6812578.jpeg?auto=compress&cs=tinysrgb&w=800',
      treatment: 'Orthodontics'
    }
  ];

  const clinicImages = [
    {
      url: 'https://images.pexels.com/photos/6812521/pexels-photo-6812521.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Reception Area',
      description: 'Welcoming and comfortable waiting area'
    },
    {
      url: 'https://images.pexels.com/photos/6812472/pexels-photo-6812472.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Treatment Room',
      description: 'State-of-the-art equipment in every room'
    },
    {
      url: 'https://images.pexels.com/photos/6812561/pexels-photo-6812561.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Modern Technology',
      description: 'Latest dental technology for precise treatment'
    },
    {
      url: 'https://images.pexels.com/photos/6812584/pexels-photo-6812584.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Consultation Room',
      description: 'Private consultation and treatment planning'
    },
    {
      url: 'https://images.pexels.com/photos/6812587/pexels-photo-6812587.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Sterilization Area',
      description: 'Strict sterilization protocols for safety'
    },
    {
      url: 'https://images.pexels.com/photos/6812590/pexels-photo-6812590.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Recovery Area',
      description: 'Comfortable recovery space for patients'
    }
  ];

  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Gallery
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take a look at our modern facility and see the amazing transformations 
            we've helped our patients achieve.
          </p>
        </div>
      </section>

      {/* Before & After Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Before & After
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See the incredible transformations our patients have experienced 
              with our expert dental treatments.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {beforeAfterImages.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                    {item.treatment}
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium text-gray-600 mb-2">Before</p>
                      <img
                        src={item.before}
                        alt={`Before ${item.treatment}`}
                        className="w-full h-32 object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity duration-200"
                        onClick={() => setSelectedImage(item.before)}
                      />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-600 mb-2">After</p>
                      <img
                        src={item.after}
                        alt={`After ${item.treatment}`}
                        className="w-full h-32 object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity duration-200"
                        onClick={() => setSelectedImage(item.after)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinic Photos Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Our Modern Facility
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tour our state-of-the-art dental facility designed with your 
              comfort and care in mind.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clinicImages.map((image, index) => (
              <div
                key={index}
                className="group cursor-pointer"
                onClick={() => setSelectedImage(image.url)}
              >
                <div className="relative overflow-hidden rounded-xl shadow-lg">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-lg font-semibold mb-1">{image.title}</h3>
                    <p className="text-sm">{image.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for Image Viewer */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors duration-200 z-10"
            >
              <X size={24} />
            </button>
            <img
              src={selectedImage}
              alt="Gallery image"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;