import React from "react";
import { motion } from "framer-motion";
import { Vector } from "../img/Vector";
import { Cloud } from "../assets/Cloud";
import { Lightning } from "../assets/Lightning";
const Card3 = () => {
  
  return (
    <motion.div
        style={styles.card}
        whileHover="hover"  
      >
        <div style={styles.title}>Blazing <div className="choose-green">Fast</div> Speeds</div>
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
          <Lightning style={styles.vector} />
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
         <div className="card-text">Stream, browse, <br />and download with <br /> no interruptions</div>
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
    width: "48%",
    height: "608px",
    backgroundColor: "#111111",
    display: "flex",
    overflow: "hidden",
    color: 'white',
    cursor: 'pointer', 
    borderRadius: "20px",
    flexDirection: "column",
  },
  vectorWrapper: {
    position: "absolute",
    width: "453.95px",
height: "675.16px",
top: "-38px",
left: "208px",

  },
  vector: {
    width: "100%",
    height: "100%",
  },

  title: {
    fontSize: "60px",
    fontFamily: "Raleway",    

    fontWeight: "500",
    lineHeight: "60px",
    // top: "55px",
    // left: "35px"
    marginTop: "88px",
    marginBottom: "60px",
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

export default Card3;