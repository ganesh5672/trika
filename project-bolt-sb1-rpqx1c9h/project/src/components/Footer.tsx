import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/image.png" 
                alt="Trika Logo" 
                className="h-16 w-auto"
              />
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold">Trika</span>
                <span className="text-brown-300 text-sm font-medium -mt-1">Luxury Smartwatches</span>
              </div>
            </div>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              Where heritage meets innovation in luxury smartwatches. Crafting excellence with cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-brown-300 transition-all duration-300 hover:scale-110">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-brown-300 transition-all duration-300 hover:scale-110">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-brown-300 transition-all duration-300 hover:scale-110">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-brown-300 transition-all duration-300 hover:scale-110">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Collections */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-6 text-brown-300">Collections</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/collections/trikax" className="text-gray-300 hover:text-white transition-colors duration-300">TrikaX Collection</Link></li>
              <li><Link to="/collections/aeris" className="text-gray-300 hover:text-white transition-colors duration-300">Aeris Collection</Link></li>
              <li><Link to="/collections/vega" className="text-gray-300 hover:text-white transition-colors duration-300">Vega Collection</Link></li>
              <li><Link to="/collections/nova" className="text-gray-300 hover:text-white transition-colors duration-300">Nova Collection</Link></li>
              <li><Link to="/collections/ravya" className="text-gray-300 hover:text-white transition-colors duration-300">Ravya Collection</Link></li>
              <li><Link to="/collections/ameya" className="text-gray-300 hover:text-white transition-colors duration-300">Ameya Collection</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-6 text-brown-300">Services</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors duration-300">Lifetime Warranty</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors duration-300">Custom Engraving</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors duration-300">Virtual Try-On</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors duration-300">White Glove Delivery</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors duration-300">Exchange Policy</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors duration-300">Care Guide</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-6 text-brown-300">Contact</h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-center space-x-3 group">
                <Phone className="w-4 h-4 text-brown-300 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-gray-300">1800-TRIKA-01</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <Mail className="w-4 h-4 text-brown-300 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-gray-300">care@trika.co.in</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <MapPin className="w-4 h-4 text-brown-300 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-gray-300">Mumbai, India</span>
              </div>
            </div>
            <div className="mt-6">
              <p className="text-xs text-gray-400 mb-3">Subscribe to updates</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-md text-sm focus:outline-none focus:border-brown-400 transition-colors duration-300"
                />
                <button className="px-4 py-2 bg-brown-600 text-white rounded-r-md hover:bg-brown-700 transition-colors duration-300 text-sm">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Trika. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Terms of Service</Link>
              <Link to="/returns" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Returns</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;