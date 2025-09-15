import React from 'react'

function Card({index,setModal,title,subTitle}) {
    return (
        <div >
                <div className='bg-black text-white hover:text-black hover:bg-[#D3FD50] w-full relative transition-all' key={index} onMouseEnter={() => { { setModal({ active: true, index: index }) } }}
                    onMouseLeave={() => { setModal({ active: false, index: index }) }}>
                    <div className='border-y-1 p-6 flex justify-between font-[font2]'>
                        <div className='text-2xl m-0'>
                            <h4>{title}</h4>
                        </div>
                        <div className='uppercase text-6xl'>
                            <h2>{subTitle}</h2>
                        </div>
                    </div>
                    
                </div>
        </div>
    )
}

export default Card
