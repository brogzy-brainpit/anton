import React, { useRef } from 'react'
import {motion, useScroll, useTransform} from 'framer-motion'
import useMouse from '@/hooks/useMouse'
import BrandName from './BrandName'
import MarqueeX from './MarqueeX'
import SlideUpText from '@/effects/SlideUpText'

function Land({preloaderOut}) {
  const landingRef=useRef(null)
  const {scrollYProgress}=useScroll({target:landingRef,offset:["start start","end start"]})
  scrollYProgress.on("change",(v)=>{
    console.log(v)
  })
  const newX= useTransform(scrollYProgress,[0.35,1],[0,-80])
  const newY= useTransform(scrollYProgress,[0.35,1],[0,40])
    const {x,y}=useMouse({start:{x:-50,y:50},stiffness:120,damping:30,mass:0.1})
   const xMovement=useTransform(x,v=>v*.010) 
   const yMovement=useTransform(y,v=>v*.012) 
  return (
    <div ref={landingRef} className='relative h-svh w-full overflow-hidden bg-[#262626]'>
        <img src="/assets/car-background.png" alt="Land" className="absolute top-0 left-0 w-full h-full object-cover"/>
  <MarqueeX numbers={6} speed={180}  className='absolute hidden lg:flex  top-0 left-0  w-full h-full  border-none bg-gree-600' >
  <h2 className=" w-full h-full fl gap-4  font-custom text-[#FCCE2F] mr-[12em] font-bod">
    <BrandName/> 
     </h2>
  </MarqueeX>

  <motion.div   style={{x:newX,y:newY}} className="absolute top-0 left-0 w-full h-full">
        <motion.img
        
        animate={{x:preloaderOut?0:300,y:preloaderOut?0:-20,scale:preloaderOut?1:.95}}
        transition={{type:"tween",duration:1.8,ease:[0.22, 1, 0.36, 1]}}
          initial={{x:300,y:-20,scale:.95}}
          exit={{x:300,y:-20,scale:.95}}
          // animate={{x:preloaderOut?newX:300,y:preloaderOut?0:-20,scale:preloaderOut?1:.95}}
           src="/assets/car-alone.png" alt="Land" className=" object-cover"/>

  </motion.div>

        
 <div
 
  className="flex lg:hidden absolute top-0 left-0 items-end w-full h-full"
> <h2 className=" font-custom text-[#FCCE2F] text-[15em] leading-[.9] font-bod">
   {/* ANTOS CAR CARE */}
   <SlideUpText text={"ANTOS CAR CARE"} preLoaderOut={preloaderOut}/>
     </h2>
  </div>
        </div>
  )
}

export default Land