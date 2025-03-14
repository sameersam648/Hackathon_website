import React, { useState, useEffect } from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full font-cyber">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col relative"
        style={{
          boxShadow: `0px 0px 20px rgba(255, 255, 255, 0.8), 
                      0px 0px 40px rgba(25, 25, 25, 0.6),
                      0px 0px 60px rgba(25, 25, 25, 0.4)`,
        }}
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />
        <h3 className="text-white text-[20px] font-cyber">{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Pac-Man Effect */}
      <div
        className="fixed left-10 transition-transform"
        style={{
          transform: `translateY(${scrollPosition}px)`,
          transition: "transform 0.1s linear",
        }}
      >
        <svg width="50" height="50" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="40" fill="yellow" />
          <polygon points="50,50 100,25 100,75" fill="black" />
          <circle cx="60" cy="30" r="5" fill="black" />
        </svg>
      </div>

      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} mt-2 text-gray-200 font-cyber`}>About the Event</p>
        <h2 className={`${styles.sectionHeadText} mt-2 text-gray-200 font-cyber`}>What is Hack Fest 2025?</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] font-cyber'
      >
        Hack Fest 2025 is an exciting 24-hour hackathon where developers, designers, and innovators collaborate to build groundbreaking solutions. Whether you're a beginner or an experienced coder, this is your opportunity to innovate, network, and showcase your skills in a competitive environment!
      </motion.p>

      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} mt-2 text-gray-200 font-cyber`}>Themes:</h2>
      </motion.div>


      <div className='mt-20 flex flex-wrap gap-10 font-cyber'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
          
        ))}
      </div>
      
    </>
  );
};

export default SectionWrapper(About, "about");