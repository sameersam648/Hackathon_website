import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.2, 0.75)}
    className="xs:w-[300px] w-full"
  >
    <motion.div
      whileHover={{ 
        y: -15,
        boxShadow: "0 30px 50px -15px rgba(255, 204, 0, 0.3)"
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.4, type: "spring", stiffness: 300 }}
      className="w-full rounded-2xl overflow-hidden bg-gradient-to-b from-gray-900 to-black backdrop-blur-sm border border-gray-800 relative"
    >
      {/* Animated glowing border effect */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0 opacity-20 rounded-2xl -m-0.5"
        style={{
          background: "linear-gradient(45deg, rgba(255,204,0,0), rgba(255,204,0,1) 50%, rgba(255,204,0,0) 100%)",
          backgroundSize: "200% 200%",
          animation: "gradientBorder 3s linear infinite"
        }}
      />
      
      <div className="relative p-8 flex flex-col justify-center items-center gap-6">
        {/* Enhanced glowing background effect */}
        <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-yellow-400 via-transparent to-transparent"></div>
        
        {/* Enhanced icon with animated glow */}
        <motion.div 
          className="relative"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.4 }}
        >
          <motion.div 
            animate={{ 
              opacity: [0.4, 0.8, 0.4],
              scale: [0.9, 1.1, 0.9]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="absolute inset-0 rounded-full blur-md" 
            style={{ background: "radial-gradient(circle, rgba(255,204,0,0.8), transparent 70%)" }}
          />
          <div className="relative w-20 h-20 rounded-full p-2 flex items-center justify-center bg-black">
            <motion.img 
              src={icon} 
              alt={title} 
              className="w-10 h-10 object-contain"
              whileHover={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </motion.div>
        
        {/* Enhanced Title */}
        <motion.h3 
          whileHover={{ scale: 1.05, color: "#ffd700" }}
          transition={{ duration: 0.3 }}
          className="text-white text-[15px] text-center font-cyber tracking-wider"
        >
          {title}
        </motion.h3>
        
        {/* Animated accent bar */}
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: "3rem" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-1 bg-gradient-to-r from-yellow-500 to-amber-600 rounded-full"
        />
        
        {/* Subtle hover indicator */}
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-1 opacity-50">
          <span className="block w-1 h-1 rounded-full bg-yellow-400"></span>
          <span className="block w-1 h-1 rounded-full bg-yellow-400"></span>
          <span className="block w-1 h-1 rounded-full bg-yellow-400"></span>
        </div>
      </div>
    </motion.div>
  </motion.div>
);

const About = () => {
  return (
    <div className="relative">
      {/* Enhanced background elements */}
      <motion.div 
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.05, 0.08, 0.05]
        }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
        className="absolute top-0 right-0 w-72 h-72 bg-yellow-500 opacity-5 blur-3xl rounded-full"
      />
      <motion.div 
        animate={{
          scale: [1, 0.9, 1],
          opacity: [0.05, 0.08, 0.05]
        }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-20 left-10 w-60 h-60 bg-blue-500 opacity-5 blur-3xl rounded-full"
      />

      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-gray-300 font-cyber tracking-wider uppercase`}>
          About the Event
        </p>
        <h2 className={`${styles.sectionHeadText} text-yellow-400 font-cyber relative inline-block`}>
          What is Hack Fest 2025?
          <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></span>
        </h2>
      </motion.div>

      <motion.div
        variants={fadeIn("up", "", 0.1, 1)}
        className="mt-8"
      >
        <p className="text-gray-300 text-[17px] max-w-3xl leading-relaxed font-cyber">
          Hack Fest 2025 is an exciting 24-hour hackathon where developers, designers, and innovators 
          collaborate to build groundbreaking solutions. Whether you're a beginner or an experienced coder, 
          this is your opportunity to innovate, network, and showcase your skills in a competitive environment!
        </p>
        
        {/* Enhanced key features section */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div 
            whileHover={{ y: -8 }}
            transition={{ duration: 0.4 }}
            className="bg-black bg-opacity-50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 relative overflow-hidden group"
          >
            {/* Animated hover effect */}
            <motion.div 
              initial={{ opacity: 0, height: "0%" }}
              whileHover={{ opacity: 0.05, height: "100%" }}
              transition={{ duration: 0.4 }}
              className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-yellow-400 to-transparent"
            />
            
            <div className="flex items-center gap-3 mb-3 relative">
              <div className="w-2 h-8 bg-yellow-400 rounded-sm group-hover:h-10 transition-all duration-300"></div>
              <h3 className="text-xl font-cyber text-white">Why Participate?</h3>
            </div>
            <ul className="space-y-3 text-gray-300 relative">
              <li className="flex items-start gap-2 group/item">
                <span className="text-yellow-400 mt-1 group-hover/item:scale-125 transition-transform duration-300">•</span>
                <span className="group-hover/item:text-white transition-colors duration-300">Network with industry professionals and like-minded peers</span>
              </li>
              <li className="flex items-start gap-2 group/item">
                <span className="text-yellow-400 mt-1 group-hover/item:scale-125 transition-transform duration-300">•</span>
                <span className="group-hover/item:text-white transition-colors duration-300">Win exciting prizes worth up to ₹8000</span>
              </li>
              <li className="flex items-start gap-2 group/item">
                <span className="text-yellow-400 mt-1 group-hover/item:scale-125 transition-transform duration-300">•</span>
                <span className="group-hover/item:text-white transition-colors duration-300">Gain practical experience and enhance your portfolio</span>
              </li>
            </ul>
          </motion.div>
          
          <motion.div 
            whileHover={{ y: -8 }}
            transition={{ duration: 0.4 }}
            className="bg-black bg-opacity-50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 relative overflow-hidden group"
          >
            {/* Animated hover effect */}
            <motion.div 
              initial={{ opacity: 0, height: "0%" }}
              whileHover={{ opacity: 0.05, height: "100%" }}
              transition={{ duration: 0.4 }}
              className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-blue-500 to-transparent"
            />
            
            <div className="flex items-center gap-3 mb-3 relative">
              <div className="w-2 h-8 bg-blue-500 rounded-sm group-hover:h-10 transition-all duration-300"></div>
              <h3 className="text-xl font-cyber text-white">Event Details</h3>
            </div>
            <ul className="space-y-3 text-gray-300 relative">
              <li className="flex items-start gap-2 group/item">
                <span className="text-blue-500 mt-1 group-hover/item:scale-125 transition-transform duration-300">•</span>
                <span className="group-hover/item:text-white transition-colors duration-300">Date: April 03-04, 2025</span>
              </li>
              <li className="flex items-start gap-2 group/item">
                <span className="text-blue-500 mt-1 group-hover/item:scale-125 transition-transform duration-300">•</span>
                <span className="group-hover/item:text-white transition-colors duration-300">Venue: Bangalore Technological Institute</span>
              </li>
              <li className="flex items-start gap-2 group/item">
                <span className="text-blue-500 mt-1 group-hover/item:scale-125 transition-transform duration-300">•</span>
                <span className="group-hover/item:text-white transition-colors duration-300">Registration Fee: ₹300 per team (1-3 members)</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </motion.div>

     <motion.div variants={textVariant()} className="mt-16">
        <h2 className={`${styles.sectionHeadText} text-yellow-400 font-cyber relative inline-block`}>
          Themes
          <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></span>
        </h2>
        <p className="text-gray-300 mt-4 max-w-3xl">
          Choose from these exciting technological areas to focus your project on:
        </p>
      </motion.div>

      {/* Updated themes section with single-line scrolling */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-10 flex space-x-6 overflow-x-auto whitespace-nowrap p-4"
      >
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </motion.div>

      {/* Enhanced Registration & Brochure Buttons */}
      <motion.div 
        variants={fadeIn("up", "", 0.5, 1)}
        className="mt-20 flex flex-col sm:flex-row gap-8 items-center justify-center"
      >
        <motion.a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfBXMr6FCW_elqLOYiRM1qZyacd07s2LGp5ATaUhZOO9ZwC6g/viewform"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Register Now"
          onClick={(e) => e.stopPropagation()}
          whileHover={{ scale: 1.05, boxShadow: "0 15px 30px -10px rgba(245, 158, 11, 0.4)" }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-yellow-500 to-amber-600 text-black px-8 py-3 rounded-xl shadow-lg font-cyber text-lg flex items-center gap-2 hover:shadow-yellow-500/30 hover:shadow-lg transition-all duration-300 z-10"
        >
          <span>Register Now</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </motion.a>

        <motion.a
          href="/btiqr.jpg"
          download
          aria-label="Pay Here"
          onClick={(e) => e.stopPropagation()}
          whileHover={{ scale: 1.05, boxShadow: "0 15px 30px -10px rgba(245, 158, 11, 0.4)" }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-yellow-500 to-amber-600 text-black px-8 py-3 rounded-xl shadow-lg font-cyber text-lg flex items-center gap-2 hover:shadow-yellow-500/30 hover:shadow-lg transition-all duration-300 z-10"
        >
          <span>Pay Here</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </motion.a>

        <motion.a
          href="/brochure.pdf"
          download
          aria-label="Download Brochure"
          onClick={(e) => e.stopPropagation()}
          whileHover={{ scale: 1.05, boxShadow: "0 15px 30px -10px rgba(255, 204, 0, 0.2)" }}
          whileTap={{ scale: 0.95 }}
          className="border border-yellow-500 text-yellow-400 px-8 py-3 rounded-xl font-cyber text-lg flex items-center gap-2 hover:bg-yellow-500/10 transition-all duration-300 z-10"
        >
          <span>Download Brochure</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </motion.a>
      </motion.div>
      </div>
  );
};

export default SectionWrapper(About, "about");
