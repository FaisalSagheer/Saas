"use client";
import React from "react";
import Video from "./Video";

function MainHeroText() {
  const Text =
    "text-white text-6xl md:text-9xl lg:text-[9.5vw] flex justify-center items-center uppercase leading-[12vw] lg:leading-[8vw]";
  return (
    <>
      <div className="font-[font2] lg:font-[font1] text-center pt-100 md:pt-50 lg:pt-10">
        <div className={Text}>The spark for</div>
        <div className={Text}>
          All
          <div className="h-[7vw] w-[16vw] rounded-full -mt-3 overflow-hidden">
            <Video />
          </div>
          Things
        </div>
        <div className={Text}>Creative</div>
      </div>
    </>
  );
}

export default MainHeroText;
