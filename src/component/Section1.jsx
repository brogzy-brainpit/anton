import GridColumn from '@/layout/GridColumn'
import Section from '@/layout/Section'
import React from 'react'
import TypographyReveal from './TextReveals'
import AnimatedArrow from './AnimatedArrow'

function Section1() {
  return (
    <div className='h-svh'>
        
        <Section>
          <GridColumn>
            <div className="col-span-3 bg-red400">
              <h2 className='text-brand-accent text-heading2 leading-[.8] font-custom'>
                  <TypographyReveal className='font-custom capitalie leading-[1.1]'
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
            <div className="col-span-7">
            <h1 className='capitalie'>
   <TypographyReveal className='font-custom text-brand-accent text-heading2 capitalie leading-[1.1]'
    toColor='#0100be'
      animationType='fadeInUp'
       fromDirection='left'
        revealType='word'  >
Expert Car Detaiing: from luxury brands to your everyday ride in Miami
      </TypographyReveal>
            </h1>

            </div>
          </GridColumn>
        </Section>
        
        </div>
  )
}

export default Section1