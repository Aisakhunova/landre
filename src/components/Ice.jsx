import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Layers } from "../assets/Layers";

export const Steps = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Element becomes visible
        }
      },
      { threshold: 0.3 } // Trigger when 30% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <motion.section id="steps" ref={sectionRef}>
      <div className="rectangle9">
        <div className="ice-title">Get Started in 3 Simple Steps</div>
      </div>

      <div className="ice-cards">
        <div className="cards1">
          <motion.div
            variants={{
              visible: { x: 0, opacity: 1 },
              hidden: { x: -400, opacity: 0 },
            }}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            className="ice-card"
          >
            <button className="ice-btn">Click to Join</button>
          </motion.div>

          <motion.div
            variants={{
              visible: { x: 0, opacity: 1 },
              hidden: { x: -400, opacity: 0 },
            }}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
              delay: 0.5,
            }}
            className="ice-card2"
          >
            <div className="ice-chat">
              Chat with Our <span className="green-back">Bot</span>
            </div>
            <div className="ice-chat2">
              <svg
                width="9"
                height="8"
                viewBox="0 0 9 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="arrow"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.84675 0.159096L8.86126 3.61591C9.04625 3.82804 9.04625 4.17196 8.86126 4.38409L5.84675 7.8409C5.66177 8.05303 5.36185 8.05303 5.17686 7.8409C4.99188 7.62878 4.99188 7.28485 5.17686 7.07272L7.38274 4.54319L0.473684 4.54319C0.212075 4.54319 -3.75917e-07 4.29999 -3.49691e-07 4C-3.23465e-07 3.70001 0.212075 3.45681 0.473684 3.45681L7.38274 3.45681L5.17686 0.927277C4.99188 0.715149 4.99188 0.371223 5.17686 0.159096C5.36185 -0.0530314 5.66177 -0.0530313 5.84675 0.159096Z"
                  fill="white"
                />
              </svg>
              Go chat
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={{
            visible: { y: 0, opacity: 1 },
            hidden: { y: 600, opacity: 0 },
          }}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
            delay: 1,
          }}
          className="ice-card-long"
        >
          <div className="ice-long-text">Set Up Your Secure VPN in Minutes</div>
          <div className="long-vector">
            <Layers />
          </div>
        </motion.div>
      </div>

      <motion.div
        variants={{
          visible: { x: 0, y: 0, opacity: 1 },
          hidden: { x: 400, y: 500, opacity: 0 },
        }}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
        className="cube"
      >
        <img src="src/img/cube.png" alt="" />
      </motion.div>

      <motion.button
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: 600, opacity: 0 },
        }}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
          delay: 1,
        }}
        className="ice-btn2"
      >
        Get access
      </motion.button>
    </motion.section>
  );
};