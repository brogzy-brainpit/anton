import React from 'react'
import {motion, useTransform} from 'framer-motion'
import useMouse from '@/hooks/useMouse'
import BrandName from './BrandName'
import MarqueeX from './MarqueeX'

function Land({preLoaderOut}) {
    const {x,y}=useMouse({start:{x:-50,y:50},stiffness:120,damping:30,mass:0.1})
   const xMovement=useTransform(x,v=>v*.010) 
   const yMovement=useTransform(y,v=>v*.012) 
  return (
    <div className='relative h-screen w-full overflow-hidden bg-[#262626]'>
        <img src="/assets/car-background.png" alt="Land" className="absolute top-0 left-0 w-full h-full object-cover"/>
  <MarqueeX numbers={6} speed={180}  className='absolute top-0 left-0  w-full h-full  border-none bg-gree-600' >
  <h2 className=" w-full h-full flex gap-4  font-custom text-[#FCCE2F] text-[18em font-bod">
   • <BrandName/> 
     </h2>
  </MarqueeX>
       <motion.div  className="w-full relative h-full">
        <motion.img style={{x:xMovement,y:yMovement}}  src="/assets/car-alone.png" alt="Land" className="absolute top-0 left-0 w-full h-full object-cover"/>

       </motion.div>
        
        Land</div>
  )
}

export default Land