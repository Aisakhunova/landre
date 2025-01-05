import React from "react";
import { motion } from "framer-motion";
import { Lightning } from "../assets/Lightning";
import { useTranslation } from "react-i18next";

const Card3 = () => {
  const { t } = useTranslation();
  return (
    <motion.div

        whileHover="hover"  
        className="card3"
      >
        <div style={styles.title} className="card-mob">{t("whyUs.blazing1")} <div className="choose-green">{t("whyUs.blazing2")}</div> {t("whyUs.blazing3")}</div>
        <motion.div
          variants={{
            hover: {
              
              x: 0,
              y: 0,
            },
          }}
          initial={{x: 400,
              y: -500,}}
          transition={{
            type: "spring",
            stiffness: 300, // Controls the "jump" intensity
            damping: 20,    // Controls how quickly it settles
          }}
          style={styles.vectorWrapper}
        >
          {/* <Lightning style={styles.vector} /> */}
          {/* <source srcset="src/img/lightning.webp" type="image/webp"></source> */}
          <img src="src/img/lightning.svg" alt=""style={styles.vector} />
        </motion.div>
        
        <motion.div
          variants={{
            hover: {
              x: 0,
            },
          }}
          initial={{ x: 700 }}  
         
          transition={{
            type: "spring",
            stiffness: 300, // Controls the "jump" intensity
            damping: 20,    // Controls how quickly it settles
          }}
        
        >
         <div className="card3-text">{t("whyUs.stream1")} <br />{t("whyUs.stream2")} <br /> {t("whyUs.stream3")}</div>
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
    width: "70%",
height: "105%",
top: "-2%",
left: "40%",

  },
  vector: {
    width: "100%",
    height: "100%",
  },

  title: {
    fontSize: "clamp(34px, 5vw, 60px)", 
    fontFamily: "Raleway",    

    fontWeight: "500",
    lineHeight: "1.2",
    // top: "55px",
    // left: "35px"
    marginTop: "10%",
    marginBottom: "10%",
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
  }
};

const mediaQueries = {
  "@media (max-width: 768px)": {
    card: {
      maxWidth: "100%", // Карточка будет занимать 100% ширины на маленьких экранах
    }
  },
};

export default Card3;
