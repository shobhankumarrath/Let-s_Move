import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="bg-black bg-opacity-60 text-white py-4 px-6 flex justify-between items-center w-full fixed top-0 z-50">
      {/* Branding */}
      <div className="text-2xl font-bold text-green-500">Let’s Move</div>

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
        <a href="#contact-form" className="hover:text-yellow-400">
          Contact
        </a>
      </nav>

      {/* Hamburger Icon */}
      <div className="md:hidden flex items-center">
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
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-black bg-opacity-60 md:hidden space-y-4 py-4 px-6 z-50">
          <a
            href="#Home"
            onClick={closeMenu}
            className="block hover:text-yellow-400"
          >
            Home
          </a>
          <a
            href="#service"
            onClick={closeMenu}
            className="block hover:text-yellow-400"
          >
            Service
          </a>
          <a
            href="#aboutus"
            onClick={closeMenu}
            className="block hover:text-yellow-400"
          >
            About Us
          </a>
          <a
            href="#contact-form"
            onClick={closeMenu}
            className="block hover:text-yellow-400"
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
