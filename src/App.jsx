import { useState } from "react";
import "./App.css";
import React from "react";
import NavBar from "./components/NavBar";
import CarouselGames from "./components/CarouselGames";
import Footer from "./components/Footer";
import About from "./components/About";
import News from "./components/News";
import Community from "./components/Community";

function App() {
  return (
    <div>
      <NavBar />
      <div>
        <CarouselGames />
      </div>
      <About></About>
      <News></News>
      <Community></Community>
      <Footer></Footer>
    </div>
  );
}

export default App;
