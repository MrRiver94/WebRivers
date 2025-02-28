import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faPython, faHtml5, faCss3Alt, faSass, 
    faJsSquare, faReact, faNodeJs, faAngular, 
    faGitAlt, faGithub 
} from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons'; // Alternativo para TypeScript y Next.js
import './TechSkills.css';

const TechSkills = () => {
    return (
        <div className="tech-skills">
            <h2>Habilidades Técnicas</h2>
            <div className="icons-container">
                <FontAwesomeIcon icon={faPython} className="icon" title="Python" />
                <FontAwesomeIcon icon={faHtml5} className="icon" title="HTML5" />
                <FontAwesomeIcon icon={faCss3Alt} className="icon" title="CSS3" />
                <FontAwesomeIcon icon={faSass} className="icon" title="Sass" />
                <FontAwesomeIcon icon={faJsSquare} className="icon" title="JavaScript" />
                <FontAwesomeIcon icon={faCode} className="icon" title="TypeScript" /> {/* Alternativo */}
                <FontAwesomeIcon icon={faReact} className="icon" title="React" />
                <FontAwesomeIcon icon={faNodeJs} className="icon" title="Node.js" />
                <FontAwesomeIcon icon={faCode} className="icon" title="Next.js" /> {/* Alternativo */}
                <FontAwesomeIcon icon={faAngular} className="icon" title="Angular" />
                <FontAwesomeIcon icon={faGitAlt} className="icon" title="Git" />
                <FontAwesomeIcon icon={faGithub} className="icon" title="GitHub" /> {/* Nuevo ícono */}
            </div>
        </div>
    );
};

export default TechSkills;
