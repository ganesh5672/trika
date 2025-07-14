import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Arjun Kapoor',
      role: 'Tech Entrepreneur',
      location: 'Mumbai',
      rating: 5,
      comment: 'The Sutradhar collection perfectly captures the essence of Indian heritage while delivering cutting-edge smart features. Absolutely stunning craftsmanship.',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
      product: 'Sutradhar Gold Classic'
    },
    {
      name: 'Priya Sharma',
      role: 'Fashion Designer',
      location: 'Delhi',
      rating: 5,
      comment: 'My Ananta watch is not just a timepiece, it\'s a statement. The diamonds are exquisite and the smart features are incredibly intuitive.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
      product: 'Ananta Diamond Series'
    },
    {
      name: 'Rajesh Gupta',
      role: 'Investment Banker',
      location: 'Bangalore',
      rating: 5,
      comment: 'The TrikaX has revolutionized how I manage my health and schedule. The AI assistant is remarkably smart and the battery life is exceptional.',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
      product: 'TrikaX Smart Series'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-gold-600 font-medium text-lg mb-2">Customer Stories</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-charcoal-900 mb-6">
            What Our Customers Say
          </h2>
          <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
            Join thousands of satisfied customers who have made Tanishq part of their daily luxury
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-gold-500 fill-current" />
                ))}
              </div>

              <div className="relative mb-6">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-gold-200" />
                <p className="text-charcoal-700 leading-relaxed pl-6">
                  "{testimonial.comment}"
                </p>
              </div>

              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-charcoal-900">{testimonial.name}</h4>
                  <p className="text-sm text-charcoal-600">{testimonial.role}</p>
                  <p className="text-sm text-gold-600">{testimonial.location}</p>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-sm text-charcoal-500">Purchased: {testimonial.product}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 bg-white rounded-full px-8 py-4 shadow-lg">
            <div className="text-center">
              <div className="text-2xl font-bold text-charcoal-900">4.9</div>
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-gold-500 fill-current" />
                ))}
              </div>
              <p className="text-sm text-charcoal-600">Average Rating</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-charcoal-900">50K+</div>
              <p className="text-sm text-charcoal-600">Happy Customers</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-charcoal-900">98%</div>
              <p className="text-sm text-charcoal-600">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;