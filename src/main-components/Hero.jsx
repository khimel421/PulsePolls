import React from 'react'
import Container from '../container/Container'
import hero from '../assets/hero.jpg'

export default function Hero() {
  return (
    <div className='bg-[#001d21] text-[#cdcbff] p-4 pt-10 flex flex-col lg:flex-row items-center justify-around'>
       
            <div >
                <p className='text-6xl font-semibold max-w-lg'>Your Opinion Matters For Our Surveys</p>
                <p className='text-2xl max-w-md mt-4'>We are thrilled to welcome you to a platform where your opinions truly make a difference</p>
            </div>
            <figure className=' rounded-sm'>
                <img width={500} src={hero} alt="" />
            </figure>
        
        
    </div>
  )
}
