import React from "react";

export default function Navbar() {
  return (
    <nav>
      <div className="nav--logo">
        <img
          src="icons/logo1.png"
          className="nav--logo-image"
          alt="Explorista logo"
        />
        <span className="nav--logo-name">explorista</span>
      </div>
    </nav>
  );
}
