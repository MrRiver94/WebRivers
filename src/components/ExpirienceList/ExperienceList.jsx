import React from 'react';
import './ExperienceList.css'


function Card({ children, className }) {
    return <div className={`card ${className}`}>{children}</div>;
  }

function ExpirienceList({ experiencia }) {
  return (
    <div className="experiencia-container">
          <h1 className="titulo-principal">Experiencia Profesional</h1>
          {experiencia.map((exp, index) => (
            <Card key={index} className="experiencia-card">
              <img src={exp.imagen} alt={exp.titulo} className="card-img" />
              <h2 className="titulo">{exp.titulo}</h2>
              <h3 className="empresa">{exp.empresa}</h3>
              <p className="periodo">{exp.periodo}</p>
              <ul className="tareas">
                {exp.tareas.map((tarea, idx) => (
                  <li key={idx}>{tarea}</li>
                ))}
              </ul>
              <div className="tecnologias">
                {exp.tecnologias.map((Icon, idx) => (
                  <Icon key={idx} />
                ))}
              </div>
            </Card>
          ))}
        </div>
  );
}

export default ExpirienceList;


