"use client";
import React from "react";
import { Contrast, Earth } from "lucide-react";

function EmailScroll() {
  return (
    <>
      <div className="rotate-x-12 -rotate-y-16 transition-all ease-in-out mt-10 flex text-black bg-[#D3FD50] hover:bg-white py-0 lg:py-10"
      
      >
        <div className="moveX flex items-center">
          <Earth size={128}/>
          <h2 className="font-[font2] text-5xl lg:text-[10vw] whitespace-nowrap uppercase leading-[0.7] pt-6 pb-2 lg:pb-0 lg:pt-10">
            Hello@k72.ca
          </h2>
          <Earth size={128} />

          <h2 className="font-[font2] text-5xl lg:text-[10vw] whitespace-nowrap uppercase leading-[0.7] pt-6 pb-2 lg:pb-0 lg:pt-10">
            Hello@k72.ca
          </h2>
        </div>
        <div className="moveX flex items-center">
          <Earth size={128} />

          <h2 className="font-[font2] text-5xl lg:text-[10vw] whitespace-nowrap uppercase leading-[0.7] pt-6 pb-2 lg:pb-0 lg:pt-10">
            Hello@k72.ca
          </h2>
          <Earth size={128} />

          <h2 className="font-[font2] text-5xl lg:text-[10vw] whitespace-nowrap uppercase leading-[0.7] pt-6 pb-2 lg:pb-0 lg:pt-10">
            Hello@k72.ca
          </h2>
        </div>
      </div>
    </>
  );
}

export default EmailScroll;
