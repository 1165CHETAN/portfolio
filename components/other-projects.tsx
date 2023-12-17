"use client"
import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Other");

  return (
    <section
      id="other-projects"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28  sm:mb-40"
    >
      <SectionHeading>Other Activities</SectionHeading>

      <div className="flex flex-wrap">
        
      {/* first box of project */}
      <div className=" text-white rounded p-4 m-1 flex-1 mx-2 sm:mx-4 flex flex-col justify-between" style={{ background: 'linear-gradient(to bottom, indigo 75%, Dodgerblue 25%)' }}>
          <div className="mb-4">
            <h5 className="text-lg font-semibold mb-2">
              TopicForge
            </h5>
            <p className="text-sm">
              PHP | MongoDB | Laravel
            </p>
          </div>
       
          <a
            className="bg-indigo-500 mt-3 p-1 hover:bg-indigo-700 text-white font-bold rounded text-center text-sm"
            href="https://linkedin.com"
            target="_blank"
          >
            GitHub
          </a>
      </div>


      {/* first box of project */}
      <div className=" text-white rounded p-4 m-1 flex-1 mx-2 sm:mx-4 flex flex-col justify-between" style={{ background: 'linear-gradient(to bottom, Dodgerblue 75%, indigo 25%)' }}>
          <div className="mb-4">
            <h5 className="text-lg font-semibold mb-2">
              TopicForge
            </h5>
            <p className="text-sm">
              PHP | MongoDB | Laravel
            </p>
          </div>
         
          <a
            className="bg-indigo-500 mt-3 p-1 hover:bg-indigo-700 text-white font-bold rounded text-center text-sm"
            href="https://linkedin.com"
            target="_blank"
          >
            GitHub
          </a>
      </div>

      {/* first box of project */}
      <div className=" text-white rounded p-4 m-1 flex-1 mx-2 sm:mx-4 flex flex-col justify-between" style={{ background: 'linear-gradient(to bottom, indigo 75%, Dodgerblue 25%)' }}>
          <div className="mb-4">
            <h5 className="text-lg font-semibold mb-2">
              TopicForge
            </h5>
            <p className="text-sm">
              PHP | MongoDB | Laravel
            </p>
          </div>
       
          <a
            className="bg-indigo-500 mt-3 p-1 hover:bg-indigo-700 text-white font-bold rounded text-center text-sm"
            href="https://linkedin.com"
            target="_blank"
          >
            GitHub
          </a>
      </div>

      {/* first box of project */}
      <div className=" text-white rounded p-4 m-1 flex-1 mx-2 sm:mx-4 flex flex-col justify-between" style={{ background: 'linear-gradient(to bottom, Dodgerblue 75%, indigo 25%)' }}>
          <div className="mb-4">
            <h5 className="text-lg font-semibold mb-2">
              TopicForge
            </h5>
            <p className="text-sm">
              PHP | MongoDB | Laravel
            </p>
          </div>
          
          <a
            className="bg-indigo-500 mt-3 p-1 hover:bg-indigo-700 text-white font-bold rounded text-center text-sm"
            href="https://linkedin.com"
            target="_blank"
          >
            GitHub
          </a>
      </div>


    {/* My acheivemnets */}

      </div>
      <div className="mt-4 rounded p-4 flex flex-col sm:flex-row items-center justify-between text-white bg-gray-500">
  <div className="flex-1 mb-4 sm:mb-0">
  <h6 className="text-md font-semibold mb-2 text-skyblue">
      Cracked KPIT NOVA Hackathon 2022
    </h6>
  </div>
  
</div>

<div className="mt-3 rounded p-4 flex flex-col sm:flex-row items-center text-white justify-between bg-gray-700">
  <div className="flex-1 mb-4 sm:mb-0">
    <h6 className="text-md font-semibold mb-2 text-skyblue">
      Qualified GATE 2022 in Intrumentation Branch
      <a
    className="bg-pink-500 p-2 ml-4 hover:bg-pink-600 text-white font-bold py-1 px-2 rounded text-sm"
    href="https://linkedin.com"
    target="_blank"
  >
    View
  </a>
    </h6>
   
  
  </div>
  
</div>

    </section>
  );
}
