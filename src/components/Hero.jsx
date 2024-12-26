import { motion } from 'framer-motion';
import videoSrc from '../videos/video.mp4'

const Hero = () => {
  return (
    <motion.section
      id="hero"
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="hero-content">
      <video autoPlay muted loop playsInline className="background-video">
    <source src={videoSrc} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
        <div className='text-left'>
          <div>
          <div className='title'>Your <span className='green-back'>Online Freedom </span>Starts Here</div>
          <div className='description mTop'>
            <div>100% Anonymous.</div>
            <div>No Logs, No Tracking.</div>
            <div>Unrestricted Browsing</div>
          </div>
          </div>
          <div className='bottom-text'>
            <button className='startButton'>Start Now</button>

            <div className='text-right'>
              <div>Enjoy the Internet Without Limits</div>
              <div className='mTop'>Our VPN ensures your privacy is protected while giving you access to the content you love — securely and anonymously</div>
            </div>
          </div>
          

        </div>
        {/* <div className='text-right'>
          <div>Enjoy the Internet Without Limits</div>
          <div>Our VPN ensures your privacy is protected while giving you access to the content you love — securely and anonymously</div>
        </div> */}
      </div>
    </motion.section>
  );
};

const styles = {
  bottomText: {
    display: 'flex',
    justifyContent: "space-between",
    alignItems: "center",
    height: "30%",
  
    bottom: "0",
 
  },

  textRight: {
    fontFamily: "Raleway",
    // lineHeight: "19.2px",
    textAlign: "right",
    width: "33%",
    // gap: "10px"
  },

  mTop: {
    // marginTop: "20px"
  }
}

export default Hero;
