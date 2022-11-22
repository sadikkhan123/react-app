
import React from "react";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Hero2 from "./components/Hero2";
import Navbar from "./components/Navbar";
import Skill from "./components/Skill";
function App() {

  return (
   
       <div className="bg-[#121316] overflow-hidden">
    <Navbar />
    <Hero/>
    <Hero2/>
    <Skill/>
    <Contact/>
    <Footer/>

    </div>
  );
}

export default App;
