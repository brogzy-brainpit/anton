import React from 'react'
import CustomBtn from './CustomBtn'

function Cta() {
  return (
    <div className='h-svh flex flex-col justify-center items-center text-center gap-4 bg-brand-accent text-brand-white'>

<h2 className='text-heading2 font-custom text-brand-white'>YOUR CAR, OUR CARE</h2>
        <p className='text-brand-white font-body text-para max-w-[50ch]'>Transform your car with expert cleaning,
 all from the comfort of your home. Trust our team for a spotless finish every time.</p>
    <CustomBtn className="w-fit capitalize font-body"
  initialBg="#C5FE0C"
  initialText="#1d1d1d"

  hoverText="#1d1d1d"
  hoverBg="#fbfbfb"
>
  Contact us
</CustomBtn>
    </div>
  )
}

export default Cta