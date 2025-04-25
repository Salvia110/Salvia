import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo2.png";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="font-sans">
      {/* Top Contact Bar */}
      <div className="bg-green-600 text-white text-sm flex justify-between px-4 md:px-8 py-2 md:py-3">
        <div>Toll Free: +91-2279660144</div>
        <div className="hidden md:flex space-x-4">
          <button className="hover:underline transition">CATALOG</button>
          <button className="hover:underline transition">
            CORPORATE OFFICE
          </button>
          <button className="hover:underline transition">FAQ</button>
          <button className="hover:underline transition">FEEDBACK</button>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-white shadow-md flex justify-between items-center px-4 md:px-8 py-3 relative">
        {/* Logo */}
        <div>
          <img src={logo} alt="Logo" className="w-32 md:w-36" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-sm font-semibold text-gray-800">
          <a href="#" className="hover:text-green-700 transition">
            HOME
          </a>
          <a href="#" className="hover:text-green-700 transition">
            PRODUCTS
          </a>
          <a href="#" className="hover:text-green-700 transition">
            ABOUT US
          </a>
          <a href="#" className="hover:text-green-700 transition">
            MEDIA
          </a>
        </nav>

        {/* CTA */}
        <div className="hidden md:flex bg-green-800 text-white p-2 px-4 rounded-full text-xs items-center hover:bg-green-700 transition">
          <span className="mr-2">CONTACT US</span>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-green-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-start px-6 py-4 space-y-4 z-50 text-sm font-medium text-gray-800 md:hidden">
            <a href="#" className="hover:text-green-700 transition">
              HOME
            </a>
            <a href="#" className="hover:text-green-700 transition">
              PRODUCTS
            </a>
            <a href="#" className="hover:text-green-700 transition">
              ABOUT US
            </a>
            <a href="#" className="hover:text-green-700 transition">
              MEDIA
            </a>
            <div className="w-full">
              <button className="bg-green-700 text-white w-full py-2 rounded-full text-xs hover:bg-green-600 transition">
                CONTACT US
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Nav;
