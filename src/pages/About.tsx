import React from "react";
import { aboutUsImg } from "../assets";
import { Link } from "react-router-dom";

const lorem = [
  {
    title: "Unleash Your Inner Explorer",

    text: "Our platform is designed to ignite your sense of adventure. We offer a diverse range of unique and interactive activities guided by one-of-a-kind hosts. Whether you're passionate about learning new skills, immersing yourself in different cultures, or simply seeking moments of inspiration, Explorista is your passport to the extraordinary.",
  },

  {
    title: "Endless Possibilities at Your Fingertips",

    text: "From hands-on workshops that let you uncover hidden talents to immersive cultural explorations that broaden your horizons, Explorista brings the world to your screen. With us, you can join fellow explorers from across the globe, forging connections that transcend borders and time zones.",
  },

  {
    title: "Adventure Knows No Bounds",

    text: "At Explorista, we believe that adventure knows no bounds. It's not limited by geography or circumstance; it's all just a click away. Our commitment to providing captivating online experiences means that you can explore, learn, and grow from the comfort of your own home.",
  },

  {
    title: "Join Us in Redefining Connection",

    text: "We invite you to join us in redefining the way we connect with the world. Let's break free from the confines of physical spaces and embrace the limitless potential of the digital realm. With Explorista, you can unlock the power of virtual exploration and create lasting memories with fellow explorers.",
  },
];

const About = () => {
  return (
    <div className="bg-slate-100/25 rounded-2xl my-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl py-14 sm:py-22 lg:py-30">
          <p className="heading">
            At Explorista, we are changing the way people connect.
          </p>
          <p className="subheading">
            Our mission is to be your gateway to a world of captivating online
            experiences, allowing you to embark on a journey of discovery
            without leaving your home. In a rapidly evolving digital landscape,
            we understand the importance of staying connected, inspired, and
            engaged with the world around us.
          </p>
          <div className="logo-circle mx-auto">
            <img
              className="logo-emblem"
              src="icons/logo1.png"
              alt="Explorista logo"
            />
          </div>
        </div>
        <img
          className="w-full h-[350px] object-cover rounded-2xl opacity-50 transform-gpu"
          src={aboutUsImg}
          alt="Live, love, life?"
        />
        <div className="flex justify-evenly p-6 md:p-16 gap-16 flex-wrap">
          {lorem.map((el, index) => (
            <div className="w-full lg:w-[350px]" key={index}>
              <h3 className="passage-bold">
                {el.title}
              </h3>
              <p className="passage">{el.text}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center my-5">
          <Link to="/contact"><button className="btn-primary text-center w-[250px]">Want to know more?</button></Link>
        </div>
      </div>
    </div>
  );
};

export default About;
