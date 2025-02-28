import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import "./Home.css";


const FallingLetters = ({ text }) => {
  const letters = text.split("");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.2 },
    }),
  };

  const child = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
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
    "As a Front-end Developer, my passion lies in crafting engaging and functional web experiences that delight users. I am driven by the constant evolution of the digital world, and I strive to stay at the forefront of the latest technologies and trends.";
  const [displayedDescription, setDisplayedDescription] = useState("");

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullDescription.length) {
        setDisplayedDescription(fullDescription.substring(0, index + 1));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 30);
    return () => clearInterval(typingInterval);
  }, [fullDescription]);

  const stats = [
    { value: 2, label: "Years of experience" },
    { value: 15, label: "Projects completed" },
    { value: 8, label: "Technologies mastered" },
    { value: 100, label: "Code commits" },
  ];

  const Stat = ({ value, label }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCount((prevCount) => {
          if (prevCount < value) {
            return prevCount + 1;
          } else {
            clearInterval(interval);
            return value;
          }
        });
      }, 50);

      return () => clearInterval(interval);
    }, [value]);

    return (
      <div className="stat">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
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
          transition={{ duration: 0.5 }}
        >
          Software Developer
        </motion.h2>

        <FallingLetters text="Hello," />
        <FallingLetters text="I'm Daniel Ríos" />

        <motion.p
          className="hero-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {displayedDescription}
        </motion.p>

      </div>
      

        
      </div>

      <div className="hero-stats">
        {stats.map((stat, index) => (
          <Stat key={index} value={stat.value} label={stat.label} />
        ))}
      </div>
    </div>
  );
}