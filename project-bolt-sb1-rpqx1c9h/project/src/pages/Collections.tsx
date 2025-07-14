import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Filter, Grid, List, ArrowUpDown } from 'lucide-react';

const Collections = () => {
  const { collection } = useParams();
  
  // Luxury Watch Collections (Premium pricing ₹1,50,000+)
  const luxuryProducts = [
    {
      id: 1,
      name: 'Ravya Luxury Edition',
      collection: 'Ravya',
      price: '₹1,50,000',
      originalPrice: '₹1,70,000',
      image: 'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      rating: 4.8,
      reviews: 156,
      features: ['Luxury Design', 'Premium Materials', 'Elegant Style'],
      isLimited: true
    },
    {
      id: 2,
      name: 'Aeris Sky Elite',
      collection: 'Aeris',
      price: '₹1,85,000',
      originalPrice: '₹2,10,000',
      image: 'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      rating: 5.0,
      reviews: 89,
      features: ['Titanium Build', 'Aerospace Grade', 'Limited Edition'],
      isLimited: true
    },
    
    
  ];

  // Normal/Smart Watch Collections (Under ₹1,50,000)
  const normalProducts = [
    {
      id: 3,
      name: 'Ameya Infinite',
      collection: 'Ameya',
      price: '₹1,10,000',
      originalPrice: '₹1,25,000',
      image: 'https://images.pexels.com/photos/364822/pexels-photo-364822.jpeg',
      rating: 5.0,
      reviews: 67,
      features: ['Infinite Features', 'Modern Design', 'Smart Innovation']
    },
    
    
  ];

  // Filter products based on collection parameter
  const getFilteredProducts = () => {
    const allProducts = [...luxuryProducts, ...normalProducts];
    if (collection === 'luxury') return luxuryProducts;
    if (collection === 'normal') return normalProducts;
    if (collection && collection !== 'men' && collection !== 'women') {
      return allProducts.filter(product => 
        product.collection.toLowerCase() === collection.toLowerCase()
      );
    }
    return allProducts;
  };

  const getPageTitle = () => {
    if (collection === 'luxury') return 'Luxury Collection';
    if (collection === 'normal') return 'Smart Collection';
    if (collection === 'men') return 'Men\'s Collection';
    if (collection === 'women') return 'Women\'s Collection';
    if (collection) return `${collection.charAt(0).toUpperCase() + collection.slice(1)} Collection`;
    return 'All Collections';
  };

  const getPageDescription = () => {
    if (collection === 'luxury') return 'Exquisite luxury smartwatches with premium materials and exclusive craftsmanship';
    if (collection === 'normal') return 'Advanced smartwatches with cutting-edge technology and modern design';
    return 'Discover timepieces that blend traditional craftsmanship with modern innovation';
  };

  const filteredProducts = getFilteredProducts();

  return (
    <div className="min-h-screen bg-primary">
      {/* Hero Section */}
      <div className="bg-charcoal-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            {getPageTitle()}
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            {getPageDescription()}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Collection Navigation */}
        {!collection && (
          <div className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link
                to="/collections/luxury"
                className="minimal-card group relative overflow-hidden h-64"
              >
                <div className="absolute inset-0">
                  <img
                    src="https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg"
                    alt="Luxury Collection"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 via-charcoal-900/40 to-transparent"></div>
                </div>
                <div className="relative z-10 h-full flex flex-col justify-end p-8">
                  <h3 className="font-serif text-3xl font-bold text-white mb-2">Luxury Collection</h3>
                  <p className="text-gray-200 mb-4">Premium smartwatches with exquisite craftsmanship</p>
                  <span className="text-gold-400 font-semibold">From ₹1,50,000</span>
                </div>
              </Link>
              
              <Link
                to="/collections/normal"
                className="minimal-card group relative overflow-hidden h-64"
              >
                <div className="absolute inset-0">
                  <img
                    src="https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg"
                    alt="Smart Collection"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 via-charcoal-900/40 to-transparent"></div>
                </div>
                <div className="relative z-10 h-full flex flex-col justify-end p-8">
                  <h3 className="font-serif text-3xl font-bold text-white mb-2">Smart Collection</h3>
                  <p className="text-gray-200 mb-4">Advanced technology with modern design</p>
                  <span className="text-gold-400 font-semibold">From ₹75,000</span>
                </div>
              </Link>
            </div>
          </div>
        )}

        {/* Filters and Controls */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8 space-y-4 lg:space-y-0">
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-2 minimal-card px-4 py-2 hover:border-gold-400 transition-colors">
              <Filter className="w-4 h-4" />
              <span>Filters</span>
            </button>
            <select className="minimal-card px-4 py-2 focus:outline-none focus:border-gold-400">
              <option>All Collections</option>
              <option>Luxury</option>
              <option>Smart</option>
              <option>TrikaX</option>
              <option>Aeris</option>
              <option>Vega</option>
              <option>Nova</option>
              <option>Ravya</option>
              <option>Ameya</option>
            </select>
          </div>

          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-2 text-charcoal-600 hover:text-gold-500 transition-colors">
              <ArrowUpDown className="w-4 h-4" />
              <span>Sort by Price</span>
            </button>
            <div className="flex minimal-card overflow-hidden">
              <button className="p-2 hover:bg-accent border-r border-accent">
                <Grid className="w-4 h-4" />
              </button>
              <button className="p-2 hover:bg-accent">
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="minimal-card overflow-hidden group cursor-pointer"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {product.isNew && (
                  <span className="absolute top-3 left-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                    New
                  </span>
                )}
                {product.isLimited && (
                  <span className="absolute top-3 left-3 bg-gold-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                    Limited
                  </span>
                )}
                <button className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors">
                  <svg className="w-4 h-4 text-charcoal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
                
                {/* Hover overlay with quick actions */}
                <div className="absolute inset-0 bg-charcoal-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="text-charcoal-900 font-medium text-sm">View Details</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-gold-600 text-sm font-medium">{product.collection}</span>
                  <div className="flex items-center space-x-1">
                    <svg className="w-4 h-4 text-gold-500 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-sm text-charcoal-600">{product.rating} ({product.reviews})</span>
                  </div>
                </div>

                <h3 className="font-serif text-lg font-semibold text-charcoal-900 mb-2 group-hover:text-gold-600 transition-colors">
                  {product.name}
                </h3>

                <div className="flex flex-wrap gap-1 mb-4">
                  {product.features.map((feature, index) => (
                    <span
                      key={index}
                      className="text-xs bg-accent text-charcoal-600 px-2 py-1 rounded-md"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-charcoal-900">
                      {product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">
                        {product.originalPrice}
                      </span>
                    )}
                  </div>
                  <div className="bg-gold-500 hover:bg-gold-600 text-white px-4 py-2 rounded-lg font-medium transition-colors opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    View Details
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="bg-charcoal-900 hover:bg-charcoal-800 text-white px-8 py-3 rounded-lg font-medium transition-colors hover:scale-105 duration-300">
            Load More Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default Collections;