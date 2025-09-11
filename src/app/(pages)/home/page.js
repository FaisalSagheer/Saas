"use client";
import React from "react";
import Video from "./components/Video";
import MainHeroText from "./components/MainHeroText";
import FullScreenNavbar from "@/components/Navigation/FullScreenNavbar";
import Paragraph from "./components/Paragraph";

function Home() {
  return (
    <div>
      {/* <FullScreenNavbar /> */}
      <div className="text-white">
        <div className="h-full w-full fixed">
          <Video />
        </div>
        <div className="h-screen w-screen relative flex flex-col justify-between">
          <MainHeroText />
          <Paragraph/>
        </div>
      </div>
    </div>
  );
}

export default Home;
