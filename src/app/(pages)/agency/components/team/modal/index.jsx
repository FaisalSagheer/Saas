"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
function Modal({ modal, team }) {
  const scaleAnimation = {
    initial: { scale: 0, x: "-50%", y: "-50%" },
    open: {
      scale: 1,
      x: "-50%",
      y: "-50%",
      transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
    },
    closed: {
      scale: 0,
      x: "-50%",
      y: "-50%",
      transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
    },
  };
  const { active, index } = modal;
  const container = useRef(null);
  useEffect(() => {
    const moveContainerX = gsap.quickTo(container.current, "left", {
      duration: 0.8,
      ease: "power3",
    })
    const moveContainerY = gsap.quickTo(container.current, "top", {
      duration: 0.8,
      ease: "power3",
    })
    window.addEventListener("mouseover", (e) => {
      const { clientX, clientY } = e;
      moveContainerX(clientX);
      moveContainerY(clientY);
    });
  }, []);
  return (
    <>
      <motion.div
        className="modalContainer z-10"
        variants={scaleAnimation}
        initial={"initial"}
        animate={active?"open":"closed"}
      >
        <div
          style={{ top: index * -100 + "%" }}
          className="absolute modalSlider"
        >
          {team.map((team, index) => {
            const { src, title } = team;
            return (
              <div
                key={`modal_${index}`}
                className="modal h-full relative flex justify-center items-center"
              >
                <Image
                  src={`./${src}`}
                  width={300}
                  height={0}
                  className="rounded-2xl lg:w-full lg:h-full"
                  alt={title}
                />
              </div>
            );
          })}
        </div>
      </motion.div>
    </>
  );
}

export default Modal;
