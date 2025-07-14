import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Shield, Truck, CreditCard, Smartphone, Wallet, CheckCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Checkout = () => {
  const navigate = useNavigate();
  const { items, total, clearCart } = useCart();
  const [currentStep, setCurrentStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    nameOnCard: ''
  });

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handlePlaceOrder = () => {
    // Clear the cart and navigate to order confirmation
    clearCart();
    navigate('/order-confirmation');
  };

  const steps = [
    { id: 1, name: 'Information', completed: currentStep > 1 },
    { id: 2, name: 'Shipping', completed: currentStep > 2 },
    { id: 3, name: 'Payment', completed: currentStep > 3 },
    { id: 4, name: 'Review', completed: false }
  ];

  // Redirect to cart if no items
  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-serif text-2xl font-bold text-charcoal-900 mb-4">
            Your cart is empty
          </h2>
          <p className="text-charcoal-600 mb-8">
            Add some items to your cart before proceeding to checkout
          </p>
          <Link
            to="/collections"
            className="bg-gold-500 hover:bg-gold-600 text-white px-8 py-3 rounded-full font-medium transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link to="/cart" className="flex items-center space-x-2 text-charcoal-600 hover:text-gold-500 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Cart</span>
          </Link>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-gold rounded-full flex items-center justify-center">
              <span className="text-white font-serif font-bold text-lg">T</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl font-bold text-charcoal-900">Trika</span>
              <span className="text-gold-600 text-xs font-medium -mt-1">Secure Checkout</span>
            </div>
          </div>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-4">
            {steps.map((step, index) => (
              <React.Fragment key={step.id}>
                <div className={`flex items-center space-x-2 ${
                  currentStep === step.id ? 'text-gold-600' : 
                  step.completed ? 'text-green-600' : 'text-gray-400'
                }`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${
                    currentStep === step.id ? 'border-gold-500 bg-gold-50' :
                    step.completed ? 'border-green-500 bg-green-50' : 'border-gray-300'
                  }`}>
                    {step.completed ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : (
                      <span className="text-sm font-medium">{step.id}</span>
                    )}
                  </div>
                  <span className="text-sm font-medium">{step.name}</span>
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-12 h-0.5 ${
                    step.completed ? 'bg-green-500' : 'bg-gray-300'
                  }`}></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact Information */}
            {currentStep === 1 && (
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h2 className="font-serif text-2xl font-bold text-charcoal-900 mb-6">
                  Contact Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-charcoal-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold-400"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-charcoal-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold-400"
                      required
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-charcoal-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold-400"
                      required
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-charcoal-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold-400"
                      required
                    />
                  </div>
                </div>
                <button
                  onClick={() => setCurrentStep(2)}
                  className="mt-6 w-full bg-gold-500 hover:bg-gold-600 text-white py-3 rounded-lg font-medium transition-colors"
                >
                  Continue to Shipping
                </button>
              </div>
            )}

            {/* Shipping Address */}
            {currentStep === 2 && (
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h2 className="font-serif text-2xl font-bold text-charcoal-900 mb-6">
                  Shipping Address
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-charcoal-700 mb-2">
                      Address *
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold-400"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-charcoal-700 mb-2">
                        City *
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold-400"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-charcoal-700 mb-2">
                        State *
                      </label>
                      <select
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold-400"
                        required
                      >
                        <option value="">Select State</option>
                        <option value="maharashtra">Maharashtra</option>
                        <option value="delhi">Delhi</option>
                        <option value="karnataka">Karnataka</option>
                        <option value="tamil-nadu">Tamil Nadu</option>
                        <option value="gujarat">Gujarat</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-charcoal-700 mb-2">
                        PIN Code *
                      </label>
                      <input
                        type="text"
                        name="pincode"
                        value={formData.pincode}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold-400"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="flex space-x-4 mt-6">
                  <button
                    onClick={() => setCurrentStep(1)}
                    className="flex-1 border border-gray-300 text-charcoal-700 py-3 rounded-lg font-medium hover:border-gold-400 transition-colors"
                  >
                    Back
                  </button>
                  <button
                    onClick={() => setCurrentStep(3)}
                    className="flex-1 bg-gold-500 hover:bg-gold-600 text-white py-3 rounded-lg font-medium transition-colors"
                  >
                    Continue to Payment
                  </button>
                </div>
              </div>
            )}

            {/* Payment Method */}
            {currentStep === 3 && (
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h2 className="font-serif text-2xl font-bold text-charcoal-900 mb-6">
                  Payment Method
                </h2>
                
                {/* Payment Options */}
                <div className="space-y-4 mb-6">
                  <div className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                    paymentMethod === 'card' ? 'border-gold-500 bg-gold-50' : 'border-gray-200'
                  }`} onClick={() => setPaymentMethod('card')}>
                    <div className="flex items-center space-x-3">
                      <input
                        type="radio"
                        name="payment"
                        value="card"
                        checked={paymentMethod === 'card'}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="text-gold-500"
                      />
                      <CreditCard className="w-5 h-5 text-charcoal-600" />
                      <span className="font-medium">Credit/Debit Card</span>
                    </div>
                  </div>
                  
                  <div className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                    paymentMethod === 'upi' ? 'border-gold-500 bg-gold-50' : 'border-gray-200'
                  }`} onClick={() => setPaymentMethod('upi')}>
                    <div className="flex items-center space-x-3">
                      <input
                        type="radio"
                        name="payment"
                        value="upi"
                        checked={paymentMethod === 'upi'}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="text-gold-500"
                      />
                      <Smartphone className="w-5 h-5 text-charcoal-600" />
                      <span className="font-medium">UPI Payment</span>
                    </div>
                  </div>
                  
                  <div className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                    paymentMethod === 'wallet' ? 'border-brown-500 bg-brown-50' : 'border-gray-200'
                  }`} onClick={() => setPaymentMethod('wallet')}>
                    <div className="flex items-center space-x-3">
                      <input
                        type="radio"
                        name="payment"
                        value="wallet"
                        checked={paymentMethod === 'wallet'}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="text-gold-500"
                      />
                      <Wallet className="w-5 h-5 text-charcoal-600" />
                      <span className="font-medium">Trika Wallet</span>
                    </div>
                  </div>
                </div>

                {/* Card Details */}
                {paymentMethod === 'card' && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-charcoal-700 mb-2">
                        Card Number *
                      </label>
                      <input
                        type="text"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        placeholder="1234 5678 9012 3456"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold-400"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-charcoal-700 mb-2">
                          Expiry Date *
                        </label>
                        <input
                          type="text"
                          name="expiryDate"
                          value={formData.expiryDate}
                          onChange={handleInputChange}
                          placeholder="MM/YY"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold-400"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-charcoal-700 mb-2">
                          CVV *
                        </label>
                        <input
                          type="text"
                          name="cvv"
                          value={formData.cvv}
                          onChange={handleInputChange}
                          placeholder="123"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold-400"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-charcoal-700 mb-2">
                        Name on Card *
                      </label>
                      <input
                        type="text"
                        name="nameOnCard"
                        value={formData.nameOnCard}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold-400"
                        required
                      />
                    </div>
                  </div>
                )}

                <div className="flex space-x-4 mt-6">
                  <button
                    onClick={() => setCurrentStep(2)}
                    className="flex-1 border border-gray-300 text-charcoal-700 py-3 rounded-lg font-medium hover:border-gold-400 transition-colors"
                  >
                    Back
                  </button>
                  <button
                    onClick={() => setCurrentStep(4)}
                    className="flex-1 bg-gold-500 hover:bg-gold-600 text-white py-3 rounded-lg font-medium transition-colors"
                  >
                    Review Order
                  </button>
                </div>
              </div>
            )}

            {/* Order Review */}
            {currentStep === 4 && (
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h2 className="font-serif text-2xl font-bold text-charcoal-900 mb-6">
                  Review Your Order
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-charcoal-900 mb-2">Contact Information</h3>
                    <p className="text-charcoal-600">{formData.firstName} {formData.lastName}</p>
                    <p className="text-charcoal-600">{formData.email}</p>
                    <p className="text-charcoal-600">{formData.phone}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-charcoal-900 mb-2">Shipping Address</h3>
                    <p className="text-charcoal-600">{formData.address}</p>
                    <p className="text-charcoal-600">{formData.city}, {formData.state} {formData.pincode}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-charcoal-900 mb-2">Payment Method</h3>
                    <p className="text-charcoal-600 capitalize">{paymentMethod.replace('-', ' ')}</p>
                  </div>
                </div>

                <div className="flex space-x-4 mt-6">
                  <button
                    onClick={() => setCurrentStep(3)}
                    className="flex-1 border border-gray-300 text-charcoal-700 py-3 rounded-lg font-medium hover:border-gold-400 transition-colors"
                  >
                    Back
                  </button>
                  <button
                    onClick={handlePlaceOrder}
                    className="flex-1 bg-gold-500 hover:bg-gold-600 text-white py-3 rounded-lg font-medium transition-colors"
                  >
                    Place Order
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-lg sticky top-8">
              <h2 className="font-serif text-xl font-bold text-charcoal-900 mb-6">
                Order Summary
              </h2>

              {/* Items */}
              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div key={`${item.id}-${item.size}-${item.color}`} className="flex items-center space-x-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium text-charcoal-900">{item.name}</h3>
                      <p className="text-sm text-charcoal-600">{item.size} • {item.color}</p>
                      <p className="text-sm text-charcoal-600">Qty: {item.quantity}</p>
                      <p className="text-sm font-medium text-charcoal-900">{formatPrice(item.price * item.quantity)}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pricing */}
              <div className="space-y-3 mb-6">
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
                <div className="border-t border-gray-200 pt-3">
                  <div className="flex justify-between">
                    <span className="text-lg font-semibold text-charcoal-900">Total</span>
                    <span className="text-lg font-bold text-charcoal-900">{formatPrice(finalTotal)}</span>
                  </div>
                </div>
              </div>

              {/* Security Features */}
              <div className="space-y-3 text-sm text-charcoal-600">
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4 text-gold-500" />
                  <span>Secure 256-bit SSL encryption</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Truck className="w-4 h-4 text-gold-500" />
                  <span>Free white glove delivery</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-gold-500" />
                  <span>Lifetime Trika warranty</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;