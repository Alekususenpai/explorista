import React from "react";
import { Link } from "react-router-dom";
import data from "../data";

const Home = () => {
  return (
    <main className="flex flex-col-reverse md:flex-row md:h-[100vh] md:my-5 items-center justify-around">
      <section className="md:w-[45%] text-center my-10">
        <div className="mb-10">
          <h1 className="heading-hero">
            Welcome to Explorista
          </h1>
          <h2 className="subheading">
            Your gateway to a world of captivating online experiences
          </h2>
        </div>
        <p className="passage">
          Embark on a journey of discovery without leaving your home, as you
          join unique and interactive activities guided by one-of-a-kind hosts.
          From hands-on workshops to immersive cultural explorations, Explorista
          brings the world to your screen, allowing you to uncover hidden
          talents, expand your horizons, and connect with fellow explorers
          globally. With Explorista, adventure knows no bounds, and it's all
          just a click away.
        </p>
        <div className="my-10 flex items-center gap-10 justify-center">
          <Link
            className="btn-primary"
            to="/explore"
          >
            Get Started
          </Link>
          <Link 
          className="btn-secondary"
          to="/about">
            Learn more
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="svg-style"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
              />
            </svg>
          </Link>
        </div>
      </section>
      <section className="md:w-[45%] my-10 order-1">
        <div className="grid grid-cols-4 grid-rows-5 gap-1.5">
          {data.map((img) => (
            <img
              key={img.id}
              src={`images/${img.coverImg}`}
              alt={img.title}
              className={`col-span-1 row-span-2 ${img.styling} w-[170px] lg:h-[210px] h-[150px] object-cover rounded-md hover:shadow-2xl transition-transform transform-gpu hover:scale-110 hover:-translate-x-6`}
            ></img>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
