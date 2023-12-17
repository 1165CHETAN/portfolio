import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuFile, LuFileImage, LuGraduationCap, LuInfo, LuPencil, LuSchool, LuSchool2, LuSettings, LuSettings2 } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Education",
    hash: "#experience",
  },
  {
    name: "Other",
    hash: "#other-projects",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "10th (SSC), Maharahstra State Board",
    location: "Percentage: 95.4%",
    description:
    " Maharshi Prashala Yashwantnagar, Solapur",
    icon: React.createElement(LuPencil),
    date: "2017",
  },
  {
    title: "12th (HSC), Maharahstra State Board",
    location: "Percentage: 72%",
    description:
      "A.D. Joshi Junior College, Solapur",
    icon: React.createElement(LuSchool),
    date: "2019",
  },
  {
    title: "B.Tech (Electronics & Telecommunication Engg)",
    location: "CGPA: 9.1",
    description:
      "Rajarshri Shahu College of Engineering, Pune",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2023",
  },
  {
    title: "Full-Stack Developer",
    location: "",
    description:
      "Driven full-stack developer with a focus on real-world impact through coding. Through a portfolio of projects that tackle tangible challenges and engage users authentically, I have consistently upskilled myself to navigate the ever-evolving landscape of development. I'm open to full-time opportunities.",
    icon: React.createElement(LuSettings2),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "WeaveHub",
    description:
      " - I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["Clerk", "Next.js", "MongoDB", "Tailwind", "Vercel"],
    imageUrl: corpcommentImg,
  },
  {
    title: "TechBytes",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["Astro", "MarkDown", "GitHub", "Tailwind", "Vercel"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Quickgist",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["RapidAPI", "React", "Redux kit", "Tailwind", "Vercel"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "Authentication",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
  
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  
] as const;
