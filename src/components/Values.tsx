import { useState } from "react";
import {
  ShieldCheck,
  Star,
  Leaf,
  Lightbulb,
  Users,
  Handshake,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function CoreValues() {
  const cards = [
    {
      icon: ShieldCheck,
      title: "Trust",
      description:
        "Building strong and lasting relationships based on honesty and reliability.",
    },
    {
      icon: Star,
      title: "Quality",
      description:
        "Delivering only the best products and services with attention to every detail.",
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description:
        "Promoting eco-friendly solutions to preserve our environment for future generations.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "Continuously evolving and embracing new ideas for smarter, cleaner solutions.",
    },
    {
      icon: Users,
      title: "Customer First",
      description:
        "Prioritizing the needs of our customers to deliver unmatched experiences and support.",
    },
    {
      icon: Handshake,
      title: "Integrity",
      description:
        "Upholding the highest standards of ethics and professionalism in every action.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
  };

  const Icon = cards[currentIndex].icon;

  return (
    <section className="md:w-11/12 mx-auto mb-16 md:px-4">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-[var(--primary-color)] font-bold text-4xl md:text-5xl mb-4">
          Driven by Values, Powered by Purpose
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-base leading-relaxed">
          At SALVIA Sales Corporation, our core principles inspire every action,
          every innovation, and every partnership. We are committed to creating
          meaningful impact for our customers and communities.
        </p>
      </div>

      {/* Mobile View - Only One Card with Arrows */}
      <div className="sm:hidden relative flex items-center justify-center">
        <button
          onClick={handlePrev}
          className="absolute left-0 p-2 rounded-full bg-gray-200 hover:bg-gray-300"
        >
          <ChevronLeft className="w-6 h-6 text-[var(--secondary-color)]" />
        </button>

        <div className="bg-white p-4 rounded-2xl shadow-md text-center w-80">
          <div className="flex items-center justify-center mb-6">
            <Icon className="text-[var(--primary-color)] w-12 h-12" />
          </div>
          <h4 className="text-xl font-semibold text-[var(--primary-color)] mb-2">
            {cards[currentIndex].title}
          </h4>
          <p className="text-gray-600">{cards[currentIndex].description}</p>
        </div>

        <button
          onClick={handleNext}
          className="absolute right-0 p-2 rounded-full bg-gray-200 hover:bg-gray-300"
        >
          <ChevronRight className="w-6 h-6 text-[var(--secondary-color)]" />
        </button>
      </div>

      {/* Desktop View - Grid of Cards */}
      <div className="hidden sm:grid grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <card.icon className="text-[var(--primary-color)] w-12 h-12" />
            </div>
            <h4 className="text-xl font-semibold text-[var(--primary-color)] mb-2">
              {card.title}
            </h4>
            <p className="text-gray-600">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
