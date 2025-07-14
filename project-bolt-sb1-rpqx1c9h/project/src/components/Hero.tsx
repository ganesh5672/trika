import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ArrowRight, Play, ChevronDown } from 'lucide-react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const floatingElementsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Main timeline
      const tl = gsap.timeline();
      
      // Hero entrance animation
      tl.fromTo(titleRef.current,
        { opacity: 0, y: 80, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: "power3.out" }
      )
      .fromTo(subtitleRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        "-=0.6"
      )
      .fromTo(ctaRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
        "-=0.4"
      )
      .fromTo(imageRef.current,
        { opacity: 0, scale: 0.8, rotation: -5 },
        { opacity: 1, scale: 1, rotation: 0, duration: 1, ease: "power3.out" },
        "-=1"
      );

      // Floating elements animation
      floatingElementsRef.current.forEach((el, index) => {
        if (el) {
          gsap.to(el, {
            y: "random(-20, 20)",
            x: "random(-10, 10)",
            rotation: "random(-15, 15)",
            duration: "random(3, 6)",
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
            delay: index * 0.2
          });
        }
      });

      // Parallax effect for background elements
      gsap.to(".parallax-slow", {
        y: -50,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        }
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary">
      {/* Minimal Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #7a413e 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Interactive Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            ref={(el) => {
              if (el) floatingElementsRef.current[i] = el;
            }}
            className={`absolute w-2 h-2 bg-brown-400 rounded-full opacity-20 parallax-slow`}
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
              transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Content */}
          <div className="text-left">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-brown-100 text-brown-700 rounded-full text-sm font-medium mb-4">
                Luxury Smartwatches
              </span>
            </div>
            
            <h1 ref={titleRef} className="font-serif text-5xl md:text-7xl font-bold text-brown-900 mb-6 leading-tight">
              TRIKA
              <span className="block text-4xl md:text-5xl text-brown-600 font-normal mt-2">
                Shine Through Time
              </span>
            </h1>
            
            <p ref={subtitleRef} className="text-xl md:text-2xl text-brown-700 mb-8 max-w-lg leading-relaxed">
              Where heritage meets innovation in luxury smartwatches. Crafting excellence with cutting-edge technology.
            </p>
            
            <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/collections"
                className="group inline-flex items-center justify-center px-8 py-4 bg-brown-800 text-white rounded-full font-medium text-lg transition-all duration-300 hover:bg-brown-900 hover:scale-105 hover:shadow-lg"
              >
                <span>Explore Collection</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              
              <button className="group inline-flex items-center justify-center px-8 py-4 border-2 border-brown-300 text-brown-800 rounded-full font-medium text-lg transition-all duration-300 hover:border-brown-800 hover:bg-brown-50">
                <Play className="w-5 h-5 mr-2" />
                <span>Watch Story</span>
              </button>
            </div>

            {/* Minimal Stats */}
            <div className="flex items-center space-x-8 mt-12 pt-8 border-t border-brown-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-brown-900">4.9</div>
                <p className="text-brown-600 text-sm">Rating</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-brown-900">160+</div>
                <p className="text-brown-600 text-sm">Years</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-brown-900">1M+</div>
                <p className="text-brown-600 text-sm">Customers</p>
              </div>
            </div>
          </div>

          {/* Interactive Watch Display */}
          <div className="relative">
            <div 
              ref={imageRef}
              className="relative group cursor-pointer"
              style={{
                transform: `perspective(1000px) rotateY(${mousePosition.x * 0.05 - 2.5}deg) rotateX(${mousePosition.y * 0.05 - 2.5}deg)`
              }}
            >
              {/* Main Watch Image */}
              <div className="relative w-96 h-96 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-brown-100 to-brown-200 rounded-full opacity-20 blur-3xl transform scale-110"></div>
                <img
                  src="https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg"
                  alt="Trika Luxury Smartwatch"
                  className="relative z-10 w-full h-full object-cover rounded-full shadow-2xl transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Interactive Dots */}
                <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-brown-600 rounded-full animate-pulse cursor-pointer hover:scale-125 transition-transform duration-300"></div>
                <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-brown-500 rounded-full animate-pulse cursor-pointer hover:scale-125 transition-transform duration-300" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 right-1/6 w-2 h-2 bg-brown-400 rounded-full animate-pulse cursor-pointer hover:scale-125 transition-transform duration-300" style={{ animationDelay: '2s' }}></div>
              </div>

              {/* Feature Highlights */}
              <div className="absolute -top-4 -right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <p className="text-brown-800 font-medium text-sm">7-Day Battery</p>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <p className="text-brown-800 font-medium text-sm">AI Assistant</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center space-y-2 text-brown-600">
          <span className="text-sm font-medium">Scroll to explore</span>
          <ChevronDown className="w-5 h-5" />
        </div>
      </div>
    </section>
  );
};

export default Hero;