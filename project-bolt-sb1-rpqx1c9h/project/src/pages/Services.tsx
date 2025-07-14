import React from 'react';
import { Shield, Award, Truck, RotateCcw, Wrench, Gift } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: '10-Year Warranty',
      description: 'Comprehensive coverage for all Trika timepieces with worldwide service support',
      features: ['Manufacturing defects', 'Movement servicing', 'Case refinishing', 'Worldwide coverage']
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Custom Engraving',
      description: 'Personalize your timepiece with bespoke engravings by master craftsmen',
      features: ['Heritage patterns', 'Personal messages', 'Family crests', 'Free service']
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: 'White Glove Delivery',
      description: 'Premium delivery service with luxury packaging and personal consultation',
      features: ['Insured shipping', 'Luxury packaging', 'Personal fitting', 'Same-day delivery']
    },
    {
      icon: <RotateCcw className="w-8 h-8" />,
      title: 'Exchange Program',
      description: '60-day exchange program with upgrade options for Trika Privé members',
      features: ['60-day returns', 'Upgrade credits', 'Size exchanges', 'Trade-in value']
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: 'Concierge Service',
      description: 'Dedicated support for maintenance, repairs, and special requests',
      features: ['Annual servicing', 'Emergency repairs', 'Cleaning service', '24/7 support']
    },
    {
      icon: <Gift className="w-8 h-8" />,
      title: 'Trika Elite',
      description: 'Exclusive membership program with VIP benefits and early access',
      features: ['Early access', 'VIP events', 'Special pricing', 'Personal stylist']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-charcoal-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Luxury Service Excellence
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience unparalleled service that matches the elegance of your Trika timepiece
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-gold-100 text-gold-600 rounded-xl">
                  {service.icon}
                </div>
                <h3 className="font-serif text-xl font-semibold text-charcoal-900">
                  {service.title}
                </h3>
              </div>
              
              <p className="text-charcoal-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-gold-500 rounded-full"></div>
                    <span className="text-sm text-charcoal-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Service Process */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-charcoal-900 mb-4">
              Our Service Process
            </h2>
            <p className="text-xl text-charcoal-600">
              Every interaction is designed to exceed your expectations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Contact', description: 'Reach out via phone, email, or chat' },
              { step: '02', title: 'Assessment', description: 'Our experts evaluate your needs' },
              { step: '03', title: 'Service', description: 'Professional service by master craftsmen' },
              { step: '04', title: 'Delivery', description: 'White glove return with quality assurance' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gold-500 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-charcoal-900 mb-2">{item.title}</h3>
                <p className="text-charcoal-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-gold rounded-3xl p-8 md:p-12 text-center text-white">
          <h2 className="font-serif text-3xl font-bold mb-4">
            Need Assistance?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Our Trika concierge team is available 24/7 to assist you
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-gold-600 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
              Contact Support
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-gold-600 transition-colors">
              Schedule Service
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;