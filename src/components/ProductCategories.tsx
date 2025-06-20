
import React from 'react';

const ProductCategories = () => {
  const categories = [
    {
      id: 1,
      name: "Electronics",
      description: "Latest gadgets and tech",
      image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&h=300&fit=crop&crop=center",
      count: "120+ products"
    },
    {
      id: 2,
      name: "Fashion",
      description: "Trendy clothing and accessories",
      image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=300&fit=crop&crop=center",
      count: "200+ products"
    },
    {
      id: 3,
      name: "Home & Living",
      description: "Furniture and home decor",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop&crop=center",
      count: "150+ products"
    },
    {
      id: 4,
      name: "Sports & Fitness",
      description: "Equipment for active lifestyle",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=center",
      count: "80+ products"
    },
    {
      id: 5,
      name: "Beauty & Health",
      description: "Skincare and wellness products",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=300&fit=crop&crop=center",
      count: "90+ products"
    },
    {
      id: 6,
      name: "Books & Media",
      description: "Educational and entertainment",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop&crop=center",
      count: "300+ products"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Shop by Category
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our diverse range of categories and find exactly what you're looking for
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div 
              key={category.id}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 border border-gray-100"
            >
              {/* Background Image with Overlay */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                
                {/* Content Overlay */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-xl font-bold mb-1">{category.name}</h3>
                  <p className="text-sm text-gray-200 mb-2">{category.description}</p>
                  <span className="text-xs bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">
                    {category.count}
                  </span>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/90 to-indigo-600/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <button className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 shadow-lg hover:shadow-xl">
                  Explore {category.name}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 rounded-3xl p-8 md:p-12 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">1000+</div>
              <div className="text-purple-200">Products</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">50k+</div>
              <div className="text-purple-200">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">24/7</div>
              <div className="text-purple-200">Support</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">99%</div>
              <div className="text-purple-200">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
