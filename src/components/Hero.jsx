import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({
        x: event.clientX - window.innerWidth / 2,
        y: event.clientY - window.innerHeight / 2,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e]">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-black/30 z-0" />

      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 z-10`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF] shadow-lg shadow-[#915EFF]/50" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        {/* Main Heading */}
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Welcome to{" "}
            <motion.span
              className="text-[#915EFF] font-extrabold tracking-wide relative"
              style={{
                textShadow: `0px 0px 15px rgba(145, 94, 255, 0.9), 
                  0px 0px 30px rgba(145, 94, 255, 0.6), 
                  0px 0px 45px rgba(145, 94, 255, 0.4)`,
                fontFamily: "'Orbitron', sans-serif",
                color: "#D8B4FF",
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 2, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              "VISION'25"
            </motion.span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-gray-200`}>
            conducted by Robotics and Artificial Intelligence <br className="sm:block hidden" />
            <span className="text-[#FFD700] font-semibold">Code. Innovate. Compete.</span>
          </p>
        </div>
      </div>

      {/* Dynamic Glow Effect */}
      <motion.div
        className="absolute w-[500px] h-[500px] sm:w-[800px] sm:h-[800px] rounded-full opacity-50"
        style={{
          background: "radial-gradient(circle, rgba(125, 64, 205, 0.8) 5%, rgba(0,0,0,0) 50%)",
          filter: "blur(100px)",
        }}
        animate={{
          x: mousePos.x * 0.05,
          y: mousePos.y * 0.05,
        }}
        transition={{
          type: "tween",
          ease: "easeOut",
          duration: 0.5,
        }}
      ></motion.div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <motion.div
            className="w-[25px] h-[50px] rounded-3xl border-4 border-[#915EFF] flex justify-center items-start p-2 shadow-lg shadow-[#915EFF]/50"
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            <div className="w-3 h-3 rounded-full bg-[#915EFF] mb-1" />
          </motion.div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
