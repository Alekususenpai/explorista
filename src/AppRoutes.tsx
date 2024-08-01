import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, About, Contact, CreateEvent, EditEvent, EditProfile, ErrorPage, EventDetails, Explore, Login, PartnerWithUs, Profile } from "./pages/index";

const AppRoutes = () => {
  return (
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
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default AppRoutes;
