"use client";
import { Navlinks } from "@/app/constant";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import React, { useContext, useRef } from "react";
import { NavbarContext } from "@/context/NavContext";

function FullScreenNavbar() {
  const fullScreenNavLinksRef = useRef(null);
  const fullScreenNav = useRef(null);
  const [navOpen, setNavopen] = useContext(NavbarContext);

  function gsapAnimation() {
    const tl = gsap.timeline();
    tl.to(".fullScreenNav", {
      display: "block",
    });
    tl.to(".stairing", {
      delay: 0.2,
      height: "100%",
      stagger: {
        amount: -0.3,
      },
    });
    tl.to(".link", {
      opacity: 1,
      rotateX: 0,
      stagger: {
        amount: 0.3,
      },
    });
    tl.to(".navLink", {
      opacity: 1,
    });
  }

  function gsapAnimationReverse() {
    const tl = gsap.timeline();
    tl.to(".link", {
      opacity: 0,
      rotateX: 90,
      stagger: {
        amount: 0.1,
      },
    });
    tl.to(".stairing", {
      height: 0,
      stagger: {
        amount: 0.1,
      },
    });
    tl.to(".navLink", {
      opacity: 0,
    });
    tl.to(".fullScreenNav", {
      display: "none",
    });
  }
  useGSAP(
    function () {
      if (navOpen) {
        gsapAnimation();
      } else {
        gsapAnimationReverse();
      }
    },
    [navOpen]
  );
  return (
    <div
      ref={fullScreenNav}
      id="fullScreenNav"
      className="fullScreenNav z-50 text-white h-screen w-full absolute overflow-hidden"
    >
      <div className="h-screen w-full fixed">
        <div className="flex h-full w-full">
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
        </div>
      </div>
      <div className="relative" ref={fullScreenNavLinksRef}>
        <div className="navLink flex w-full justify-between items-start p-3">
          <div className="lg:w-50 w-32 cursor-pointer">
            <Link href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                // width="130"
                // height="52"
                viewBox="0 0 103 44"
              >
                <path
                  fill="white"
                  fillRule="evenodd"
                  d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
                ></path>
              </svg>
            </Link>
          </div>
          <div
            className="h-22 lg:h-32 w-24 lg:w-32 relative cursor-pointer"
            onClick={() => {
              setNavopen(false);
            }}
          >
            <div className="absolute origin-top right-0 w-0.5 lg:w-1  h-34 lg:h-44 bg-white hover:bg-[#D3FD50] rotate-45 rounded-full"></div>
            <div className="absolute origin-top w-0.5 lg:w-1 h-34 lg:h-44 bg-white hover:bg-[#D3FD50] -rotate-45 rounded-full"></div>
          </div>
        </div>
        <div className="py-20">
          {Navlinks.map((item) => (
            <div
              className="origin-top border-y-1 border-white relative link"
              key={item.id}
            >
              <Link href={item.href}>
                <h1 className="font-[font2] text-7xl lg:text-[8vw] text-center uppercase leading-[0.7] pt-8 pb-2 lg:pb-0 lg:pt-10">
                  {item.title}
                </h1>
                <div className="absolute top-0 flex bg-[#D3FD50] moveLink py-1 lg:py-0">
                  <div className="moveX flex items-center">
                    <h2 className="font-[font2] text-7xl lg:text-[8vw] whitespace-nowrap uppercase leading-[0.7] pt-6 pb-2 lg:pb-0 lg:pt-10">
                      {item.hoverLink}
                    </h2>
                    <img
                      className="h-18 lg:h-30 w-80 lg:w-96 rounded-full shrink-0 object-cover"
                      src={item.img1}
                      alt="/"
                    />
                    <h2 className="font-[font2] text-7xl lg:text-[8vw] whitespace-nowrap uppercase leading-[0.7] pt-6 pb-2 lg:pb-0 lg:pt-10">
                      {item.hoverLink}
                    </h2>
                    <img
                      className="h-18 lg:h-30 w-80 lg:w-96 rounded-full shrink-0 object-cover"
                      src={item.img2}
                      alt="/"
                    />
                  </div>
                  <div className="moveX flex items-center">
                    <h2 className="font-[font2] text-7xl lg:text-[8vw] whitespace-nowrap uppercase leading-[0.7] pt-6 pb-2 lg:pb-0 lg:pt-10">
                      {item.hoverLink}
                    </h2>
                    <img
                      className="h-18 lg:h-30 w-80 lg:w-96 rounded-full shrink-0 object-cover"
                      src={item.img1}
                      alt="/"
                    />
                    <h2 className="font-[font2] text-7xl lg:text-[8vw] whitespace-nowrap uppercase leading-[0.7] pt-6 pb-2 lg:pb-0 lg:pt-10">
                      {item.hoverLink}
                    </h2>
                    <img
                      className="h-18 lg:h-30 w-80 lg:w-96 rounded-full shrink-0 object-cover"
                      src={item.img2}
                      alt="/"
                    />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FullScreenNavbar;
