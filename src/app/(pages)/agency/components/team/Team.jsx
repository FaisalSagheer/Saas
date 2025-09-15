'use client'
import { TeamIntro } from '@/app/constant'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef, useState } from 'react'
import Modal from './modal'
import Card from './Card'
import { ScrollSmoother, ScrollTrigger } from 'gsap/all'

const Team = () => {
  const imgCont = useRef(null)
  const imgPerson = useRef(null)
  gsap.registerPlugin(ScrollTrigger)
  const tl = gsap.timeline;
  useGSAP(() => {
    gsap.to(imgCont.current,{
      ScrollTrigger: {
        trigger: imgCont.current,
        scrub: true
      }
    })
    gsap.to(imgPerson.current, {
      stagger: .2,
      y: -700,
      scrub:true
    })
  })

  const [modal, setModal] = useState({ active: false, index: 0 })

  return (
    <>
      <main className='relative'>
        <div className='z-30'>
          {
            TeamIntro.map((team, index) => {
              return <Card key={index} index={index} title={team.title} subTitle={team.subTitle} setModal={setModal} />
            })
          }
        </div>
        <Modal modal={modal} team={TeamIntro} />
      </main>

      {/* <h4 className='text-center text-7xl font-[font2] pb-10'>Our Team</h4>
      <div className='relative grid grid-cols-3 gap-3 py-2 font-[font1] text-white' ref={imgCont}>
        {TeamIntro.map((team, index) =>
          <div className='text-center flex justify-center items-center' key={index} ref={imgPerson}>
            <img src={team.src} alt={team.title} className='rounded-2xl h-full w-full' />
            <div className='absolute'>
              <h2 className='text-2xl'>{team.title}</h2>
              <h4 className='text-4xl'>{team.subTitle}</h4>
            </div>
          </div>
        )}
      </div> */}
    </>
  )
}

export default Team
