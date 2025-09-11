"use client";

import React from "react";
import Buttons from "./Buttons";

const Paragraph = () => {
  return (
    <div>
      <div className="flex items-center justify-center">
        <p className="absolute lg:w-[18vw] w-95 right-12 lg:right-15 bottom-25 lg:bottom-52 font-[font2] lg:text-[1.1vw] text-lg lg:leading-relaxed leading-tight">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;K72 is an agency that thinks through every action to nurture the
          brand. Tomorrow, in 5 months, and in 5 years. We seek the friction
          that creates the spark to generate emotion. To ensure an honest
          relationship, we are unfiltered, we say what needs to be said, we do
          what needs to be done.
        </p>
        <Buttons />
      </div>
    </div>
  );
};

export default Paragraph;
