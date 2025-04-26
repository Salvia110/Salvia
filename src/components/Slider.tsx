import React, { useEffect, useRef } from "react";
import img1 from "../assets/product catogory/G07.jpg";
import img2 from "../assets/product catogory/Hygiene-Trolley.jpg";
import img3 from "../assets/product catogory/d3.jpg";
import img4 from "../assets/product catogory/images.jpg";
import img5 from "../assets/product catogory/wet-dry-vacuum-cleaner-250x250.webp";
import img6 from "../assets/product catogory/1704717300927-watmrkA.webp";
import img7 from "../assets/product catogory/4276a1_a4a36dd4058c4e3fb0f482d47d16b3c7~mv2.avif";
import img8 from "../assets/product catogory/Flipper-1.webp";
import img9 from "../assets/product catogory/unnamed.jpg";
import img10 from "../assets/product catogory/wet-dry-vacuum-cleaner-250x250.webp";

const ProductCategories: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const scrollSpeed = 1; // control how fast it scrolls
    const interval = setInterval(() => {
      if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
        slider.scrollLeft = 0;
      } else {
        slider.scrollLeft += scrollSpeed;
      }
    }, 20);

    return () => clearInterval(interval);
  }, []);

  const products = [
    {
      title: "Mosquito Defence",
      image: img1,
      bgColor: "bg-[var(--secondary-color)]",
    },
    {
      title: "Bio Handwash",
      image: img2,
      bgColor: "bg-[var(--secondary-color)]",
    },
    {
      title: "Bio Degreaser",
      image: img3,
      bgColor: "bg-[var(--secondary-color)]",
    },
    {
      title: "Stainless Steel Polish",
      image: img4,
      bgColor: "bg-[var(--secondary-color)]",
    },
    {
      title: "Wet & Dry Vacuum Cleaner",
      image: img5,
      bgColor: "bg-[var(--secondary-color)]",
    },
    {
      title: "Wet & Dry Vacuum Cleaner",
      image: img6,
      bgColor: "bg-[var(--secondary-color)]",
    },
    {
      title: "Wet & Dry Vacuum Cleaner",
      image: img7,
      bgColor: "bg-[var(--secondary-color)]",
    },
    {
      title: "Wet & Dry Vacuum Cleaner",
      image: img8,
      bgColor: "bg-[var(--secondary-color)]",
    },
    {
      title: "Wet & Dry Vacuum Cleaner",
      image: img9,
      bgColor: "bg-[var(--secondary-color)]",
    },
    {
      title: "Wet & Dry Vacuum Cleaner",
      image: img10,
      bgColor: "bg-green-700",
    },
  ];

  return (
    <section className="py-12 bg-white">
      <h2 className="text-4xl font-bold text-center text-[var(--secondary-color)] mb-10">
        Our Product Categories
      </h2>

      <div className="relative">
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-scroll scrollbar-hide"
        >
          {products.map((product, index) => (
            <div
              key={index}
              className="group relative w-48 sm:w-60 md:w-72 flex-shrink-0 bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-64 object-contain transition-transform duration-500"
              />
              <div
                className={`absolute bottom-0 w-full ${product.bgColor} text-white text-center py-2 opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              >
                {product.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
