'use client'
import React from "react";

const Expertise = () => {
  return (
    <>
      <div className="mt-90 font-[font1] text-xl font-semibold">
        <div className="grid grid-cols-2 pl-[10%] lg:pl-[16%]">
          <div>
            <h3 className="text-xl font-semibold">Expertise</h3>
          </div>
          <div className="lg:pr-[38%]">
            <ul>
              <li>Strategy</li>
              <li>Adverstising</li>
              <li>Branding</li>
              <li>Design</li>
              <li>Content</li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto gap-10 lg:gap-20 py-40 lg:px-0 px-10">
          <p>
            Our Work_ Born in curiosity, raised by dedication and fed with a
            steady diet of creativity.
          </p>
          <p className="whitespace-break-spaces">
            Our Creative_ Simmering in an environment where talent can come to a
            full boil. Encouraged to become the best versions of ourselves.
          </p>
          <p>
            Our Culture_ We’re open to each other. Period. The team works
            together to create a space that makes us proud.
          </p>
        </div>
      </div>
    </>
  );
};

export default Expertise;
