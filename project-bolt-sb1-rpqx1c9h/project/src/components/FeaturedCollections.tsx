import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Crown, Gem, Zap, Clock } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const FeaturedCollections = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  const collections = [
    {
      id: 'trikax',
      name: 'TrikaX',
      subtitle: 'Best Seller Series',
      description: 'Our most popular collection combining luxury with advanced technology',
      image: 'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg',
      icon: <Crown className="w-6 h-6" />,
      price: 'From ₹95,000',
      features: ['Best Seller', 'AI Assistant', '7-Day Battery']
    },
    {
      id: 'aeris',
      name: 'Aeris',
      subtitle: 'Sky Collection',
      description: 'Inspired by the limitless sky, featuring aerospace-grade materials',
      image: 'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      icon: <Zap className="w-6 h-6" />,
      price: 'From ₹1,85,000',
      features: ['Titanium Build', 'Aerospace Grade', 'Smart Features']
    },
    {
      id: 'vega',
      name: 'Vega',
      subtitle: 'Stellar Performance',
      description: 'High-performance smartwatch for the ambitious and driven',
      image: 'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      icon: <Gem className="w-6 h-6" />,
      price: 'From ₹1,25,000',
      features: ['Performance Focus', 'Premium Materials', 'Advanced Sensors']
    },
    {
      id: 'nova',
      name: 'Nova',
      subtitle: 'Brilliant Innovation',
      description: 'Breakthrough technology in an elegant, minimalist design',
      image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg',
      icon: <Clock className="w-6 h-6" />,
      price: 'From ₹75,000',
      features: ['Minimalist Design', 'Breakthrough Tech', 'Elegant Style']
    },
    {
      id: 'ravya',
      name: 'Ravya',
      subtitle: 'Elegant Luxury',
      description: 'Sophisticated design meets premium craftsmanship for the discerning individual',
      image: 'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      icon: <Gem className="w-6 h-6" />,
      price: 'From ₹1,50,000',
      features: ['Luxury Design', 'Premium Materials', 'Elegant Style']
    },
    {
      id: 'ameya',
      name: 'Ameya',
      subtitle: 'Infinite Possibilities',
      description: 'Boundless innovation with limitless features for the modern lifestyle',
      image: 'https://images.pexels.com/photos/364822/pexels-photo-364822.jpeg',
      icon: <Zap className="w-6 h-6" />,
      price: 'From ₹1,10,000',
      features: ['Infinite Features', 'Modern Design', 'Smart Innovation']
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate section title
      gsap.fromTo('.section-title', 
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          }
        }
      );

      // Animate cards
      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(card,
            { opacity: 0, y: 100, scale: 0.8 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              delay: index * 0.1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: 'top 85%',
              }
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-title text-center mb-16">
          <p className="text-gold-600 font-medium text-lg mb-2">Our Collections</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-charcoal-900 mb-6">
            Crafted for Excellence
          </h2>
          <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
            Each collection tells a unique story, blending traditional craftsmanship with modern innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {collections.map((collection, index) => (
            <div
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              key={collection.id}
              className={`minimal-card group relative overflow-hidden cursor-pointer ${
                index === 0 ? 'md:col-span-2 md:h-96' : 'h-80'
              }`}
            >
              <div className="relative h-80 overflow-hidden rounded-t-2xl">
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4 flex items-center space-x-2 text-gold-400">
                  {collection.icon}
                  <span className="text-sm font-medium">{collection.subtitle}</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-charcoal-900 mb-2">
                  {collection.name}
                </h3>
                
                <p className="text-charcoal-600 mb-4 text-sm leading-relaxed">
                  {collection.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {collection.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 bg-accent rounded-full text-charcoal-700 text-xs"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-gold-600 font-semibold">
                    {collection.price}
                  </span>
                  
                  <Link
                    to={`/product/1`}
                    className="flex items-center space-x-2 bg-brown-700 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-brown-800 transition-colors"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/collections"
            className="inline-flex items-center space-x-2 bg-charcoal-900 text-white px-8 py-3 rounded-full font-medium hover:bg-charcoal-800 transition-all duration-300"
          >
            <span>View All Collections</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;