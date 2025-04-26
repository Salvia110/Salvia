import { useEffect, useState } from "react";
import image1 from "../assets/banner-1.jpg";
import image2 from "../assets/banner-2.jpg";
import image3 from "../assets/banner-3.jpg";
import Nav from "./Nav";

const slides = [
  {
    image: image1,
    heading: "Eco-Friendly Cleaning Solutions for a Healthier Tomorrow",
    description:
      "Revolutionizing Hygiene with Non-Toxic Innovations for Industries, Offices, and Homes.",
  },
  {
    image: image2,
    heading: "Clean Spaces, Healthier Lives",
    description:
      "Your Trusted Partner for Eco-Friendly Cleaning and Hygiene Solutions.",
  },
  {
    image: image3,
    heading: "Commitment to a Cleaner, Greener Future",
    description:
      "Harnessing the Power of Nature for Safe, Sustainable Environments.",
  },
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentSlide = slides[currentImage];

  return (
    <div className="font-sans">
      <Nav />
      {/* Hero Section */}
      <div className="relative h-[80vh] text-white flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <img
          src={currentSlide.image}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[var(--primary-color)]">
            {currentSlide.heading}
          </h1>
          <p className="mb-6 text-lg text-white">{currentSlide.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
