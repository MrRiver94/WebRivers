import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGit, FaBootstrap, FaSass } from "react-icons/fa";


import ExpirienceList from "../../components/ExpirienceList/ExperienceList";



const experiencia = [
  {
    titulo: "Desarrollador Frontend",
    empresa: "Grupo Proeduca",
    periodo: "Enero 2023 - Actualidad",
    imagen: "./Frontend.jpg", // Reemplaza con la URL real
    tareas: [
      "Desarrollo y mantenimiento de aplicaciones web con React.js y Next.js.",
      "Implementación de interfaces responsivas y accesibles, optimizadas para SEO.",
      "Integración de servicios externos mediante APIs REST.",
      "Mejora del rendimiento y refactorización de código.",
      "Trabajo en equipo bajo metodologías ágiles (Scrum/Kanban) utilizando Jira y Trello.",
      "Participación en revisiones de código y definición de buenas prácticas de desarrollo."
    ],
    tecnologias: [FaHtml5, FaCss3Alt, FaJs, FaReact, FaGit, FaBootstrap]
  },
  {
    titulo: "Maquetador Web (Prácticas)",
    empresa: "Hogarth",
    periodo: "Marzo 2022 - Junio 2022",
    imagen: "./maquetador.jpg", // Reemplaza con la URL real
    tareas: [
      "Maquetación de sitios web a partir de diseños y mockups proporcionados.",
      "Desarrollo de páginas responsivas con HTML5, CSS3 y SASS.",
      "Implementación de interactividad mediante JavaScript y jQuery.",
      "Optimización de código para mejorar el rendimiento y accesibilidad."
    ],
    tecnologias: [FaHtml5, FaCss3Alt, FaJs, FaSass]
  },
  {
    titulo: "Proyectos Bootcamp",
    empresa: "Qualentum",
    periodo: "Septiembre 2023 - Junio 2024",
    imagen: "./maquetador.jpg", // Reemplaza con la URL real
    tareas: [
      "Maquetación de sitios web a partir de diseños y mockups proporcionados.",
      "Desarrollo de páginas responsivas con HTML5, CSS3 y SASS.",
      "Implementación de interactividad mediante JavaScript y jQuery.",
      "Optimización de código para mejorar el rendimiento y accesibilidad."
    ],
    tecnologias: [FaHtml5, FaCss3Alt, FaJs, FaReact, FaGit, FaBootstrap]
  }
  
];

function Experiencia() {
  return (
    
      <ExpirienceList experiencia={experiencia}/>
    
  );
}

export default Experiencia;
