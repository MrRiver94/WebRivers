import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Home.css";

const FallingLetters = ({ text }) => {
  const letters = text.split("");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.015, delayChildren: 0.1 }, // Animación más rápida
    }),
  };

  const child = {
    hidden: { opacity: 0, y: -15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" }, // Menos duración
    },
  };

  return (
    <motion.h1
      className="hero-title"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={child}
          style={{ display: "inline-block" }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.h1>
  );
};

export default function Home() {
  const fullDescription =
    "As a Front-end Developer, my passion lies in crafting engaging and functional web experiences that delight users.";
  const [displayedDescription, setDisplayedDescription] = useState("");
  const [textCompleted, setTextCompleted] = useState(false); // Nuevo estado

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullDescription.length) {
        setDisplayedDescription(fullDescription.substring(0, index + 1));
        index++;
      } else {
        clearInterval(typingInterval);
        setTextCompleted(true); // Cuando termina, cambia a true
      }
    }, 20); // Texto aparece más rápido
    return () => clearInterval(typingInterval);
  }, []);

  const stats = [
    { value: 2, label: "Years of experience" },
    { value: 15, label: "Projects completed" },
    { value: 8, label: "Technologies mastered" },
    { value: 100, label: "Code commits" },
  ];

  const Stat = ({ value, label }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!textCompleted) return; // Solo empieza si el texto ya se completó

      let current = 0;
      const step = Math.max(1, Math.floor(value / 50)); // Asegura que los valores grandes suban rápido
      const interval = setInterval(() => {
        current += step;
        if (current >= value) {
          setCount(value);
          clearInterval(interval);
        } else {
          setCount(current);
        }
      }, 30);

      return () => clearInterval(interval);
    }, [value, textCompleted]);

    return (
      <div className="stat">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {count}
        </motion.span>
        {` ${label}`}
      </div>
    );
  };

  return (
    <div className="hero-container">
      <div className="hero-content">
        <div className="hero-content-card">
          <motion.h2
            className="role"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            Software Developer
          </motion.h2>

          <FallingLetters text="Hello," />
          <FallingLetters text="I'm Daniel Ríos" />

          <motion.p
            className="hero-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
            {displayedDescription}
          </motion.p>
        </div>
      </div>

      {textCompleted && ( // Muestra los contadores solo cuando el texto esté completo
        <motion.div
          className="hero-stats"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {stats.map((stat, index) => (
            <Stat key={index} value={stat.value} label={stat.label} />
          ))}
        </motion.div>
      )}
    </div>
  );
}
