'use client'
import React from 'react'
// import homeVideo from ''
function Video() {
  return (
    <div className='h-full w-full'>
      <video src="./assets/homeVideo.mp4" className='h-full w-full object-cover' muted autoPlay loop></video>
    </div>
  )
}

export default Video;
