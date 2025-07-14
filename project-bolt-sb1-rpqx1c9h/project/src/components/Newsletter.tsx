import React, { useState } from 'react';
import { Mail, Gift, Crown, Zap } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    setIsSubscribed(true);
    setEmail('');
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  const benefits = [
    {
      icon: <Gift className="w-6 h-6" />,
      title: 'Exclusive Offers',
      description: 'First access to limited editions and special promotions'
    },
    {
      icon: <Crown className="w-6 h-6" />,
      title: 'VIP Updates',
      description: 'Early notifications about new collections and launches'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Style Insights',
      description: 'Personalized recommendations and styling tips'
    }
  ];

  return (
    <section className="py-20 bg-charcoal-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Mail className="w-6 h-6 text-gold-400" />
              <span className="text-brown-400 font-medium">Trika Privé</span>
            </div>
            
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Join the Elite Circle
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Become part of Trika Privé and unlock exclusive access to limited collections, 
              personalized styling services, and VIP experiences.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="p-2 bg-gold-500/20 rounded-lg text-gold-400">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{benefit.title}</h3>
                    <p className="text-sm text-gray-400">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter Form */}
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
            <h3 className="font-serif text-2xl font-bold mb-6 text-center">
              Subscribe to Trika Privé
            </h3>
            
            {isSubscribed ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-2 text-gold-400">Welcome to Tanishq Privé!</h4>
                <p className="text-gray-300">Thank you for joining our exclusive community.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-gold-400 text-white placeholder-gray-400"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="preferences" className="block text-sm font-medium mb-2">
                    Interests (Optional)
                  </label>
                  <select
                    id="preferences"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-gold-400 text-white"
                  >
                    <option value="">Select your interests</option>
                    <option value="men">Men's Collection</option>
                    <option value="women">Women's Collection</option>
                    <option value="smart">Smart Features</option>
                    <option value="luxury">Luxury Collections</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gold-500 hover:bg-gold-600 text-white py-3 rounded-lg font-medium transition-colors duration-300"
                >
                  Join Trika Privé
                </button>
              </form>
            )}

            <p className="text-xs text-gray-400 text-center mt-6">
              By subscribing, you agree to our Privacy Policy and Terms of Service. 
              Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;