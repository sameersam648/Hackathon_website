import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const PrizeCard = ({ position, amount, color, delay }) => (
  <motion.div
    variants={fadeIn("up", "spring", delay, 0.8)}
    className="w-full md:w-[300px] relative"
  >
    <motion.div 
      whileHover={{ y: -8, boxShadow: `0 20px 30px -10px ${color}30` }}
      transition={{ duration: 0.3 }}
      className="rounded-xl overflow-hidden bg-black bg-opacity-60 backdrop-blur-sm border border-gray-800 p-6"
    >
      {/* Trophy icon */}
      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
        <div className="w-12 h-12 rounded-full flex items-center justify-center"
          style={{ background: `linear-gradient(135deg, ${color}, ${color}50)` }}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
        </div>
      </div>
      
      {/* Position badge */}
      <div className="mt-5 text-center mb-4">
        <span className="text-lg font-cyber tracking-wider" style={{ color }}>
          {position}
        </span>
      </div>
      
      {/* Prize amount */}
      <div className="text-center">
        <h3 className="text-4xl font-extrabold font-cyber tracking-tight" style={{ color }}>
          {amount}
        </h3>
      </div>
      
      {/* Decorative line */}
      <div className="w-full flex justify-center mt-4">
        <div className="h-0.5 w-16 opacity-50 rounded-full" style={{ backgroundColor: color }}></div>
      </div>
    </motion.div>
  </motion.div>
);

const PrizePool = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-yellow-500 opacity-5 blur-3xl rounded-full"></div>
      <div className="absolute top-20 right-20 w-80 h-80 bg-blue-500 opacity-5 blur-3xl rounded-full"></div>
      <div className="absolute bottom-20 left-20 w-60 h-60 bg-purple-500 opacity-5 blur-2xl rounded-full"></div>
      
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-gray-300 font-cyber tracking-wider uppercase`}>
          Exclusive Competition Rewards
        </p>
        <h2 className={`${styles.sectionHeadText} text-yellow-400 font-cyber relative inline-block`}>
          Grand Prize Pool
          <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></span>
        </h2>
      </motion.div>
      
      <div className="relative flex flex-col items-center justify-center mt-16 mb-12">
        {/* Enhanced total prize amount with animations */}
        <motion.div 
          variants={fadeIn("up", "spring", 0.1, 0.9)}
          className="relative text-center mb-20"
        >
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ 
              scale: [0.8, 1.05, 1],
              opacity: [0, 0.8, 1],
            }}
            transition={{ 
              duration: 1.5,
              ease: "easeOut",
            }}
            className="absolute inset-0 bg-yellow-250 opacity-5 blur-xl rounded-full transform scale-110"
          ></motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative text-8xl md:text-9xl lg:text-[12rem] font-extrabold tracking-tighter"
          >
            <motion.span
              initial={{ backgroundPosition: "0% 0%" }}
              animate={{ 
                backgroundPosition: ["0% 0%", "80% 100%"],
                transition: { duration: 5, repeat: Infinity, repeatType: "reverse" }
              }}
              style={{ 
                backgroundImage: "linear-gradient(45deg, #f59e0b, #fbbf24, #f59e0b)",
                WebkitBackgroundClip: "text",
                backgroundSize: "200% 200%",
                backgroundClip: "text",
                color: "transparent",
                display: "inline-block"
              }}
            >
              ₹8000
            </motion.span>
          </motion.h1>
          
          {/* Animated decorative elements */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "150px" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto my-4"
          />
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-300 text-xl font-cyber"
          >
            <span className="text-yellow-500">Total</span> Prize Pool
          </motion.div>
        </motion.div>
        
        {/* Enhanced additional prizes and benefits section */}
        <motion.div
          variants={fadeIn("up", "spring", 0.8, 0.75)}
          className="mt-10 p-8 bg-black bg-opacity-50 backdrop-blur-sm rounded-2xl border border-gray-800 text-center w-full max-w-4xl mx-auto relative overflow-hidden"
        >
          {/* Animated background effect */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.05, scale: 1 }}
            transition={{ duration: 1 }}
            className="absolute -top-20 -right-20 w-80 h-80 bg-yellow-500 rounded-full blur-3xl"
          />
          
          <h3 className="text-yellow-400 text-3xl font-cyber mb-10 relative inline-block">
            Participant Benefits
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"
            />
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
            {/* Certificate Benefit */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-yellow-500 opacity-5 blur-lg rounded-full transform scale-75"></div>
              <div className="relative flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-yellow-500 bg-opacity-20 flex-shrink-0 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-white font-cyber text-xl mb-2">Certificates</h4>
                <p className="text-gray-300 text-sm mt-1 text-center">All participants receive participation certificates</p>
              </div>
            </motion.div>
            
            {/* Mentorship Benefit */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-yellow-500 opacity-5 blur-lg rounded-full transform scale-75"></div>
              <div className="relative flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-yellow-500 bg-opacity-20 flex-shrink-0 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="text-white font-cyber text-xl mb-2">Mentorship</h4>
                <p className="text-gray-300 text-sm mt-1 text-center">Direct mentorship from industry professionals</p>
              </div>
            </motion.div>
            
            {/* Networking Benefit */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-yellow-500 opacity-5 blur-lg rounded-full transform scale-75"></div>
              <div className="relative flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-yellow-500 bg-opacity-20 flex-shrink-0 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h4 className="text-white font-cyber text-xl mb-2">Networking</h4>
                <p className="text-gray-300 text-sm mt-1 text-center">Connect with peers and potential employers</p>
              </div>
            </motion.div>
          </div>
          
          {/* Additional animated dashed border around the benefits section */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute inset-0 -m-1.5 rounded-2xl border border-dashed border-yellow-400 border-opacity-20"
          />
        </motion.div>
        
        {/* Extra animation elements */}
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 flex justify-center"
        >
          <motion.a
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(245, 158, 11, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            href="https://docs.google.com/forms/d/e/1FAIpQLSfBXMr6FCW_elqLOYiRM1qZyacd07s2LGp5ATaUhZOO9ZwC6g/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-yellow-500 to-amber-600 text-black font-bold py-3 px-8 rounded-xl transition-all duration-300"
          >
            Register & Win
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(PrizePool, "prizepool");