"use client";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import ReactLenis from "@studio-freight/react-lenis";
import FullScreenNavbar from "@/components/Navigation/FullScreenNavbar";

function Agency() {
  const imageArray = [
    "./assets/agencyImages/Carl.jpg",
    "./assets/agencyImages/Lawrence.jpg",
    "./assets/agencyImages/CAMILLE.jpg",
    "./assets/agencyImages/ChantalG.jpg",
    "./assets/agencyImages/Michele.jpg",
    "./assets/agencyImages/MyleneS.jpg",
  ];
  gsap.registerPlugin(ScrollTrigger);
  const imgDivRef = useRef();
  const imgRef = useRef();
  useGSAP(function () {
    gsap.to(imgDivRef.current, {
      scrollTrigger: {
        trigger: imgDivRef.current,
        // markers: true,
        start: "top 28%",
        end: "top -140%",
        pin: true,
        pinSpacing: true,
        pinReparent: true,
        pinType: "transform",
        scrub: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (ele) => {
          let imageIndex;
          if (ele.progress < 1) {
            imageIndex = Math.floor(ele.progress * imageArray.length);
          } else {
            imageIndex = imageArray.length - 1;
          }
          imgRef.current.src = imageArray[imageIndex];
        },
      },
    });
  });
  return (
    <ReactLenis root>
      <FullScreenNavbar />
      <div className="py-48">
        <div
          ref={imgDivRef}
          className="h-[20vw] w-[15vw] absolute top-96 left-[30vw]"
        >
          <img
            ref={imgRef}
            src="./assets/agencyImages/Carl.jpg"
            alt="/"
            className="h-full w-full object-cover rounded-2xl"
          />
        </div>
        <div className="font-[font2] relative">
          <div className="mt-[55vh]">
            <h1 className="text-[20vw] text-center uppercase leading-[18vw]">
              SEVEN7Y
              <br />
              TWO
            </h1>
          </div>
          <div className="pl-[40%]">
            <p className="text-6xl">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; We’re
              inquisitive and open-minded, and we make sure creativity crowds
              out ego from every corner. A brand is a living thing, with values,
              a personality and a story. If we ignore that, we can achieve
              short-term success, but not influence that goes the distance. We
              bring that perspective to every brand story we help tell.
            </p>
          </div>
        </div>
        <div className="mt-60 font-[font1] text-xl font-semibold">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:pl-28">
            <div>
              <h3 className="text-xl font-semibold">Expertise</h3>
            </div>
            <div className="lg:pr-[38%]">
              <ul>
                <li>Strategy</li>
                <li>Adverstising</li>
                <li>Branding</li>
                <li>Design</li>
                <li>Content</li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto gap-20 py-40">
            <p>
              Our Work_ Born in curiosity, raised by dedication and fed with a
              steady diet of creativity.
            </p>
            <p className="whitespace-break-spaces">
              Our Creative_ Simmering in an environment where talent can come to
              a full boil. Encouraged to become the best versions of ourselves.
            </p>
            <p>
              Our Culture_ We’re open to each other. Period. The team works
              together to create a space that makes us proud.
            </p>
          </div>
        </div>
      </div>
    </ReactLenis>
  );
}

export default Agency;
