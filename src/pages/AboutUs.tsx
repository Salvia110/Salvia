import { DownloadIcon, FileTextIcon } from "lucide-react";
import "../App.css";
import image1 from "../assets/aboutPage/image-1.jpg";
import mission from "../assets/aboutPage/mission.jpg";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import CoreValues from "../components/Values";
import bg from "../assets/aboutPage/bg-2.jpg";
import catalog from "../assets/Catalog.pdf";

function AboutUs() {
  return (
    <div>
      <Nav />
      <section className="md:w-11/12 mx-auto mt-5 bg-white mb-10 px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="w-full md:w-1/2">
          {/* Small Heading */}
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-[var(--secondary-color)] rounded-full"></div>
            <p className="text-[var(--secondary-color)] font-semibold tracking-wide uppercase text-sm">
              Who We Are
            </p>
          </div>

          {/* Main Heading */}
          <h2 className="text-[var(--primary-color)] font-bold text-4xl md:text-5xl leading-tight mb-6">
            Revolutionizing Industrial Cleaning Equipment for a Cleaner Tomorrow{" "}
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-base leading-relaxed mb-8">
            SALVIA SALES CORPORATION is a multidimensional fastgrowing Cleaning
            and Hygiene company headquartered in Faridabad, India. Our Cleaning
            and Hygiene solution are available at all sectors like industries,
            Auto workshop, Multiplex, Hotels, Hospitals, School & Colleges,
            Railways Station & Platforms, Housekeeping Agencies, Corporate and
            Normal office etc.
            <br />
            <br />
            Our Combined knowledge and extensive experience in the industry
            allow us to offer our clients practical yet cost effective solution
            to satisfy environmental demands. At SALVIA Sales Corporation we
            understand the need for cleaner and healthier environment therefore
            our commitment to our clients is to continually specify and make use
            of superior Eco-friendly products and approved equipment’s.
            <br />
            <br />
            SALVIA SALES CORPORATION has a team of qualified professionals to
            cater to all Sales needs of Indian market. We organize training and
            seminars to train your working team with modern technique of
            cleaning and Hygiene solution.
          </p>
        </div>

        {/* Right Content */}
        <div className="relative w-full md:w-1/2 flex items-center justify-center">
          <img
            src={image1}
            alt="Hygiene Professional"
            className="rounded-lg shadow-lg max-w-full h-auto md:max-h-[500px] object-cover clip-hexagon"
          />

          {/* Go Green Button */}
          <div className="absolute -bottom-2 left-1/3 transform -translate-x-1/2 bg-[var(--secondary-color)] text-white text-center rounded-full w-30 h-30 md:w-32 md:h-32 flex flex-col justify-center items-center shadow-lg">
            <span className="text-2xl font-bold">Go</span>
            <span className="text-sm tracking-wide mt-1">SUSTAINABLE</span>
          </div>

          {/* Hexagon Top Left */}
          <div className="absolute top-[-20px] left-10">
            <div className="w-8 h-8 bg-[var(--primary-color)] clip-hexagon mb-2"></div>
            <div className="w-8 h-8 bg-[var(--secondary-color)] clip-hexagon"></div>
          </div>

          {/* Hexagon Bottom Right */}
          <div className="absolute bottom-[-20px] right-10">
            <div className="w-8 h-8 bg-[var(--primary-color)] clip-hexagon mb-2"></div>
            <div className="w-8 h-8 bg-[var(--secondary-color)] clip-hexagon"></div>
          </div>
        </div>
      </section>

      {/* ------------------Mission and Vision----------------------- */}

      <section className="relative w-full h-auto py-10 mb-10">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={mission} // replace with your image import or URL
            alt="Background"
            className="w-full h-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-[var(secondary-color)] opacity-60"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 w-11/12 mx-auto flex flex-col items-center">
          {/* Title */}
          <h2 className="text-white font-bold text-4xl md:text-5xl mb-12 text-center">
            Our Mission & Vision
          </h2>

          {/* Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
            {/* Mission Box */}
            <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg">
              <h3 className="text-[var(--primary-color)] font-bold text-2xl mb-4">
                Our Mission
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Our mission is to revolutionize the industrial cleaning
                equipment sector by delivering innovative, eco-friendly machines
                and solutions that ensure cleaner and safer environments. We are
                committed to empowering industries and institutions with
                sustainable technologies, expert support, and a strong
                dedication to environmental responsibility.
              </p>
            </div>

            {/* Vision Box */}
            <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg">
              <h3 className="text-[var(--primary-color)] font-bold text-2xl mb-4">
                Our Vision
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Our vision is to be the global leader in industrial cleaning
                equipment, driving a greener future through cutting-edge
                technology, operational excellence, and integrity. We envision a
                world where every industrial and commercial space benefits from
                sustainable, high-performance cleaning solutions that promote
                health, safety, and long-term environmental well-being.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CoreValues />

      <section
        className="relative bg-cover bg-center bg-no-repeat py-8 mb-10"
        style={{ backgroundImage: `url(${bg})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center px-6">
          <div className="border-4 border-white p-6 rounded-xl backdrop-blur-md bg-white/10 md:w-2/3 text-center">
            {/* File Icon */}
            <div className="flex justify-center mb-6">
              <FileTextIcon size={48} className="text-white" />
            </div>

            {/* Text */}
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Download Our Brochure
            </h2>
            <p className="text-white mb-8 hidden md:block">
              Explore our full range of industrial cleaning equipment designed
              to elevate your operational efficiency
            </p>

            {/* Download Button */}
            <a
              href={catalog}
              download
              className="inline-flex items-center gap-2 bg-[var(--secondary-color)] text-white font-semibold px-6 py-3 rounded-full hover:bg-[var(--primary-color)] transition-all"
            >
              <DownloadIcon size={20} />
              Download Brochure
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default AboutUs;
