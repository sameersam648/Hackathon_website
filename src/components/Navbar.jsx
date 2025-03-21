import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-4 fixed top-0 z-20 transition-all duration-300 ${
        scrolled 
          ? "bg-black bg-opacity-85 backdrop-blur-md shadow-lg shadow-black/20" 
          : "bg-transparent"
      } font-cyber`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto font-cyber">
        {/* Logo and Brand */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <motion.img
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            src={logo}
            alt="BTI Logo"
            className="w-[150px] h-[80px] object-contain"
          />
          <div className="flex flex-col">
            <motion.p 
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-white text-[18px] font-cyber font-bold"
            >
              | HACK FEST <span className="text-yellow-400">2025</span>
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="hidden sm:block text-gray-300 text-[12px] font-cyber tracking-wider"
            >
              | Bangalore Technological Institute
            </motion.p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <ul className="list-none hidden sm:flex flex-row gap-10 font-cyber items-center">
          {navLinks.map((nav, index) => (
            <motion.li
              key={nav.id}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 + 0.5 }}
              className={`relative ${
                active === nav.title 
                  ? "text-yellow-400" 
                  : "text-gray-300 hover:text-white"
              } text-[16px] font-cyber tracking-wider transition-colors duration-300`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`} className="flex flex-col items-center group">
                {nav.title}
                <span 
                  className={`block h-[2px] bg-yellow-400 transition-all duration-300 mt-1 
                    ${active === nav.title ? "w-full" : "w-0 group-hover:w-2/3"}`}>
                </span>
              </a>
            </motion.li>
          ))}
          <motion.li
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: navLinks.length * 0.1 + 0.5 }}
          >
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSfBXMr6FCW_elqLOYiRM1qZyacd07s2LGp5ATaUhZOO9ZwC6g/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-yellow-500 to-amber-600 text-black font-semibold px-4 py-2 rounded-lg hover:shadow-lg hover:shadow-yellow-500/20 transition-all duration-300"
            >
              Register
            </a>
          </motion.li>
        </ul>

        {/* Mobile Navigation */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <div 
            className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-black bg-opacity-50 backdrop-blur-sm border border-gray-800 cursor-pointer"
            onClick={() => setToggle(!toggle)}
          >
            <motion.img
              animate={{ rotate: toggle ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              src={toggle ? close : menu}
              alt="menu"
              className="w-[20px] h-[20px] object-contain"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ 
              opacity: toggle ? 1 : 0,
              scale: toggle ? 1 : 0.95,
              y: toggle ? 0 : -10
            }}
            transition={{ duration: 0.3 }}
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-black bg-opacity-90 backdrop-blur-md absolute top-20 right-0 mx-4 my-2 min-w-[180px] z-10 rounded-xl border border-gray-800 shadow-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav, index) => (
                <motion.li
                  key={nav.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className={`font-cyber cursor-pointer text-[16px] ${
                    active === nav.title ? "text-yellow-400" : "text-gray-300"
                  } hover:text-white transition-colors duration-300`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 opacity-70"></span>
                    {nav.title}
                  </a>
                </motion.li>
              ))}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: navLinks.length * 0.1 }}
                className="w-full mt-2"
              >
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfBXMr6FCW_elqLOYiRM1qZyacd07s2LGp5ATaUhZOO9ZwC6g/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-yellow-500 to-amber-600 text-black font-medium text-sm px-4 py-2 rounded-lg block text-center"
                  onClick={() => setToggle(false)}
                >
                  Register
                </a>
              </motion.div>
            </ul>
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
