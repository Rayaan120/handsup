// CTASection.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section className="relative py-16 px-6 sm:py-24 sm:px-12 md:py-32 overflow-hidden bg-[#0f0f25] text-white rounded-3xl shadow-2xl my-20 mx-4">


  {/* Floating Aurora Glow Effects */}
  <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-pink-500 opacity-20 rounded-full blur-[180px] animate-pulse z-0" />
  <div className="absolute bottom-[-120px] right-[-120px] w-[400px] h-[400px] bg-blue-500 opacity-20 rounded-full blur-[160px] animate-pulse z-0" />
  <div className="absolute inset-0 bg-gradient-to-tr from-purple-800/20 via-blue-700/10 to-transparent z-0 blur-xl pointer-events-none" />

  {/* Content */}
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: true }}
    className="relative z-10 max-w-5xl mx-auto text-center"
  >
    <h2 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6 drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)]">
      Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-purple-500 to-cyan-400 animate-gradient-x">Create Magic</span> Together
    </h2>
    <p className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
      Whether it's exhibitions, interiors, or brand spaces — we turn imagination into award-winning reality.
    </p>

    <div className="flex justify-center gap-6 flex-wrap">
      <Link to="/contact">
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white font-bold px-10 py-3 rounded-full shadow-xl hover:shadow-pink-400/50 transition-all duration-300"
        >
          Start Your Project
        </motion.button>
      </Link>

      <Link to="/contact">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="bg-white/10 backdrop-blur-sm border border-white text-white font-semibold px-10 py-3 rounded-full hover:bg-white hover:text-purple-700 transition-all duration-300"
        >
          Contact Us
        </motion.button>
      </Link>
    </div>
  </motion.div>
</section>

  );
};

export default CTASection;
