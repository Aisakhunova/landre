import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export const Curtain = () => {
  const { t } = useTranslation();
  return (
    <motion.div
      className="container"
      whileHover="hover" // Включение анимации при наведении
      id="curtain"
    >
      <motion.div
        className="outer-container"
        whileHover="hover"
        style={{
          position: "relative",
          overflow: "hidden", // скрываем лишние элементы
        }}
      >
        {/* Слой вспышки */}
        <motion.div
          className="flash"
          initial={{ opacity: 0 }}
          variants={{
            hover: {
              opacity: [0, 1, 1], // Вспышка от прозрачной к яркой и обратно
              scale: [1, 1.5, 1], // Небольшое увеличение
            },
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "radial-gradient(circle, white, transparent)", // Вспышка в виде градиента
            zIndex: -1, // Убираем вспышку за контент
            pointerEvents: "none", // Не мешает взаимодействию
          }}
        ></motion.div>

        {/* Основная надпись */}
        <motion.h1
          className="main-text"
          variants={{
            hover: {
              y: 300,
              opacity: 1,
            },
          }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <div className="choose-green">
          {t("curtain.ready")}
          </div>
        </motion.h1>

        {/* Овальная зелёная шторка */}
        <motion.div
          className="inner-container"
          initial={{ opacity: 1, y: -500 }} // начальная позиция
          variants={{
            hover: {
              y: 0,
              opacity: 1,
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            },
          }}
          transition={{ duration: 0.3 }}
        >
          <p className="curtain-text">{t("curtain.iamready")} </p>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            variants={{
              hover: {
                x: 0,
                opacity: 1,
              },
            }}
            transition={{ duration: 0.5 }}
          >
            <svg
              width="49"
              height="38"
              viewBox="0 0 49 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M47.7675 17.2322C48.7438 18.2085 48.7438 19.7915 47.7675 20.7678L31.8576 36.6777C30.8813 37.654 29.2984 37.654 28.3221 36.6777C27.3458 35.7014 27.3458 34.1184 28.3221 33.1421L42.4642 19L28.3221 4.85786C27.3458 3.88155 27.3458 2.29864 28.3221 1.32233C29.2984 0.34602 30.8813 0.34602 31.8576 1.32233L47.7675 17.2322ZM2.99976 21.5C1.61905 21.5 0.499756 20.3807 0.499756 19C0.499756 17.6193 1.61905 16.5 2.99976 16.5V21.5ZM45.9998 21.5H2.99976V16.5H45.9998V21.5Z"
                fill="#1C1C1C"
              />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
