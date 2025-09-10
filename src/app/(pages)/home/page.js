"use client";
import React from "react";
import Video from "./components/Video";
import { Button } from "@/components/ui/button";
import MainHeroText from "./components/MainHeroText";
import Link from "next/link";
import FullScreenNavbar from "@/components/Navigation/FullScreenNavbar";
import Buttons from "./components/Buttons";

function Home() {
  return (
    <div>
      <FullScreenNavbar />
      <div>
        <div className="h-full w-full fixed">
          <Video />
        </div>
        <div className="h-screen w-screen relative flex flex-col justify-between">
          <MainHeroText />
          <Buttons />
        </div>
      </div>
    </div>
  );
}

export default Home;
