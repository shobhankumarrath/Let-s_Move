import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-black bg-opacity-60 text-white py-4 px-6 flex justify-between items-center w-full fixed top-0 z-50">
      <div className="text-2xl font-bold text-green-500">Let's Move</div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-6">
        <a href="#Home" className="hover:text-yellow-400">
          Home
        </a>
        <a href="#service" className="hover:text-yellow-400">
          Service
        </a>
        <a href="#aboutus" className="hover:text-yellow-400">
          About Us
        </a>
        <a href="#contact" className="hover:text-yellow-400">
          Contact
        </a>
      </nav>

      {/* Hamburger Menu for Mobile */}
      <div className="md:hidden flex items-center space-x-4">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } absolute top-16 left-0 w-full bg-black bg-opacity-60 md:hidden space-y-4 py-4 px-6`}
      >
        <a href="#Home" className="block text-white hover:text-yellow-400">
          Home
        </a>
        <a href="#service" className="block text-white hover:text-yellow-400">
          Service
        </a>
        <a href="#aboutus" className="block text-white hover:text-yellow-400">
          About Us
        </a>
        <a href="#contact" className="block text-white hover:text-yellow-400">
          Contact
        </a>
      </div>
    </header>
  );
};

export default Navbar;
