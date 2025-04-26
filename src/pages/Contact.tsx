import "../App.css";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { MapPin, Phone, Mail } from "lucide-react";
import contact from "../assets/contact.gif";
import { BsWhatsapp } from "react-icons/bs";

const ContactPage = () => {
  return (
    <div>
      <Nav />
      <section className="md:w-11/12 mt-5 mx-auto bg-white py-12 px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Left side Illustration */}
        <div className="w-full md:w-1/2 mb-12 md:mb-0 flex justify-center">
          <img src={contact} alt="Contact Illustration" className="w-full" />
        </div>

        {/* Right side Contact Info */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          {/* Small Heading */}
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-[var(--secondary-color)] rounded-full"></div>
            <p className="text-[var(--secondary-color)] font-semibold tracking-wide uppercase text-sm">
              Get in touch
            </p>
          </div>

          {/* Main Heading */}
          <h2 className="text-[var(--primary-color)] font-bold text-4xl md:text-5xl leading-tight mb-6">
            Have a question to ask us?
          </h2>

          {/* Sub Text */}
          <p className="text-gray-600 mb-8">
            To get in touch with us, please submit the form below or use given
            contact information.
          </p>

          {/* Chat on WhatsApp */}
          <div className="flex items-center gap-4 mb-12">
            <div className="bg-gray-200 text-[var(--secondary-color)] p-3 rounded-full">
              <BsWhatsapp className="h-8 w-8" />
            </div>

            <div>
              <p className="text-[var(--primary-color)] font-semibold text-lg">
                Chat On Whatsapp
              </p>
              <a
                href="https://wa.me/+917838852591"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-light)] hover:text-[var(--secondary-color)] text-sm font-semibold flex items-center gap-2 mt-1"
              >
                CHAT NOW →
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16 w-11/12 mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 text-center md:divide-x md:divide-gray-300">
          {/* Address Section */}
          <div className="flex flex-col items-center px-4">
            <div className="bg-gray-100 text-[var(--secondary-color)] p-4 rounded-full mb-4">
              <MapPin className="h-8 w-8" />
            </div>
            <h4 className="text-green-700 font-semibold text-xl mb-2">
              Address
            </h4>
            <div className="text-gray-600 text-sm max-w-xs space-y-4">
              <div>
                <h5 className="font-semibold">Head Office</h5>
                <p>
                  17/6, Mathura Road, Sarpanch Colony, Sector 20A, Faridabad
                  121007, Haryana, INDIA.
                </p>
              </div>
              <div>
                <h5 className="font-semibold">Registered Office</h5>
                <p>
                  F-607, Adore Happy Homes, Sector 86, Faridabad 1210070,
                  Haryana, INDIA.
                </p>
              </div>
            </div>
          </div>

          {/* Phone Section */}
          <div className="flex flex-col items-center px-4">
            <div className="bg-gray-100 text-[var(--secondary-color)] p-4 rounded-full mb-4">
              <Phone className="h-8 w-8" />
            </div>
            <h4 className="text-green-700 font-semibold text-xl mb-2">Phone</h4>
            <p className="text-green-700 font-bold text-sm">+91 7838852591</p>
            <p className="text-gray-600 text-sm mt-1">
              Mon to Sat: 9:00am to 5:00pm
            </p>
            <p className="text-gray-600 text-xs">Sun: Closed</p>
          </div>

          {/* Email Section */}
          <div className="flex flex-col items-center px-4">
            <div className="bg-gray-100 text-[var(--secondary-color)] p-4 rounded-full mb-4">
              <Mail className="h-8 w-8" />
            </div>
            <h4 className="text-green-700 font-semibold text-xl mb-2">Email</h4>
            <p className="text-green-700 font-bold text-sm">
              <a
                href="mailto:salvia.salescorp@gmail.com"
                className="hover:underline"
              >
                salvia.salescorp@gmail.com
              </a>
            </p>
            <p className="text-gray-600 text-sm mt-1">
              To better connect with our team, send your mail.
            </p>
          </div>
        </div>
      </section>

      <div className="w-5/6 mx-auto my-8">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28080.466848717257!2d77.3271024273882!3d28.38730535113677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cddaa1522a64d%3A0xea69544c05ed426d!2sAdore%20society%20sec%2086%20faridabad!5e0!3m2!1sen!2sin!4v1745686653326!5m2!1sen!2sin"
          width="100%"
          height="450"
          className="rounded-xl shadow-md"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <Footer />
    </div>
  );
};

export default ContactPage;
