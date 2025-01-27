import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Navbar from './Navbar';
import Footer from './Footer';
import './layout.css';
import ParticlesBackground from './ParticlesBackground';
import { layoutConfig } from '../../config/layoutConfig';

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.4,
      ease: 'easeIn',
    },
  },
};

export default function Layout({ children, title, description }) {
  const defaultTitle = 'AgriTrade Hub | Global Agricultural Import/Export';
  const defaultDescription = 'Your trusted partner in global agricultural trade. We connect farmers and businesses worldwide.';

  return (
    <div className='LayoutWrapper'>
      <Helmet>
        <title>{layoutConfig.title || defaultTitle}</title>
        <meta name="description" content={layoutConfig.description || defaultDescription} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&family=Open+Sans:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <ParticlesBackground />
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.div
          className='main'
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {children}
        </motion.div>
      </AnimatePresence>
      <Footer />
    </div>
  );
}