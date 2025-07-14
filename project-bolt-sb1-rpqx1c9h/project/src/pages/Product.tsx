import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Heart, Share, ShoppingBag, Star, Shield, Truck, RotateCcw, ArrowLeft, Zap, Heart as HeartIcon, Smartphone, Battery, Camera, Music, Navigation, CheckCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Product = () => {
  const { id } = useParams();
  const { addItem } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('42mm');
  const [selectedColor, setSelectedColor] = useState('Gold');
  const [activeTab, setActiveTab] = useState('features');
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  
  // Complete product data for all watches
  const products = {
    1: {
      name: 'TrikaX Best Seller Pro',
      collection: 'TrikaX Best Seller Collection',
      price: 250000,
      originalPrice: 275000,
      rating: 4.9,
      reviews: 127,
      description: 'The TrikaX Best Seller Pro represents our most popular collection, combining luxury design with cutting-edge smartwatch technology. Features premium materials and advanced AI capabilities.',
      images: [
        'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg',
        'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
        'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
        'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg',
      ]
    },
    2: {
      name: 'Aeris Sky Elite',
      collection: 'Aeris Sky Collection',
      price: 185000,
      originalPrice: 210000,
      rating: 5.0,
      reviews: 89,
      description: 'The Aeris Sky Elite showcases aerospace-grade materials and titanium construction with cutting-edge smart technology for ultimate performance.',
      images: [
        'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
        'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg',
        'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
        'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg',
      ]
    },
    3: {
      name: 'Vega Performance Pro',
      collection: 'Vega Stellar Performance',
      price: 125000,
      originalPrice: 140000,
      rating: 4.8,
      reviews: 203,
      description: 'High-performance smartwatch designed for the ambitious and driven. Features advanced sensors and performance tracking capabilities.',
      images: [
        'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
        'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg',
        'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg',
        'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg',
      ]
    },
    4: {
      name: 'Nova Minimalist',
      collection: 'Nova Brilliant Innovation',
      price: 75000,
      originalPrice: 85000,
      rating: 4.7,
      reviews: 456,
      description: 'Breakthrough technology in an elegant, minimalist design. Perfect blend of simplicity and advanced functionality.',
      images: [
        'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg',
        'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg',
        'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
        'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg',
      ]
    },
    5: {
      name: 'Ravya Luxury Edition',
      collection: 'Ravya Elegant Luxury',
      price: 150000,
      originalPrice: 170000,
      rating: 4.8,
      reviews: 156,
      description: 'Sophisticated design meets premium craftsmanship for the discerning individual. Luxury redefined with smart technology.',
      images: [
        'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
        'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg',
        'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
        'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      ]
    },
    6: {
      name: 'Ameya Infinite',
      collection: 'Ameya Infinite Possibilities',
      price: 110000,
      originalPrice: 125000,
      rating: 5.0,
      reviews: 67,
      description: 'Boundless innovation with limitless features for the modern lifestyle. Experience infinite possibilities on your wrist.',
      images: [
        'https://images.pexels.com/photos/364822/pexels-photo-364822.jpeg',
        'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg',
        'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
        'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg',
      ]
    },
    7: {
      name: 'TrikaX Sport Edition',
      collection: 'TrikaX Best Seller Collection',
      price: 225000,
      originalPrice: 250000,
      rating: 4.9,
      reviews: 189,
      description: 'Sport-focused edition of our best-selling collection. Enhanced durability and performance tracking for active lifestyles.',
      images: [
        'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg',
        'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg',
        'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
        'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      ]
    },
    8: {
      name: 'Aeris Classic',
      collection: 'Aeris Sky Collection',
      price: 125000,
      originalPrice: 140000,
      rating: 4.6,
      reviews: 324,
      description: 'Classic design from the Aeris collection with timeless elegance and modern smart features. Perfect for everyday luxury.',
      images: [
        'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg',
        'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg',
        'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
        'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      ]
    }
  };

  const product = products[parseInt(id || '1') as keyof typeof products] || products[1];

  const features = [
    'Swiss ETA Movement with Smart Technology',
    '22K Gold Case & Bracelet',
    'Sapphire Crystal AMOLED Display',
    'Water Resistant 100m',
    'Custom Heritage Engraving',
    'Trika 10-Year Warranty',
    'Advanced Health Monitoring',
    'AI-Powered Assistant',
    '7-Day Battery Life',
    'Wireless Charging'
  ];

  const smartFeatures = [
    {
      icon: <HeartIcon className="w-5 h-5" />,
      title: 'Health Monitoring',
      description: 'Heart rate, SpO2, ECG, sleep tracking'
    },
    {
      icon: <Smartphone className="w-5 h-5" />,
      title: 'Smart Connectivity',
      description: 'Calls, messages, notifications, 5G ready'
    },
    {
      icon: <Battery className="w-5 h-5" />,
      title: 'Extended Battery',
      description: '7-day normal use, wireless charging'
    },
    {
      icon: <Camera className="w-5 h-5" />,
      title: 'Camera Control',
      description: 'Remote camera control and photo capture'
    },
    {
      icon: <Music className="w-5 h-5" />,
      title: 'Music Control',
      description: 'Control music playback and volume'
    },
    {
      icon: <Navigation className="w-5 h-5" />,
      title: 'GPS Navigation',
      description: 'Turn-by-turn navigation on your wrist'
    }
  ];

  const specifications = {
    'Case Size': '42mm / 38mm',
    'Case Material': '22K Gold with Smart Components',
    'Display': '1.4" AMOLED Sapphire Crystal',
    'Movement': 'Swiss ETA 2824-2 + Smart Module',
    'Water Resistance': '100 meters',
    'Connectivity': '5G, Wi-Fi 6, Bluetooth 5.3, NFC',
    'Battery Life': '7 days normal use, 14 days power save',
    'Charging': 'Wireless charging, Solar assist',
    'Sensors': 'Heart rate, SpO2, ECG, GPS, Accelerometer',
    'Weight': '180g'
  };

  const reviews = [
    {
      name: 'Arjun Kapoor',
      rating: 5,
      comment: 'Absolutely stunning craftsmanship! The smart features work flawlessly and the gold finish is exquisite.',
      date: '2 weeks ago',
      verified: true
    },
    {
      name: 'Priya Sharma',
      rating: 5,
      comment: 'Perfect blend of tradition and technology. The health monitoring features are incredibly accurate.',
      date: '1 month ago',
      verified: true
    },
    {
      name: 'Rajesh Gupta',
      rating: 4,
      comment: 'Beautiful watch with amazing smart features. Battery life is excellent. Worth every penny.',
      date: '3 weeks ago',
      verified: true
    }
  ];

  const sizes = ['38mm', '42mm'];
  const colors = ['Gold', 'Rose Gold', 'White Gold'];

  const tabs = [
    { id: 'features', name: 'Features' },
    { id: 'specifications', name: 'Specifications' },
    { id: 'reviews', name: 'Reviews' }
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  const handleAddToCart = () => {
    const cartItem = {
      id: parseInt(id || '1'),
      name: product.name,
      collection: product.collection,
      price: product.price,
      image: product.images[0],
      size: selectedSize,
      color: selectedColor
    };

    addItem(cartItem);
    setIsAddedToCart(true);
    
    // Reset the success state after 2 seconds
    setTimeout(() => {
      setIsAddedToCart(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-charcoal-600">
            <Link to="/" className="hover:text-gold-600 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/collections" className="hover:text-gold-600 transition-colors">Collections</Link>
            <span>/</span>
            <span className="text-charcoal-900">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link 
          to="/collections" 
          className="inline-flex items-center space-x-2 text-charcoal-600 hover:text-gold-600 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Collections</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden luxury-shadow">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square bg-gray-100 rounded-lg overflow-hidden border-2 transition-all duration-300 hover:scale-105 ${
                    selectedImage === index ? 'border-gold-500 luxury-shadow-gold' : 'border-transparent'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <p className="text-gold-600 font-medium mb-2">{product.collection}</p>
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-charcoal-900 mb-4">
                {product.name}
              </h1>
              
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating) ? 'text-gold-500 fill-current' : 'text-gray-300'
                      }`}
                    />
                  ))}
                  <span className="text-charcoal-600 ml-2">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
              </div>

              <div className="flex items-center space-x-4 mb-6">
                <span className="text-3xl font-bold text-charcoal-900">
                  {formatPrice(product.price)}
                </span>
                <span className="text-xl text-gray-500 line-through">
                  {formatPrice(product.originalPrice)}
                </span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  Save {formatPrice(product.originalPrice - product.price)}
                </span>
              </div>
            </div>

            <p className="text-charcoal-600 leading-relaxed text-lg">
              {product.description}
            </p>

            {/* Smart Features Preview */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="font-semibold text-charcoal-900 mb-4 flex items-center space-x-2">
                <Zap className="w-5 h-5 text-gold-500" />
                <span>Smart Features</span>
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {smartFeatures.slice(0, 4).map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="p-2 bg-gold-100 text-gold-600 rounded-lg">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-charcoal-900 text-sm">{feature.title}</h4>
                      <p className="text-charcoal-600 text-xs">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Options */}
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-charcoal-900 mb-2">Size</h3>
                <div className="flex space-x-2">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 border rounded-lg font-medium transition-all duration-300 hover:scale-105 ${
                        selectedSize === size
                          ? 'border-gold-500 bg-gold-50 text-gold-700 luxury-shadow-gold'
                          : 'border-gray-300 text-charcoal-600 hover:border-gold-300'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-charcoal-900 mb-2">Color</h3>
                <div className="flex space-x-2">
                  {colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 border rounded-lg font-medium transition-all duration-300 hover:scale-105 ${
                        selectedColor === color
                          ? 'border-gold-500 bg-gold-50 text-gold-700 luxury-shadow-gold'
                          : 'border-gray-300 text-charcoal-600 hover:border-gold-300'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-4">
              <div className="flex space-x-4">
                <button
                  onClick={handleAddToCart}
                  disabled={isAddedToCart}
                  className={`flex-1 py-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105 luxury-shadow-gold ${
                    isAddedToCart
                      ? 'bg-green-500 text-white'
                      : 'bg-gold-500 hover:bg-gold-600 text-white'
                  }`}
                >
                  {isAddedToCart ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      <span>Added to Cart!</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-5 h-5" />
                      <span>Add to Cart</span>
                    </>
                  )}
                </button>
                <button className="p-4 border border-gray-300 rounded-lg hover:border-gold-400 transition-all duration-300 hover:scale-105">
                  <Heart className="w-5 h-5 text-charcoal-600" />
                </button>
                <button className="p-4 border border-gray-300 rounded-lg hover:border-gold-400 transition-all duration-300 hover:scale-105">
                  <Share className="w-5 h-5 text-charcoal-600" />
                </button>
              </div>
              
              <button className="w-full bg-charcoal-900 hover:bg-charcoal-800 text-white py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 luxury-shadow">
                Virtual Try-On
              </button>
            </div>

            {/* Services */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-gray-200">
              <div className="flex items-center space-x-2 text-charcoal-600">
                <Shield className="w-5 h-5 text-gold-500" />
                <span className="text-sm">10-Year Warranty</span>
              </div>
              <div className="flex items-center space-x-2 text-charcoal-600">
                <Truck className="w-5 h-5 text-gold-500" />
                <span className="text-sm">Free Shipping</span>
              </div>
              <div className="flex items-center space-x-2 text-charcoal-600">
                <RotateCcw className="w-5 h-5 text-gold-500" />
                <span className="text-sm">30-Day Returns</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'border-b-2 border-gold-500 text-gold-600'
                      : 'border-b-2 border-transparent text-charcoal-500 hover:text-charcoal-700'
                  }`}
                >
                  {tab.name}
                </button>
              ))}
            </nav>
          </div>

          <div className="py-8">
            {activeTab === 'features' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-charcoal-900 mb-6">
                    Premium Features
                  </h3>
                  <ul className="space-y-4">
                    {features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-gold-500 rounded-full mt-2"></div>
                        <span className="text-charcoal-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-serif text-2xl font-bold text-charcoal-900 mb-6">
                    Smart Capabilities
                  </h3>
                  <div className="space-y-4">
                    {smartFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                        <div className="p-2 bg-gold-100 text-gold-600 rounded-lg">
                          {feature.icon}
                        </div>
                        <div>
                          <h4 className="font-medium text-charcoal-900">{feature.title}</h4>
                          <p className="text-charcoal-600 text-sm">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'specifications' && (
              <div className="max-w-4xl">
                <h3 className="font-serif text-2xl font-bold text-charcoal-900 mb-6">
                  Technical Specifications
                </h3>
                <div className="bg-gray-50 rounded-2xl p-6">
                  <dl className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {Object.entries(specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0">
                        <dt className="text-charcoal-600 font-medium">{key}:</dt>
                        <dd className="font-semibold text-charcoal-900 text-right">{value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="max-w-4xl">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-serif text-2xl font-bold text-charcoal-900">
                    Customer Reviews
                  </h3>
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-gold-500 fill-current" />
                      ))}
                    </div>
                    <span className="text-charcoal-600">{product.rating} out of 5</span>
                  </div>
                </div>

                <div className="space-y-6">
                  {reviews.map((review, index) => (
                    <div key={index} className="bg-gray-50 rounded-2xl p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gold-100 rounded-full flex items-center justify-center">
                            <span className="font-semibold text-gold-600">
                              {review.name.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                          <div>
                            <h4 className="font-semibold text-charcoal-900">{review.name}</h4>
                            <div className="flex items-center space-x-2">
                              <div className="flex items-center space-x-1">
                                {[...Array(review.rating)].map((_, i) => (
                                  <Star key={i} className="w-3 h-3 text-gold-500 fill-current" />
                                ))}
                              </div>
                              {review.verified && (
                                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                                  Verified Purchase
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                        <span className="text-sm text-charcoal-500">{review.date}</span>
                      </div>
                      <p className="text-charcoal-600">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;