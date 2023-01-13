import React from "react";

import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Strip from "./components/Strip";



import "./index.css";

// import components

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Strip />
      <About />
      <Skills />
      <Portfolio />
      <Services />
     <Contact/>

      <Footer />
    </div>
  );
};

export default App;
