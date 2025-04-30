import "../App.css";
import mainImage from "../assets/WhySalvia/whysalvia.jpg";

const WhySalvia = () => {
  return (
    <section className="md:w-11/12 mx-auto bg-white py-6 px-4 flex flex-col-reverse md:flex-row items-center justify-between mb-10">
      {/* Left Content (Image) */}
      <div className="relative w-full md:w-1/2 justify-center items-center mb-12 md:mb-0 hidden md:block">
        {/* Outer Hexagon */}
        <div className="clip-hexagon bg-[var(--primary-color)] p-4 relative mt-16 md:mt-0 w-full h-[35vh] md:h-[70vh] flex items-center justify-center">
          {/* Middle Hexagon */}
          <div className="clip-hexagon bg-white p-4 w-full h-full flex items-center justify-center">
            {/* Inner Hexagon Image */}
            <div className="clip-hexagon w-full h-full overflow-hidden">
              <img
                src={mainImage} // your image
                alt="Industrial Cleaning Equipment"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* 30+ Non Toxic Badge */}
        <div className="absolute bottom-0 md:bottom-7 right-1/4 transform translate-x-1/2 bg-[var(--secondary-color)] text-white rounded-full w-24 h-24 flex flex-col items-center justify-center shadow-lg">
          <span className="text-2xl font-bold">50+</span>
          <span className="text-xs mt-1 text-center leading-tight">
            Products
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
          Eco-Friendly and Effective Industrial Cleaning Equipment
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
                Comprehensive Eco-Friendly Equipment
              </h4>
              <p className="text-gray-600 text-base">
                SALVIA provides a wide range of industrial cleaning equipment
                that minimizes environmental impact while ensuring top-tier
                cleaning performance for industries, factories, workshops, and
                commercial establishments.
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
                Our focus is on reducing carbon footprints through the use of
                energy-efficient cleaning equipment and sustainable materials,
                helping your business maintain a clean, green, and healthy
                environment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySalvia;
