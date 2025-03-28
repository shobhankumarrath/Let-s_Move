import React from "react";

const Homepage = () => {
  return (
    <div className="bg-black py-10 flex flex-col items-center text-center px-4">
      {/* Main Heading */}
      <div className="text-white text-3xl md:text-5xl">
        TRANSFORMING BRANDS WITH
      </div>

      {/* Digital Excellence on the next line */}
      <div className="text-yellow-400 text-3xl md:text-5xl font-bold mt-2">
        DIGITAL EXCELLENCE
      </div>

      {/* Subtitle */}
      <div className="text-white text-base md:text-lg mt-4">
        Your Business's Potential with our Tailored Solutions
      </div>

      {/* Button */}
      <button className="bg-yellow-400 text-black font-bold px-6 py-2 mt-6 rounded text-sm md:text-lg">
        Get Quote
      </button>
    </div>
  );
};

export default Homepage;
