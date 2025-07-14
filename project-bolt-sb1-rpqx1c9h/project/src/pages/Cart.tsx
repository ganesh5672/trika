import React from 'react';
import { Link } from 'react-router-dom';
import { Minus, Plus, X, Shield, Truck, Gift } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { items, total, updateQuantity, removeItem } = useCart();

  const shipping = 0; // Free shipping
  const tax = Math.round(total * 0.18); // 18% GST
  const finalTotal = total + shipping + tax;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
            <Gift className="w-12 h-12 text-gray-400" />
          </div>
          <h2 className="font-serif text-2xl font-bold text-charcoal-900 mb-4">
            Your Cart is Empty
          </h2>
          <p className="text-charcoal-600 mb-8">
            Discover our exquisite timepieces and add them to your collection
          </p>
          <Link
            to="/collections"
            className="bg-gold-500 hover:bg-gold-600 text-white px-8 py-3 rounded-full font-medium transition-colors"
          >
            Explore Collections
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-3xl font-bold text-charcoal-900 mb-8">
          Shopping Cart
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div key={`${item.id}-${item.size}-${item.color}`} className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <p className="text-gold-600 text-sm font-medium">{item.collection}</p>
                        <h3 className="font-serif text-lg font-semibold text-charcoal-900">
                          {item.name}
                        </h3>
                        <div className="flex space-x-4 text-sm text-charcoal-600 mt-1">
                          <span>Size: {item.size}</span>
                          <span>Color: {item.color}</span>
                        </div>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center hover:border-gold-400 transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="font-medium text-charcoal-900 w-8 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center hover:border-gold-400 transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      
                      <div className="text-right">
                        <p className="text-lg font-bold text-charcoal-900">
                          {formatPrice(item.price * item.quantity)}
                        </p>
                        <p className="text-sm text-charcoal-600">
                          {formatPrice(item.price)} each
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-lg sticky top-8">
              <h2 className="font-serif text-xl font-bold text-charcoal-900 mb-6">
                Order Summary
              </h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-charcoal-600">Subtotal</span>
                  <span className="font-medium text-charcoal-900">{formatPrice(total)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-charcoal-600">Shipping</span>
                  <span className="font-medium text-green-600">Free</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-charcoal-600">Tax (GST 18%)</span>
                  <span className="font-medium text-charcoal-900">{formatPrice(tax)}</span>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between">
                    <span className="text-lg font-semibold text-charcoal-900">Total</span>
                    <span className="text-lg font-bold text-charcoal-900">{formatPrice(finalTotal)}</span>
                  </div>
                </div>
              </div>

              <Link
                to="/checkout"
                className="w-full bg-gold-500 hover:bg-gold-600 text-white py-4 rounded-lg font-medium text-lg transition-colors mb-4 block text-center"
              >
                Proceed to Checkout
              </Link>

              <Link
                to="/collections"
                className="w-full border border-gray-300 text-charcoal-700 py-3 rounded-lg font-medium hover:border-gold-400 transition-colors block text-center"
              >
                Continue Shopping
              </Link>

              {/* Benefits */}
              <div className="mt-8 space-y-3">
                <div className="flex items-center space-x-3 text-charcoal-600">
                  <Shield className="w-5 h-5 text-gold-500" />
                  <span className="text-sm">Trika 10-Year Warranty</span>
                </div>
                <div className="flex items-center space-x-3 text-charcoal-600">
                  <Truck className="w-5 h-5 text-gold-500" />
                  <span className="text-sm">Free Trika Delivery</span>
                </div>
                <div className="flex items-center space-x-3 text-charcoal-600">
                  <Gift className="w-5 h-5 text-gold-500" />
                  <span className="text-sm">Trika Gift Packaging</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;