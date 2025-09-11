"use client";
import React from "react";
import ReactLenis from "@studio-freight/react-lenis";

const Contact = () => {
  const H2 = "text-2xl text-center w-[12vw]";
  return (
    <>
      <ReactLenis root>
        <div className="bg-black text-white">
          <div className="h-screen w-screen flex justify-between flex-col">

          <div className="flex justify-between items-center font-[font1] px-20 pt-10 leading-45">
            <div>
              <h2 className={H2}>
                Onscreen or in an office. Here. There. Anywhere.
              </h2>
            </div>
            <div>
              <h1 className="text-[10vw] text-center w-[40vw] uppercase font-[font2]">
                To talk about your project
              </h1>
            </div>
            <div>
              <h2 className={H2}>
                525 Av. Viger O - Suite 400 Montréal, QC H2Z 1G6 →
              </h2>
            </div>
          </div>
          <div>
            <div className="rotate-12 transition-all ease-in-out mt-20 flex text-black bg-[#D3FD50] py-1 lg:py-0">
              <div className="moveX flex items-center">
                <h2 className="font-[font2] text-7xl lg:text-[8vw] whitespace-nowrap uppercase leading-[0.7] pt-6 pb-2 lg:pb-0 lg:pt-10">
                  Hello@k72.ca
                </h2>
                <h2 className="font-[font2] text-7xl lg:text-[8vw] whitespace-nowrap uppercase leading-[0.7] pt-6 pb-2 lg:pb-0 lg:pt-10">
                  Hello@k72.ca
                </h2>
              </div>
              <div className="moveX flex items-center">
                <h2 className="font-[font2] text-7xl lg:text-[8vw] whitespace-nowrap uppercase leading-[0.7] pt-6 pb-2 lg:pb-0 lg:pt-10">
                  Hello@k72.ca
                </h2>
                <h2 className="font-[font2] text-7xl lg:text-[8vw] whitespace-nowrap uppercase leading-[0.7] pt-6 pb-2 lg:pb-0 lg:pt-10">
                  Hello@k72.ca
                </h2>
              </div>
            </div>
          </div>
          </div>
        </div>
      </ReactLenis>
    </>
  );
};

export default Contact;
