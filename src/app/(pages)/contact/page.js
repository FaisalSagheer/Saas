"use client";
import React, { useRef, useState } from 'react';
import { Contrast} from "lucide-react";
import {Swiper,SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/scrollbar';
import { FreeMode, Scrollbar, Mousewheel } from 'swiper/modules';
import ReactLenis from '@studio-freight/react-lenis';
export default function Contact () {
  const H2 = "text-lg lg:text-2xl text-center w-[8rem] lg:w-[12vw]";
  const Icon = "border-2 rounded-full px-6 pt-2"
  return (
      //  <Swiper
      //  direction={'vertical'}
      //   slidesPerView={'auto'}
      //   loop={true}
      //   freeMode={true}
      //   scrollbar={false}
      //   mousewheel={true}
      //   modules={[FreeMode, Scrollbar, Mousewheel]}
      //   className="mySwiper"
      //  >
      <ReactLenis root>

        <div className="bg-black text-white overflow-hidden font-[font1] lg:font-[font2]">
          <div className="ele">
            <div className="flex justify-center lg:justify-between flex-col lg:flex-row items-center flex-wrap lg:flex-nowrap lg:px-20 pt-40 lg:pt-10 leading-45">
              <div className="order-2 lg:order-1">
                <h2 className={`py-10 ${H2}`}>
                  Onscreen or in an office. Here. There. Anywhere.
                </h2>
              </div>
              <div className="order-1 lg:order-2">
                <h1 className="text-6xl lg:text-[10vw] text-center w-2xs lg:w-[40vw] uppercase">
                  To talk about your project
                </h1>
              </div>
              <div className="order-3 lg:order-3">
                <h2 className={H2}>
                  525 Av. Viger O - Suite 400 Montréal, QC H2Z 1G6 →
                </h2>
              </div>
            </div>
            <div className="rotate-x-12 -rotate-y-16 transition-all ease-in-out mt-10 flex text-black bg-[#D3FD50] hover:bg-white py-0 lg:py-10">
              <div className="moveX flex items-center">
                <Contrast size={126} />
                <h2 className="font-[font2] text-5xl lg:text-[10vw] whitespace-nowrap uppercase leading-[0.7] pt-6 pb-2 lg:pb-0 lg:pt-10">
                  Hello@k72.ca
                </h2>
                <Contrast size={126} />
                <h2 className="font-[font2] text-5xl lg:text-[10vw] whitespace-nowrap uppercase leading-[0.7] pt-6 pb-2 lg:pb-0 lg:pt-10">
                  Hello@k72.ca
                </h2>
              </div>
              <div className="moveX flex items-center">
                <Contrast size={126} />
                <h2 className="font-[font2] text-5xl lg:text-[10vw] whitespace-nowrap uppercase leading-[0.7] pt-6 pb-2 lg:pb-0 lg:pt-10">
                  Hello@k72.ca
                </h2>
                <Contrast size={126} />
                <h2 className="font-[font2] text-5xl lg:text-[10vw] whitespace-nowrap uppercase leading-[0.7] pt-6 pb-2 lg:pb-0 lg:pt-10">
                  Hello@k72.ca
                </h2>
              </div>
            </div>
            <div className="text-center py-30 font-[font2]">
              <div className="text-3xl"><h2>Follow Us</h2></div>
              <div className="flex justify-center items-center flex-wrap lg:flex-none px-10 lg:px-0 gap-2 uppercase mt-10 text-6xl lg:text-7xl">
                <div className={Icon}><h4>FB</h4></div>
                <div className={Icon}><h4>ig</h4></div>
                <div className={Icon}><h4>in</h4></div>
                <div className={Icon}><h4>be</h4></div>
              </div>
            </div>
          </div>
        </div>
        </ReactLenis>
      //  </Swiper>

)
}
