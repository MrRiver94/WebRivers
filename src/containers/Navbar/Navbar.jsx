import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './Navbar.css';

function Navbar() {
    const [expanded, setExpanded] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 100);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleScrollToSection = (e, id) => {
        e.preventDefault();
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        setExpanded(false);
    };

    return (
        <>
            {/* Navbar original transparente */}
            <nav className={`navbar navbar-expand-lg navbar-dark ${scrolled ? 'hidden-navbar' : 'visible-navbar'}`}>
                <div className="container">
                    <a className="navbar-brand custom-title" href="#home" onClick={(e) => handleScrollToSection(e, "home")}>Portfolio</a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        onClick={() => setExpanded(!expanded)}
                        aria-controls="navbarNav"
                        aria-expanded={expanded}
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse ${expanded ? 'show' : ''}`} id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item"><a className="nav-link custom-link" href="#home" onClick={(e) => handleScrollToSection(e, "home")}>Home</a></li>
                            <li className="nav-item"><a className="nav-link custom-link" href="#about" onClick={(e) => handleScrollToSection(e, "about")}>About me</a></li>
                            <li className="nav-item"><a className="nav-link custom-link" href="#education" onClick={(e) => handleScrollToSection(e, "education")}>My Education</a></li>
                            <li className="nav-item"><a className="nav-link custom-link" href="#techskills" onClick={(e) => handleScrollToSection(e, "techskills")}>TechSkills</a></li>
                            <li className="nav-item"><a className="nav-link custom-link" href="#experience" onClick={(e) => handleScrollToSection(e, "experience")}>Experience</a></li>
                            <li className="nav-item"><a className="nav-link custom-link" href="#works" onClick={(e) => handleScrollToSection(e, "works")}>Projects</a></li>
                            <li className="nav-item"><a className="nav-link custom-link" href="#contact" onClick={(e) => handleScrollToSection(e, "contact")}>Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Navbar fijo que aparece con scroll */}
            <nav className={`navbar navbar-expand-lg navbar-dark fixed-navbar ${scrolled ? 'show-navbar' : ''}`}>
                <div className="container">
                    <a className="navbar-brand custom-title" href="#home" onClick={(e) => handleScrollToSection(e, "home")}>Portfolio</a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        onClick={() => setExpanded(!expanded)}
                        aria-controls="navbarNav"
                        aria-expanded={expanded}
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse ${expanded ? 'show' : ''}`} id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item"><a className="nav-link custom-link" href="#home" onClick={(e) => handleScrollToSection(e, "home")}>Home</a></li>
                            <li className="nav-item"><a className="nav-link custom-link" href="#about" onClick={(e) => handleScrollToSection(e, "about")}>About me</a></li>
                            <li className="nav-item"><a className="nav-link custom-link" href="#education" onClick={(e) => handleScrollToSection(e, "education")}>My Education</a></li>
                            <li className="nav-item"><a className="nav-link custom-link" href="#techskills" onClick={(e) => handleScrollToSection(e, "techskills")}>TechSkills</a></li>
                            <li className="nav-item"><a className="nav-link custom-link" href="#experience" onClick={(e) => handleScrollToSection(e, "experience")}>Experience</a></li>
                            <li className="nav-item"><a className="nav-link custom-link" href="#works" onClick={(e) => handleScrollToSection(e, "works")}>Projects</a></li>
                            <li className="nav-item"><a className="nav-link custom-link" href="#contact" onClick={(e) => handleScrollToSection(e, "contact")}>Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
