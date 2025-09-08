'use client'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { usePathname } from 'next/navigation'
import React, { useRef } from 'react'

export default function Loading({ children }) {
    const pathName = usePathname()
    const PageRef = useRef(null)
    // console.log(pathName)
    const stairParentRef = useRef(null);
    useGSAP(function () {
        const tl = gsap.timeline()
        tl.to(stairParentRef.current, {
            display: 'block'
        })
        tl.from('.stair', {
            height: 0,
            stagger: {
                amount: -0.25
            }
        })
        tl.to('.stair', {
            y: '100%',
            stagger: {
                amount: -0.25
            }
        })
        tl.to(stairParentRef.current, {
            display: 'none'
        })
        tl.to('.stair', {
            y: '0%'
        })
        gsap.from(PageRef.current,{
            opacity:0,
            delay:1.2,
            scale:1.2
        })
    }, [pathName])
    return (
        <>

            <div className='h-screen w-full fixed z-20 top-0' ref={stairParentRef}>
                <div className='flex h-full w-full'>
                    <div className='stair h-full w-1/5 bg-black'></div>
                    <div className='stair h-full w-1/5 bg-black'></div>
                    <div className='stair h-full w-1/5 bg-black'></div>
                    <div className='stair h-full w-1/5 bg-black'></div>
                    <div className='stair h-full w-1/5 bg-black'></div>
                </div>
            </div>
            <div ref={PageRef}>
            {children}
            </div>
        </>
    )
}

