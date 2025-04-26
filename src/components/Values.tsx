import {
  ShieldCheck,
  Star,
  Leaf,
  Lightbulb,
  Users,
  Handshake,
} from "lucide-react";

export default function CoreValues() {
  return (
    <section className="w-11/12 mx-auto mb-16 px-6">
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

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition text-center">
          <div className="flex items-center justify-center mb-6">
            <ShieldCheck className="text-[var(--primary-color)] w-12 h-12" />
          </div>
          <h4 className="text-xl font-semibold text-[var(--primary-color)] mb-2">
            Trust
          </h4>
          <p className="text-gray-600">
            Building strong and lasting relationships based on honesty and
            reliability.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition text-center">
          <div className="flex items-center justify-center mb-6">
            <Star className="text-[var(--primary-color)] w-12 h-12" />
          </div>
          <h4 className="text-xl font-semibold text-[var(--primary-color)] mb-2">
            Quality
          </h4>
          <p className="text-gray-600">
            Delivering only the best products and services with attention to
            every detail.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition text-center">
          <div className="flex items-center justify-center mb-6">
            <Leaf className="text-[var(--primary-color)] w-12 h-12" />
          </div>
          <h4 className="text-xl font-semibold text-[var(--primary-color)] mb-2">
            Sustainability
          </h4>
          <p className="text-gray-600">
            Promoting eco-friendly solutions to preserve our environment for
            future generations.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition text-center">
          <div className="flex items-center justify-center mb-6">
            <Lightbulb className="text-[var(--primary-color)] w-12 h-12" />
          </div>
          <h4 className="text-xl font-semibold text-[var(--primary-color)] mb-2">
            Innovation
          </h4>
          <p className="text-gray-600">
            Continuously evolving and embracing new ideas for smarter, cleaner
            solutions.
          </p>
        </div>

        {/* Card 5 */}
        <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition text-center">
          <div className="flex items-center justify-center mb-6">
            <Users className="text-[var(--primary-color)] w-12 h-12" />
          </div>
          <h4 className="text-xl font-semibold text-[var(--primary-color)] mb-2">
            Customer First
          </h4>
          <p className="text-gray-600">
            Prioritizing the needs of our customers to deliver unmatched
            experiences and support.
          </p>
        </div>

        {/* Card 6 */}
        <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition text-center">
          <div className="flex items-center justify-center mb-6">
            <Handshake className="text-[var(--primary-color)] w-12 h-12" />
          </div>
          <h4 className="text-xl font-semibold text-[var(--primary-color)] mb-2">
            Integrity
          </h4>
          <p className="text-gray-600">
            Upholding the highest standards of ethics and professionalism in
            every action.
          </p>
        </div>
      </div>
    </section>
  );
}
