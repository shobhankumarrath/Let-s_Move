// src/components/HeroSection.tsx
import heroBg from "../assets/herosection-bg-image.png";

const HeroSection = () => {
  return (
    <section
      id="Home"
      className="relative bg-cover bg-center h-screen pt-24"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundColor: "gray", // optional fallback
      }}
    >
      {/*<div className="absolute inset-0 bg-black bg-opacity-60"></div> */}
      <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          TRANSFORMING BRANDS
          <br />
          WITH <span className="text-yellow-400">DIGITAL EXCELLENCE</span>
        </h1>
        <p className="mt-6 text-lg">
          Your Business's Potential with our Tailored Solutions
        </p>
        <div className="mt-8 flex justify-center space-x-4">
          <button className="bg-yellow-400 text-black px-6 py-2 rounded hover:bg-yellow-500">
            Get Quote
          </button>
          <button className="border border-white px-6 py-2 rounded hover:bg-white hover:text-black">
            Learn more →
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
