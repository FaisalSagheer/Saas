"use client";
import React from "react";

function LogoCloud() {
  const Icon = "border-2 rounded-full px-6 pt-2"
  return (
    <>
      <div className="text-center py-30 font-[font2]">
        <div className="text-3xl">
          <h2>Follow Us</h2>
        </div>
        <div className="flex justify-center items-center flex-wrap lg:flex-none px-10 lg:px-0 gap-2 uppercase mt-10 text-6xl lg:text-7xl">
          <div className={Icon}>
            <h4>FB</h4>
          </div>
          <div className={Icon}>
            <h4>ig</h4>
          </div>
          <div className={Icon}>
            <h4>in</h4>
          </div>
          <div className={Icon}>
            <h4>be</h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default LogoCloud;
