import React from 'react'
import {motion, useTransform} from 'framer-motion'
import useMouse from '@/hooks/useMouse'
import BrandName from './BrandName'
import MarqueeX from './MarqueeX'
import SlideUpText from '@/effects/SlideUpText'

function Land({preloaderOut}) {
    const {x,y}=useMouse({start:{x:-50,y:50},stiffness:120,damping:30,mass:0.1})
   const xMovement=useTransform(x,v=>v*.010) 
   const yMovement=useTransform(y,v=>v*.012) 
  return (
    <div className='relative h-svh w-full overflow-hidden bg-[#262626]'>
        <img src="/assets/car-background.png" alt="Land" className="absolute top-0 left-0 w-full h-full object-cover"/>
  <MarqueeX numbers={6} speed={180}  className='absolute hidden lg:flex  top-0 left-0  w-full h-full  border-none bg-gree-600' >
  <h2 className=" w-full h-full fl gap-4  font-custom text-[#FCCE2F] mr-[12em] font-bod">
    <BrandName/> 
     </h2>
  </MarqueeX>
        <motion.img
        //  style={{x:xMovement,y:yMovement}}
        // animate={{x:preloaderOut?0:100,y:preloaderOut?0:-10,scale:preloaderOut?1:1}}
        transition={{type:"tween",duration:1.5,ease:[0.22, 1, 0.36, 1]}}
          initial={{x:300,y:-20,scale:.95}}
          exit={{x:300,y:-20,scale:.95}}
          animate={{x:preloaderOut?0:300,y:preloaderOut?0:-20,scale:preloaderOut?1:.95}}
           src="/assets/car-alone.png" alt="Land" className="absolute top-0 left-0 w-full h-full object-cover"/>

        
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