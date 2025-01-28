import { useState } from "react";
import { Link } from "react-router";
import { useTheme } from "../utils/useContextTheme";
import useOnlineCheck from "../utils/useOnlineCheck";
import { useSelector} from "react-redux";

const OnlineStatusIndicator = ({ online }) => (
  <div className="flex items-center gap-2 text-sm">
    <span
      className={`inline-block w-3 h-3 rounded-full ${
        online ? "bg-green-500" : "bg-red-500"
      }`}
    ></span>
    <span className={`${online ? "text-green-600" : "text-red-600"} font-medium`}>
      {online ? "Online" : "Offline"}
    </span>
  </div>
);

export const Header = () => {
  const [buttonText, setButtonText] = useState("Login");
  const onlineStatus = useOnlineCheck();
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleClick = () => {
    setButtonText((prev) => (prev === "Login" ? "Logout" : "Login"));
  };


  //subscribing to store using selector 
  const cart = useSelector((store)=>store.cart.items)
  console.log(cart)
  return (
    <header
      className={`bg-black ${theme === "dark" ? "bg-black" : "bg-blue-500"} md:bg-gradient-to-r text-white shadow-lg transition-all duration-300`}
    >
      <div className="container mx-auto flex justify-between items-center px-6 py-4 lg:px-12">
        {/* Logo Section */}
        <div className="flex items-center">
          <img
            className="w-20 h-20 rounded-full border-2 border-white transition-all transform hover:scale-105"
            src="https://imgs.search.brave.com/gNn_V0Bu6eSO-ep8OOpQ2PQ2zawEDgE6dNZRRWODeqI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9keW5h/bWljLmJyYW5kY3Jv/d2QuY29tL2Fzc2V0/L2xvZ28vNTM3MDM2/NjMtZjJlYS00ZTgx/LThiODktNDQ5NjVi/MDczODAwL2xvZ28t/c2VhcmNoLWdyaWQt/MXg_bG9nb1RlbXBs/YXRlVmVyc2lvbj0y/JnY9NjM4NDMyNzE2/Mjc2ODcwMDAw.jpeg"
            alt="Logo"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-lg">
          <Link to="/" className="hover:text-yellow-300 transition-all">
            Home
          </Link>
          <Link to="/contact" className="hover:text-yellow-300 transition-all">
            Contact
          </Link>
          <Link to="/about" className="hover:text-yellow-300 transition-all">
            About
          </Link>
          <button
            className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all duration-200 transform hover:scale-105"
            onClick={handleClick}
            aria-label="Login or Logout"
          >
            {buttonText}
          </button>
          <OnlineStatusIndicator online={onlineStatus} />

          {/* Theme Toggle */}
          <label
            htmlFor="theme-toggle"
            className="flex items-center gap-2 cursor-pointer"
          >
            <span className="hidden sm:block">Dark Mode</span>
            <input
              type="checkbox"
              id="theme-toggle"
              checked={theme === "dark"}
              onChange={toggleTheme}
              className="w-12 h-6 bg-gray-300 rounded-full cursor-pointer transition-all duration-300 transform"
            />
          </label>
          <li className="font-bold ">Cart items {cart.length} </li>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div
          className={`bg-black ${theme === "dark" ? "bg-black" : "bg-blue-500"} md:bg-gradient-to-r text-white shadow-lg transition-all duration-300`}
        >
          <nav className="flex flex-col items-center gap-4 py-4 text-lg">
            <Link
              to="/"
              className="hover:text-yellow-300 transition-all"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/contact"
              className="hover:text-yellow-300 transition-all"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/about"
              className="hover:text-yellow-300 transition-all"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <button
              className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all duration-200 transform hover:scale-105"
              onClick={handleClick}
              aria-label="Login or Logout"
            >
              {buttonText}
            </button>
            <OnlineStatusIndicator online={onlineStatus} />
          </nav>
          <label
            htmlFor="theme-toggle"
            className="flex items-center gap-2 cursor-pointer md:hidden"
          >
            <span>Dark Mode</span>
            <input
              type="checkbox"
              id="theme-toggle"
              checked={theme === "dark"}
              onChange={toggleTheme}
              className="w-12 h-6 bg-gray-300 rounded-full cursor-pointer transition-all duration-300 transform"
            />
          </label>
         
        </div>
      )}
    </header>
  );
};

export default Header;
