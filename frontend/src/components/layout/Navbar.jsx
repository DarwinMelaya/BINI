import { useState } from "react";
import logo from "../../assets/bini-logo.webp";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#7DD1D8] px-4 md:px-8 py-2.5 sticky top-0 z-50 shadow-md">
      <div className="flex items-center justify-between md:justify-center gap-4 md:gap-8 max-w-7xl mx-auto">
        {/* Logo with hover effect */}
        <a
          href="/"
          className="text-white text-2xl font-bold transition-transform hover:scale-105"
        >
          <img src={logo} alt="BINI" className="w-[60px]" />
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Navigation Links - responsive */}
        <div
          className={`
          absolute md:relative top-full left-0 w-full md:w-auto
          bg-[#7DD1D8] md:bg-transparent
          ${isMenuOpen ? "flex" : "hidden"} md:flex
          flex-col md:flex-row
          items-center
          space-y-4 md:space-y-0 md:space-x-8
          py-4 md:py-0
        `}
        >
          <NavLink href="/profile">Profile</NavLink>
          <NavLink href="/music">Music</NavLink>
          <NavLink href="/videos">Videos</NavLink>
          <NavLink href="/gallery">Gallery</NavLink>
          <NavLink href="/shop">Shop</NavLink>
          <NavLink href="/events">Events</NavLink>
          <NavLink href="/articles">Articles</NavLink>
          <NavLink href="/subscribe">Subscribe</NavLink>
        </div>

        {/* Membership Button with enhanced styling */}
        <button
          className="hidden md:block bg-white rounded-full px-6 py-2 text-sm text-[#7DD1D8] font-medium
          transition-all duration-300 hover:bg-opacity-90 hover:shadow-lg
          active:transform active:scale-95"
        >
          Exclusive Membership
        </button>
      </div>
    </nav>
  );
};

// Enhanced NavLink component
const NavLink = ({ href, children }) => {
  const handleClick = (e) => {
    e.preventDefault();
    const targetId = href.replace("/", "");
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className="text-white text-sm font-medium relative group
        transition-colors duration-300 hover:text-opacity-90"
    >
      {children}
      <span
        className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300
        group-hover:w-full"
      ></span>
    </a>
  );
};

export default Navbar;
