import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Menu, X, Search, ShoppingBag, User, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { itemCount } = useCart();
  const headerRef = useRef<HTMLElement>(null);

  const navigation = [
    { name: 'Collections', href: '/collections' },
    { name: 'Luxury', href: '/collections/luxury' },
    { name: 'Smart', href: '/collections/normal' },
    { name: 'Smart Features', href: '/smart-features' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
      );
    }, headerRef);

    return () => ctx.revert();
  }, []);
  return (
    <header ref={headerRef} className="bg-white/80 backdrop-blur-md shadow-sm border-b border-accent sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img 
              src="/image.png" 
              alt="Trika Logo" 
              className="h-12 w-auto group-hover:scale-105 transition-transform duration-300"
            />
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold text-charcoal-900 group-hover:text-brown-600 transition-colors duration-300">Trika</span>
              <span className="text-brown-600 text-xs font-medium -mt-1 opacity-80">Luxury Smartwatches</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-all duration-200 hover:text-gold-600 relative group ${
                  location.pathname === item.href 
                    ? 'text-brown-800' 
                    : 'text-charcoal-700'
                }`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-brown-800 transition-all duration-300 group-hover:w-full ${
                  location.pathname === item.href ? 'w-full' : ''
                }`}></span>
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="p-2 text-charcoal-600 hover:text-brown-600 transition-all duration-200 hover:scale-110">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 text-charcoal-600 hover:text-brown-600 transition-all duration-200 hover:scale-110">
              <Heart className="w-5 h-5" />
            </button>
            <button className="p-2 text-charcoal-600 hover:text-brown-600 transition-all duration-200 hover:scale-110">
              <User className="w-5 h-5" />
            </button>
            <Link to="/cart" className="p-2 text-charcoal-600 hover:text-brown-600 transition-all duration-200 hover:scale-110 relative">
              <ShoppingBag className="w-5 h-5" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-brown-800 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                  {itemCount}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-charcoal-600 hover:text-brown-600 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-accent animate-fade-in">
          <div className="px-4 py-6 space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block text-base font-medium text-charcoal-700 hover:text-brown-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex items-center space-x-4 pt-4 border-t border-accent">
              <button className="p-2 text-charcoal-600 hover:text-brown-600 transition-colors">
                <Search className="w-5 h-5" />
              </button>
              <button className="p-2 text-charcoal-600 hover:text-brown-600 transition-colors">
                <Heart className="w-5 h-5" />
              </button>
              <button className="p-2 text-charcoal-600 hover:text-brown-600 transition-colors">
                <User className="w-5 h-5" />
              </button>
              <Link to="/cart" className="p-2 text-charcoal-600 hover:text-brown-600 transition-colors relative">
                <ShoppingBag className="w-5 h-5" />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-brown-800 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;