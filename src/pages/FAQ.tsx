import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Do you accept insurance?',
      answer: 'Yes, we accept most major dental insurance plans including Delta Dental, Blue Cross Blue Shield, Aetna, and Cigna. We also offer flexible payment plans and financing options for treatments not covered by insurance. Our staff will help verify your benefits and maximize your coverage.'
    },
    {
      question: 'Is teeth whitening safe?',
      answer: 'Absolutely! Professional teeth whitening performed by our dental team is completely safe when done properly. We use approved whitening agents and customize the treatment to your specific needs. Some patients may experience temporary sensitivity, but this typically subsides within 24-48 hours.'
    },
    {
      question: 'How often should I visit the dentist?',
      answer: 'We recommend visiting every 6 months for routine cleanings and check-ups. However, some patients with gum disease or other oral health issues may need more frequent visits. During your consultation, we\'ll create a personalized schedule based on your individual needs.'
    },
    {
      question: 'What should I expect during my first visit?',
      answer: 'Your first visit will include a comprehensive oral examination, digital X-rays if needed, and a thorough cleaning. We\'ll review your medical history, discuss any concerns you have, and create a personalized treatment plan. The entire appointment typically takes 60-90 minutes.'
    },
    {
      question: 'Do you offer emergency dental services?',
      answer: 'Yes, we provide 24/7 emergency dental care for urgent situations such as severe tooth pain, dental trauma, or broken teeth. Call our emergency line and we\'ll provide immediate guidance and schedule you for the earliest possible appointment.'
    },
    {
      question: 'How long do dental implants last?',
      answer: 'With proper care and maintenance, dental implants can last 20-30 years or even a lifetime. The success rate for dental implants is over 95%. Regular dental check-ups, good oral hygiene, and avoiding habits like smoking will help ensure the longevity of your implants.'
    },
    {
      question: 'What payment options do you offer?',
      answer: 'We accept cash, credit cards, and most insurance plans. We also offer CareCredit financing for treatment costs, which provides flexible payment plans with low or no interest options. Our financial coordinator will work with you to find the best payment solution for your budget.'
    },
    {
      question: 'How can I maintain good oral health at home?',
      answer: 'Brush your teeth twice daily with fluoride toothpaste, floss daily, and use an antimicrobial mouthwash. Avoid sugary and acidic foods, don\'t use tobacco products, and replace your toothbrush every 3-4 months. Regular dental check-ups are also essential for maintaining optimal oral health.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our dental services, 
            procedures, and policies. Can't find what you're looking for? Contact us directly.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <button
                  className="w-full px-6 py-6 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <ChevronUp className="h-6 w-6 text-blue-600" />
                    ) : (
                      <ChevronDown className="h-6 w-6 text-gray-400" />
                    )}
                  </div>
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <div className="border-t border-gray-100 pt-4">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Help Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Our friendly team is here to help! Contact us directly and we'll be 
            happy to answer any questions about our services or your treatment options.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200">
              Call Us Now
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-all duration-200">
              Send a Message
            </button>
          </div>
        </div>
      </section>

      {/* Quick Tips Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Quick Dental Tips
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Here are some simple tips to keep your smile healthy between visits.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🦷</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Brush Properly</h3>
              <p className="text-blue-100 text-sm">
                Brush for 2 minutes, twice daily with fluoride toothpaste
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🧵</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Floss Daily</h3>
              <p className="text-blue-100 text-sm">
                Remove plaque and food particles between teeth daily
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚭</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Avoid Tobacco</h3>
              <p className="text-blue-100 text-sm">
                Tobacco products increase risk of gum disease and oral cancer
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🍎</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Eat Healthy</h3>
              <p className="text-blue-100 text-sm">
                Limit sugary snacks and drinks, choose tooth-friendly foods
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;