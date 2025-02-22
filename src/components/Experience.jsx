import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const hackathonEvents = [
  {
    time: "9:00 AM",
    title: "Opening Ceremony",
    description: "Kickstarting the event with an inspiring keynote session!",
    iconBg: "#ff007f",
  },
  {
    time: "10:00 AM",
    title: "Team Formation & Idea Pitching",
    description: "Participants collaborate and pitch ideas to mentors.",
    iconBg: "#00e6e6",
  },
  {
    time: "12:00 PM",
    title: "Hacking Begins",
    description: "Development starts! Work on your projects and innovate.",
    iconBg: "#ffcc00",
  },
  {
    time: "3:00 PM",
    title: "Mentor Check-in",
    description: "Mentors guide teams and provide feedback on progress.",
    iconBg: "#ff4500",
  },
  {
    time: "6:00 PM",
    title: "Tech Talk Session",
    description: "Industry experts share insights on the latest technologies.",
    iconBg: "#8a2be2",
  },
  {
    time: "9:00 PM",
    title: "Midnight Debugging",
    description: "Fix bugs, refine your project, and keep the energy high!",
    iconBg: "#39ff14",
  },
  {
    time: "6:00 AM",
    title: "Final Touches & Submission",
    description: "Teams wrap up their projects and submit for evaluation.",
    iconBg: "#ff1493",
  },
  {
    time: "10:00 AM",
    title: "Project Demos & Judging",
    description: "Teams present their projects to judges for evaluation.",
    iconBg: "#1e90ff",
  },
  {
    time: "12:00 PM",
    title: "Closing Ceremony & Winners Announcement",
    description: "Celebrating innovation and announcing winners!",
    iconBg: "#ff5733",
  },
];

const HackathonTimeline = () => {
  return (
    <>
      {/* Animated Title */}
      <motion.div variants={textVariant()} className="text-center">
        <p className={`${styles.sectionSubText}`}>Event Schedule</p>
        <h1 className="text-5xl font-bold mt-4 neon-heading">
          Hackathon Timeline
        </h1>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {hackathonEvents.map((event, index) => (
            <VerticalTimelineElement
              key={`event-${index}`}
              contentStyle={{
                background: "rgba(20, 20, 30, 0.8)",
                backdropFilter: "blur(10px)",
                color: "#ffffff",
                border: "2px solid rgba(0, 255, 204, 0.6)",
                boxShadow: "0 0 15px rgba(0, 255, 204, 0.4)",
                borderRadius: "15px",
              }}
              contentArrowStyle={{ borderRight: "7px solid rgba(0, 255, 204, 0.6)" }}
              date={event.time}
              iconStyle={{
                background: event.iconBg,
                boxShadow: `0 0 15px ${event.iconBg}`,
              }}
              icon={
                <div className="flex justify-center items-center w-full h-full">
                  <span className="text-white font-bold font-cyber">
                    {event.title[0]}
                  </span>
                </div>
              }
            >
              <div>
                <h3 className="text-white text-[22px] font-bold font-cyber">
                  {event.title}
                </h3>
                <p className="text-gray-300 text-[14px] font-poppins">{event.description}</p>
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>

      {/* Futuristic Background & Fonts */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap');

        .neon-heading {
          color: #00ffcc;
          text-shadow: 0 0 20px #00ffcc, 0 0 30px #00ffcc;
          font-family: 'Orbitron', sans-serif;
        }

        .font-poppins {
          font-family: 'Poppins', sans-serif;
        }

        .font-cyber {
          font-family: 'Orbitron', sans-serif;
          letter-spacing: 1.5px;
        }

        body {
          background: radial-gradient(ellipse at bottom, #1a1a2e 0%, #16213e 100%);
        }
      `}</style>
    </>
  );
};

export default HackathonTimeline;
