'use client'
import Image from 'next/image';
import React, { useState } from 'react'

function Modal({ modal, team }) {
    const { active, index } = modal;
    return (
        <>
            <div className='modalContainer'>
                <div style={{ top: index * -100 + "%" }} className="modalSlider">
                    {team.map((team, index) => {
                        const { src, title } = team
                        return <div key={`modal_${index}`} className='modal'>
                            <Image src={`/assets/agencyImages/${src}`} width={300} height={0} className='rounded-2xl' alt={title} />
                        </div>
                    })}
                </div>
            </div>
        </>
    )
}

export default Modal
