import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/hero";

const App = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
    </main>
  );
};

export default App;
