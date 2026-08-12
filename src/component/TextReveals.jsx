"use client";

import React, { useMemo, useRef } from "react";
import { motion, useInView } from "framer-motion";
import clsx from "clsx";

function splitText(text, type) {
  if (type === "character") return text.split("");
  if (type === "line") return text.split("\n");
  return text.split(" ");
}

export default function TypographyReveal({
  children,
  className,

  revealType = "word",
  animationType = "fadeInUp",
  fromDirection = "bottom",

  mutedColor = "#999",
  toColor = "red",

  duration = 1,
  stagger = 0.04,

  // Delay before the entire sequence starts
  startDelay = 0,

  preloaderOut = false,
}) {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: false,
    amount: 0.2,
  });

  const text = useMemo(
    () => React.Children.toArray(children).join(""),
    [children]
  );

  const items = useMemo(
    () => splitText(text, revealType),
    [text, revealType]
  );

  /*
   * Animation only starts when:
   *
   * 1. Preloader is finished
   * 2. Text is in the viewport
   */
  const shouldAnimate = preloaderOut && isInView;

  const getInitial = () => {
    const base = {
      opacity: 0,
      color: mutedColor,
    };

    switch (animationType) {
      case "blurIn":
        return {
          ...base,
          filter: "blur(10px)",
        };

      case "flipIn":
        return {
          ...base,
          rotateX: -90,
          transformOrigin: "center bottom",
        };

      case "fadeInUp":
      default:
        switch (fromDirection) {
          case "left":
            return {
              ...base,
              x: -40,
            };

          case "right":
            return {
              ...base,
              x: 40,
            };

          case "top":
            return {
              ...base,
              y: -40,
            };

          default:
            return {
              ...base,
              y: 40,
            };
        }
    }
  };

  return (
    <p
      ref={ref}
      className={clsx(
        "text-left",
        animationType === "flipIn" && "[perspective:800px]",
        className
      )}
    >
      {items.map((item, i) => (
        <motion.span
          key={i}
          initial={getInitial()}
          animate={
            shouldAnimate
              ? {
                  opacity: 1,
                  x: 0,
                  y: 0,
                  rotateX: 0,
                  filter: "blur(0px)",
                  color: toColor,
                }
              : getInitial()
          }
          transition={{
            duration,
            delay: startDelay + i * stagger,
            ease: [0.25, 1, 0.5, 1],
          }}
          style={{
            display: "inline-block",
            willChange: "transform, opacity, filter",
          }}
        >
          {item === " " ? "\u00A0" : item}

          {revealType === "word" &&
            i !== items.length - 1 &&
            "\u00A0"}
        </motion.span>
      ))}
    </p>
  );
}