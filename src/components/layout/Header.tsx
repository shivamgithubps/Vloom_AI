import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const logo = '/images/logo.svg';

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-[#151b22] text-white py-4 px-6 md:px-10 lg:px-20">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="VloomAi Logo" className="h-8 mr-2" />
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/about-us" className="hover:text-blue-400 transition-colors">About Us</Link>
          <Link to="/pricing" className="hover:text-blue-400 transition-colors">Pricing</Link>
          <Link to="/features" className="hover:text-blue-400 transition-colors">Features</Link>
          <Link to="/blog" className="hover:text-blue-400 transition-colors">Blog</Link>
          <Link to="/education" className="hover:text-blue-400 transition-colors">Education</Link>
          <Link to="/enterprise" className="hover:text-blue-400 transition-colors">Studios</Link>
        </nav>

        <div className="hidden md:block">
          <Link to="/login" className="bg-[#1f6cdb] hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors">
            Log in
          </Link>
        </div>

        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-[#151b22] mt-2 py-2 px-4 rounded-lg shadow-lg">
          <div className="flex flex-col space-y-2">
            <Link to="/about-us" className="text-white hover:text-blue-400 py-2 transition-colors">About Us</Link>
            <Link to="/pricing" className="text-white hover:text-blue-400 py-2 transition-colors">Pricing</Link>
            <Link to="/features" className="text-white hover:text-blue-400 py-2 transition-colors">Features</Link>
            <Link to="/blog" className="text-white hover:text-blue-400 py-2 transition-colors">Blog</Link>
            <Link to="/education" className="text-white hover:text-blue-400 py-2 transition-colors">Education</Link>
            <Link to="/enterprise" className="text-white hover:text-blue-400 py-2 transition-colors">Studios</Link>
            <Link to="/login" className="bg-[#1f6cdb] hover:bg-blue-600 text-white text-center px-4 py-2 rounded-md transition-colors">
              Log in
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
