import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Smartphone, Battery, Shield, Zap, Activity, Brain, Wifi, Camera, Music, Navigation, Watch } from 'lucide-react';

const SmartFeatures = () => {
  const smartFeatures = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Advanced Health Monitoring',
      description: 'Comprehensive health tracking with medical-grade precision sensors',
      features: ['Heart Rate Variability', 'Blood Oxygen (SpO2)', 'ECG Recording', 'Sleep Analysis', 'Stress Monitoring', 'Body Temperature'],
      accuracy: '99.7% medical accuracy',
      image: 'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg'
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Tanishq AI Assistant',
      description: 'Intelligent personal assistant powered by advanced AI technology',
      features: ['Voice Commands', 'Smart Notifications', 'Predictive Insights', 'Personal Coaching', 'Health Recommendations', 'Lifestyle Tips'],
      accuracy: 'AI-powered intelligence',
      image: 'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg'
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Seamless Connectivity',
      description: 'Stay connected with advanced communication features',
      features: ['5G Ready', 'Bluetooth 5.3', 'Wi-Fi 6', 'NFC Payments', 'Call & Message', 'App Ecosystem'],
      accuracy: 'Universal compatibility',
      image: 'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg'
    },
    {
      icon: <Battery className="w-8 h-8" />,
      title: 'Extended Battery Life',
      description: 'Revolutionary battery technology for all-day performance',
      features: ['7-Day Normal Use', '14-Day Power Save', 'Fast Wireless Charging', 'Solar Charging', 'Battery Health', 'Smart Power Management'],
      accuracy: 'Up to 7 days',
      image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Premium Protection',
      description: 'Military-grade durability with luxury aesthetics',
      features: ['Sapphire Crystal', 'Titanium Build', '100m Water Resistant', 'Shock Resistant', 'Scratch Proof', 'Corrosion Resistant'],
      accuracy: 'Military standard',
      image: 'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg'
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: 'Fitness & Wellness',
      description: 'Comprehensive fitness tracking with personalized coaching',
      features: ['100+ Workout Modes', 'GPS Tracking', 'Recovery Analysis', 'Training Plans', 'Nutrition Tracking', 'Wellness Score'],
      accuracy: '100+ sports modes',
      image: 'https://images.pexels.com/photos/364822/pexels-photo-364822.jpeg'
    },
    {
      icon: <Watch className="w-8 h-8" />,
      title: 'Custom Watch Faces',
      description: 'Thousands of premium watch faces to match your style and mood',
      features: ['Premium Designs', 'Custom Complications', 'Always-On Display', 'Interactive Elements', 'Personal Photos', 'Brand Collections'],
      accuracy: '1000+ faces',
      image: 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg'
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Tap and Pay',
      description: 'Secure contactless payments with advanced NFC technology',
      features: ['NFC Payments', 'Bank Integration', 'Secure Transactions', 'Quick Setup', 'Multiple Cards', 'Transaction History'],
      accuracy: 'Bank-grade security',
      image: 'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Games & Entertainment',
      description: 'Built-in games and entertainment apps for leisure moments',
      features: ['Puzzle Games', 'Brain Training', 'Music Control', 'Voice Recorder', 'Calculator', 'Timer & Stopwatch'],
      accuracy: 'Entertainment hub',
      image: 'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg'
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      title: 'Hassle-Free Connectivity',
      description: 'Seamless connection to all your devices and services',
      features: ['Auto-Sync', 'Cloud Backup', 'Multi-Device Support', 'Instant Pairing', 'Background Sync', 'Offline Mode'],
      accuracy: 'Always connected',
      image: 'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg'
    }
  ];

  const additionalFeatures = [
    {
      icon: <Watch className="w-6 h-6" />,
      title: 'Watch Faces',
      description: 'Thousands of premium watch faces to match your style'
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: 'Tap and Pay',
      description: 'Secure contactless payments with NFC technology'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Games',
      description: 'Built-in games and entertainment for leisure moments'
    },
    {
      icon: <Wifi className="w-6 h-6" />,
      title: 'Hassle-Free Connectivity',
      description: 'Seamless connection to all your devices and services'
    },
    {
      icon: <Camera className="w-6 h-6" />,
      title: 'Camera Control',
      description: 'Remote camera control for perfect shots'
    },
    {
      icon: <Music className="w-6 h-6" />,
      title: 'Music Control',
      description: 'Control your music without touching your phone'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-charcoal-900 via-charcoal-800 to-charcoal-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-2 h-2 bg-gold-400 rounded-full animate-float opacity-60"></div>
          <div className="absolute top-40 right-20 w-3 h-3 bg-white rounded-full animate-float opacity-40" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-32 left-20 w-1 h-1 bg-gold-300 rounded-full animate-float opacity-50" style={{ animationDelay: '4s' }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <p className="text-gold-400 font-medium text-lg mb-2 tracking-wide opacity-90">
              Smart Technology
            </p>
            <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Intelligence Meets
              <span className="block text-gradient-gold">Luxury</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              Experience the perfect fusion of traditional craftsmanship with cutting-edge smart technology
            </p>
            <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto opacity-80">
              Where heritage meets innovation in every feature
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Main Smart Features */}
        <div className="space-y-20">
          {smartFeatures.map((feature, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="bg-white rounded-3xl p-8 luxury-shadow hover:luxury-shadow-gold transition-all duration-500 group">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="p-4 bg-gold-100 text-gold-600 rounded-2xl group-hover:bg-gold-500 group-hover:text-white transition-all duration-300">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-charcoal-900 mb-1">
                        {feature.title}
                      </h3>
                      <span className="text-gold-600 font-medium text-sm">
                        {feature.accuracy}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-charcoal-600 leading-relaxed mb-6 text-lg">
                    {feature.description}
                  </p>

                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {feature.features.map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-gold-500 rounded-full"></div>
                        <span className="text-charcoal-600 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/collections"
                    className="inline-flex items-center space-x-2 bg-gold-500 hover:bg-gold-600 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105"
                  >
                    <span>Explore Products</span>
                    <Zap className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="relative group">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-96 object-cover rounded-3xl luxury-shadow group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Features Grid */}
        <div className="mt-20">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-charcoal-900 mb-6">
              More Smart Features
            </h2>
            <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
              Discover additional intelligent features that enhance your daily life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 luxury-shadow hover:luxury-shadow-gold transition-all duration-300 group hover:-translate-y-2"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-gold-100 text-gold-600 rounded-xl group-hover:bg-gold-500 group-hover:text-white transition-all duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-charcoal-900 text-lg">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-charcoal-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-gold rounded-3xl p-8 md:p-12 text-center text-white luxury-shadow-gold">
          <div className="max-w-3xl mx-auto">
            <h3 className="font-serif text-4xl font-bold mb-4">
              Experience the Future of Luxury
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Try our virtual fitting room and see how Tanishq smartwatches look on your wrist
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-gold-600 px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-all duration-300 hover:scale-105 luxury-shadow">
                Virtual Try-On
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-medium hover:bg-white hover:text-gold-600 transition-all duration-300 hover:scale-105">
                Download App
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartFeatures;