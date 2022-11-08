import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Content from "./components/Content";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Content />
    </div>
  );
};

export default App;
