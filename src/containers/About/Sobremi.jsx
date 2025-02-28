// Sobremi.js
import React from 'react';
import HobbiesList from '../../components/HobbiesList/HobbiesList';

import './Sobremi.css';

const hobbies = [
  { id: 1, titulo: "Hiking", imagen: "./Hiking.jpg", alt: "Mont", descripcion: "05:00." },
  { id: 2, titulo: "Climbing", imagen: "./Climbing.jpg", alt: "Climbing",  descripcion: "11:00." },
  { id: 3, titulo: "Swimmimg", imagen: "./Swimming.jpg", alt: "Pool", descripcion: "07:00." },
  { id: 4, titulo: "Programing", imagen: "./Programing.jpg", alt: "Programing", descripcion: "02:00." },
  { id: 5, titulo: "Concert & Music", imagen: "./Concert.jpg", alt: "gato", descripcion: "00:00" },
];

function Sobremi() {
  return (
    <section className="aboutme-container">
      <div className='header-tittle'>
      <h1 className="titulo-principal">About<br />Me</h1>
      </div>
      
      
      <HobbiesList hobbies={hobbies}/>
    </section>
  );
}

export default Sobremi;