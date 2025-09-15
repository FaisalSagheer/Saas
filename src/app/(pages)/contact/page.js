"use client";
import React from "react";
import ReactLenis from "@studio-freight/react-lenis";

import { Contrast} from "lucide-react";
import FullScreenNavbar from "@/components/Navigation/FullScreenNavbar";

const Contact = () => {
  const H2 = "text-sm lg:text-2xl text-center lg:w-[12vw]";
  return (
    <>
      <ReactLenis root>
        <div className="bg-black text-white infiniteScroll overflow-hidden">
          <div className="ele">
            <div className="flex justify-between items-center font-[font1] lg:px-20 pt-40 lg:pt-10 leading-45">
              <div>
                <h2 className={H2}>
                  Onscreen or in an office. Here. There. Anywhere.
                </h2>
              </div>
              <div>
                <h1 className="text-2xl lg:text-[10vw] text-center lg:w-[40vw] uppercase font-[font2]">
                  To talk about your project
                </h1>
              </div>
              <div>
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
              <div className="text-3xl"><h1>Follow Us</h1></div>
              <div className="flex justify-center gap-2 uppercase mt-10 text-7xl">
                <div className="border-2 rounded-full px-6 pt-2"><h4>FB</h4></div>
                <div className="border-2 rounded-full px-6 pt-2"><h4>ig</h4></div>
                <div className="border-2 rounded-full px-6 pt-2"><h4>in</h4></div>
                <div className="border-2 rounded-full px-6 pt-2"><h4>be</h4></div>
              </div>
            </div>
          </div>
        </div>
      </ReactLenis>
    </>
  );
};

export default Contact;
