import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="px-6 md:px-10 py-6 flex justify-between items-center shadow-sm sticky top-0 bg-gradient-to-r from-[#0e0e2c] to-black z-50">
      {/* Logo Image */}
          <Link to="/" className="flex items-center">
  <img 
    src="/Images/logo1.png" 
    alt="Logo" 
    className="h-16 w-auto object-contain"


  />
</Link>

      {/* Centered Navigation (Hidden on mobile) */}
      <div className="hidden md:flex justify-center flex-grow space-x-8 text-lg font-medium text-gray-200">
        {["about", "portfolio", "services", "contact"].map((item) => (
          <Link key={item} to={`/${item}`} className="relative group transition duration-300 capitalize">
            <span className="group-hover:text-white transition">{item}</span>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
        ))}
      </div>

      {/* "Get Started" Button (Visible on desktop, hidden on mobile) */}
      <div className="hidden md:block ml-4">
        <Link to="/contact">
          <button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 transition duration-300 text-white font-semibold px-5 py-1.5 rounded-full shadow-lg hover:shadow-purple-500/40 text-lg">
            Get Started
          </button>
        </Link>
      </div>

      {/* Mobile Menu Toggle (Hamburger icon for mobile) */}
      <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden" aria-label="Toggle menu">
        {menuOpen ? (
          <X className="text-white w-6 h-6" />
        ) : (
          <Menu className="text-white w-6 h-6" />
        )}
      </button>

      {/* Mobile Menu (Visible only when menu is open) */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#0e0e2c] py-4 px-6 flex flex-col space-y-4 md:hidden shadow-md z-50">
          {["about", "portfolio", "services", "contact"].map((item) => (
            <Link 
              key={item} 
              to={`/${item}`} 
              className="text-gray-300 text-base font-medium hover:text-white transition capitalize" 
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            <button className="w-full mt-4 bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 transition duration-300 text-white font-semibold px-5 py-1.5 rounded-full shadow-md text-lg">
              Get Started
            </button>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
