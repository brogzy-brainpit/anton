import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion';
function ClippedImage({ preloaderOut ,children, delay=0, duration=1,once=true }) {
    const contView=useRef();
    const inView=useInView(contView,{once});
  return (
    <motion.div ref={contView}
  className="flex-1 overflow-hidden w-full h-ful"
  initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
  animate={inView?{ clipPath: "inset(0% 0% 0% 0%)" }:{ clipPath: "inset(100% 0% 0% 0%)" }}
  
  transition={{
    duration,
    delay,
    ease: [0.76, 0, 0.24, 1],
  }}
>
    {children}
    </motion.div>
  )
}

export default ClippedImage