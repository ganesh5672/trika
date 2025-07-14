import React from 'react';
import { Heart, Smartphone, Battery, Shield, Zap, Activity, Watch, Gamepad2, Wifi } from 'lucide-react';

const SmartFeatures = () => {
  const features = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Advanced Health Tracking',
      description: 'Monitor heart rate, blood oxygen, stress levels, and sleep patterns with medical-grade precision',
      stats: '99.7% accuracy'
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Seamless Connectivity',
      description: 'Stay connected with calls, messages, and notifications. Compatible with iOS and Android',
      stats: '5G ready'
    },
    {
      icon: <Battery className="w-8 h-8" />,
      title: 'Extended Battery Life',
      description: 'Up to 7 days of normal use, 14 days in power-saving mode with fast wireless charging',
      stats: '7-day battery'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Premium Protection',
      description: 'Sapphire crystal display, titanium build, water resistant up to 100m depth',
      stats: 'Military grade'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'AI-Powered Assistant',
      description: 'Built-in Tanishq AI helps with daily tasks, health insights, and personalized recommendations',
      stats: 'Smart AI'
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: 'Fitness & Wellness',
      description: '100+ workout modes, GPS tracking, and personalized coaching for your fitness journey',
      stats: '100+ modes'
    },
    {
      icon: <Watch className="w-8 h-8" />,
      title: 'Watch Faces',
      description: 'Thousands of premium watch faces to match your style and mood with custom complications',
      stats: '1000+ faces'
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Tap and Pay',
      description: 'Secure contactless payments with advanced NFC technology and bank-grade security',
      stats: 'Bank-grade security'
    },
    {
      icon: <Gamepad2 className="w-8 h-8" />,
      title: 'Games',
      description: 'Built-in games and entertainment apps for leisure moments and brain training',
      stats: 'Entertainment hub'
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      title: 'Hassle-Free Connectivity',
      description: 'Seamless connection to all your devices and services with auto-sync and cloud backup',
      stats: 'Always connected'
    }
  ];

  return (
    <section className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-gold-600 font-medium text-lg mb-2">Smart Technology</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-charcoal-900 mb-6">
            Innovation at Your Wrist
          </h2>
          <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
            Experience the perfect fusion of luxury craftsmanship and cutting-edge technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="minimal-card group p-6 border border-transparent hover:border-gold-200"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-gold-100 text-gold-600 rounded-xl group-hover:bg-gold-500 group-hover:text-white transition-colors">
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-lg font-semibold text-charcoal-900 mb-1">
                    {feature.title}
                  </h3>
                  <span className="text-gold-600 font-medium text-sm">
                    {feature.stats}
                  </span>
                </div>
              </div>
              
              <p className="text-charcoal-600 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-gold rounded-2xl p-8 md:p-12 text-center text-white">
          <div className="max-w-3xl mx-auto">
            <h3 className="font-serif text-3xl font-bold mb-4">
              Experience the Future of Luxury
            </h3>
            <p className="text-lg mb-8 opacity-90">
              Try our virtual fitting room and see how Tanishq looks on your wrist
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-gold-600 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
                Virtual Try-On
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-gold-600 transition-colors">
                Download App
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartFeatures;