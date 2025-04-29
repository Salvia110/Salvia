import { Phone } from "lucide-react";
import AboutUs from "../components/About";
import WhatsAppButton from "../components/FloatingBtn";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import ProductCategories from "../components/Slider";
import WhySalvia from "../components/WhySalvia";
import { FaWhatsapp } from "react-icons/fa";

function Landing() {
  return (
    <div>
      <Hero />
      <ProductCategories />
      <AboutUs />
      <WhySalvia />
      <Footer />
      <div className="hidden md:block">
        <WhatsAppButton />
      </div>
      <div className="fixed bottom-0 left-0 w-full z-50 flex md:hidden">
        <a
          href="tel:+917838852591"
          className="w-1/2 bg-[var(--secondary-color)] text-black text-center py-4 font-semibold transition-all flex items-center justify-center gap-2"
        >
          <Phone size={20} />
          Call Me
        </a>
        <a
          href="https://wa.me/+917838852591"
          className="w-1/2 bg-[var(--primary-color)] text-black text-center py-4 font-semibold transition-all flex items-center justify-center gap-2"
        >
          <FaWhatsapp size={20} />
          Watsapp Me
        </a>
      </div>
    </div>
  );
}

export default Landing;
