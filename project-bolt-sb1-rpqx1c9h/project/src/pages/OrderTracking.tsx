import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Package, Truck, CheckCircle, Clock, MapPin, Phone, Mail } from 'lucide-react';

const OrderTracking = () => {
  const [orderNumber] = useState('TRK' + Math.random().toString(36).substr(2, 9).toUpperCase());
  const [currentStatus, setCurrentStatus] = useState(1);

  const orderDetails = {
    item: 'Sutradhar Royal Gold',
    collection: 'Heritage Collection',
    price: '₹2,50,000',
    size: '42mm',
    color: 'Gold',
    image: 'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg',
    orderDate: '15 Jan 2025',
    estimatedDelivery: '22 Jan 2025'
  };

  const trackingSteps = [
    {
      id: 1,
      title: 'Order Confirmed',
      description: 'Your order has been received and confirmed',
      date: '15 Jan 2025, 2:30 PM',
      status: 'completed'
    },
    {
      id: 2,
      title: 'Crafting in Progress',
      description: 'Master craftsmen are preparing your timepiece',
      date: '16 Jan 2025, 10:00 AM',
      status: 'current'
    },
    {
      id: 3,
      title: 'Quality Check',
      description: 'Final inspection and quality assurance',
      date: 'Expected: 19 Jan 2025',
      status: 'upcoming'
    },
    {
      id: 4,
      title: 'Luxury Packaging',
      description: 'Carefully packaged in premium Tanishq box',
      date: 'Expected: 20 Jan 2025',
      status: 'upcoming'
    },
    {
      id: 5,
      title: 'Out for Delivery',
      description: 'White glove delivery team assigned',
      date: 'Expected: 21 Jan 2025',
      status: 'upcoming'
    },
    {
      id: 6,
      title: 'Delivered',
      description: 'Personal fitting and consultation completed',
      date: 'Expected: 22 Jan 2025',
      status: 'upcoming'
    }
  ];

  const deliveryTeam = {
    name: 'Rajesh Kumar',
    phone: '+91 98765 43210',
    experience: '8 years',
    rating: 4.9
  };

  useEffect(() => {
    // Simulate progress updates
    const timer = setInterval(() => {
      setCurrentStatus(prev => Math.min(prev + 0.1, 2));
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const getStatusIcon = (status: string, stepId: number) => {
    if (status === 'completed') {
      return <CheckCircle className="w-6 h-6 text-green-500" />;
    } else if (status === 'current') {
      return <Clock className="w-6 h-6 text-gold-500 animate-pulse" />;
    } else {
      return <div className="w-6 h-6 border-2 border-gray-300 rounded-full"></div>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link to="/order-confirmation" className="flex items-center space-x-2 text-charcoal-600 hover:text-gold-500 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Order</span>
          </Link>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-gold rounded-full flex items-center justify-center">
              <span className="text-white font-serif font-bold text-lg">T</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl font-bold text-charcoal-900">Trika</span>
              <span className="text-gold-600 text-xs font-medium -mt-1">Order Tracking</span>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="font-serif text-2xl font-bold text-charcoal-900">
                Order #{orderNumber}
              </h1>
              <p className="text-charcoal-600">Placed on {orderDetails.orderDate}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-charcoal-600">Estimated Delivery</p>
              <p className="font-semibold text-charcoal-900">{orderDetails.estimatedDelivery}</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
            <img
              src={orderDetails.image}
              alt={orderDetails.item}
              className="w-16 h-16 object-cover rounded-lg"
            />
            <div className="flex-1">
              <p className="text-gold-600 text-sm font-medium">{orderDetails.collection}</p>
              <h3 className="font-semibold text-charcoal-900">{orderDetails.item}</h3>
              <div className="flex space-x-4 text-sm text-charcoal-600">
                <span>{orderDetails.size}</span>
                <span>{orderDetails.color}</span>
                <span>{orderDetails.price}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tracking Progress */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <h2 className="font-serif text-xl font-bold text-charcoal-900 mb-6">
            Tracking Progress
          </h2>

          <div className="relative">
            {/* Progress Line */}
            <div className="absolute left-3 top-8 bottom-8 w-0.5 bg-gray-200"></div>
            <div 
              className="absolute left-3 top-8 w-0.5 bg-gold-500 transition-all duration-1000"
              style={{ height: `${(currentStatus / trackingSteps.length) * 100}%` }}
            ></div>

            {/* Steps */}
            <div className="space-y-8">
              {trackingSteps.map((step, index) => (
                <div key={step.id} className="relative flex items-start space-x-4">
                  <div className="relative z-10 bg-white">
                    {getStatusIcon(step.status, step.id)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3 className={`font-semibold ${
                        step.status === 'completed' ? 'text-green-600' :
                        step.status === 'current' ? 'text-gold-600' : 'text-charcoal-900'
                      }`}>
                        {step.title}
                      </h3>
                      <span className="text-sm text-charcoal-500">{step.date}</span>
                    </div>
                    <p className="text-charcoal-600 mt-1">{step.description}</p>
                    
                    {step.status === 'current' && (
                      <div className="mt-2 p-3 bg-gold-50 border border-gold-200 rounded-lg">
                        <p className="text-gold-800 text-sm">
                          🔨 Your timepiece is currently being handcrafted by our master artisans. 
                          This process ensures the highest quality and attention to detail.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Delivery Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="font-serif text-xl font-bold text-charcoal-900 mb-4">
              Delivery Information
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-gold-500" />
                <div>
                  <p className="font-medium text-charcoal-900">Delivery Address</p>
                  <p className="text-sm text-charcoal-600">
                    123 MG Road, Bandra West<br />
                    Mumbai, Maharashtra 400050
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Truck className="w-5 h-5 text-gold-500" />
                <div>
                  <p className="font-medium text-charcoal-900">Delivery Method</p>
                  <p className="text-sm text-charcoal-600">White Glove Delivery Service</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="font-serif text-xl font-bold text-charcoal-900 mb-4">
              Delivery Team
            </h3>
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center">
                <span className="font-semibold text-gold-600">
                  {deliveryTeam.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div>
                <p className="font-medium text-charcoal-900">{deliveryTeam.name}</p>
                <p className="text-sm text-charcoal-600">{deliveryTeam.experience} experience</p>
                <div className="flex items-center space-x-1">
                  <span className="text-gold-500">★</span>
                  <span className="text-sm text-charcoal-600">{deliveryTeam.rating}</span>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <button className="w-full flex items-center space-x-2 p-2 border border-gray-200 rounded-lg hover:border-gold-400 transition-colors">
                  <p className="text-sm text-charcoal-600">care@trika.co.in</p>
                <span className="text-sm text-charcoal-700">{deliveryTeam.phone}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Support */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="font-serif text-xl font-bold text-charcoal-900 mb-4">
            Need Help?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:border-gold-400 transition-colors">
              <Phone className="w-5 h-5 text-gold-500" />
              <div className="text-left">
                <p className="font-medium text-charcoal-900">Call Support</p>
                <p className="text-sm text-charcoal-600">1800-266-0123</p>
              </div>
            </button>
            <button className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:border-gold-400 transition-colors">
              <Mail className="w-5 h-5 text-gold-500" />
              <div className="text-left">
                <p className="font-medium text-charcoal-900">Email Us</p>
                <p className="text-sm text-charcoal-600">trika@tanishq.co.in</p>
              </div>
            </button>
            <button className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:border-gold-400 transition-colors">
              <Package className="w-5 h-5 text-gold-500" />
              <div className="text-left">
                <p className="font-medium text-charcoal-900">Chat Support</p>
                <p className="text-sm text-charcoal-600">Available 24/7</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderTracking;