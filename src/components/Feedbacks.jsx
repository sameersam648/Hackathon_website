import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects1 } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProfileCard = ({ index, name, image ,description}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="flex flex-col items-center"
      >
        <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
        <h3 className="text-white font-bold text-[18px] mt-3">{name}</h3>
        <p className="text-secondary text-[14px]">{description}</p>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Bangalore Technological Institute</p>
        <h2 className={`${styles.sectionHeadText}`}>Guided by Excellence</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap justify-center gap-10">
        {projects1.map((project, index) => (
          <ProfileCard key={`profile-${index}`} index={index} {...project} />
        ))}
      </div>
     
    </>
  );
};

export default SectionWrapper(Works, "");