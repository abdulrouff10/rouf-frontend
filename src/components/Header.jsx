import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react'; // Import useState untuk mengelola state

const Header = () => {
  const { pathname } = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State untuk mengontrol menu mobile

  const navLink = (to, label) => (
    <Link
      to={to}
      className={`px-4 py-2 rounded hover:bg-pink-600 hover:text-white transition ${
        pathname === to ? 'bg-pink-600 font-bold text-white' : 'font-semibold text-white'
      }`}
      onClick={() => setIsMenuOpen(false)}
    >
      {label}
    </Link>
  );

  return (
    <header className="bg-gradient-to-r from-violet-800 to-pink-600 shadow-md">
      
      <div className="container mx-auto px-5 py-4 flex justify-start items-center relative gap-4"> 
        
        <h1 className="text-xl font-bold text-white z-10">Rouf Dev</h1> 
        <button
          className="lg:hidden text-white focus:outline-none z-10 absolute right-5" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            )}
          </svg>
        </button>

        
        <nav className="hidden lg:flex space-x-2"> 
          {navLink('/', 'Home')}
          {navLink('/users', 'User List')}
          {navLink('/add', 'Add User')}
          {navLink('/about', 'About')}
          {navLink('/contact', 'Contact')}
        </nav>

       
        <nav
          className={`
            lg:hidden absolute top-0 left-0 w-full h-screen bg-violet-700/95 transition-transform duration-300 ease-in-out
            flex flex-col items-center justify-center space-y-4 text-xl
            ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}
            z-0
          `}
        >
          {navLink('/', 'Home')}
          {navLink('/users', 'User List')}
          {navLink('/add', 'Add User')}
          {navLink('/about', 'About')}
          {navLink('/contact', 'Contact')}
        </nav>
      </div>
    </header>
  );
};

export default Header;