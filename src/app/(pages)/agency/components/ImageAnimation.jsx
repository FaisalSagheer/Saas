"use client";
import { imageArray } from "@/app/constant";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";

const ImageAnimation = () => {

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
    <>
      <div
        ref={imgDivRef}
        className="h-[80vw] lg:h-[20vw] w-[50vw] lg:w-[15vw] absolute top-60 lg:top-90 left-[20vw] lg:left-[30vw]"
      >
        <img
          ref={imgRef}
          src="./assets/agencyImages/Carl.jpg"
          alt="/"
          className="h-full w-full object-cover rounded-2xl"
        />
      </div>
    </>
  );
};

export default ImageAnimation;
