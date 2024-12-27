import React from "react";
import { motion } from "framer-motion";
import { Vector } from "../img/Vector";
import { Cloud } from "../assets/Cloud";
import { Lightning } from "../assets/Lightning";
import { Wheel } from "../assets/Wheel";
import { useState, useEffect } from "react";
const Card4 = () => {
    const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    // После 1 секунды анимация начинается
    const timer = setTimeout(() => {
      setShowFooter(true);
    }, 1000); // Задержка на 1 секунду

    return () => clearTimeout(timer); // Очищаем таймер
  }, []);
  
  return (
    <motion.div
        style={styles.card} className="card-4"
        whileHover="hover"  
      >
        <div style={styles.title}>Unlimited <span className="choose-green">Bandwidth</span> </div>
        <motion.div
          variants={{
            hover: {
              rotate: 0,
            },
          }}
          initial={{ rotate: -140,}}  
          transition={{
            duration: 0.3,
                    ease: "easeInOut",
          }}
          style={styles.vectorWrapper}
        >
          <Wheel style={styles.vector} />
        </motion.div>
        
        <motion.div
          variants={{
            hover: {
              x: 0,
            },
          }}
          initial={{ x: -600 }}  
         
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 300, // Controls the "jump" intensity
            damping: 20, 
          }}
        
        >
         <div className="card4-text">No data caps, no throttling. <br /> <br /> Enjoy an unrestrictedinternet experience</div>
        </motion.div>


          
        <motion.div
            variants={{
                hover: {
                    y: 0,
                },
            }}
            initial={{y: 300 }}  
            // whileHover="hover"
            
            transition={{
                duration: 0.3,
            }}
            style={styles.card4Footer}
        
        >
         <div className="card4-footer">max</div>
        </motion.div>

        <div style={styles.btn} onClick={() => console.log("HOLA")}>
          <svg
            width="18"
            height="16"
            viewBox="0 0 18 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 7C0.447715 7 -4.82823e-08 7.44772 0 8C4.82823e-08 8.55228 0.447715 9 1 9L1 7ZM17.7071 8.70711C18.0976 8.31658 18.0976 7.68342 17.7071 7.29289L11.3431 0.928931C10.9526 0.538407 10.3195 0.538407 9.92893 0.928931C9.53841 1.31946 9.53841 1.95262 9.92893 2.34315L15.5858 8L9.92893 13.6569C9.53841 14.0474 9.53841 14.6805 9.92893 15.0711C10.3195 15.4616 10.9526 15.4616 11.3431 15.0711L17.7071 8.70711ZM1 9L17 9L17 7L1 7L1 9Z"
              fill="white"
            />
          </svg>
          <div style={styles.btnText}>Get access</div>
        </div>
      </motion.div> 
  );
};

const styles = {
  card: {
    position: "relative",
    width: "90%", // Адаптивная ширина
    maxWidth: "608px", // Максимальная ширина
    aspectRatio: "1", // Поддержка соотношения сторон 1:1
    backgroundColor: "#111111",
    display: "flex",
    overflow: "hidden",
    color: "white",
    cursor: "pointer",
    borderRadius: "20px",
    margin: "0 auto", // Центрирование карточки
    flexDirection: "column",
    alignItems: "center",
  },
  vectorWrapper: {
    position: "absolute",
    width: "600px",
height: "600px",
top: "360.98px",
left: "16.07px",
angle: "15 deg",
borderRadius: "50%",
overflow: "hidden",

  },
  vector: {
    width: "100%",
    height: "100%",
  },

  title: {
    fontSize: "60px", 

    fontWeight: "500",
    lineHeight: "60px",
    // top: "55px",
    // left: "35px"
    marginTop: "70px",
    marginBottom: "80px",
    marginLeft: "35px"
  },
  btn: {
    position: "absolute",
    bottom: "20px",
    right: "20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  btnText: {
    fontFamily: "'Raleway'",
    fontSize: "20px",
    lineHeight: "20px",
    marginLeft: "10px",
  },
  card4Footer: {
    position: "absolute", // Позиционирование внутри родителя
    width: "140px",
    height: "70px",
    top: "526px",
    left: "240px",
  }
};

export default Card4;
