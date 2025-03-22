import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const contacts = [
  { name: "Sameer", role: "Event Head", phone: "+91 7829 701 625" },
  { name: "Jeelan Basha", role: "Event Coordinator", phone: "+91 81979 73038" },
  { name: "Aman Kumar", role: "Tech Lead", phone: "+91 88638 96724" },
  { name: "Likhith Kumar", role: "Operations Manager", phone: "+91 96327 24212" },
  
];

const Contact = () => {
  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      {/* Contact Information Section */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={' ${styles.sectionSubText} font-cyber'}>contact</p>
        <h3 className={'{styles.sectionHeadText} font-cyber'}>Get in Touch</h3>

        <div className="mt-8 flex flex-col gap-6">
          {contacts.map((contact, index) => (
            <div
              key={index}
              className="bg-tertiary p-4 rounded-lg shadow-md shadow-primary"
            >
              <h4 className="text-white font-cyber">{contact.name}</h4>
              <p className="text-secondary font-cyber">{contact.role}</p>
              <p className="text-white font-cyber">{contact.phone}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Earth Animation */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="planet xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
