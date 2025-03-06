import React from "react";
import HeroImage from "../../assets/Image1.jpg";

// Hero component - Displays a promotional section with text, image, and statistics
const Hero = () => {
  return (
    <div className="relative min-h-[110vh] bg-gradient-to-b from-gray-50 to-white pb-36">
      {/* Main container with padding and responsive layout */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-28 lg:py-36">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Left section: Headline, description, and CTA buttons */}
          <div className="flex-1 text-center lg:text-left">
            {/* Main heading with emphasis on a key phrase */}
            <h1 className="text-3xl sm:text-4xl 2xl:text-5xl font-bold text-gray-900 leading-tight mb-6 lg:mb-12">
              Building the Future
              <span className="block text-blue-600 mt-2 lg:mt-6">
              with Solar Energy Experts
              </span>
            </h1>
            
            {/* Short supporting description */}
            <p className="text-lg sm:text-xl text-gray-800 font-semibold mb-8 max-w-2xl mx-auto">
            From safe and efficient solar installations to ongoing maintenance, our experts are with you every step of the way.
            </p>
            
            {/* Call-to-action buttons for user interaction */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 text-lg font-semibold shadow-lg hover:shadow-xl">
              Get a Consultation
              </button>
              <button className="px-8 py-4 bg-white text-blue-600 rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-colors duration-300 text-lg font-semibold">
                Learn more
              </button>
            </div>
          </div>
          
          {/* Right section: Displays an image with hover effect */}
          <div className="flex-1 w-full max-w-2xl lg:max-w-none">
            <div className="relative">
              <img
                src={HeroImage}
                className="relative rounded-2xl shadow-2xl w-full object-cover transform hover:scale-[1.02] transition-transform duration-300"
                alt="Solar Panel Installation"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Statistics section: Key metrics displayed in a grid layout */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { number: "1,200+", label: "Installations Completed" },
            { number: "98%", label: "Customer Satisfaction" },
            { number: "15+ Years", label: "Industry Experience" },
            { number: "24/7", label: "Technical Support" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="py-2 text-3xl font-bold text-blue-600">
                {stat.number}
              </div>
              <div className="text-gray-900">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
