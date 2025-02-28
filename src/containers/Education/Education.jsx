import React, { useState } from 'react';
import './Education.css';

const educationData = [
    { title: "Técnico Superior en Desarrollo de Aplicaciones Web (DAW)", institution: "UNIR", date: "2021-2023" },
    { title: "Desarrollador Frontend", institution: "UNIR", date: "Agosto 2023 - Abril 2024" },
    { title: "Programación y Algoritmos en Python", institution: "Universidad Complutense de Madrid", date: "Enero 2023 - Abril 2023" },
    { title: "Masterclass Open Cells BBVA", institution: "BBVA", date: "Abril 2024" },
    { title: "Cisco CCNA Fundamentos de Networking para Redes IP", institution: "(actualidad)", date: "" }
];

const Education = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % educationData.length);
    };

    const handleSelect = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="education">
            <div className='header-tittle-edu'>
                <h1 className="titulo-principal-edu">My<br />Education</h1>
            </div>
            <div className="education-card" onClick={handleNext}>
                <h3>{educationData[currentIndex].title}</h3>
                <p>{educationData[currentIndex].institution}</p>
                {educationData[currentIndex].date && <p className="date">{educationData[currentIndex].date}</p>}
            </div>
            <div className="education-nav">
                {educationData.map((_, index) => (
                    <button
                        key={index}
                        className={`nav-edu ${index === currentIndex ? "active" : ""}`}
                        onClick={() => handleSelect(index)}
                        aria-label={`Go to education item ${index + 1}`} // Añadimos aria-label
                    />
                ))}
            </div>
        </div>
    );
};

export default Education;