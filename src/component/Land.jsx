import React, { useRef } from 'react'
import {motion, useScroll, useTransform} from 'framer-motion'
import useMouse from '@/hooks/useMouse'
import BrandName from './BrandName'
import MarqueeX from './MarqueeX'
import SlideUpText from '@/effects/SlideUpText'
import GridColumn from '@/layout/GridColumn'
import Section from '@/layout/Section'
import CustomBtn from './CustomBtn'
import TypographyReveal from './TextReveals'

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
        <img src="/assets/car-background-mobile.png" alt="Land" className="aspect-[5/7] inline lg:hidden absolute top-0 left-0 w-full h-full object-cover"/>
  <motion.div   style={{x:newX,y:newY}} className=" lg:inline hidden absolute top-0 left-0 w-full h-full">
        <motion.img
        animate={{x:preloaderOut?0:300,y:preloaderOut?0:-20,scale:preloaderOut?1:.95}}
        transition={{type:"tween",duration:1.8,ease:[0.22, 1, 0.36, 1]}}
          initial={{x:300,y:-20,scale:.95}}
          exit={{x:300,y:-20,scale:.95}}
          // animate={{x:preloaderOut?newX:300,y:preloaderOut?0:-20,scale:preloaderOut?1:.95}}
           src="/assets/car-alone.png" alt="Land" className="absolute top-0 left-0 w-full h-full object-cover"/>

  </motion.div>
  <motion.div   style={{x:newX,y:newY}} className=" aspect-[5/7] inline lg:hidden absolute top-0 left-0 w-full h-full">
        <motion.img
        animate={{x:preloaderOut?0:300,y:preloaderOut?0:-20,scale:preloaderOut?1:.95}}
        transition={{type:"tween",duration:1.8,ease:[0.22, 1, 0.36, 1]}}
          initial={{x:300,y:-20,scale:.95}}
          exit={{x:300,y:-20,scale:.95}}
          // animate={{x:preloaderOut?newX:300,y:preloaderOut?0:-20,scale:preloaderOut?1:.95}}
           src="/assets/car-alone-mobile.png" alt="Land" className="absolute top-0 left-0 w-full h-full object-cover"/>

  </motion.div> 

  <div className="relative  w-full h-full flex items-center justify-center">
      <Section className="w-full h-full bg-pik-800">
      
    <GridColumn  className="w-full h-full place-items-end">
      <div className=" order-2 lg:order-1 col-span-full lg:col-span-7 bg-red900 self-end justify-end">
          <h2 className='text-brand-secondary text-heading1 leading-[.6] font-custom'>
        <TypographyReveal startDelay={.25} preloaderOut={preloaderOut} className='font-custom leading-[1.1]'
            toColor='#c5fe0c'
            toColor2='#fbfbfb'
              animationType='fadeInUp'
               fromDirection='left'
                revealType='word'  >
                       Game-changing Car Care 
              </TypographyReveal>
                        </h2>
            
      </div>

      <div className="order-1 lg:order-2 col-start-3 bg-green500 self-end justify-en col-span-4 lg:col-start-10 lg:col-span-3 ">
<div className="w-full items-en   flex  flex-col gap-6 bg-white p-4  rounded-2xl">

{/* video contaniner */}
<motion.div
  className="flex-1 overflow-hidden relative"
  initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
  animate={{
    clipPath: preloaderOut
      ? "inset(0% 0% 0% 0%)"
      : "inset(100% 0% 0% 0%)",
  }}
  transition={{
    duration: 1.2,
    ease: [0.76, 0, 0.24, 1],
  }}
>
  <video
    src="/videos/hero.mp4"
    autoPlay
    muted
    loop
    className=" aspect-[7/4] object-cover rounded-2xl"
  />
    <div className='absolute top-0 left-0 flex items-center justify-center w-full h-full'>
                <div className='flex items-center justify-center p-4 size-[50px] border-brand-white border rounded-full'>
                <img className='size-[20px]' src='/assets/play.png'/>
                </div>
              </div>
</motion.div>
{/* <div className="flex-1 h-full flex gap-10 flex-col justify-between">
  <CustomBtn className="w-fit"
  initialBg="#0100BE"
  initialText="#FFFFFF"
  hoverBg="#C5FE0C"
  hoverText="#1d1d1d"
>
  Book A Call
</CustomBtn>
</div> */}
</div>

      </div>

    </GridColumn>
      </Section>

  </div>
        </div>
  )
}

export default Land