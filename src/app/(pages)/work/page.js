"use client";
import WorkCard from "@/components/Work/WorkCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const Work = () => {
  
  return (
    <div>
      <div className="p-4">
        <div className="pt-[42vh]">
          <h1 className="font-[font2] text-[16vw] text-black uppercase">
            Work
          </h1>
        </div>
        <div className="-mt-20">
            <WorkCard />
        </div>
      </div>
    </div>
  );
};

export default Work;
