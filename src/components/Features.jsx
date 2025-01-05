import React from "react";
import { motion } from "framer-motion";
import { Vector } from "../img/Vector";
import { Cloud } from "../assets/Cloud";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Numbers } from "./Numbers";

import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";
import Card4 from "./Card4";
import { useTranslation } from "react-i18next";
const WhyUs = () => {
  const { t, i18n } = useTranslation();
  return(
    
    <motion.section
      id="whyUs"
      className="whyUs"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1 }}
    > 
      <div className="choose-title"><span className="choose-green">{t("whyUs.whyChooseUs1")}</span> {t("whyUs.whyChooseUs2")}</div>
      
      <div className="cards">
        <Card1/>
        <Card2/>
        <Card3/>
        <Card4/>
      </div>
    </motion.section>
  )
};

const styles = {
  card: {
    position: "relative",
    width: "600px",
    height: "600px",
    backgroundColor: "#111111",
    display: "flex",
    overflow: "hidden",
    color: 'white',
    cursor: 'pointer', 
  },
  vectorWrapper: {
    position: "absolute",
    width: "547.29px",
    height: "547.38px",
    top: "58%",
  },
  vector: {
    width: "100%",
    height: "100%",
  },
  cloud: {
    position: "absolute",
    top: "366px",
    left: "-290.32px",
    gap: "6px",
    opacity: "1",
    transform: "rotate(180deg)", 
  },
  title: {
    fontSize: "60px",
    

    fontWeight: "500",
    lineHeight: "60px",
    position: "absolute",
    top: "55px",
    left: "35px"
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

export default WhyUs;
