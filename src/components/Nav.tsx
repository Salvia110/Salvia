import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo2.png";
import "../App.css";
import catalog from "../assets/Catalog.pdf";
import { FaPhoneAlt } from "react-icons/fa";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="font-sans text-[15px]">
      {/* Top Contact Bar */}
      {!isScrolled && (
        <div className="bg-[var(--primary-color)] text-white hidden md:block transition-all duration-300">
          <div className="w-11/12 mx-auto flex justify-between items-center px-2 md:px-4 py-2 md:py-3 text-inherit">
            <div className="flex items-center space-x-2">
              <FaPhoneAlt className="text-white" size={20} /> {/* Phone Icon */}
              <span>+91 7838852591</span>
            </div>
            <div className="hidden md:flex space-x-6">
              <a href={catalog} target="_blank" rel="noopener noreferrer">
                <button className="hover:text-[var(--text-light)] transition cursor-pointer">
                  DOWNLOAD CATALOG
                </button>
              </a>

              <button className="hover:text-[var(--text-light)] transition cursor-pointer">
                CORPORATE OFFICE
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Navbar */}
      <div
        className={`bg-white shadow-md transition-all duration-300 ${
          isScrolled ? "fixed top-0 left-0 right-0 z-50" : ""
        }`}
      >
        <div className="md:w-11/12 mx-auto flex justify-between items-center px-6 md:px-4 py-3 relative">
          {/* Logo */}
          <div>
            <a href="/">
              <img src={logo} alt="Logo" className="w-32 md:w-36" />
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 font-semibold text-gray-800">
            <a
              href="/"
              className="hover:text-[var(--secondary-color)] transition"
            >
              HOME
            </a>
            <a
              href="#"
              className="hover:text-[var(--secondary-color)] transition"
            >
              PRODUCTS
            </a>
            <a
              href="/about"
              className="hover:text-[var(--secondary-color)] transition"
            >
              ABOUT US
            </a>
            <a
              href="#"
              className="hover:text-[var(--secondary-color)] transition"
            >
              MEDIA
            </a>
          </nav>

          {/* CTA */}
          <div className="hidden md:flex bg-[var(--secondary-color)] text-white p-2 px-5 rounded-full text-xs items-center hover:bg-[var(--primary-color)] transition cursor-pointer">
            <span className="mr-2">CONTACT US</span>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-[var(--secondary-color)]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Mobile Overlay */}
          {isOpen && (
            <div className="fixed top-70 inset-0 bg-white/60 backdrop-blur-sm z-40"></div>
          )}

          {/* Mobile Dropdown Menu */}
          {isOpen && (
            <div className="absolute top-full left-0 w-full bg-white/70 backdrop-blur-md shadow-md flex flex-col items-center px-6 py-6 space-y-5 z-50 text-gray-800 md:hidden">
              <a
                href="/"
                className="hover:text-[var(--secondary-color)] transition"
              >
                HOME
              </a>
              <a
                href="#"
                className="hover:text-[var(--secondary-color)] transition"
              >
                PRODUCTS
              </a>
              <a
                href="/about"
                className="hover:text-[var(--secondary-color)] transition"
              >
                ABOUT US
              </a>
              <a
                href="#"
                className="hover:text-[var(--secondary-color)] transition"
              >
                MEDIA
              </a>
              <div>
                <button className="bg-[var(--secondary-color)] text-white w-fit px-3 py-2 rounded-full text-xs hover:bg-[var(--primary-color)] transition">
                  CONTACT US
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      {isScrolled && <div className="h-36 md:h-40"></div>}
    </header>
  );
}

export default Nav;
