import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export const Card2 = () => {
    const { t } = useTranslation();
    return (
        <motion.div
            style={styles.card}
            whileHover="hover"  
        >
            <motion.div
                variants={{
                    hover: {
                        y:0
                    },
                }}
                initial={{ y: -300 }}  
                transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                }}
            >
                <div className="card-pale-text">
                {t("whyUs.using1")}
                    <div>{t("whyUs.using2")}</div>
                </div>
            </motion.div>

            <motion.div
                variants={{
                    hover: {
                       
                        y: -20,
                    },
                }}
                // initial={{ x: 0, y: 180 }}
                transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                }}
            >
                <div style={styles.title}>
                {t("whyUs.top1")}
                   
                    <motion.div 
                        className="green-back" 
                       
                        variants={{
                            hover: {
                                padding: "5px 10px",
                            },
                        }}// Изменение padding при наведении
                    
                        transition={{
                            duration: 0.5,
                            ease: "easeInOut",
                        }}
                    >
                    {t("whyUs.top2")}
                    </motion.div>
                </div>
            </motion.div>

        
            <motion.div
                variants={{
                    hover: {
                    scale: 1.15,
                    y: 70,
                    },
                }}
                initial={{ y: 100 }}  
                
                transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                }}
                style={styles.vectorWrapper}
            >
                <source srcset="src/img/shield.webp" type="image/webp"></source>
                <img src="src/img/shield.png" alt="" className={styles.vector} />
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
    )
}

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
      flexDirection: "column",
      alignItems: "center",
    },
    vectorWrapper: {
        position: "absolute",
      width: "60%", // Относительный размер
      height: "90%",
      top: "35%", // Адаптируем положение
    },
    vector: {
      width: "100%",
      height: "100%",
      objectFit: "fill"
    },

    title: {
      fontSize: "clamp(24px, 5vw, 60px)", // Адаптивный размер текста
      fontWeight: "500",
      lineHeight: "1.2",
      textAlign: "center",
      marginBottom: "10px",
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
      fontSize: "clamp(14px, 2vw, 20px)", // Адаптивный размер текста
      lineHeight: "1.2",
      marginLeft: "10px",
    },
  };

  export default Card2;