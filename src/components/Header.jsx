import { useState } from 'react';
import { motion } from 'framer-motion';
import { Logo } from '../assets/Logo';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header
      className={`header ${menuOpen ? 'menu-open' : ''}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Logo className="logo" />
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {/* Только бургер-иконка через `span` */}
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav>
        <ul className={menuOpen ? 'open' : ''}>
          <li>
            <a href="#hero" onClick={() => setMenuOpen(false)}>{t("header.home")}</a>
          </li>
          <li>
            <a href="#whyUs" onClick={() => setMenuOpen(false)}>{t("header.whyUs")}</a>
          </li>
          <li>
            <a href="#contact" onClick={() => setMenuOpen(false)}>{t("header.private")}</a>
          </li>
        </ul>
      </nav>
      <button className="startButton header-btn">{t("header.getAccess")}</button>
    </motion.header>
  );
};

export default Header;
