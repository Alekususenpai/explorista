import Navbar from "../src/components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Home,
  About,
  Contact,
  Explore,
  PartnerWithUs,
  Profile,
} from "./pages/index";

export default function App() {
  return (
    <div className="bg-hero py-5 lg:px-16 px-8 relative">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/partners" element={<PartnerWithUs />} />
          <Route path="/login" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}
