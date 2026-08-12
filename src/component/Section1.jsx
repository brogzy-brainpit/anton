import GridColumn from '@/layout/GridColumn'
import Section from '@/layout/Section'
import React from 'react'
import TypographyReveal from './TextReveals'

function Section1() {
  return (
    <div className='h-svh'>
        
        <Section>
          <GridColumn>
            <div className="col-span-8">
            <h1 className='capitalie'>
   <TypographyReveal className='font-custom2 text-heading2 capitalie leading-[1.1]'
    toColor='#000000'
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