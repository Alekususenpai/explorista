import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { close, menu } from "../../assets";

export default function Navbar() {
  //const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  let isUserLogged = false;

  return (
    <nav className="flex items-center justify-between font-extrabold">
        <Link to="/">
          <img
            src="icons/logo1.png"
            className="logo-nav"
            alt="Explorista logo"
          />
        </Link>
    

      <ul className="md:flex gap-8 hidden">
        <li>
          <Link to="/explore">Explore</Link>
        </li>
        <li>
          <Link to="/partners">Become a Host</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      <div className="hidden md:block">
        {isUserLogged ? (
          <Link to="/myprofile">My Profile</Link>
        ) : (
          <Link to="/login">Register</Link>
        )}
      </div>

      <img
        src={toggle ? close : menu}
        alt="menu"
        className="w-[28px] h-[28px] object-contain md:hidden"
        onClick={() => setToggle(!toggle)}
      />

      <div className={`${!toggle ? "hidden" : "absolute top-14 left-0 z-10 w-full bg-hero-opacity"}`}>
        <ul className="flex flex-col items-center font-light gap-2 my-4">
          <li>
            {isUserLogged ? (
              <Link to="/myprofile">My Profile</Link>
            ) : (
              <Link to="/login">Log In</Link>
            )}
          </li>
          <li>
            <Link to="/explore">Explore</Link>
          </li>
          <li>
            <Link to="/partners">Become a Host</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
