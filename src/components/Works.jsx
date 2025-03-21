import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import githubIcon from "../assets/github.png";
import linkedinIcon from "../assets/linkedin.png";

const ProfileCard = ({ index, name, image, description, source_code_link, linkedin_link }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.3, 0.75)}
      className="w-full sm:w-[250px]"
    >
      <motion.div
        whileHover={{ 
          y: -15,
          boxShadow: "0 25px 50px -12px rgba(250, 204, 21, 0.15)"
        }}
        transition={{ duration: 0.3 }}
        className="relative overflow-hidden bg-gradient-to-b from-black to-gray-900 rounded-2xl border border-gray-800 p-6 h-full"
      >
        {/* Background glow effect */}
        <div className="absolute -inset-x-10 -top-10 h-48 bg-yellow-500 opacity-5 blur-3xl rounded-full"></div>

        {/* Profile Image with border glow */}
        <div className="flex justify-center">
          <div className="relative w-40 h-40 mb-6">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 to-amber-600 opacity-20 blur-md"></div>
            <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-yellow-500 shadow-lg">
              <img src={image} alt={name} className="w-full h-full object-cover" />
            </div>
            
            {/* Social links positioned at bottom of image */}
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-4">
              <a
                href={source_code_link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-black border border-gray-700 hover:border-yellow-500 shadow-lg transition-all duration-300"
              >
                <img src={githubIcon} alt="GitHub" className="w-6 h-6 object-contain" />
              </a>
              
              <a
                href={linkedin_link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-black border border-gray-700 hover:border-yellow-500 shadow-lg transition-all duration-300"
              >
                <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6 object-contain" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Name with special styling */}
        <div className="mt-5 text-center">
          <h3 className="text-yellow-400 font-cyber text-2xl tracking-wider">{name}</h3>
          <div className="flex justify-center mt-1">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
          </div>
          <p className="text-gray-300 text-base mt-4 leading-relaxed font-cyber">{description}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Large background glow */}
      <div className="absolute -top-40 right-0 w-96 h-96 bg-yellow-500 opacity-5 blur-3xl rounded-full"></div>
      
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} font-cyber uppercase tracking-wider text-gray-300`}>
          The Creative Minds
        </p>
        <h2 className={`${styles.sectionHeadText} font-cyber text-yellow-400`}>
          Team <span className="text-white">HACK FEST</span>
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.div
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-gray-300 text-lg max-w-3xl leading-relaxed font-cyber"
        >
          <p>
            Our team consists of dedicated and skilled professionals who bring a
            wealth of knowledge and expertise to the table. Each member plays a
            crucial role in shaping our success, working collaboratively to
            achieve extraordinary results.
          </p>
        </motion.div>
      </div>

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
      {projects.map((project, index) => (
          <ProfileCard key={`profile-${index}`} index={index} {...project} />
        ))}
      </div>
      
      {/* Decorative element */}
      <div className="absolute -bottom-40 -left-20 w-80 h-80 bg-yellow-500 opacity-5 blur-3xl rounded-full"></div>
    </div>
  );
};

export default SectionWrapper(Works, "team");