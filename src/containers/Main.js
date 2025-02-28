import React from "react";
import Home from "../containers/Home/Home";
import Navbar from "../containers/Navbar/Navbar";
import Education from "../containers/Education/Education";
import Footer from "../containers/Footer/Footer";
import TechSkills from "../containers/TechSkills/TechSkills";
import Experience from "../containers/Experience/Experience";
import Sobremi from "../containers/About/Sobremi";
import Works from "../containers/Works/Works"
import NavigateRoutes from "../containers/Layout/Layout";
import Contact from "../containers/Contact/Contact"


const Main = () => {
  return (
    <>
      <Navbar/>
      <section id="home">
  <Home />
</section>

<section id="about">
  <Sobremi />
</section>

<section id="education">
  <Education />
</section>

<section id="techskills">
  <TechSkills />
</section>

<section id="experience">
  <Experience />
</section>

<section id="works">
  <Works />
</section>

<section id="contact">
  <Contact />
</section>     
      <Footer/>
      
    </>
  );
};

export default Main;