import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import About from "../About/Sobremi";
import MyEducation from "../Education/Education";
import TechSkills from "../TechSkills/TechSkills";
import Experience from "../Experience/Experience";
import Projects from "../Works/Works";
import Contact from "../Contact/Contact"

function NavigateRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Education" element={<MyEducation />} />
            <Route path="/TechSkills" element={<TechSkills />} />
            <Route path="/Experience" element={<Experience />} />
            <Route path="/Works" element={<Projects />} />
            <Route path="Contact" element={<Contact/>}/>
        </Routes>
    );
}

export default NavigateRoutes;
