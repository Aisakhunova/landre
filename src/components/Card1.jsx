import React from "react";
import { motion } from "framer-motion";
import { Vector } from "../img/Vector";
import { Cloud } from "../assets/Cloud";
import { useTranslation } from "react-i18next";


const Card1 = () => {
  const { t } = useTranslation();
  
  return (
    <motion.div
        whileHover="hover"  
        className="card1"
      >
        <div style={styles.title}>{t("whyUs.global")}</div>
        <motion.div
          variants={{
            hover: {
              scale: 1,
              rotate: 0,
              x: 0,
              y: 0,
            },
          }}
          initial={{rotate: 60, x: 95, y: 60, scale: 0.8 }}  
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          style={styles.vectorWrapper}
        >
          {/* <Vector style={styles.vector} /> */}
          {/* <source srcset="src/img/planet.webp" type="image/webp"></source> */}
          <img src="src/img/planet.svg" alt="" style={styles.vector}  />
        </motion.div>
        
        <motion.div
          variants={{
            hover: {
              
              x: 0,
              y: "0",
              rotate: 0, 
            },
          }}
          initial={{x: -400,
            y: "150%",
            rotate: 45,  }}  
          // whileHover={{
          //   rotate: 0, 
          //   x: 300,    
          //   y: "-110%", 
          // }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          style={styles.cloud}
        >
          {/* <source srcset="src/img/bubble.webp" type="image/webp"></source> */}
          <img src="src/img/bubble.svg" alt="" style={styles.cloudVector}/>
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
          <div style={styles.btnText}>{t("header.getAccess")}</div>
        </div>
      </motion.div> 
  );
};

const styles = {
  vectorWrapper: {
    position: "absolute",
    width: "110%", // Относительный размер
    height: "110%", // Относительный размер
    top: "35%", // Сдвиг относительно размера карточки
    left: "-5%",
    // backgroundColor: "red"
  
  },
  vector: {
    width: "100%", // SVG будет адаптироваться к размеру контейнера
    height: "auto", // Сохраняет пропорции
  },
  cloud: {
    position: "absolute",
    top: "33%",
    left: "5%",
    width: "50%"

  },

  cloudVector: {
    width: "100%", // SVG будет адаптироваться к размеру контейнера
    height: "auto", // Сохраняет пропорции
  },
  title: {
    fontSize: "clamp(34px, 5vw, 60px)", // Адаптивный размер шрифта
    fontWeight: "500",
    lineHeight: "1.2",
    position: "absolute",
    top: "10%",
    left: "5%",
    maxWidth: "90%",
  },
  btn: {
    position: "absolute",
    bottom: "5%",
    right: "5%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  btnText: {
    fontFamily: "'Raleway', sans-serif",
    fontSize: "clamp(14px, 2vw, 20px)", // Адаптивный текст кнопки
    lineHeight: "1.2",
    marginLeft: "10px",
  },
};

const mediaQueries = {
  "@media (max-width: 768px)": {
    card: {
      maxWidth: "100%", // Карточка будет занимать 100% ширины на маленьких экранах
    }
  },
};

export default Card1;
