"use client";

import React from "react";
import { motion } from "framer-motion";

function PageTransition() {
  const arr = [
    "#0100be",
    "#c5fe0c",
    "#0100be",
    "#c5fe0c",
    "#0100be",
    "#c5fe0c",
    "#0100be",
    "#c5fe0c",
    "#0100be",
    "#c5fe0c",
    "#0100be",
    "#c5fe0c",
  ];

  const variants = {
    initial: {
      scale: 1.5,
    },

    animate: (index) => ({
      scale: 0,
      transition: {
        duration: 0.9,
        delay: index * 0.1,
        ease: [0.76, 0, 0.24, 1],
      },
    }),

    exit: (index) => ({
      scale: 1.5,
      transition: {
        duration: 0.9,
        delay: (arr.length - 1 - index) * 0.1,
        ease: [0.76, 0, 0.24, 1],
      },
    }),
  };

  return (
    <div
      className="
        fixed
        inset-0
        w-screen
        h-screen
        z-preloader
        overflow-hidden
        pointer-events-none
      "
    >
      {arr.map((color, index) => (
        <motion.div
          key={index}
          custom={index}
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="
            absolute
            left-1/2
            top-1/2
            w-[150vmax]
            aspect-square
            rounded-full
          "
          style={{
            backgroundColor: color,
            zIndex: arr.length - index,
            marginLeft: "-75vmax",
            marginTop: "-75vmax",
          }}
        />
      ))}
    </div>
  );
}

export default PageTransition;