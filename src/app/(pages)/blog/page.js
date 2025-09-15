"use client";
import Footer from "@/components/Footer";
import FullScreenNavbar from "@/components/Navigation/FullScreenNavbar";
import ReactLenis from "@studio-freight/react-lenis";
import React from "react";

const Blogs = () => {
  return (
    <>
      <ReactLenis root>
        <div className="font-[font2]">
          <div className="pt-20 lg:pt-[45vh]">
            <h1 className="text-8xl lg:text-[16vw] text-black uppercase">
              Blogs
            </h1>
          </div>
          <div className="flex items-center flex-wrap lg:flex-nowrap">
            <div className="p-5 font-[font2]">
              <div className="w-full h-full">
                <img
                  src="./assets/NavImages/mountains.jpg"
                  alt="/"
                  className="h-full w-sm lg:w-[48vw] object-cover rounded-2xl lg:rounded-[40px]"
                />
              </div>
              <div className="flex flex-col">
                <div className="text-lg lg:text-3xl py-2 lg:py-4">
                  <h4>May 9 2025</h4>
                </div>
                <div className="text-3xl lg:text-5xl uppercase lg:w-3xl">
                  <h2>pub predictive:lia revolutionne le ciblage</h2>
                </div>
                <div className="text-lg lg:text-3xl flex py-2 lg:py-4">
                  <h4 className="bg-black/10 py-1 lg:py-2 px-4">Tech & A.I</h4>
                </div>
              </div>
            </div>
            <div className="p-5 font-[font2]">
              <div className="w-full h-full">
                <img
                  src="./assets/NavImages/mountains.jpg"
                  alt="/"
                  className="h-full w-sm lg:w-[48vw] object-cover rounded-2xl lg:rounded-[40px]"
                />
              </div>
              <div className="flex flex-col">
                <div className="text-lg lg:text-3xl py-2 lg:py-4">
                  <h4>May 9 2025</h4>
                </div>
                <div className="text-3xl lg:text-5xl uppercase lg:w-3xl">
                  <h2>pub predictive:lia revolutionne le ciblage</h2>
                </div>
                <div className="text-lg lg:text-3xl flex py-2 lg:py-4">
                  <h4 className="bg-black/10 py-1 lg:py-2 px-4">Tech & A.I</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ReactLenis>
        <Footer />
    </>
  );
};

export default Blogs;
