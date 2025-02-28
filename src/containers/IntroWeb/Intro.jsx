import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import "./Intro.css";

const Intro = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    setTimeout(() => {
      setIsVisible(false);
      onComplete();
    }, 5000);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [onComplete]);

  return (
    isVisible && (
      <motion.div
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 1, scale: 1.5 }}
        exit={{ opacity: 0, scale: 3 }}
        transition={{ duration: 3 }}
        className="intro-container"
      >
        <div className="background-overlay" />
        <h1>Portfolio</h1>
        {isMobile ? (
          <svg
            width="300"
            height="100"
            viewBox="0 0 300 100"
            xmlns="http://www.w3.org/2000/svg"
            className="svg-animation"
          >
             <text x="-70" y="60">
              <animate attributeName="x" from="-20" to="50" dur="1s" fill="freeze" />W
            </text>
            <text x="-50" y="60">
              <animate attributeName="x" from="-20" to="75" dur="1.2s" fill="freeze" />E
            </text>
            <text x="-50" y="60">
              <animate attributeName="x" from="-20" to="90" dur="1.4s" fill="freeze" />B
            </text>
            <text x="100" y="90">
              <animate attributeName="x" from="90" to="125" dur="1s" fill="freeze" />R
            </text>
            <text x="100" y="90">
              <animate attributeName="x" from="90" to="140" dur="1.2s" fill="freeze" />I
            </text>
            <text x="100" y="90">
              <animate attributeName="x" from="90" to="147" dur="1.4s" fill="freeze" />V
            </text>
            <text x="100" y="90">
              <animate attributeName="x" from="90" to="159" dur="1.6s" fill="freeze" />E
            </text>
            <text x="100" y="90">
              <animate attributeName="x" from="90" to="172" dur="1.8s" fill="freeze" />R
            </text>
            <text x="100" y="90">
              <animate attributeName="x" from="90" to="186" dur="2s" fill="freeze" />S
            </text>
          </svg>
        ) : (
            <svg
            width="100%"
            height="100%"
            viewBox="0 0 500 150"
            preserveAspectRatio="xMidYMid meet"
            xmlns="http://www.w3.org/2000/svg"
            className="svg-animation"
          >
            <text x="50" y="60" font-size="5vw" text-anchor="middle">
              <animateTransform attributeName="transform" type="translate" from="-50,0" to="0,0" dur="1s" fill="freeze" />
              W
            </text>
            <text x="100" y="60" font-size="5vw" text-anchor="middle">
              <animateTransform attributeName="transform" type="translate" from="-50,0" to="0,0" dur="1.2s" fill="freeze" />
              E
            </text>
            <text x="140" y="60" font-size="5vw" text-anchor="middle">
              <animateTransform attributeName="transform" type="translate" from="-50,0" to="0,0" dur="1.4s" fill="freeze" />
              B
            </text>
            <text x="240" y="60" font-size="5vw" text-anchor="middle">
              <animateTransform attributeName="transform" type="translate" from="50,0" to="0,0" dur="1s" fill="freeze" />
              R
            </text>
            <text x="270" y="60" font-size="5vw" text-anchor="middle">
              <animateTransform attributeName="transform" type="translate" from="50,0" to="0,0" dur="1.2s" fill="freeze" />
              I
            </text>
            <text x="300" y="60" font-size="5vw" text-anchor="middle">
              <animateTransform attributeName="transform" type="translate" from="50,0" to="0,0" dur="1.4s" fill="freeze" />
              V
            </text>
            <text x="340" y="60" font-size="5vw" text-anchor="middle">
              <animateTransform attributeName="transform" type="translate" from="50,0" to="0,0" dur="1.6s" fill="freeze" />
              E
            </text>
            <text x="380" y="60" font-size="5vw" text-anchor="middle">
              <animateTransform attributeName="transform" type="translate" from="50,0" to="0,0" dur="1.8s" fill="freeze" />
              R
            </text>
            <text x="420" y="60" font-size="5vw" text-anchor="middle">
              <animateTransform attributeName="transform" type="translate" from="50,0" to="0,0" dur="2s" fill="freeze" />
              S
            </text>
          </svg>
          
        )}
      </motion.div>
    )
  );
};

export default Intro;
