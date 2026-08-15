import React, { useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import useMouse from "@/hooks/useMouse";
import GridColumn from "@/layout/GridColumn";
import Section from "@/layout/Section";
import CustomBtn from "./CustomBtn";
import TypographyReveal from "./TextReveals";

function Land({ preloaderOut }) {
  const landingRef = useRef(null);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const { scrollYProgress } = useScroll({
    target: landingRef,
    offset: ["start start", "end start"],
  });

  const newX = useTransform(
    scrollYProgress,
    [0.35, 1],
    [0, -80]
  );

  const newY = useTransform(
    scrollYProgress,
    [0.35, 1],
    [0, 40]
  );

  return (
    <div
      ref={landingRef}
      className="relative h-svh w-full overflow-hidden bg-[#262626]"
    >
      {/* =========================================
          BACKGROUND
      ========================================== */}

      <img
        src="/assets/car-background.png"
        alt="Land"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <img
        src="/assets/car-background-mobile.png"
        alt="Land"
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          lg:hidden
        "
      />

      {/* =========================================
          CAR
      ========================================== */}

      <motion.div
        style={{
          x: newX,
          y: newY,
        }}
        className="absolute inset-0 hidden lg:block"
      >
        <motion.img
          src="/assets/car-alone.png"
          alt="Land"
          initial={{
            x: 300,
            y: -20,
            scale: 0.95,
          }}
          animate={{
            x: preloaderOut ? 0 : 300,
            y: preloaderOut ? 0 : -20,
            scale: preloaderOut ? 1 : 0.95,
          }}
          transition={{
            type: "tween",
            duration: 1.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
          "
        />
      </motion.div>

      <motion.div
        style={{
          x: newX,
          y: newY,
        }}
        className="absolute inset-0 lg:hidden"
      >
        <motion.img
          src="/assets/car-alone-mobile.png"
          alt="Land"
          initial={{
            x: 300,
            y: -20,
            scale: 0.95,
          }}
          animate={{
            x: preloaderOut ? 0 : 300,
            y: preloaderOut ? 0 : -20,
            scale: preloaderOut ? 1 : 0.95,
          }}
          transition={{
            type: "tween",
            duration: 1.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
          "
        />
      </motion.div>

      {/* =========================================
          CONTENT
      ========================================== */}

      <div className="relative z-10 flex h-full w-full items-center justify-center">

        <Section className="h-full w-full">

          <GridColumn className="h-full w-full place-items-end">

            {/* =====================================
                TEXT
            ====================================== */}

            <div
              className="
                order-2
                col-span-full
                self-end
                lg:order-1
                lg:col-span-7
              "
            >
              <h2 className="
                font-custom
                text-heading1
                leading-[0.6]
                text-brand-secondary
              ">
                <TypographyReveal
                  startDelay={0.25}
                  preloaderOut={preloaderOut}
                  className="font-custom leading-[1.1]"
                  toColor="#c5fe0c"
                  toColor2="#fbfbfb"
                  animationType="fadeInUp"
                  fromDirection="left"
                  revealType="word"
                >
                  Game-changing Car Care
                </TypographyReveal>
              </h2>
            </div>

            {/* =====================================
                VIDEO
            ====================================== */}

            <div
              className="
                order-1
                col-span-full
                w-full
                self-end
                lg:order-2
                lg:col-start-10
                lg:col-span-3
              "
            >
              <motion.div
                layoutId="hero-video"
                onClick={() => setIsVideoOpen(true)}
                className="
                  relative
                  w-full
                  cursor-pointer
                  overflow-hidden
                  rounded-2xl
                  bg-white
                  p-4
                "
                transition={{
                  layout: {
                    duration: 0.8,
                    ease: [0.76, 0, 0.24, 1],
                  },
                }}
              >
                <div className="relative aspect-[7/4] w-full overflow-hidden rounded-2xl">

                  <video
                    src="/videos/hero.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="
                      h-full
                      w-full
                      object-cover
                    "
                  />

                  {/* PLAY BUTTON */}

                  <div className="
                    absolute
                    inset-0
                    flex
                    items-center
                    justify-center
                  ">
                    <div className="
                      flex
                      size-[50px]
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-brand-white
                      p-4
                    ">
                      <img
                        src="/assets/play.png"
                        alt=""
                        className="size-[20px]"
                      />
                    </div>
                  </div>

                </div>
              </motion.div>
            </div>

          </GridColumn>

        </Section>
      </div>

      {/* =========================================
          FULLSCREEN VIDEO
      ========================================== */}

      <AnimatePresence>
        {isVideoOpen && (
          <>
            {/* BACKDROP */}

            <motion.div
              className="
                fixed
                inset-0
                z-[90]
                bg-black/80
                backdrop-blur-sm
              "
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              onClick={() => setIsVideoOpen(false)}
            />

            {/* VIDEO */}

            <motion.div
              layoutId="hero-video"
              className="
                fixed
                inset-4
                z-[100]
                overflow-hidden
                rounded-2xl
                bg-black
                md:inset-8
              "
              transition={{
                layout: {
                  duration: 0.8,
                  ease: [0.76, 0, 0.24, 1],
                },
              }}
            >

              <video
                src="/videos/hero.mp4"
                autoPlay
                controls
                playsInline
                className="
                  h-full
                  w-full
                  object-contain
                "
              />

              {/* CLOSE */}

              <button
                type="button"
                onClick={() => setIsVideoOpen(false)}
                className="
                  absolute
                  right-5
                  top-5
                  z-10
                  flex
                  size-10
                  items-center
                  justify-center
                  rounded-full
                  bg-black/60
                  text-xl
                  text-white
                  backdrop-blur-md
                "
              >
                ×
              </button>

            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Land;