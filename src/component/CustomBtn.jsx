import React, { useState } from "react";
import { motion } from "framer-motion";

function CustomBtn({
  children,
  className = "",
  initialBg = "var(brand-secondary)",
  initialText = "var(brand-black)",
  hoverBg = "var(brand-black)",
  hoverText = "var(brand-white)",
}) {
  const [isActive, setActive] = useState(false);

  return (
    <div
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => {
        setTimeout(() => setActive(false), 100);
      }}
      className={`
        ${className}
        font-body
        links-cursor
        h-[3em]
        min-w-[8em]
        text-para
        relative
        overflow-hidden
        flex
        items-center
        justify-center
      `}
    >
      {/* Initial button */}
      <motion.div
        transition={{
          duration: 0.3,
          ease: "easeOut",
        }}
        animate={{
          scale: isActive ? 0 : 1,
          y: isActive ? [0, -20, 50] : 0,
        }}
        style={{
          backgroundColor: initialBg,
          color: initialText,
        }}
        className="
          rounded-full
          links-cursor
          px-4
          h-full
          w-full
          flex
          items-center
          justify-center
        "
      >
        {children}
      </motion.div>

      {/* Hover button */}
      <motion.div
        transition={{
          duration: 0.3,
          ease: "easeOut",
        }}
        animate={{
          scale: isActive ? 1 : 0,
          y: isActive ? "0%" : [0, -20, 50],
        }}
        style={{
          backgroundColor: hoverBg,
          color: hoverText,
        }}
        className="
          rounded-full
          px-4
          links-cursor
          h-full
          w-full
          flex
          items-center
          justify-center
          absolute
        "
      >
        {children}
      </motion.div>
    </div>
  );
}

export default CustomBtn;