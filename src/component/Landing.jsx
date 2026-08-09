import SlideUpText from '@/effects/SlideUpText'
import GridColumn from '@/layout/GridColumn'
import Section from '@/layout/Section'
import React from 'react'
import LandingVideo from './LandingVideo'

function Landing({ preloaderOut }) {
  return (
    <div className='h-svh bg-[#262626]' >
        <Section className='h-full'>
            <GridColumn className='h-full'>
                <Left preloaderOut={preloaderOut}/>
                <Right/>
            </GridColumn>
        </Section>
        
        </div>
  )
}

const Left=({preloaderOut})=>{
    return(
        <div className="col-span-6 relative p-4 bg-[#EAEDF4] rounded-2xl overflow-clip  h-full">
            <h1 className="text-brand-black font-custom text-heading1 leading-[1.2] uppercase">
                <SlideUpText preLoaderOut={preloaderOut} text={"detailing for the new standard"}/>
                </h1>
        </div>
    )
}
const Right=()=>{
    return(
        <div className="col-span-6 relative rounded-2xl overflow-clip  h-full">
            <LandingVideo link={"/videos/hero.mp4"} poster={"/images/ts.png"} preLoaderOut={true}/>
        </div>
    )
}

export default Landing