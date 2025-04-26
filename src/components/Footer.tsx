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
        <div className="absolute inset-0 bg-green-900 opacity-70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col gap-10">
        {/* Bottom Part: 3 Columns (Logo - Useful Links - Address) */}
        <div className="flex flex-col justify-center items-center md:flex-row w-full md:justify-between gap-10 text-center md:text-left">
          {/* Logo Section */}
          <div className="flex-1 flex justify-center md:justify-start">
            <img src={logo} alt="VIKR Logo" className="w-40 md:w-64" />
          </div>

          {/* Useful Links */}
          <div className="flex-1 flex flex-col items-center md:items-start">
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

          {/* Address */}
          <div className="flex-1 flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4">Address</h3>

            {/* Head Office */}
            <div className="mb-6">
              <h4 className="font-semibold mb-2">Head Office</h4>
              <p className="text-sm leading-relaxed text-center md:text-left">
                17/6,Mathura Road ,Sarpanch Colony,Sector20A,Faridabad
                121007,Haryana,INDIA.
              </p>
            </div>

            {/* Registered Office */}
            <div className="mb-6">
              <h4 className="font-semibold mb-2">Registered Office</h4>
              <p className="text-sm leading-relaxed text-center md:text-left">
                F-607,Adore Happy Homes,Sector 86,Faridabad
                1210070,Haryana,INDIA
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-1 text-sm text-center md:text-left">
              <p>
                📧{" "}
                <a
                  href="mailto:salvia.salescorp@gmail.com"
                  className="hover:underline"
                >
                  salvia.salescorp@gmail.com
                </a>
              </p>
              <p>
                📞{" "}
                <a href="tel:+917838852591" className="hover:underline">
                  +91 7838852591
                </a>
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 justify-center md:justify-start mt-3 text-lg">
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
        </div>
      </div>

      {/* Bottom Line */}
      <div className="relative z-10 mt-8 border-t border-green-700 pt-4 text-center text-xs md:text-sm">
        <p>
          © 2024 <span className="font-semibold">Salvia.</span> All Rights
          Reserved.
        </p>
        <p className="mt-1">
          Designed & Developed By{" "}
          <a
            href="https://www.instagram.com/kreatixdigital/" // replace with the actual URL if different
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold hover:underline"
          >
            Kreatix Digital
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
