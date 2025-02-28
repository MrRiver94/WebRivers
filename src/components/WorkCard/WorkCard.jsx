import React, { useState, useEffect, useRef } from 'react';
import './WorkCard.css';

function WorkCard({ Works }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [backgroundImage, setBackgroundImage] = useState('red'); // Fondo inicial rojo
    const cardRef = useRef(null);

    useEffect(() => {
        setBackgroundImage(`url(${Works[currentIndex].imagen})`);
        if (cardRef.current) {
            cardRef.current.classList.add('active');
            setTimeout(() => {
                cardRef.current.classList.remove('active');
            }, 500); // Duración de la animación
        }
    }, [currentIndex, Works]);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % Works.length);
    };

    const handleSelect = (index) => {
        setCurrentIndex(index);
    };

    const currentWork = Works[currentIndex];

    return (
        <div className="work-carousel">
            <div
                ref={cardRef}
                className="work-card"
                onClick={handleNext}
                style={{ backgroundImage: backgroundImage, transition: 'background-image 1s ease-in-out' }}
            >
                <div className="work-card-content">
                    <div className='work-title-container'>
                        <h2 className="work-title">Title</h2>
                        <h3 className="work-title2">{currentWork.titulo2}</h3>
                    </div>
                    <div className="work-card-tools">
                        <span className="work-tools-label">Tools</span>
                        <ul className="work-tools-list">
                            {currentWork.listTools.map((tool, index) => (
                                <li key={index} className="work-tools-item">{tool}</li>
                            ))}
                        </ul>
                    </div>
                    <p className="work-description">{currentWork.descripcion}</p>
                    <div className="work-footer">
                        <a href={currentWork.link} className="work-link">
                            VISIT SITE
                        </a>
                    </div>
                </div>
            </div>
            <div className="work-nav">
                {Works.map((_, index) => (
                    <button
                        key={index}
                        className={`nav-dot ${index === currentIndex ? "active" : ""}`}
                        onClick={() => handleSelect(index)}
                        aria-label={`Go to work item ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}

export default WorkCard;