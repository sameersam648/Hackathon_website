import React, { useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const faqsLeft = [
  { question: "Who can participate?", answer: "Anyone with a passion for coding, designing, or innovation can join!" },
  { question: "Is there any registration fee?", answer: "Yes, the registration fee is ₹ 300/- per Team." },
  { question: "What should I bring?", answer: "Bring your laptop, chargers, and enthusiasm! Internet will be provided." },
  { question: "Are there prizes?", answer: "Yes! Exciting prizes, goodies, and opportunities await the winners." },
];

const faqsRight = [
  { question: "Can I participate solo?", answer: "Yes, but we encourage forming teams for better collaboration!" },
  { question: "What technologies can we use?", answer: "You can use any technology stack, including web, mobile, AI, and blockchain!" },
  { question: "How are projects judged?", answer: "Judging will be based on innovation, technical implementation, and impact." },
  { question: "How do I form a team?", answer: "You can form a team of 1-3 members or find teammates through our college." },
];

const FAQCard = ({ question, answer, index, expanded, setExpanded }) => {
  const isOpen = index === expanded;

  return (
    <motion.div
      className={`bg-black bg-opacity-70 p-6 rounded-xl shadow-lg w-full cursor-pointer mb-6 border ${
        isOpen ? "border-yellow-400" : "border-gray-700"
      } hover:border-yellow-500 transition-all duration-300`}
      variants={fadeIn("up", "spring", index * 0.2, 0.75)}
      initial="hidden"
      animate="show"
      exit="hidden"
      onClick={() => setExpanded(isOpen ? null : index)}
    >
      <motion.div className="flex justify-between items-center">
        <h3 className={`${isOpen ? "text-yellow-400" : "text-gray-200"} text-xl font-cyber tracking-wide`}>
          {question}
        </h3>
        <motion.div 
          className={`w-8 h-8 flex items-center justify-center rounded-full ${
            isOpen ? "bg-yellow-500 bg-opacity-20" : "bg-gray-800"
          }`}
          animate={{ rotate: isOpen ? 180 : 0 }}
        >
          <span className={`${isOpen ? "text-yellow-400" : "text-gray-400"} text-sm`}>&#9660;</span>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className={`mt-4 pt-4 ${isOpen ? "border-t border-gray-700" : ""}`}>
          <p className="text-gray-300 font-cyber leading-relaxed">{answer}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

const FAQ = () => {
  const [expandedLeft, setExpandedLeft] = useState(null);
  const [expandedRight, setExpandedRight] = useState(null);

  return (
    <div className="relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-yellow-500 opacity-5 blur-3xl rounded-full"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-yellow-500 opacity-5 blur-3xl rounded-full"></div>
      
      <motion.div variants={textVariant()} className="relative z-10">
        <p className={`${styles.sectionSubText} mt-2 text-gray-300 font-cyber uppercase tracking-wider`}>
          Have Questions?
        </p>
        <h2 className={`${styles.sectionHeadText} mt-2 text-yellow-400 font-cyber`}>
          Frequently Asked Questions
        </h2>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="relative z-10 mt-4 mb-12 max-w-3xl"
      >
        <p className="text-gray-300 text-lg leading-relaxed font-cyber">
          Find answers to the most commonly asked questions about Hack Fest 2025 below.
          If you need additional information, feel free to contact our team.
        </p>
      </motion.div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 font-cyber relative z-10">
        <div>
          <div className="mb-8 flex items-center">
            <div className="h-1 w-10 bg-yellow-500 mr-3"></div>
            <h3 className="text-yellow-400 text-xl font-cyber">Event Details</h3>
          </div>
          {faqsLeft.map((faq, index) => (
            <FAQCard 
              key={faq.question} 
              index={index} 
              {...faq} 
              expanded={expandedLeft} 
              setExpanded={setExpandedLeft} 
            />
          ))}
        </div>
        
        <div>
          <div className="mb-8 flex items-center">
            <div className="h-1 w-10 bg-yellow-500 mr-3"></div>
            <h3 className="text-yellow-400 text-xl font-cyber">Participation</h3>
          </div>
          {faqsRight.map((faq, index) => (
            <FAQCard 
              key={faq.question} 
              index={index} 
              {...faq} 
              expanded={expandedRight} 
              setExpanded={setExpandedRight} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(FAQ, "faq");