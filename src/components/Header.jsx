import { useState } from 'react';
import { motion } from 'framer-motion';
import { Logo } from '../assets/Logo';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header
      className={`header ${menuOpen ? 'menu-open' : ''}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <img src="src/img/logo2.png" className="logo" alt="" />
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
      </div>
      <motion.nav
        initial={{ height: 0 }}
        animate={{
          height: menuOpen ? 'auto' : window.innerWidth > 768 ? 'auto' : 0,
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
       <div>
       <ul className={menuOpen ? 'open' : ''}>
          <li>
            <a href="#hero" onClick={() => setMenuOpen(false)}>
              {t("header.home")}
            </a>
          </li>
          <li>
            <a href="#whyUs" onClick={() => setMenuOpen(false)}>
              {t("header.whyUs")}
            </a>
          </li>
          <li>
            <a href="#privacy" onClick={() => setMenuOpen(false)}>
              {t("header.private")}
            </a>
          </li>
          
          <li>
          <button className="startButton header-btn for-mb">{t("header.getAccess")}</button>
          </li>

        </ul>
       </div>
        
      </motion.nav>
      <button className="startButton header-btn for-lg">{t("header.getAccess")}</button>
      
    </motion.header>
  );
};

export default Header;
