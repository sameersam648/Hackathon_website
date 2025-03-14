import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import githubIcon from "../assets/github.png"; // Importing GitHub icon
import linkedinIcon from "../assets/linkedin.png"; // Importing LinkedIn icon

const ProfileCard = ({ index, name, image, description, source_code_link, linkedin_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="flex flex-col items-center relative p-6 bg-gray-900 rounded-lg shadow-lg"
      >
        {/* GitHub & LinkedIn Icons positioned OUTSIDE the image but inside the card */}
        <div className="absolute top-2 left-2 bg-gray-800 p-2 rounded-full shadow-lg">
          <a 
            href={source_code_link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-8 h-8 flex"
          >
            <img src={githubIcon} alt="GitHub" className="w-full h-full object-contain" />
          </a>
        </div>

        <div className="absolute top-2 right-2 bg-gray-800 p-2 rounded-full shadow-lg">
          <a 
            href={linkedin_link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-8 h-8 flex"
          >
            <img src={linkedinIcon} alt="LinkedIn" className="w-full h-full object-contain" />
          </a>
        </div>

        {/* Profile Image */}
        <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg mt-6">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>

        <h3 className="text-white font-cyber text-[18px] mt-3">{name}</h3>
        <p className="text-secondary text-[14px] text-center">{description}</p>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} font-cyber`}>The CSX</p>
        <h2 className={`${styles.sectionHeadText} font-cyber`}>Team HACK FEST:</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] font-cyber"
        >
          Our team consists of dedicated and skilled professionals who bring a
          wealth of knowledge and expertise to the table. Each member plays a
          crucial role in shaping our success, working collaboratively to
          achieve our goals. Get to know our passionate team members and their
          contributions to our journey.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap justify-center gap-10">
        {projects.map((project, index) => (
          <ProfileCard key={`profile-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
