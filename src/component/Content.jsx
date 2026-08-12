import Link from 'next/link'
import React from 'react'

export default function Content() {
  return (
    <div className='py-8 px-12 h-full w-full flex flex-col justify-between'>
        <Section1 />
        <Section2 />
    </div>
  )
}

const Section1 = () => {
    return (
        <div>
            <Nav />
        </div>
    )
}

const Section2 = () => {
    return (
        <div className='flex justify-between items-end'>
            <h1 className='text-[14vw] leading-[0.8] text-brand-secondary font-custom mt-10'>Detail by Anton</h1>
            <p className='text-brand-secondary font-custom2 capitalize text-para'>
                <Link className='underline' target='_blank' href={"https://instagram.com/memet_lab"}>site by memet</Link>
            </p>
        </div>
    )
}

const Nav = () => {
    return (
        <div className='flex shrink-0 gap-20'>
            <div className='flex flex-col gap-2'>
                <h3 className='mb-2 uppercase text-brand-white'>About</h3>
                <p className='text-brand-white font-body text-para'>Home</p>
                <p className='text-brand-white font-body text-para'>Projects</p>
                <p className='text-brand-white font-body text-para'>Our Mission</p>
                <p className='text-brand-white font-body text-para' >Contact Us</p>
            </div>
            <div className='flex flex-col gap-2'>
                <h3 className='mb-2 uppercase text-brand-white font-body text-para'>Education</h3>
                <p className='text-brand-white font-body text-para'>News</p>
                <p className='text-brand-white font-body text-para'>Learn</p>
                <p className='text-brand-white font-body text-para'>Certification</p>
                <p className='text-brand-white font-body text-para'>Publications</p>
            </div>
        </div>
    )
}