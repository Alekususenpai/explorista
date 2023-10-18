import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Home,
  About,
  Contact,
  Explore,
  PartnerWithUs,
  Profile,
  Error
} from "./pages/index";

export default function App() {
  return (
    <div className="bg-hero py-5 lg:px-16 px-8 relative min-h-[100vh]">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/partners" element={<PartnerWithUs />} />
          <Route path="/login" element={<Profile />} />
          <Route path="/error" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}
