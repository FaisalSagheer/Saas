"use client";
import { Navbar } from "@/components/Navbar";
import React from "react";
import Video from "./_components/Video";
import { Button } from "@/components/ui/button";
import MainHeroText from "./_components/MainHeroText";
import Link from "next/link";

function Home() {
  return (
    <div>
      <div className="h-full w-full fixed">
        <Video />
      </div>
      <div className="h-screen w-screen relative flex flex-col justify-between">
        <div>
          <MainHeroText />
        </div>
        <div className="font-[font2] flex justify-center items-center gap-4">
          <Button variant="ghost" size={"lg"}>
            <Link href="/">Work</Link>
          </Button>
          <Button variant="ghost" size={"lg"}>
            <Link href="/">Agency</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Home;
