
import React, { useState } from 'react';
import { ShoppingCart, Search, Menu, X, User } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-purple-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              LuxeStore
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors duration-300 font-medium">Home</a>
            <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors duration-300 font-medium">Products</a>
            <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors duration-300 font-medium">Categories</a>
            <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors duration-300 font-medium">About</a>
            <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors duration-300 font-medium">Contact</a>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="hidden sm:flex relative">
              <input 
                type="text" 
                placeholder="Search products..."
                className="w-64 px-4 py-2 pl-10 pr-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            </div>

            {/* User Account */}
            <button className="p-2 text-gray-700 hover:text-purple-600 transition-colors duration-300">
              <User className="w-6 h-6" />
            </button>

            {/* Shopping Cart */}
            <button className="relative p-2 text-gray-700 hover:text-purple-600 transition-colors duration-300">
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </button>

            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2 text-gray-700 hover:text-purple-600 transition-colors duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-md transition-all duration-300">Home</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-md transition-all duration-300">Products</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-md transition-all duration-300">Categories</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-md transition-all duration-300">About</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-md transition-all duration-300">Contact</a>
              {/* Mobile Search */}
              <div className="px-3 py-2">
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Search products..."
                    className="w-full px-4 py-2 pl-10 pr-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
