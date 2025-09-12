import { WorkContent } from "@/app/constant";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Link } from "lucide-react";
import React, { useRef } from "react";

function ProjectCard() {
  //   gsap.registerPlugin(ScrollTrigger);
  //   const cont = useRef(null);
  //   useGSAP(
  //     () => {
  //       const stickyCards = document.querySelectorAll(".stickyCard");
  //       stickyCards.forEach((card, index) => {
  //         if (index < stickyCards.length - 1) {
  //           ScrollTrigger.create({
  //             trigger: card,
  //             start: "top top",
  //             endTrigger: stickyCards[stickyCards.length - 1],
  //             end: "center center",
  //             pin: true,
  //             pinSpacing: false,
  //             markers:true
  //           });
  //         }
  // if (index < stickyCards.length - 1) {
  //   ScrollTrigger.create({
  //     trigger: stickyCards[index + 1],
  //     start: "top top",
  //     end: "top bottom",
  //     onUpdate: (self) => {
  //       const progress = self.progress;
  //       const scale = 1 - progress * 0.25;
  //       const rotation = (index % 2 === 0 ? 5 : -5) * progress;
  //       const afterOpacity = progress;
  //       gsap.set(card, {
  //         scale: scale,
  //         rotation: rotation,
  //         opacity:afterOpacity
  //       });
  //     },
  //   });
  // }
  //   });
  // },
  // { scope: cont }
  //   );
  return (
    <div
      className="w-full h-full flex justify-center flex-col items-center transition-all"
      //   ref={cont}
    >
      {WorkContent.map((WorkContent, index) => (
        <div className="-z-10 stickyCard sticky -top-80" key={index}>
          <div className="w-full h-full gap-3 will-change-transform">
            <img
              src={WorkContent.Img1}
              className="w-[100vw] rounded-4xl"
              alt="/"
            />
            <span className="group-hover:opacity-100 absolute bottom-0 left-0 h-full w-full font-[font2] text-center flex items-center justify-center bg-black/40">
              <h2 className="transition-all text-7xl text-white border-4 border-white rounded-full py-2 px-6 uppercase">
                <Link>View Project</Link>
              </h2>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectCard;
