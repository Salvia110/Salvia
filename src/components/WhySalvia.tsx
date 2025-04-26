import "../App.css";
import thumb1 from "../assets/WhySalvia/thumb-1.jpg";
import thumb2 from "../assets/WhySalvia/thumb-2.jpg";
import thumb3 from "../assets/WhySalvia/thumb-3.jpg";
import mainImage from "../assets/WhySalvia/whysalvia.jpg";

const WhySalvia = () => {
  return (
    <section className="w-11/12 mx-auto bg-white py-6 px-2 flex flex-col-reverse md:flex-row items-center justify-between mb-10">
      {/* Left Content (Image) */}
      <div className="relative w-full md:w-1/2 flex justify-center items-center mb-12 md:mb-0">
        {/* Outer Hexagon */}
        <div className="clip-hexagon bg-[var(--primary-color)] p-4 relative mt-16 md:mt-0 w-full h-[35vh] md:h-[70vh] flex items-center justify-center">
          {/* Middle Hexagon */}
          <div className="clip-hexagon bg-white p-4 w-full h-full flex items-center justify-center">
            {/* Inner Hexagon Image */}
            <div className="clip-hexagon w-full h-full overflow-hidden">
              <img
                src={mainImage} // your image
                alt="Eco Friendly"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Small Circles */}
        <div className="absolute top-20 md:top-10 left-1/3 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center">
          <img src={thumb1} alt="Icon" className="w-full rounded-full" />
        </div>

        <div className="absolute top-1/2 right-0 md:right-5 -translate-y-1/2 w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center">
          <img src={thumb2} alt="Icon" className="w-16 h-16 rounded-full" />
        </div>

        <div className="absolute bottom-10 left-1/3 -translate-x-1/2 translate-y-1/2 w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center">
          <img src={thumb3} alt="Icon" className="w-16 h-16 rounded-full" />
        </div>

        {/* 30+ Non Toxic Badge */}
        <div className="absolute bottom-0 md:bottom-7 right-1/4 transform translate-x-1/2 bg-[var(--secondary-color)] text-white rounded-full w-24 h-24 flex flex-col items-center justify-center shadow-lg">
          <span className="text-2xl font-bold">30+</span>
          <span className="text-xs mt-1 text-center leading-tight">
            Eco Products
          </span>
        </div>
      </div>

      {/* Right Content (Text) */}
      <div className="w-full md:w-1/2">
        {/* Small Heading */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 bg-[var(--secondary-color)] rounded-full"></div>
          <p className="text-[var(--secondary-color)] font-semibold tracking-wide uppercase text-sm">
            Why Salvia
          </p>
        </div>

        {/* Main Heading */}
        <h2 className="text-[var(--primary-color)] font-bold text-4xl md:text-5xl leading-tight mb-6">
          Eco-Friendly and Effective Cleaning Solutions
        </h2>

        {/* Features */}
        <div className="space-y-8">
          {/* Feature 1 */}
          <div className="flex items-start gap-4">
            <div className="text-[var(--primary-color)] text-3xl">
              <i className="fas fa-leaf"></i>
            </div>
            <div>
              <h4 className="text-[var(--primary-color)] font-semibold text-xl mb-1">
                Comprehensive Eco Solutions
              </h4>
              <p className="text-gray-600 text-base">
                SALVIA provides a wide range of environment-friendly cleaning
                and hygiene products, ensuring minimal environmental impact
                across industries, corporates, hospitality, healthcare, and
                educational institutions.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-start gap-4">
            <div className="text-[var(--primary-color)] text-3xl">
              <i className="fas fa-recycle"></i>
            </div>
            <div>
              <h4 className="text-[var(--primary-color)] font-semibold text-xl mb-1">
                Commitment to Sustainability
              </h4>
              <p className="text-gray-600 text-base">
                Our focus is on reducing carbon footprints through efficient
                processes, low energy consumption, and sustainable material
                sourcing to build a healthier, cleaner future.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySalvia;
