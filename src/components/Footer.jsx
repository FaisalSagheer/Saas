"use client";
import React from "react";

function Footer() {
  return (
    <div className="bg-black text-white h-[62vh]">
      <div className="flex justify-between flex-col h-full w-full px-4">
        <div className="flex justify-center lg:justify-between items-center flex-wrap lg:flex-nowrap">
          <div className="flex justify-center items-center text-center gap-2 uppercase mt-10 text-4xl md:text-6xl lg:text-8xl">
            <div className="border-4 rounded-full px-6">
              <h4 className="pb-2">FB</h4>
            </div>
            <div className="border-4 rounded-full px-6">
              <h4 className="pb-2">ig</h4>
            </div>
            <div className="border-4 rounded-full px-6">
              <h4 className="pb-2">in</h4>
            </div>
            <div className="border-4 rounded-full px-6">
              <h4 className="pb-2">be</h4>
            </div>
          </div>
          <div className="text-5xl md:text-6xl lg:text-8xl border-4 rounded-full px-6 mt-9">
            <h4 className="pb-4">Contact</h4>
          </div>
        </div>
        <div className="flex justify-center flex-wrap lg:flex-nowrap gap-3 lg:gap-4 text-lg font-[font2] py-4 uppercase">
          <div>
            <h5>Privacy Policy</h5>
          </div>
          <div>
            <h5>Privacy Notice</h5>
          </div>
          <div>
            <h5>Ethics Reports</h5>
          </div>
          <div>
            <h5>Consent Choices</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
