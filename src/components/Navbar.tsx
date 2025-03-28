const Navbar = () => {
  return (
    <div className="bg-black px-4">
      <div className="flex flex-wrap justify-center gap-2 md:gap-4 py-4">
        <button className="bg-black hover:bg-gray-600 text-white font-bold py-2 px-4 transition-all duration-200 active:scale-95">
          Home
        </button>
        <button className="bg-black hover:bg-gray-600 text-white font-bold py-2 px-4 transition-all duration-200 active:scale-95">
          Services
        </button>
        <button className="bg-black hover:bg-gray-600 text-white font-bold py-2 px-4 transition-all duration-200 active:scale-95">
          About Us
        </button>
        <button className="bg-black hover:bg-gray-600 text-white font-bold py-2 px-4 transition-all duration-200 active:scale-95">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Navbar;
