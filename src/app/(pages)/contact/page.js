"use client";
import React, { useRef, useState } from 'react';
import { Contrast} from "lucide-react";
import {Swiper,SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/scrollbar';
import { FreeMode, Scrollbar, Mousewheel } from 'swiper/modules';
import ReactLenis from '@studio-freight/react-lenis';
import EmailScroll from './components/EmailScroll';
import LogoCloud from './components/LogoCloud';
export default function Contact () {
  const H2 = "text-lg lg:text-2xl text-center w-[8rem] lg:w-[12vw]";
  return (
     
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
            <EmailScroll/>
            <LogoCloud/>
          </div>
        </div>
        </ReactLenis>
)
}
