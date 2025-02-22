import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Welcome to{" "}
            <motion.span
              className="text-[#915EFF] font-extrabold tracking-wide relative"
              style={{
                textShadow: `
                  0px 0px 15px rgba(145, 94, 255, 0.9), 
                  0px 0px 30px rgba(145, 94, 255, 0.6), 
                  0px 0px 45px rgba(145, 94, 255, 0.4)
                `,
                fontFamily: "'Orbitron', sans-serif",
                color: "#D8B4FF", // Soft neon purple for better visibility
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              "VISION'25"
            </motion.span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Code. Innovate. Compete. <br className="sm:block hidden" />
            Join the ultimate hackathon experience!
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
