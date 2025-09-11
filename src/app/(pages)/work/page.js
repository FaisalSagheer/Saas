"use client";
import { WorkContent } from "@/app/constant";
import WorkCard from "@/components/Work/WorkCard";
import { useGSAP } from "@gsap/react";
import ReactLenis from "@studio-freight/react-lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
const Work = () => {

  useGSAP(function () {
    gsap.from(".imgAnimation", {
      height: "60px",
      stagger: {
        amount: 0.1
      },
      scrollTrigger: {
        trigger: ".imgContainer",
        markers: true,
        start: "top 100%",
        end: "top -150%",
        scrub: true,
      },
    });
  });
  return (
    <>
      <ReactLenis root>
        <div className="p-4 -mb-[100vh]">
          <div className="pt-[30vh]">
            <h1 className="font-[font2] text-[16vw] text-black uppercase">
              Work
            </h1>
          </div>
          <div className="-mt-30 imgContainer">
            {WorkContent.map(function (work, indx) {
              return (
                <div
                  className="w-full h-[850px] mb-4 flex gap-4 imgAnimation"
                  key={indx}
                >
                  <WorkCard Img1={work.Img1} Img2={work.Img2} />
                </div>
              );
            })}
          </div>
        </div>
      </ReactLenis>
    </>
  );
};

export default Work;
