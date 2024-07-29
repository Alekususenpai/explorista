import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { close, menu } from "../../../assets";
import { AuthUI, SignOut } from "../../../firebase/Authentication";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const user = useSelector((state: RootState) => state.auth.currentUserId);

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
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/explore">Explore</Link>
        </li>
        <li>
          <Link to="/partners">Host an event</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
      </ul>

      <div className="flex gap-4">
        <div className="hidden md:block">
          <AuthUI />
        </div>
        {user && (
          <div className="hidden md:block">
            <SignOut />
          </div>
        )
        }
      </div>

      <img
        src={toggle ? close : menu}
        alt="menu"
        className="w-[28px] h-[28px] object-contain md:hidden"
        onClick={() => setToggle(!toggle)}
      />

      <div className={`${!toggle ? "hidden" : "absolute top-14 left-0 z-10 w-full bg-hero-opacity"}`}>
        <ul className="flex flex-col items-center font-light gap-2 my-4">
          <li onClick={() => setToggle(false)}>
            <AuthUI />
          </li>
          <li>
            <Link to="/" onClick={() => setToggle(false)}>Home</Link>
          </li>
          <li>
            <Link to="/explore" onClick={() => setToggle(false)}>Explore</Link>
          </li>
          <li>
            <Link to="/partners" onClick={() => setToggle(false)}>Host an event</Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setToggle(false)}>About Us</Link>
          </li>
          {user && (
            <li onClick={() => setToggle(false)}>
              <SignOut />
            </li>
          )
          }
        </ul>
      </div>
    </nav>
  );
}
