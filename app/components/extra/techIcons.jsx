"use client";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython, FaLaravel } from "react-icons/fa";
import { RiNextjsFill, RiFlutterFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
const techIcons = [
  { icon: FaReact, label: "React", colorClass: "text-blue-500" },
  { icon: FaNodeJs, label: "Node.js", colorClass: "text-green-500" },
  { icon: FaPython, label: "Python", colorClass: "text-yellow-500" },
  { icon: RiNextjsFill, label: "Next.js", colorClass: "text-slate-400" },
  { icon: RiFlutterFill, label: "Flutter", colorClass: "text-blue-400" },
  { icon: FaLaravel, label: "Laravel", colorClass: "text-[#fb503b]" },
  // { icon: FaPython, label: "Python", colorClass: "text-yellow-500" },
  { icon: SiMongodb, label: "mongoDB", colorClass: "text-[#4db33d]" },
  { icon: BiLogoPostgresql, label: "postgreSQL", colorClass: "text-blue-600" },
];

const iconVariants = {
  animate: {
    scale: [1, 1.2, 1], // Keyframes for scaling
    rotate: [0, 10, -10, 0], // Keyframes for rotation
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "loop",
    },
  },
};

const TechIcons = () => {
  return (
    <motion.div
      className="flex flex-col items-center"
      initial="initial"
      animate="animate"
    >
      {techIcons.slice(0, 1).map((tech, index) => (
        <motion.div
          key={index}
          className={`text-3xl md:text-8xl ${tech.colorClass}`}
          variants={iconVariants}
        >
          <tech.icon />
        </motion.div>
      ))}
      <div className="flex space-x-4 my-4">
        {techIcons.slice(1, 3).map((tech, index) => (
          <motion.div
            key={index}
            className={`text-3xl md:text-8xl ${tech.colorClass}`}
            variants={iconVariants}
          >
            <tech.icon />
          </motion.div>
        ))}
      </div>
      <div className="flex space-x-4 my-4">
        {techIcons.slice(5, 8).map((tech, index) => (
          <motion.div
            key={index}
            className={`text-3xl md:text-8xl ${tech.colorClass}`}
            variants={iconVariants}
          >
            <tech.icon />
          </motion.div>
        ))}
      </div>
      <div className="flex space-x-4 my-4">
        {techIcons.slice(3, 5).map((tech, index) => (
          <motion.div
            key={index}
            className={`text-3xl md:text-8xl ${tech.colorClass}`}
            variants={iconVariants}
          >
            <tech.icon />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default TechIcons;
