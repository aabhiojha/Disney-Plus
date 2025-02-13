import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Slider from "./Components/Slider";
// import Buttons from "./Components/Buttons"
import ProductionHouse from "./Components/ProductionHouse";
import Movies from "./Components/Movies";
function App() {

  return (
    <>
      <Header />
      <Slider />
      <ProductionHouse/>
      {/* <Buttons /> */}
      <Movies/>
    </>
  );
}

export default App;
