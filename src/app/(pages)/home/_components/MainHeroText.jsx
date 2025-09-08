"use client";
import React from "react";
import Video from "./Video";

function MainHeroText() {
  const Text =
    "text-white text-[9.5vw] flex justify-center items-center uppercase leading-[8vw]";
  return (
    <>
      <div className="font-[font1] text-center pt-5">
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
