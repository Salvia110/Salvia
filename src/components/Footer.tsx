import React from "react";
import logo from "../assets/logo.png";
import bg from "../assets/full-shot-man-vacuuming-office-f.jpg";

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-green-800 text-white py-10 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={bg}
          alt="Footer Background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-green-900 opacity-70"></div>{" "}
        {/* Dark overlay */}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col md:flex-row md:justify-between items-start gap-10">
        {/* Company Info */}
        <div className="flex-1">
          <img src={logo} alt="VIKR Logo" className="w-32 mb-2" />
          <h2 className="text-md font-bold mb-2">VIKR Bioscience PVT. LTD</h2>
          <p className="text-sm leading-relaxed mb-2">
            58, 2nd floor, Swastik Plaza, Near Kala Niketan Showroom, Juhu,
            Mumbai, Maharashtra 400049.
          </p>
          <div className="space-y-1 text-sm">
            <p>📧 info@vikrlife.com</p>
            <p>📧 care@vikrlife.com</p>
            <p>📞 +91-2279660144</p>
            <p>📞 +91-7977995122</p>
          </div>
          <div className="flex gap-3 mt-3 text-lg">
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#">
              <i className="fab fa-x-twitter"></i>
            </a>
          </div>
        </div>

        {/* Useful Links */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
          <ul className="space-y-2 text-sm">
            {["Home", "About", "Product", "Media"].map((link, idx) => (
              <li key={idx}>
                <a href="#" className="hover:underline">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Gallery */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-4">Gallery</h3>
          <div className="grid grid-cols-3 gap-2">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <img
                key={i}
                src={`/gallery${i}.png`}
                alt={`Gallery ${i}`}
                className="rounded-md shadow-sm object-cover h-16 w-full"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="relative z-10 mt-8 border-t border-green-700 pt-4 text-center text-xs md:text-sm">
        <p>
          © 2024 <span className="font-semibold">Vikr BioScience.</span> All
          Rights Reserved.
        </p>
        <p className="mt-1">
          Designed & Developed By{" "}
          <span className="font-semibold">Bito Technologies</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
