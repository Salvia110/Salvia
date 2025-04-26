import AboutUs from "./pages/AboutUs";
import Landing from "./pages/Landing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Route for Landing Page */}
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}
