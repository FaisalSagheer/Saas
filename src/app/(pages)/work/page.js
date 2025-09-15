"use client";
import { WorkContent } from "@/app/constant";
import Footer from "@/components/Footer";
import FullScreenNavbar from "@/components/Navigation/FullScreenNavbar";
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
      height: "100px",
      stagger: {
        amount: 0.1
      },
      scrollTrigger: {
        trigger: ".imgContainer",
        // markers: true,
        start: "top 100%",
        end: "top -150%",
        scrub: true,
      },
    });
  });
  return (
    <>
      {/* <ReactLenis root> */}
        <div className="p-4">
          <div className="pt-[45vh]">
            <h1 className="font-[font2] text-8xl lg:text-[16vw] text-black uppercase">
              Work
            </h1>
          </div>
          <div className="imgContainer">
            {WorkContent.map(function (work, indx) {
              return (
                <div
                  className="w-full h-[700px] mb-4 flex flex-col lg:flex-row gap-2 lg:gap-4 imgAnimation"
                  key={indx}
                >
                  <WorkCard Img1={work.Img1} Img2={work.Img2} />
                </div>
              );
            })}
          </div>
        </div>
      {/* </ReactLenis> */}
      <Footer/>
    </>
  );
};

export default Work;
