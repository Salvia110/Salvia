import AboutUs from "./pages/AboutUs";
import ContactPage from "./pages/Contact";
import Landing from "./pages/Landing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from "./pages/Product";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Route for Landing Page */}
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/Product" element={<Product />} />
      </Routes>
    </Router>
  );
}
