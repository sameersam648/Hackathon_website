import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if user is on mobile
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">
      {/* Background effects - simplified for mobile */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
      
      {/* Only show these effects on desktop */}
      {!isMobile && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="absolute w-[500px] h-[500px] rounded-full bg-yellow-500 opacity-5 blur-[100px]"></div>
          <div className="absolute w-[300px] h-[300px] rounded-full bg-purple-500 opacity-5 blur-[80px] -translate-x-40 translate-y-20"></div>
          <div className="absolute w-[250px] h-[250px] rounded-full bg-blue-500 opacity-5 blur-[60px] translate-x-60 -translate-y-40"></div>
        </div>
      )}
      
      {/* Animated grid lines - only on desktop */}
      {!isMobile && (
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10 pointer-events-none"></div>
      )}
      
      <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <motion.div 
            initial={{ scale: isMobile ? 1 : 0, opacity: isMobile ? 1 : 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: isMobile ? 0.3 : 0.8, delay: isMobile ? 0 : 0.2 }}
            className="w-5 h-5 rounded-full bg-yellow-400"
          />
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: isMobile ? "80px" : "180px", opacity: 0.8 }}
            transition={{ duration: isMobile ? 0.5 : 1, delay: isMobile ? 0 : 0.5 }}
            className="w-1 sm:h-80 h-40 bg-gradient-to-b from-yellow-400 to-transparent"
          />
        </div>

        <div>
          <motion.div
            initial={{ opacity: 0, y: isMobile ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: isMobile ? 0.3 : 0.8 }}
            className="relative"
          >
          <h1 className={`${styles.heroHeadText} text-white font-cyber`}>
            <motion.span
                className="text-white font-extrabold tracking-wider relative inline-block"
              style={{
                  textShadow: `0px 0px ${isMobile ? '10px' : '15px'} rgba(255, 204, 0, 0.8), 
                    0px 0px ${isMobile ? '20px' : '30px'} rgba(255, 204, 0, 0.4)`
                }}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: {
                    duration: isMobile ? 0.5 : 1.2,
                    ease: "easeOut"
                  }
                }}
              >
                HACK<span className="text-yellow-400">FEST</span> '25
              </motion.span>
            </h1>
            
            <motion.div
              initial={{ opacity: 0, y: isMobile ? 0 : 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: isMobile ? 0.3 : 0.8, delay: isMobile ? 0 : 0.5 }}
            >
              <p className="text-xl sm:text-2xl mt-2 text-gray-300 font-cyber">
  <span className="text-yellow-400 font-cyber text-3xl sm:text-4xl">B</span>uilding
  <span className="text-yellow-400 font-cyber text-3xl sm:text-4xl"> T</span>omorrow's
  <span className="text-yellow-400 font-cyber text-3xl sm:text-4xl"> I</span>nnovation
</p>

            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: isMobile ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: isMobile ? 0.3 : 0.8, delay: isMobile ? 0 : 1 }}
              className="mt-8"
            >
              <p className="text-gray-400 max-w-md leading-relaxed font-cyber">
                Join us for an immersive 24-hour coding challenge where innovation meets technology.
                Create, collaborate, and compete for exciting prizes.
              </p>
              
              <div className="mt-8 flex flex-wrap gap-4">
                <motion.a
                  href="#about"
                  whileHover={{ scale: isMobile ? 1 : 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-yellow-500 text-black font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/20"
                >
                  Learn More
                </motion.a>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: isMobile ? 0.5 : 1, delay: isMobile ? 0.2 : 1.5 }}
              className="mt-10 flex flex-col sm:flex-row gap-4 items-center text-sm text-gray-400"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                <span>April 03-04, 2025</span>
              </div>
              <div className="hidden sm:block w-1 h-4 border-l border-gray-700"></div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                <span>Bangalore Technological Institute</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Mouse scroll indicator - hide on mobile */}
      {!isMobile && (
        <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
          <a href="#about">
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-gray-700 flex justify-center items-start p-2">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-3 h-3 rounded-full bg-yellow-400"
              />
            </div>
          </a>
        </div>
      )}
    </section>
  );
};

export default Hero;