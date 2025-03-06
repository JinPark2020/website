import React from "react";
import companyImage from "../../assets/Image2.jpg";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-32 max-w-7xl">
      {/* Company Hero Section */}
      <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-24">
        <img src={companyImage} className="w-full h-full object-cover" alt="Company" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900"></div>
        <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 text-white">
          <h3 className="text-2xl md:text-4xl font-bold mb-2 md:mb-3">ABC Company</h3>
          <p className="text-base md:text-xl font-light">
            Leading the global market with innovation and trust.
          </p>
        </div>
      </div>

      {/* Company Introduction */}
      <div className="mb-24 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-slate-800 text-center">
          About Us
        </h2>
        <div className="text-lg leading-relaxed text-gray-600 space-y-6">
          <p>
            Established in 1995, ABC Company has been a pioneer in power conversion
            and control systems. We specialize in high-efficiency transformers, PCS
            (Power Conversion Systems), and UPS (Uninterruptible Power Supplies),
            contributing to the development of renewable energy and smart grids.
          </p>
          <p>
            Recognized for our expertise in eco-friendly energy solutions, we supply
            stable power systems to major plants and industries worldwide. With ongoing
            R&D investment, we are committed to improving energy efficiency and power
            quality, driving sustainable innovation in the energy sector.
          </p>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-24">
        {[
          { title: "Innovation", desc: "Pioneering the future through continuous challenges." },
          { title: "Trust", desc: "Building strong relationships based on reliability." },
          { title: "Growth", desc: "Supporting the development of our people and business." },
        ].map((value, index) => (
          <div
            key={index}
            className="bg-white p-10 rounded-xl shadow-lg text-center hover:shadow-2xl transition-all duration-300 border border-gray-100"
          >
            <h3 className="text-2xl font-bold mb-4 text-indigo-600">{value.title}</h3>
            <p className="text-gray-600 text-lg">{value.desc}</p>
          </div>
        ))}
      </div>

      {/* Company Vision */}
      <div className="mb-24 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-slate-800">Our Vision</h2>
        <p className="text-2xl leading-relaxed text-gray-600 font-light">
          "By 2030, we aim to be a global leader in technological innovation, <br />
          shaping a better future for all."
        </p>
      </div>

      {/* Company History */}
      <div className="mb-24">
        <h2 className="text-4xl font-bold mb-12 text-slate-800 text-center">
          Company History
        </h2>
        <div className="space-y-12 max-w-5xl mx-auto">
          {[
            { year: "2023", event: "Expanded into global markets" },
            { year: "2022", event: "Secured Series B investment" },
            { year: "2021", event: "Obtained key technology patents" },
            { year: "2020", event: "Company founded" },
          ].map((item, index) => (
            <div
              key={index}
              className={`flex items-center gap-8 ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              <div className="w-1/2 text-center">
                <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100">
                  <h3 className="text-2xl font-bold mb-3 text-indigo-600">{item.year}</h3>
                  <p className="text-gray-700 text-lg">{item.event}</p>
                </div>
              </div>
              <div className="w-4 h-4 bg-indigo-600 rounded-full"></div>
              <div className="w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
