
import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              LuxeStore
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your premier destination for luxury products and exceptional shopping experiences. 
              Quality, style, and innovation in every purchase.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-110">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-110">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-110">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-110">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-purple-300">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white hover:text-purple-300 transition-colors duration-300">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white hover:text-purple-300 transition-colors duration-300">Products</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white hover:text-purple-300 transition-colors duration-300">Categories</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white hover:text-purple-300 transition-colors duration-300">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white hover:text-purple-300 transition-colors duration-300">Contact</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white hover:text-purple-300 transition-colors duration-300">Blog</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-purple-300">Customer Service</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white hover:text-purple-300 transition-colors duration-300">Help Center</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white hover:text-purple-300 transition-colors duration-300">Shipping Info</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white hover:text-purple-300 transition-colors duration-300">Returns</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white hover:text-purple-300 transition-colors duration-300">Size Guide</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white hover:text-purple-300 transition-colors duration-300">Track Order</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white hover:text-purple-300 transition-colors duration-300">FAQs</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-purple-300">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">123 Luxury Street</p>
                  <p className="text-gray-300">Premium City, PC 12345</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-purple-400 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-gray-300 hover:text-purple-300 transition-colors duration-300">
                  +1 (234) 567-8900
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-purple-400 flex-shrink-0" />
                <a href="mailto:info@luxestore.com" className="text-gray-300 hover:text-purple-300 transition-colors duration-300">
                  info@luxestore.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-300">
                © {currentYear} LuxeStore. All rights reserved.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-end space-x-6">
              <a href="#" className="text-gray-300 hover:text-purple-300 transition-colors duration-300 text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-300 hover:text-purple-300 transition-colors duration-300 text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-300 hover:text-purple-300 transition-colors duration-300 text-sm">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
