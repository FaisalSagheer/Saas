'use client'
import { TeamIntro } from '@/app/constant'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'

const Team = () => {
    
    
  return (
    <>
    {TeamIntro.map((team,index)=>
        <div className='bg-black w-full h-full relative text-white hover:text-black hover:bg-[#D3FD50] transition-all overflow-hidden ' key={index}>
        <div className='border-y-1 py-6 flex justify-between px-6 font-[font2] z-30'>
        <div className='text-2xl'>
        <h4>{team.Title}</h4>
        </div>
        <div className='uppercase text-6xl'>
        <h2>{team.subTitle}</h2>
        </div>
        </div>
        <div className='award-preview h-[80vw] lg:h-[37vw] w-[50vw] lg:w-[28vw] transition'>
        <img src={team.img} className='bg-position-[0 0] h-full w-full object-fill rounded-2xl' alt={team.Title} />
        </div>
        </div>
)    
    }
    </>
  )
}

export default Team
