import React from 'react'
import helsinki from "../images/helsinki.jpg"
const Hero = () => {
    return (
        <div className='w-full h-full md:h-[500px] xl:h-[500px] 2xl:h-[600px] 3xl:h-[700px] relative z-10 flex justify-start items-center'>
                <img src={helsinki} alt="Helsinki Events" className='w-full h-full object-cover'/>
                <h1 className='absolute left-2/4 top-1/3 text-2xl md:text-3xl xl:text-5xl text-white font-semibold z-50 shadow-md -translate-x-1/2 leading-relaxed xl:leading-snug'>Find out what's happening in Helsinki </h1>
            <div className='absolute w-full h-full left-0 right-0 top-0 bg-black opacity-50 z-40'/>
           

        </div>
    )
}

export default Hero
