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
  { time: "9:00 AM", title: "Registration & Keynote Session (Day-1)", description: "Welcome to the hackathon! Get ready for an exciting event.", iconBg: "#ff007f" },
  { time: "09:30 AM", title: "Opening Ceremony", description: "Introduction to the event, rules, and guidelines.", iconBg: "#00e6e6" },
  { time: "10:00 PM", title: "Theme Reveal & Team Formation", description: "Discover the theme and form teams to start hacking.", iconBg: "#ffcc00" },
  { time: "11:00 PM", title: "Hackathon Begins", description: "Start hacking and building your projects with your team.", iconBg: "#ff4500" },
  { time: "2:00 PM", title: "Mentorship Session 1", description: "Get guidance and mentorship from industry experts.", iconBg: "#8a2be2" },
  { time: "3:45 PM", title: "End of Day 1", description: "Wind down and take a break. Get ready for the next day!", iconBg: "#39ff14" },
  { time: "9:00 AM", title: "Day 2 Kickoff", description: "Start the day with a fresh perspective and new ideas.", iconBg: "#ff1493" },
  { time: "11:00 AM", title: "Mentorship Session 2", description: "Get more guidance and mentorship to improve your projects.", iconBg: "#1e90ff" },
  { time: "2:00 PM", title: "Project Submission", description: "Submit your projects and get ready for the final presentations.", iconBg: "#ff5733" },
  { time: "3:00 PM", title: "Prize Distribution", description: "Celebrating innovation and announcing winners!", iconBg: "#ff5733" },
];

const HackathonTimeline = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="text-center">
        <p className={`${styles.sectionSubText}`}>Event Schedule</p>
        <h1 className="text-6xl font-bold mt-4 neon-heading">Hackathon Timeline</h1>
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
              date={<span className="text-2xl font-bold drop-shadow-lg">{event.time}</span>}
              iconStyle={{
                background: event.iconBg,
                boxShadow: `0 0 15px ${event.iconBg}`,
              }}
              icon={
                <div className="flex justify-center items-center w-full h-full">
                  <span className="text-white font-bold font-cyber">{event.title[0]}</span>
                </div>
              }
            >
              <div>
                <h3 className="text-white text-[22px] font-bold font-cyber">{event.title}</h3>
                <p className="text-gray-300 text-[14px] font-poppins">{event.description}</p>
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>

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

        .event-time {
          font-size: 1.2rem;
          font-weight: bold;
          color: #00ffcc;
          text-shadow: 0 0 10px #00ffcc, 0 0 20px #00ffcc;
          background: rgba(0, 0, 0, 0.5);
          padding: 5px 10px;
          border-radius: 8px;
        }
      `}</style>
    </>
  );
};

export default HackathonTimeline;