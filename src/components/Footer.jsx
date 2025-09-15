"use client";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="bg-black text-white h-[62vh]">
      <div className="flex justify-between flex-col h-full w-full px-4 font-[font2]">
        <div className="flex justify-center lg:justify-between items-center flex-wrap lg:flex-nowrap uppercase">
          <div className="flex justify-center items-center text-center gap-2 mt-10 text-4xl md:text-6xl lg:text-8xl">
            <div className="border-4 rounded-full px-8 pt-4">
              <h4>FB</h4>
            </div>
            <div className="border-4 rounded-full px-8 pt-4">
              <h4>ig</h4>
            </div>
            <div className="border-4 rounded-full px-8 pt-4">
              <h4>in</h4>
            </div>
            <div className="border-4 rounded-full px-8 pt-4">
              <h4>be</h4>
            </div>
          </div>
          <div className="text-4xl md:text-6xl lg:text-8xl border-4 rounded-full px-8 pt-4 pb-1 mt-8">
            <h4>
              <Link href="/contact">
              Contact
              </Link>
              </h4>
          </div>
        </div>
        <div className="flex justify-center flex-wrap lg:flex-nowrap gap-3 lg:gap-14 text-lg font-[font2] py-4 uppercase">
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
