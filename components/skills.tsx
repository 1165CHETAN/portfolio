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
      <div className="mt-6 border p-6 flex flex-col sm:flex-row items-center justify-between rounded-lg bg-rose-500">
  <div className="flex-1 mb-4 sm:mb-0">
    <h2 className="text-2xl font-semibold mb-2 text-skyblue">
      Certifications 3
    </h2>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero
      dignissimos possimus temporibus ipsa nam reiciendis deleniti
      laudantium, velit fugiat fuga!
    </p>
  </div>
  <img
    src="/mongo.png"
    alt="Certification 3"
    className="w-49 h-36 object-cover rounded sm:ml-6"
  />
</div>

    </section>
  );
}