import React from "react";
import logo from "../assets/logo.png";
import bg from "../assets/full-shot-man-vacuuming-office-f.jpg";

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-green-800 text-white pt-10 pb-6 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={bg} // replace with your background image path
          alt="Footer Background"
          className="w-full h-full md:object-center opacity-20"
        />
        <div className="absolute inset-0 bg-green-900 opacity-70"></div>{" "}
        {/* Dark overlay */}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-10">
        {/* Company Info */}
        <div>
          <img src={logo} alt="VIKR Logo" className="w-40 mb-4" />
          <h2 className="text-lg font-bold mb-2">VIKR Bioscience PVT. LTD</h2>
          <p className="mb-2">
            58, 2nd floor, Swastik Plaza, Near Kala Niketan Showroom, Juhu,
            Mumbai, Maharashtra 400049.
          </p>
          <div className="space-y-1">
            <p>📧 info@vikrlife.com</p>
            <p>📧 care@vikrlife.com</p>
            <p>📞 +91-2279660144</p>
            <p>📞 +91-7977995122</p>
          </div>
          <div className="flex gap-4 mt-4">
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
        <div>
          <h3 className="text-xl font-semibold mb-4">Useful Links</h3>
          <ul className="space-y-2">
            {[
              "Home",
              "About",
              "Gallery",
              "Catalog",
              "Our Blogs",
              "Term & Condition",
            ].map((link, idx) => (
              <li key={idx}>
                <a href="#" className="hover:underline">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Gallery */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Gallery</h3>
          <div className="grid grid-cols-3 gap-2">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <img
                key={i}
                src={`/gallery${i}.png`} // replace with your gallery images
                alt={`Gallery ${i}`}
                className="rounded shadow-md"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="relative z-10 mt-10 border-t border-green-700 pt-4 text-center text-sm">
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
