import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
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
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (scrolled) setExpanded(false);
    }, [scrolled]);

    return (
        <>
            {/* Navbar principal */}
            <nav className={`navbar navbar-expand-lg navbar-dark ${scrolled ? 'hidden-navbar' : 'visible-navbar'}`}>
                <div className="container">
                    <Link className="navbar-brand custom-title" to="home" smooth={true} duration={500}>Portfolio</Link>
                    <button 
                        className="navbar-toggler" 
                        type="button" 
                        onClick={() => setExpanded(!expanded)}
                        aria-controls="navbarNavMain" 
                        aria-expanded={expanded} 
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse ${expanded ? 'show' : ''}`} id="navbarNavMain">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item"><Link className="nav-link custom-link" to="home" smooth={true} duration={500}>Home</Link></li>
                            <li className="nav-item"><Link className="nav-link custom-link" to="about" smooth={true} duration={500}>About me</Link></li>
                            <li className="nav-item"><Link className="nav-link custom-link" to="education" smooth={true} duration={500}>My Education</Link></li>
                            <li className="nav-item"><Link className="nav-link custom-link" to="techskills" smooth={true} duration={500}>TechSkills</Link></li>
                            <li className="nav-item"><Link className="nav-link custom-link" to="experience" smooth={true} duration={500}>Experience</Link></li>
                            <li className="nav-item"><Link className="nav-link custom-link" to="works" smooth={true} duration={500}>Projects</Link></li>
                            <li className="nav-item"><Link className="nav-link custom-link" to="contact" smooth={true} duration={500}>Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Navbar fijo con scroll */}
            <nav className={`navbar navbar-expand-lg navbar-dark fixed-navbar ${scrolled ? 'show-navbar' : ''}`}>
                <div className="container">
                    <Link className="navbar-brand custom-title" to="home" smooth={true} duration={500}>Portfolio</Link>
                    <button 
                        className="navbar-toggler" 
                        type="button" 
                        onClick={() => setExpanded(!expanded)}
                        aria-controls="navbarNavFixed" 
                        aria-expanded={expanded} 
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse ${expanded ? 'show' : ''}`} id="navbarNavFixed">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item"><Link className="nav-link custom-link" to="home" smooth={true} duration={500}>Home</Link></li>
                            <li className="nav-item"><Link className="nav-link custom-link" to="about" smooth={true} duration={500}>About me</Link></li>
                            <li className="nav-item"><Link className="nav-link custom-link" to="education" smooth={true} duration={500}>My Education</Link></li>
                            <li className="nav-item"><Link className="nav-link custom-link" to="techskills" smooth={true} duration={500}>TechSkills</Link></li>
                            <li className="nav-item"><Link className="nav-link custom-link" to="experience" smooth={true} duration={500}>Experience</Link></li>
                            <li className="nav-item"><Link className="nav-link custom-link" to="works" smooth={true} duration={500}>Projects</Link></li>
                            <li className="nav-item"><Link className="nav-link custom-link" to="contact" smooth={true} duration={500}>Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
