"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
}) {
  const containerRef = useRef(null);
  const x = useMotionValue(0);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        const w = containerRef.current.offsetWidth;
        setWidth(w);
        x.set(w / 2);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  // ✅ Pixel-perfect clip (fixes "before still visible")
  const clipPath = useTransform(
    x,
    (latest) => `inset(0 ${width - latest}px 0 0)`
  );

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-4xl h-[300px] mx-auto overflow-hidden rounded-2xl"
    >
      {/* BEFORE */}
      
      <Image
      draggable={false}
        src={beforeImage}
        alt="Before"
        fill
        className="object-cover"
      />

      {/* AFTER */}
      <motion.div style={{ clipPath }} className="absolute inset-0">
        <Image draggable={false}
          src={afterImage}
          alt="After"
          fill
          className="object-cover"
        />
      </motion.div>

      {/* DRAG WRAPPER (shared x) */}
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: width }}
  dragElastic={0}
  dragMomentum={false}
        style={{ x }}
        className="absolute top-0 bottom-0"
      >
        {/* CENTER FIX using translate */}
        <div className="relative h-full -translate-x-1/2 flex items-center">
          
          {/* LINE */}
          <div className="absolute left-1/2 -translate-x-1/2 w-[2px] h-full bg-white/80 backdrop-blur-sm" />

          {/* GLOW */}
          <div className="absolute left-1/2 -translate-x-1/2 w-[20px] h-full bg-gradient-to-r from-white/40 to-transparent blur-md" />

          {/* HANDLE */}
          <div className="relative z-14 w-14 h-10 rounded-full bg-white/90 backdrop-blur-md shadow-xl flex items-center justify-center border border-white/50">
            <div className="flex gap-[2px]">
              <div className="w-[2px] h-4 bg-black/70" />
              <div className="w-[2px] h-4 bg-black/70" />
            </div>
          </div>

        </div>
      </motion.div>

      {/* LABELS */}
      <div className="absolute top-4 left-4 text-white text-sm font-medium bg-black/40 px-3 py-1 rounded-full backdrop-blur">
        Before
      </div>

      <div className="absolute top-4 right-4 text-white text-sm font-medium bg-black/40 px-3 py-1 rounded-full backdrop-blur">
        After
      </div>
    </div>
  );
}