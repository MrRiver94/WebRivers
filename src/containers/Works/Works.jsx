// Sobremi.js
import React from 'react';

import WorkCard from '../../components/WorkCard/WorkCard';



const Works = [
  {
    id: 1,
    titulo: "TITLE",
    titulo2: "ANIMATION",
    tools: "TOOLS",
    listTools: ["React", "Vite", "Render", "HTML", "CSS"], // Lista de herramientas
    imagen: "./Proyectweb.jpg",
    alt: "gato",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    link: "https://github.com/MrRiver94" // Enlace del sitio
  },
  {
    id: 2,
    titulo: "TITLE",
    titulo2: "Social Network",
    tools: "TOOLS",
    listTools: ["React", "Node.js", "Python", "MongoDB","Render"], // Lista de herramientas
    imagen: "./EDDV.jpg",
    alt: "gato",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    link: "https://github.com/MrRiver94" // Enlace del sitio
  },
  {
    id: 3, // Añadimos un tercer ejemplo para mostrar la lista de herramientas
    titulo: "TITLE",
    titulo2: "E-commerce",
    tools: "TOOLS",
    listTools: ["Vite", "React", "Sass", "Typescript", "Redux","API" ,"Npm"],
    imagen: "./E-commerce.jpg",
    alt: "gato",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    link: "https://github.com/MrRiver94"
  },
  {
    id: 4, // Añadimos un cuarto ejemplo para mostrar la lista de herramientas
    titulo: "TITLE",
    titulo2: "App-Bank",
    tools: "TOOLS",
    listTools: ["Javasript", "Html", "Css",],
    imagen: "./Banco.jpg",
    alt: "gato",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    link: "https://github.com/MrRiver94"
  }
];

function trabajos() {
  return (
    <section className="trabajos-container">
      <WorkCard Works={Works}/>
    </section>
  );
}

export default trabajos;