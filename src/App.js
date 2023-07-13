
import React from "react";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Hero2 from "./components/Hero2";
import Navbar from "./components/Navbar";
import Skill from "./components/Skill";
import Projects from './components/Projects'
import Timeline from "./components/Timeline";
function App() {

  return (
   
       <div className=" overflow-hidden mx-auto">
    <Navbar />
    <Hero/>
    <Hero2/>
    <Skill/>
    <Projects/>
    <Timeline/>
    <Contact/>
    <Footer/>

    </div>
  );
}

export default App;
