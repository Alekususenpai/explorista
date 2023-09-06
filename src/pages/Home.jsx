import React from "react";
import CardList from "../components/Cards/CardList";
import HeroSection from "../components/Hero/Hero";
import data from "../data";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <CardList data={data} />
    </div>
  );
};

export default Home;
