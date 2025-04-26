import AboutUs from "../components/About";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import ProductCategories from "../components/Slider";
import WhySalvia from "../components/WhySalvia";

function Landing() {
  return (
    <div>
      <Hero />
      <ProductCategories />
      <AboutUs />
      <WhySalvia />
      <Footer />
    </div>
  );
}

export default Landing;
