"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

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
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28  sm:mb-40"
    >
      <SectionHeading>My skills, Certificates</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
      <div className="mt-5  p-6 flex flex-col sm:flex-row items-center justify-between text-white rounded bg-sky-500">
  <div className="flex-1 mb-4 sm:mb-0">
    <h2 className="text-xl font-semibold mb-2 text-skyblue">
    MongoDB Node.js Developer Path
    </h2>
    <p className="mb-4">
    Skills : MongoDB Atlas | NoSQL | Node.js 
  </p>
  <a
    className="bg-violet-500 p-2 hover:bg-violet-600 text-white  font-bold py-1 px-2 rounded text-sm"
    href="https://learn.mongodb.com/c/N7IJI9aiThyGif8Vm-FfKw"
    target="_blank"
  >
    Verify @ MongoDB
  </a>
  </div>
  <img
    src="/mongo.png"
    alt="Certification 3"
    className="w-49 h-36 object-cover rounded sm:ml-6"
  />
</div>
<div className="mt-5  p-6 flex flex-col sm:flex-row items-center justify-between text-white rounded bg-violet-700">
  <div className="flex-1 mb-4 sm:mb-0">
    <h2 className="text-xl font-semibold mb-2 text-skyblue">
   Bootcamp | Introduction to Python
    </h2>
    <p className="mb-4">
   Skills : Python | Data Structure | Algorithms
  </p>
  <a
    className="bg-blue-500 p-2 hover:bg-violet-600 text-white font-bold py-1 px-2 rounded text-sm"
    href="https://certificate.codingninjas.com/view/64aaa9bd65b88738"
    target="_blank"
  >
    Verify @ Coding Ninja
  </a>
  </div>
  <img
    src="/cn2.png"
    alt="Certification 3"
    className="w-49 h-36 object-cover rounded sm:ml-6"
  />
</div>



    </section>
  );
}