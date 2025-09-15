
"use client"
import React, { useRef } from "react";
import ReactLenis from "@studio-freight/react-lenis";
import Footer from "@/components/Footer";
import Expertise from "./components/Expertise";
import ImageAnimation from "./components/ImageAnimation";
import Team from "./components/team/Team";
import ProjectCard from "./components/ProjectCard";

function Agency() {
  return (
    <>
      <ReactLenis root>
        {/* <FullScreenNavbar /> */}
        <div className="py-1 lg:py-48">
          <ImageAnimation />
          <div className="font-[font2] relative">
            <div className="mt-[55vh]">
              <h1 className="text-8xl lg:text-[20vw] text-center uppercase leading-[18vw] transition">
                SEVEN7Y
                <br />
                TWO
              </h1>
            </div>
            <div className="lg:pl-[40%] lg:mt-20 p-3 lg:p-0">
              <p className="text-xl lg:text-6xl transition">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                We’re inquisitive and open-minded, and we make sure creativity
                crowds out ego from every corner. A brand is a living thing,
                with values, a personality and a story. If we ignore that, we
                can achieve short-term success, but not influence that goes the
                distance. We bring that perspective to every brand story we help
                tell.
              </p>
            </div>
          </div>
          <Expertise />
        </div>
        {/* <div className="relative flex justify-center items-center">
          <ImageAnimationWithTitle />
        </div> */}
        
        <Team/>
        
        <ProjectCard/>
      </ReactLenis>
      <Footer />
</>
  );
}

export default Agency;
