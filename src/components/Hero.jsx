import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const flickerGlowAnimation = {
  hidden: { opacity: 1, textShadow: "0 0 12px white" },
  visible: {
    opacity: [1, 0.5, 1, 0.2, 1],
    textShadow: [
      "0 0 12px white", 
      "0 0 16px white", 
      "0 0 12px white", 
      "0 0 20px white", 
      "0 0 12px white"
    ],
    transition: {
      duration: 3,
      repeat: 0,
      repeatType: "loop",
    },
  },
};

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white font-cyber`}>
            Welcome to 
            <motion.span
              className="text-[#ffffff] font-extrabold tracking-wide relative"
              style={{
                textShadow: `0px 0px 15px rgba(145, 94, 255, 0.9), 
                  0px 0px 30px rgba(145, 94, 255, 0.6),
                  0px 0px 30px rgba(0, 0, 20, 0.0),
                  0px 0px 30px rgba(145, 94, 255, 0.6),
                  0px 0px 30px rgba(145, 94, 255, 0.8),
                  0px 0px 30px rgba(0, 0, 0, 0.2),
                  0px 0px 30px rgba(145, 94, 255, 0.8), 
                  0px 0px 45px rgba(145, 94, 255, 0.8)`,
                fontFamily: "'Orbitron', sans-serif",
                color: "#ffffff",
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: [0, 1, 0, 2, 0.3, 0, 1, 0, 0.1, 0.9, 0,0, 1], // Flickering effect
                scale: [0.8, 0.2, 1, 0.1, 0.95, 0.1, 1], // Slight scale effect for realism
              }}
              transition={{
                duration: 3, // Faster flickering effect
                ease: "easeOut",
                times: [0, 0.08, 0.15, 0.22, 0.3, 0.38, 0.45, 0.52, 0.6, 0.68, 0.75, 1], // Quick flicker timings
              }}
            >
              "VISION'25"
            </motion.span>


          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 font-cyber`}>
            Conducted by Robotics and Artificial Intelligence <br className='sm:block hidden text-yellow-300' />
            Code, Connect, Compete.
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType:1 }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;