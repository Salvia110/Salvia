import AboutUs from "../components/About";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import ProductCategories from "../components/Slider";

function Landing() {
  return (
    <div>
      <Hero />
      <ProductCategories />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default Landing;
