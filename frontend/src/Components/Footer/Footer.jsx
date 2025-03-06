import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 py-12">
        {/* Grid Layout for Footer Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left">
          
          {/* About Us */}
          <div className="lg:pl-6">
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-gray-400">
              We strive to provide the best service to our customers.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="lg:pl-6">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" onClick={scrollToTop} className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" onClick={scrollToTop} className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/info" onClick={scrollToTop} className="hover:text-white transition-colors">Executives</Link></li>
              <li><Link to="/board" onClick={scrollToTop} className="hover:text-white transition-colors">Board</Link></li>
              <li><Link to="/etc" onClick={scrollToTop} className="hover:text-white transition-colors">Technologies</Link></li>
              <li><Link to="/contact" onClick={scrollToTop} className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="lg:pl-6">
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Phone: 02-1234-5678</li>
              <li>Email: jinpark0202@gmail.com</li>
            </ul>
          </div>
          
          {/* Social Media Links */}
          <div className="lg:pl-6">
            <h3 className="text-xl font-bold mb-4">Social Media</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="https://www.linkedin.com/in/hae-jin-park-dev/" className="text-gray-400 hover:text-white transition-colors">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
