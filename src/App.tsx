import React from "react";

import Navbar from "./app/components/Navbar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./AppRoutes";

export default function App() {
  return (
    <div className="bg-hero py-5 lg:px-16 px-8 relative min-h-[100vh]">
      <Router>
        <Navbar />
        <AppRoutes />
      </Router>
    </div>
  );
}
