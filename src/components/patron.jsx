import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

// Patron data with all the provided details
const patrons = [
  {
    name: "Dr. A. Prabhakara Reddy",
    tier: "Chief Patron",
    position: "President",
    description: "Leading our institution with vision and dedication to academic excellence.",
    color: "#FFD700", // Gold
    initial: "P"
  },
  {
    name: "Dr. H.S. Nanda",
    tier: "Patron",
    position: "Principal",
    description: "Guiding our academic initiatives and fostering innovation among faculty and students.",
    color: "#C0C0C0", // Silver
    initial: "N"
  },
  {
    name: "Dr. Mohamed Saleem",
    tier: "Convenor",
    position: "Professor & HoD, RO & AI",
    description: "Coordinating the hackathon event and bringing together resources for student success.",
    color: "#CD7F32", // Bronze
    initial: "S"
  }
];

// Advisory Committee members
const advisoryCommittee = [
  "Dr. Gayatri Tanuja G, HOD/AIML",
  "Dr. Sohan Kumar Gupta, HoD/CE",
  "Dr. Sreerama Reddy G M, HOD/CSE",
  "Dr. B.M Ramalinga Reddy, HoD/CV",
  "Prof. Deepa.T, HOD/ECE",
  "Dr. Bala Sundaro Rao, HoD/ME",
  "Prof. Saravana Kumar T, HoD/S&H",
  "Dr. R. Felshiya Rajakumari, IIC Convenor"
];

// Faculty Coordinators
const facultyCoordinators = [
  "Dr. Nagashree Narayan Bhat, ASP/S&H",
  "Dr. Shreepannaga, ASP/ME",
  "Mrs. Gladys Kiruba, AP/AIML",
  "Mrs. Nivetha K, AP/CE",
  "Mrs. Aswini C, AP/CSE",
  "Mrs. Bhawani Manda, AP/CV",
  "Mrs. Brundha K A, AP/ECE",
];

const PatronCard = ({ name, tier, position, description, color, index, initial }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.2, 0.75)}
      className="w-full"
    >
      <motion.div
        whileHover={{ 
          y: -10,
          boxShadow: `0 25px 50px -12px ${color}33` // Using color with 20% opacity
        }}
        transition={{ duration: 0.3 }}
        className="relative overflow-hidden bg-gradient-to-b from-black to-gray-900 rounded-2xl border border-gray-800 p-4 sm:p-6 h-full"
      >
        {/* Elegant glow effect */}
        <div 
          className="absolute -inset-x-10 -top-10 h-48 opacity-15 blur-3xl rounded-full"
          style={{ backgroundColor: color }}
        ></div>

        {/* Patron Role Badge */}
        <div 
          className="absolute top-4 right-4 rounded-full px-3 py-1 text-xs font-semibold backdrop-blur-sm"
          style={{ backgroundColor: `${color}15`, color: color, borderColor: color, border: `1px solid ${color}40` }}
        >
          {tier}
        </div>

        {/* Avatar with elegant border */}
        <div className="flex justify-center">
          <div className="relative w-24 sm:w-32 h-24 sm:h-32 mb-6 sm:mb-8 flex items-center justify-center">
            <div 
              className="absolute inset-0 rounded-full opacity-25 blur-md"
              style={{ background: `radial-gradient(circle, ${color}, transparent 70%)` }}
            ></div>
            
            {/* Avatar circle with initial */}
            <div 
              className="relative w-full h-full rounded-full overflow-hidden border-2 flex items-center justify-center text-4xl sm:text-5xl font-bold shadow-inner"
              style={{ borderColor: `${color}80`, background: 'linear-gradient(145deg, rgba(15,15,15,0.4), rgba(15,15,15,0.8))' }}
            >
              <span style={{ color }}>{initial}</span>
            </div>
          </div>
        </div>
        
        {/* Name with elegant styling */}
        <div className="mt-3 sm:mt-5 text-center">
          <h3 
            className="font-cyber text-xl sm:text-2xl tracking-wider"
            style={{ color }}
          >
            {name}
          </h3>
          <div className="flex justify-center mt-2">
            <div 
              className="h-[2px] w-20" 
              style={{ background: `linear-gradient(to right, transparent, ${color}90, transparent)` }}
            ></div>
          </div>
          <p className="text-gray-400 text-sm mt-2 sm:mt-3 font-cyber tracking-wide">{position}</p>
          <p className="text-gray-300 text-sm sm:text-base mt-3 sm:mt-4 leading-relaxed font-cyber">{description}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

const CommitteeList = ({ title, members, color, index }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.1, 0.75)}
      className="mb-10 sm:mb-14"
    >
      <h3 className="text-xl font-cyber mb-4 flex items-center" style={{ color: color }}>
        <span className="inline-block w-1.5 h-6 mr-3 rounded-sm" style={{ backgroundColor: color }}></span>
        {title}
      </h3>
      <div className="bg-black bg-opacity-40 backdrop-blur-sm border border-gray-800 rounded-xl p-4 sm:p-7 shadow-lg" 
        style={{ boxShadow: `0 10px 30px -15px ${color}30` }}>
        <ul className="grid grid-cols-1 gap-4">
          {members.map((member, idx) => (
            <li key={idx} className="text-gray-300 font-cyber text-sm flex items-start group transition-all duration-300 hover:translate-x-1">
              <span className="inline-block w-2 h-2 rounded-full mt-1.5 mr-3 group-hover:scale-110 transition-all" 
                style={{ backgroundColor: color }}></span>
              {member}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const Patrons = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute -top-40 right-0 w-96 h-96 bg-yellow-500 opacity-5 blur-3xl rounded-full"></div>
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-purple-500 opacity-5 blur-3xl rounded-full"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500 opacity-5 blur-3xl rounded-full"></div>
      
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} font-cyber uppercase tracking-wider text-gray-300`}>
          Leadership & Organization
        </p>
        <h2 className={`${styles.sectionHeadText} font-cyber text-yellow-400 relative inline-block`}>
          Organizing Committee
          <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></span>
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.div
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-5 text-gray-300 text-lg max-w-3xl leading-relaxed font-cyber"
        >
          <p>
            Our hackathon is made possible through the dedicated leadership and guidance of 
            our distinguished organizing committee members who bring their expertise to create
            an exceptional learning experience.
          </p>
        </motion.div>
      </div>

      {/* Display main patrons - responsive grid */}
      <div className="mt-16 sm:mt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
          {patrons.map((patron, index) => (
            <PatronCard key={`patron-${index}`} index={index} {...patron} />
          ))}
        </div>
      </div>

      {/* Display committees - single column on mobile */}
      <div className="mt-16 sm:mt-24">
        <CommitteeList 
          title="Advisory Committee" 
          members={advisoryCommittee} 
          color="#9333EA" 
          index={0} 
        />
        
        <CommitteeList 
          title="Faculty Coordinators" 
          members={facultyCoordinators} 
          color="#3B82F6" 
          index={1} 
        />
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -bottom-40 -left-20 w-80 h-80 bg-yellow-500 opacity-5 blur-3xl rounded-full"></div>
    </div>
  );
};

export default SectionWrapper(Patrons, "patrons");