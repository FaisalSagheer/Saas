"use client";
import { WorkContent } from "@/app/constant";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Link } from "lucide-react";
import React, { useRef } from "react";

const WorkCard = (props) => {
  
  return (
    <>
          <div className="lg:w-1/2 relative group transition-all rounded-none hover:rounded-[70px] h-full overflow-hidden">
            <img
              className="h-full w-full object-cover"
              src={props.Img1}
              alt="/"
            />
            <span className="opacity-0 group-hover:opacity-100 absolute bottom-0 left-0 h-full w-full font-[font2] text-center flex items-center justify-center bg-black/40">
              <h2 className="transition-all text-7xl text-white border-4 border-white rounded-full py-2 px-6 uppercase">
                <Link href={props.href}>View Project</Link>
              </h2>
            </span>
          </div>
          <div className="lg:w-1/2 relative group transition-all rounded-none hover:rounded-[70px] h-full overflow-hidden">
            <img
              className="h-full w-full object-cover"
              src={props.Img2}
              alt="/"
            />
            <span className="opacity-0 group-hover:opacity-100 absolute bottom-0 left-0 h-full w-full font-[font2] text-center flex items-center justify-center bg-black/40">
              <h2 className=" transition-all text-7xl text-white border-4 border-white rounded-full py-2 px-6 uppercase">
                <Link href={props.href}>View Project</Link>
              </h2>
            </span>
          </div>
        
    </>
  );
};

export default WorkCard;
