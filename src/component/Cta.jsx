
import Image from 'next/image';
import { useScroll, useTransform, motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import CustomBtn from './CustomBtn';
import Section from '@/layout/Section';
// import { VolumeOff } from 'lucide-react';

function Zoom() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });
scrollYProgress.on("change",(v)=>{
  console.log(v)
})
  const CTAOpacity = useTransform(scrollYProgress, [.7, .75,1], [0, 1,1]);

  const scale1 = useTransform(scrollYProgress, [0, .62], [0, 4]);
  const scale2 = useTransform(scrollYProgress, [.085, .60], [0, 9]);
  const scale3 = useTransform(scrollYProgress, [.15, .50], [0, 9]);
  const scale4 = useTransform(scrollYProgress, [.10, .80], [0, 3]);
  const scale5 = useTransform(scrollYProgress, [.09, .39], [0, 6]);
  const scale6 = useTransform(scrollYProgress, [.20, .8], [0, 6]);
  const scale7 = useTransform(scrollYProgress, [.3, .75], [0, 8]);
  const scale8 = useTransform(scrollYProgress, [.28, .75], [0, 8]);

  const scale9 = useTransform(scrollYProgress, [.03, .73], [0, 9]);
  const scale10 = useTransform(scrollYProgress, [.25, .55], [0, 2]);

  const pictures = [
  {
    src: "/assets/1.png",
    scale: scale1,
    top: '0vh',
    left: '25vw',
    width: '15vw',
    height: '15vh',
  },
  {
    src: "/assets/exterior.webp",
    scale: scale2,
    top: '22.5vh',
    left: '-22vw',
    width: '15vw',
    height: '15vh',
  },
  {
    src: "/assets/car-alone.png",
    scale: scale3,
     top: '-5.5vh',
    left: '22vw',
    width: '15vw',
    height: '15vh',
  },
  {
    src: "/assets/tire.webp",
    scale: scale4,
     top: '5.5vh',
    left: '-30vw',
    width: '15vw',
    height: '15vh',
  },
  {
    src: "/assets/red-benz.png",
    scale: scale5,
   top: '0vh',
    left: '20vw',
    width: '15vw',
    height: '15vh',
  },
  {
    src: "/assets/site-reference.png",
    scale: scale6,
     top: '22.5vh',
    left: '-25vw',
    width: '15vw',
    height: '15vh',
  }, 
   {
    src: "/assets/seat02Clean.png",
    scale: scale7,
     top: '22.5vh',
    left: '25vw',
    width: '15vw',
    height: '15vh',
  }, 
  {
    src: "/assets/seat02Dirt.png",
    scale: scale8,
     top: '-10.5vh',
    left: '-30vw',
    width: '15vw',
    height: '15vh',
  },
    {
    src: "/assets/yellow-car.png",
    scale: scale9,
     top: '22.5vh',
    left: '-25vw',
    width: '15vw',
    height: '15vh',
  },
    {
    src: "/assets/2.png",
    scale: scale10,
     top: '-22.5vh',
    left: '-35vw',
    width: '15vw',
    height: '15vh',
  },
];

  return (
    <div ref={container} className={"h-[500svh] relative "}>
      <div  className={`sticky top-0 h-svh overflow-hidden bg-brand-white`}>
        {pictures.map(({ src, top,left,scale}, index) => (
          <motion.div key={index} style={{ scale }} className={`h-full w-full absolute top-0 flex items-center justify-center z0 pointer-evnts-none`}>
            <div style={{top,left}} className={"w-[20vw] h-[18vh] lg:w-[14vw] lg:h-[45vh] relative "}>
                <Image src={src} fill alt="image" className='object-cover'  />
            </div>
          </motion.div>
        ))}

        <motion.div style={{opacity:CTAOpacity}} className="absolute px-5 inset-0 w-full h-full flex items-center justify-center flex-col gap- z10">
          <h2 className='text-heading2 font-custom2 text-brand-accent'>YOUR CAR, OUR CARE</h2>
        <p className='text-brand-accent text-center font-body text-para max-w-[50ch]'>Transform your car with expert cleaning,
 all from the comfort of your home. Trust our team for a spotless finish every time.</p>
    <CustomBtn className="w-fit capitalize font-body mt-6"
  initialBg="#C5FE0C"
  initialText="#1d1d1d"

  hoverText="#fbfbfb"
  hoverBg="#0100be"
>
  Contact us
</CustomBtn>
        </motion.div>
      </div>
    </div>
  );
}
export default Zoom;
