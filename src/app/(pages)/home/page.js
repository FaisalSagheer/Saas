"use client";
import React from "react";
import Video from "./components/Video";
import { Button } from "@/components/ui/button";
import MainHeroText from "./components/MainHeroText";
import Link from "next/link";
import FullScreenNavbar from "@/components/Navigation/FullScreenNavbar";

function Home() {
  return (
    <div>
      <FullScreenNavbar/>
      <div className="h-full w-full fixed">
        <Video />
      </div>
      <div className="h-screen w-screen relative flex flex-col justify-between">
        <div>
          <MainHeroText />
        </div>
        <div className="font-[font2] overflow-hidden flex justify-center items-center gap-4">
          <Button variant="ghost" size={"lg"}>
            <Link href="/">Work</Link>
          </Button>
          <Button variant="ghost" size={"lg"}>
            <Link href="/agency">Agency</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Home;
