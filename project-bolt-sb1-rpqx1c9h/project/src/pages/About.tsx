import React from 'react';
import { Award, Users, Globe, Heart } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '50K+', label: 'Happy Customers' },
    { number: '25', label: 'Years Heritage' },
    { number: '4.9', label: 'Customer Rating' },
    { number: '100+', label: 'Global Stores' }
  ];

  const values = [
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Excellence',
      description: 'Uncompromising quality in every timepiece we create'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Heritage',
      description: 'Preserving traditional craftsmanship for future generations'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Innovation',
      description: 'Leading the fusion of luxury and smart technology'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Passion',
      description: 'Every piece crafted with love and dedication'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg"
            alt="Trika Heritage"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">
            Where Heritage Meets Innovation
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
            Trika represents the perfect fusion of 
            traditional Indian craftsmanship with cutting-edge smartwatch innovation.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gold-600 mb-2">
                  {stat.number}
                </div>
                <p className="text-charcoal-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-charcoal-600 leading-relaxed">
                <p>
                  Founded with a vision for luxury innovation, Trika was born from a 
                  vision to create timepieces that honor India's rich heritage while embracing 
                  the future of wearable technology.
                </p>
                <p>
                  Our master craftsmen, trained in centuries-old techniques, work alongside 
                  cutting-edge engineers to create watches that are not just timekeepers, but 
                  works of art that celebrate the marriage of tradition and innovation.
                </p>
                <p>
                  Each Trika timepiece tells a story - of ancient motifs reimagined for the modern world, 
                  of precious metals and gems sourced with care, and of smart technology seamlessly 
                  integrated without compromising the soul of luxury craftsmanship.
                </p>
              </div>
            </div>
            <div className="lg:pl-8">
              <img
                src="https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg"
                alt="Craftsman at work"
                className="w-full rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal-900 mb-6">
              Our Values
            </h2>
            <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
              The principles that guide every decision, every design, and every timepiece we create
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <div className="p-3 bg-gold-100 text-gold-600 rounded-xl w-fit mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="font-serif text-xl font-semibold text-charcoal-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-charcoal-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal-900 mb-6">
              Master Craftsmen
            </h2>
            <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
              Meet the artisans and innovators who bring Trika timepieces to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Rajesh Kumar',
                role: 'Master Goldsmith',
                experience: '25 years',
                image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg'
              },
              {
                name: 'Priya Patel',
                role: 'Diamond Setting Expert',
                experience: '18 years',
                image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg'
              },
              {
                name: 'Amit Singh',
                role: 'Smart Technology Lead',
                experience: '12 years',
                image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg'
              }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-serif text-xl font-semibold text-charcoal-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-gold-600 font-medium mb-2">{member.role}</p>
                  <p className="text-charcoal-600 text-sm">{member.experience} experience</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-gold text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
            Become Part of Our Legacy
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Discover timepieces that will be treasured for generations
          </p>
          <button className="bg-white text-gold-600 px-8 py-4 rounded-full font-medium text-lg hover:bg-gray-100 transition-colors">
            Explore Collections
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;