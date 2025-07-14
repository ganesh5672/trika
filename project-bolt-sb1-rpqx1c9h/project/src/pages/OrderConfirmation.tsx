import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Package, Truck, Calendar, Download, Share2, MessageCircle } from 'lucide-react';

const OrderConfirmation = () => {
  const [orderNumber] = useState('TRK' + Math.random().toString(36).substr(2, 9).toUpperCase());
  const [estimatedDelivery] = useState(() => {
    const date = new Date();
    date.setDate(date.getDate() + 7);
    return date.toLocaleDateString('en-IN', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  });

  const orderDetails = {
    item: 'Sutradhar Royal Gold',
    collection: 'Heritage Collection',
    price: '₹2,50,000',
    size: '42mm',
    color: 'Gold',
    image: 'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg'
  };

  const nextSteps = [
    {
      icon: <Package className="w-6 h-6" />,
      title: 'Order Processing',
      description: 'Your order is being prepared by our master craftsmen',
      status: 'current'
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: 'Quality Check & Packaging',
      description: 'Final inspection and luxury packaging',
      status: 'upcoming'
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: 'White Glove Delivery',
      description: 'Personal delivery with fitting consultation',
      status: 'upcoming'
    }
  ];

  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Success Header */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          <h1 className="font-serif text-4xl font-bold text-charcoal-900 mb-4">
            Order Confirmed!
          </h1>
          <p className="text-xl text-charcoal-600 mb-2">
            Thank you for choosing Trika
          </p>
          <p className="text-lg text-charcoal-500">
            Order #{orderNumber}
          </p>
        </div>

        {/* Order Details Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-serif text-2xl font-bold text-charcoal-900">
              Order Details
            </h2>
            <div className="flex space-x-3">
              <button className="flex items-center space-x-2 text-charcoal-600 hover:text-gold-500 transition-colors">
                <Download className="w-4 h-4" />
                <span className="text-sm">Download Invoice</span>
              </button>
              <button className="flex items-center space-x-2 text-charcoal-600 hover:text-gold-500 transition-colors">
                <Share2 className="w-4 h-4" />
                <span className="text-sm">Share</span>
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-6 mb-6">
            <img
              src={orderDetails.image}
              alt={orderDetails.item}
              className="w-24 h-24 object-cover rounded-lg"
            />
            <div className="flex-1">
              <p className="text-gold-600 text-sm font-medium">{orderDetails.collection}</p>
              <h3 className="font-serif text-xl font-semibold text-charcoal-900 mb-1">
                {orderDetails.item}
              </h3>
              <div className="flex space-x-4 text-sm text-charcoal-600 mb-2">
                <span>Size: {orderDetails.size}</span>
                <span>Color: {orderDetails.color}</span>
              </div>
              <p className="text-lg font-bold text-charcoal-900">{orderDetails.price}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-gray-200">
            <div>
              <h4 className="font-semibold text-charcoal-900 mb-2">Estimated Delivery</h4>
              <p className="text-charcoal-600">{estimatedDelivery}</p>
              <p className="text-sm text-gold-600 mt-1">Free white glove delivery included</p>
            </div>
            <div>
              <h4 className="font-semibold text-charcoal-900 mb-2">Tracking</h4>
              <Link 
                to="/order-tracking" 
                className="text-gold-600 hover:text-gold-700 transition-colors"
              >
                Track your order →
              </Link>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="font-serif text-2xl font-bold text-charcoal-900 mb-6">
            What Happens Next
          </h2>
          
          <div className="space-y-6">
            {nextSteps.map((step, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className={`p-3 rounded-lg ${
                  step.status === 'current' ? 'bg-gold-100 text-gold-600' : 'bg-gray-100 text-gray-400'
                }`}>
                  {step.icon}
                </div>
                <div className="flex-1">
                  <h3 className={`font-semibold mb-1 ${
                    step.status === 'current' ? 'text-gold-600' : 'text-charcoal-900'
                  }`}>
                    {step.title}
                  </h3>
                  <p className="text-charcoal-600">{step.description}</p>
                </div>
                {step.status === 'current' && (
                  <div className="w-3 h-3 bg-gold-500 rounded-full animate-pulse"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Services & Support */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="font-serif text-xl font-bold text-charcoal-900 mb-4">
              Trika Services
            </h3>
            <ul className="space-y-3 text-charcoal-600">
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Lifetime warranty included</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Free annual servicing</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Custom engraving available</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>30-day exchange policy</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="font-serif text-xl font-bold text-charcoal-900 mb-4">
              Need Help?
            </h3>
            <div className="space-y-4">
              <button className="w-full flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:border-gold-400 transition-colors">
                <MessageCircle className="w-5 h-5 text-gold-500" />
                <span className="text-charcoal-700">Chat with Trika AI</span>
              </button>
              <button className="w-full flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:border-gold-400 transition-colors">
                <span className="text-charcoal-700">Call: 1800-TRIKA-01</span>
              </button>
              <button className="w-full flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:border-gold-400 transition-colors">
                <span className="text-charcoal-700">Email: care@trika.co.in</span>
              </button>
            </div>
          </div>
        </div>

        {/* Continue Shopping */}
        <div className="text-center">
          <Link
            to="/collections"
            className="inline-flex items-center space-x-2 bg-gold-500 hover:bg-gold-600 text-white px-8 py-3 rounded-full font-medium transition-colors"
          >
            <span>Continue Shopping</span>
          </Link>
        </div>

        {/* Email Confirmation Notice */}
        <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-blue-800 text-sm text-center">
            📧 A confirmation email has been sent to your registered email address with all order details.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;