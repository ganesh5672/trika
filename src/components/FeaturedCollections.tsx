@@ .. @@
   const collections = [
-    {
-      id: 'trikax',
-      name: 'TrikaX',
-      subtitle: 'Best Seller Series',
-      description: 'Our most popular collection combining luxury with advanced technology',
-      image: 'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg',
-      icon: <Crown className="w-6 h-6" />,
-      price: 'From ₹95,000',
-      features: ['Best Seller', 'AI Assistant', '7-Day Battery']
-    },
     {
       id: 'aeris',
       name: 'Aeris',
       subtitle: 'Sky Collection',
       description: 'Inspired by the limitless sky, featuring aerospace-grade materials',
       image: 'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
       icon: <Zap className="w-6 h-6" />,
       price: 'From ₹1,85,000',
       features: ['Titanium Build', 'Aerospace Grade', 'Smart Features']
     },
-    {
-      id: 'vega',
-      name: 'Vega',
-      subtitle: 'Stellar Performance',
-      description: 'High-performance smartwatch for the ambitious and driven',
-      image: 'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
-      icon: <Gem className="w-6 h-6" />,
-      price: 'From ₹1,25,000',
-      features: ['Performance Focus', 'Premium Materials', 'Advanced Sensors']
-    },
-    {
-      id: 'nova',
-      name: 'Nova',
-      subtitle: 'Brilliant Innovation',
-      description: 'Breakthrough technology in an elegant, minimalist design',
-      image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg',
-      icon: <Clock className="w-6 h-6" />,
-      price: 'From ₹75,000',
-      features: ['Minimalist Design', 'Breakthrough Tech', 'Elegant Style']
-    },
     {
       id: 'ravya',
       name: 'Ravya',
       subtitle: 'Elegant Luxury',
       description: 'Sophisticated design meets premium craftsmanship for the discerning individual',
       image: 'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
       icon: <Gem className="w-6 h-6" />,
       price: 'From ₹1,50,000',
       features: ['Luxury Design', 'Premium Materials', 'Elegant Style']
     },
     {
       id: 'ameya',
       name: 'Ameya',
       subtitle: 'Infinite Possibilities',
       description: 'Boundless innovation with limitless features for the modern lifestyle',
       image: 'https://images.pexels.com/photos/364822/pexels-photo-364822.jpeg',
       icon: <Zap className="w-6 h-6" />,
       price: 'From ₹1,10,000',
       features: ['Infinite Features', 'Modern Design', 'Smart Innovation']
     }
   ];
@@ .. @@
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           {collections.map((collection, index) => (
             <div
               ref={(el) => {
                 if (el) cardsRef.current[index] = el;
               }}
               key={collection.id}
               className={`minimal-card group relative overflow-hidden cursor-pointer ${
-                index === 0 ? 'md:col-span-2 md:h-96' : 'h-80'
+                'h-80'
               }`}
             >
@@ .. @@
                   
                   <Link
-                    to={`/product/1`}
+                    to={`/product/${index + 1}`}
                     className="flex items-center space-x-2 bg-brown-700 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-brown-800 transition-colors"
                   >
                     <span>View Details</span>
                     <ArrowRight className="w-4 h-4" />
                   </Link>
                 </div>
               </div>
             </div>
           ))}
         </div>