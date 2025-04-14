import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-12 pb-6">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div>
          <h2 className="text-2xl font-bold text-yellow-500">
            Let's <span className="text-white">Move</span>
          </h2>
          <p className="mt-3 text-sm text-gray-400">
            We simplify your digital journey with expert-driven solutions in web
            development, UI/UX design, and digital marketing—trusted by
            businesses, powered by creativity.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="#Home">Home</a>
            </li>
            <li>
              <a href="#service">Services</a>
            </li>
            <li>
              <a href="#News">News</a>
            </li>
            <li>
              <a href="#aboutus">About Us</a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Get in Touch</h3>
          <ul className="text-gray-400 text-sm space-y-2">
            <li>📍 Bengaluru</li>
            <li>📞 7204385451</li>
            <li>✉️ letsmovesolution@gmail.com</li>
          </ul>
        </div>

        {/* Subscribe 
        <div>
          <h3 className="font-semibold text-lg mb-3">Subscribe to News</h3>
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-2 rounded bg-gray-800 text-white placeholder-gray-400"
          />
          <button
            className="mt-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-4 rounded w-full"
            disabled
          >
            SUBSCRIBE NOW
          </button>
        </div>*/}
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-6 px-4 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
        <p>
          © Let's Move Solutions {new Date().getFullYear()} | All Rights
          Reserved
        </p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-white">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-white">
            <FaTwitter />
          </a>
          <a
            href="https://www.instagram.com/letsmove.in?igsh=MWMyOGZndXlqaHJhOA=="
            className="hover:text-white"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
