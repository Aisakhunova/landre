import { motion } from 'framer-motion';
import { Logo } from '../assets/Logo';

const Header = () => {
  return (
    <motion.header
      className="header"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Logo/>

      <nav>
        <ul>
          <li>
            <a href="#hero">Home</a>
          </li>
          <li>
            <a href="#whyUs">Why Choose Us?</a>
          </li>
          <li>
            <a href="#contact">Private</a>
          </li>
        </ul>
      </nav>
      <button className='startButton header-btn'>Get access</button>
    </motion.header>
  );
};

export default Header;
