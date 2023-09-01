"use client"

import React from 'react'
import Image from 'next/image'
import CustomButton from './CustomButton'

const Hero = () => {

    const handleScroll =() => {

    }

  return (
  <div className='hero'>
      <div className='flex-1 pt-36 padding-x'>
        <h1 className='hero__title'>
            메인타이틀의 제목입니다
        </h1>
        <p className='hero__subtitle'>
            서브타이틀의 제목입니다.
        </p>
        <CustomButton 
         title="타이틀입니다"
         containerStyles="bg-primary-blue
         text-white rounded-full mt-10"
         handleClick={()=>{handleScroll}}
        />
    </div>
    <div className='hero__image-container'>
        <div className='hero__image'>
            <Image src="/hero.png" alt='hero' fill className='object-contain'></Image>
            <div className='hero__image-overlay'></div>
        </div>
    </div>
  </div>
  )
}

export default Hero