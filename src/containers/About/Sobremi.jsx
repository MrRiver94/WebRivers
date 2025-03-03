import React from 'react';
import HobbiesList from '../../components/HobbiesList/HobbiesList';

import HikingImg from '../../assets/img/Hiking.jpg';
import ClimbingImg from '../../assets/img/Climbing.jpg';
import SwimmingImg from '../../assets/img/Swimming.jpg';
import ProgrammingImg from '../../assets/img/Programing.jpg';
import ConcertImg from '../../assets/img/Concert.jpg';

import './Sobremi.css';

const hobbies = [
  { id: 1, titulo: "Hiking", imagen: HikingImg, alt: "Mont", descripcion: "05:00." },
  { id: 2, titulo: "Climbing", imagen: ClimbingImg, alt: "Climbing",  descripcion: "11:00." },
  { id: 3, titulo: "Swimming", imagen: SwimmingImg, alt: "Pool", descripcion: "07:00." },
  { id: 4, titulo: "Programming", imagen: ProgrammingImg, alt: "Programming", descripcion: "02:00." },
  { id: 5, titulo: "Concert & Music", imagen: ConcertImg, alt: "Concert", descripcion: "00:00" },
];

function Sobremi() {
  return (
    <section className="aboutme-container">
      <div className='header-tittle'>
        <h1 className="titulo-principal">About<br />Me</h1>
      </div>
      <HobbiesList hobbies={hobbies} />
    </section>
  );
}

export default Sobremi;
