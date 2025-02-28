// HobbiesList.js
import React from 'react';
import './HobbiesList.css'

function HobbiesList({ hobbies }) {
  return (
    <div className="hobbies-grid">
      {hobbies.map((hobby) => (
      <article 
      key={hobby.id} 
      className="hobby-card" 
      style={{ "--bg-image": `url(${hobby.imagen})` }}
    >
      <h2 className="hobby-title">{hobby.titulo}</h2>
      <p className="hobby-description">{hobby.descripcion}</p>
    </article>
      ))}
    </div>
  );
}

export default HobbiesList;