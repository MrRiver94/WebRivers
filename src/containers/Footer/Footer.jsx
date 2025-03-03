import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import './Footer.css'; // Importa el archivo de estilos

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="social-icons">
                    <a href="https://github.com/MrRiver94" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href="www.linkedin.com/in/daniel-ríos-dos-santos-152a07161" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="https://www.instagram.com/tusuario" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="Danielriosprogramacion@gmail.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                    <a href="tel:+619146409" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faPhone} />
                    </a>
                </div>
                <div className="contact-info">
                    <p>Email: Danielriosprogramacion@gmail.com</p>
                    <p>Teléfono: +34 619146409</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;