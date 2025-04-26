import image1 from "../assets/banner-4.jpg";
import "../App.css";
import catelog from "../assets/Catalog.pdf";

const AboutUs = () => {
  return (
    <section className="w-11/12 mx-auto bg-white py-12 px-6 flex flex-col md:flex-row items-center justify-between">
      {/* Left Content */}
      <div className="w-full md:w-1/2">
        {/* Small Heading */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 bg-[var(--secondary-color)] rounded-full"></div>
          <p className="text-[var(--secondary-color)] font-semibold tracking-wide uppercase text-sm">
            About Us
          </p>
        </div>

        {/* Main Heading */}
        <h2 className="text-[var(--primary-color)] font-bold text-4xl md:text-5xl leading-tight mb-6">
          Professional in <br /> Industry
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-base leading-relaxed mb-8">
          SALVIA Sales Corporation is a fast-growing, multidimensional company
          based in Faridabad, India, specializing in Cleaning and Hygiene
          solutions. Our services cater to industries, auto workshops,
          multiplexes, hotels, hospitals, schools & colleges, railway stations,
          housekeeping agencies, corporates, and offices.
          <br />
          <br />
          With extensive knowledge and experience, we deliver practical,
          cost-effective solutions for today's environmental demands. We are
          committed to offering eco-friendly products and certified equipment.
          <br />
          <br />
          Our qualified professionals support all your sales and after-sales
          needs across India. We also conduct trainings and seminars to upskill
          your teams with modern cleaning and hygiene techniques.
        </p>

        {/* Download Catalog Button */}
        <a
          href={catelog} // path to your catalog file
          download
          className="inline-block bg-[var(--primary-color)] text-white font-semibold py-3 px-6 rounded-full hover:bg-[var(--secondary-color)] transition duration-300 mb-5"
        >
          DOWNLOAD CATALOG
        </a>
      </div>

      {/* Right Content */}
      <div className="relative w-full md:w-1/2 flex justify-center">
        {/* Hexagon Top Left */}
        <div className="absolute top-4 left-8">
          <div className="w-8 h-8 bg-[var(--primary-color)] clip-hexagon mb-2"></div>
          <div className="w-8 h-8 bg-[var(--secondary-color)] clip-hexagon"></div>
        </div>

        {/* Image */}
        <img
          src={image1}
          alt="Cleaning professional"
          className="rounded-lg shadow-lg max-w-full clip-hexagon"
        />

        {/* Go Green Button */}
        <div className="absolute -bottom-2 left-1/3 transform -translate-x-1/2 bg-[var(--secondary-color)] text-white text-center rounded-full w-20 h-20 md:w-32 md:h-32 flex flex-col justify-center items-center shadow-lg">
          <span className="text-2xl font-bold">Go</span>
          <span className="text-sm tracking-wide mt-1">GREEN</span>
        </div>

        {/* Hexagon Bottom Right */}
        <div className="absolute bottom-[-20px] right-10">
          <div className="w-8 h-8 bg-[var(--primary-color)] clip-hexagon mb-2"></div>
          <div className="w-8 h-8 bg-[var(--secondary-color)] clip-hexagon"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
