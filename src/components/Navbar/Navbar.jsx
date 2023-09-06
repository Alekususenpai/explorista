import React from "react";
import { Link } from 'react-router-dom';


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
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
