"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import LandingVideo from "./LandingVideo";

function Land2() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  /*
   * VIDEO SCALE
   * 1/3 → 1
   */
  const scale = useTransform(
    scrollYProgress,
    [0, 0.8],
    [1 / 3, 1]
  );

  /*
   * RIGHT OFFSET
   * 5% → 0
   */
  const right = useTransform(
    scrollYProgress,
    [0, 0.8],
    ["5%", "0%"]
  );

  /*
   * BOTTOM OFFSET
   * 5% → 0
   */
  const bottom = useTransform(
    scrollYProgress,
    [0, 0.8],
    ["5%", "0%"]
  );

  /*
   * BORDER RADIUS
   * 24px → 0
   */
  const borderRadius = useTransform(
    scrollYProgress,
    [0, 0.8],
    ["24px", "0px"]
  );

  return (
    <div
      ref={containerRef}
      className="relative h-[600svh] w-full"
    >
      <div
        className="
          sticky
          top-0
          left-0
          h-svh
          w-full
          overflow-hidden
          bg-neutral-900
        "
      >

        <motion.div
          style={{
            scale,
            right,
            bottom,
            borderRadius,
            transformOrigin: "bottom right",
          }}
          className="
            absolute
            h-full
            w-full
            overflow-hidden
          "
        >
          <LandingVideo
            link="/videos/hero.mp4"
          />
        </motion.div>

      </div>
    </div>
  );
}

export default Land2;