import GridColumn from '@/layout/GridColumn'
import Section from '@/layout/Section'
import React from 'react'
import TypographyReveal from './TextReveals'
import AnimatedArrow from './AnimatedArrow'
import Image from 'next/image'
import ClippedImage from './ClippedImage'
import BeforeAfterSlider from './BeforeAfterSlider'

function Section1() {
  return (
    <div className='min-h-[85svh]'>
        
        <Section>
          <GridColumn className={"h-full"}>
            <div className="col-span-3 lg:col-span-3 bg-red400">
              <h2 className='text-brand-accent text-heading2 leading-[.6] font-custom'>
                  <TypographyReveal preloaderOut className='font-custom uppercase leading-[1.1]'
    toColor='#0100be'
      animationType='fadeInUp'
       fromDirection='left'
        revealType='word'  >
                mission
      </TypographyReveal>
                </h2>
            </div>
            <div className="col-span-3 lg:col-span-2 place-items-center bg-green00">
              <AnimatedArrow className='w-10 rotate-[100deg] lg:rotate-[40deg] '/>
              {/* <h2 className='text-brand-accent text-sm font-body'>what we do</h2> */}
            </div>
            <div className="lg:col-start-6 lg:col-span-7 col-span-full">
            <h1 className='capitalie'>
   <TypographyReveal preloaderOut className='font-custom text-brand-accent text-heading2 capitalie leading-[1.1]'
    toColor='#0100be'
      animationType='fadeInUp'
       fromDirection='left'
        revealType='word'  >
Expert Car Detaiing: from luxury brands to your everyday ride in Miami
      </TypographyReveal>
            </h1>

            </div>
         <div className="col-span-full lg:col-start-1 lg:col-span-5 mt-10">
  <BeforeAfterSlider beforeImage={'/assets/seat02Clean.png'} afterImage={'/assets/seat02Dirt.png'}/>
</div>

<div className="col-span-full lg:col-start-10 lg:col-span-3  place-items-end grid">
  <ClippedImage delay={.2} duration={.95}>
  <Image
    src="/assets/yellow-car.png"
    alt="hero"
    width={1000}
    height={1000}
    className="w-full h-auto object-cover rounded-2xl"
  />

  </ClippedImage>
</div>
          </GridColumn>
        </Section>
        
        </div>
  )
}

export default Section1