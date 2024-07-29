import React from "react";

import Navbar from "./app/components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Home,
  About,
  Contact,
  Explore,
  PartnerWithUs,
  Login,
  Profile,
  EditProfile,
  CreateEvent,
  EventDetails,
  EditEvent,
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
          <Route path="/explore/:eventId" element={<EventDetails />} />
          <Route path="/explore/:eventId/edit" element={<EditEvent />} />
          <Route path="/partners" element={<PartnerWithUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile/:userId" element={<Profile />} />
          <Route path="/profile/:userId/edit" element={<EditProfile />} />
          <Route path="/createevent" element={<CreateEvent />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}
