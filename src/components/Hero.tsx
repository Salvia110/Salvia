import { useEffect, useState } from "react";
import image1 from "../assets/banner-1.jpg";
import image2 from "../assets/banner-2.jpg";
import image3 from "../assets/banner-3.jpg";
import Nav from "./Nav";

const slides = [
  {
    image: image1,
    heading: "Step Towards Green World",
    description:
      "Find Our Non Toxic & Non Chemical Range Of Products For Better World",
  },
  {
    image: image2,
    heading: "Healthy Products, Healthy Planet",
    description:
      "Our Eco-friendly Innovations Are Changing Lives One Product At A Time",
  },
  {
    image: image3,
    heading: "Nature-Powered Living",
    description:
      "Say Yes To Organic, Say Yes To Sustainability With Our Unique Range",
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
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {currentSlide.heading}
          </h1>
          <p className="mb-6 text-lg">{currentSlide.description}</p>
          <div className="flex justify-center space-x-6">
            <div className="bg-green-700 p-4 rounded-xl">
              <div className="text-xl font-bold">15+</div>
              <div className="text-sm">Categories</div>
            </div>
            <div className="bg-green-700 p-4 rounded-xl">
              <div className="text-xl font-bold">30+</div>
              <div className="text-sm">Products</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
