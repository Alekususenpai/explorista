import "./App.css";
import CardList from "./components/Cards/CardList";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import data from "./data"

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <CardList data={data}/>
    </>
  );
}
