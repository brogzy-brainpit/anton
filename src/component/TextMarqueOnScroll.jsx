'use client'
import { useScroll, useTransform, motion } from 'framer-motion';
import Picture1 from '../../public/assets/exterior.webp'
import Picture2 from '../../public/assets/interior.jpg'
import Picture3 from '../../public/assets/tire.webp'
import Lenis from 'lenis';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

export default function TextMarqueOnScroll() {

  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start']
  })

  useEffect( () => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <section className="overflow-hidden  pt-20 pb-5 lg:pt-20 lg:pb-10 bg-brand-accent">
      <div ref={container}>
        <Slide src={Picture1} direction={'left'} left={"-40%"} progress={scrollYProgress}/>
        <Slide src={Picture2} direction={'right'} left={"-25%"} progress={scrollYProgress}/>
        <Slide src={Picture3} direction={'left'}  left={"-75%"} progress={scrollYProgress}/>
      </div>
    </section>
  );
}

const Slide = (props) => {
  const direction = props.direction == 'left' ? -1 : 1;
  const translateX = useTransform(props.progress, [0, 1], [150 * direction, -150 * direction])
  return (
    <motion.div style={{x: translateX, left: props.left}} className="relative flex whitespace-nowrap">
      <Phrase src={props.src}/>
      <Phrase src={props.src}/>
      <Phrase src={props.src}/>
    </motion.div>
  )
}

const Phrase = ({src}) => {

  return (
    <div className={'px-5 flex gap-5 items-center'}>
      <p className='text-heading1 text-brand-white font-custom2'>
        <span className='text-brand-secondary'>•</span>
         YOUR CAR 
        <span className='text-brand-secondary'>•</span>
         </p>
      <span className="relative h-[7.5vw] aspect-[4/2] rounded-full overflow-hidden">
        <Image style={{objectFit: "cover"}} src={src} alt="image" fill/>
      </span>
      <p className='text-heading1 text-brand-white font-custom2 '>
      <span className='text-brand-secondary'>• </span>
         OUR CARE
        
         </p>
    </div>
  )
}