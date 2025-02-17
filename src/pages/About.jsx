import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { Award, Globe, Users, Leaf, ArrowLeftCircleIcon } from "lucide-react";
import { pagesConfig } from "../config/pagesConfig";
import "../styles/aboutStyle.css";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const icons = { Award, Globe, Users, Leaf };

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div initial="initial" animate="animate" exit="exit" variants={fadeInUp}>
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto bg-green-500 h-32 relative rounded-full">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 opacity-40 rounded-full">
          <img src="./trees-image.png" alt="about-hero" className="w-full h-full object-cover rounded-full" />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-white text-4xl font-bold mb-4">About Us</h1>
          <div className="flex items-center justify-center gap-6">
            <Link to="/" className="text-white text-xl font-semibold">
              <p>Home</p>
            </Link>
            <span className="text-white text-lg font-semibold">
              <ArrowLeftCircleIcon size={24} />
            </span>
            <p className="text-white text-xl font-bold">About Us</p>
          </div>
        </div>
      </div>

      {/* About Content */}
      <div className="about-container">
        {/* Our Story */}
        <div className="hero">
          <motion.h1 className="mt-8 text-4xl font-bold mb-4" variants={fadeInUp}>
            Our Story
          </motion.h1>
          <motion.p className="text-xl text-gray-600" variants={fadeInUp}>
            Building sustainable agricultural trade solutions since 2010
          </motion.p>
        </div>

        {/* Statistics Section */}
        <div className="stats">
          {pagesConfig.stats.map((stat, index) => {
            const Icon = icons[stat.icon] || Leaf; // Default to Leaf if undefined
            return (
              <motion.div
                key={index}
                className="stat-item"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Icon size={32} className="mx-auto text-green-500" />
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>

        {/* Timeline Section */}
        <div className="timeline" ref={ref}>
          {pagesConfig.timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              variants={fadeInUp}
              initial="initial"
              animate={inView ? "animate" : "initial"}
              transition={{ delay: index * 0.2 }}
            >
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="text-primary font-bold mb-2">{event.year}</div>
                <h3 className="font-bold mb-2">{event.title}</h3>
                <p className="text-gray-600">{event.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
