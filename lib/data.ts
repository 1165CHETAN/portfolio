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
    title: "10th (SSC), Maharashtra State Board",
    location: "Percentage: 95.4%",
    description:
    " Maharshi Prashala Yashwantnagar, Solapur",
    icon: React.createElement(LuPencil),
    date: "2017",
  },
  {
    title: "12th (HSC), Maharashtra State Board",
    location: "Percentage: 72%",
    description:
      "A.D. Joshi Junior College, Solapur",
    icon: React.createElement(LuSchool),
    date: "2019",
  },
  {
    title: "B.Tech (Electronics & Telecommunication Engg)",
    location: "CGPA: 8.96",
    description:
      "Rajarshri Shahu College of Engineering, Pune",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2023",
  },
  {
    title: "Full-Stack Developer",
    location: "",
    description:
      "Started learning new tech stack that solving real world problems. I have consistently upskilled myself to navigate the ever-evolving landscape of development.  I'm open to full-time opportunities.",
    icon: React.createElement(LuSettings2),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "TechBytes",
    description:
      "Developed web blog application using Astro, reducing loading times through static site generation.",
    tags: ["Astro", "MarkDown", "GitHub", "Tailwind", "Vercel"],
    imageUrl: corpcommentImg,
    viewLink: "https://techbytes-chetan.netlify.app/",
    videoLink: "https://www.canva.com/design/DAF22qNeMOU/40FU4w3RRtXRrCfMzgiHwA/watch?utm_content=DAF22qNeMOU&utm_campaign=designshare&utm_medium=link&utm_source=editor",
    githubLink: "https://github.com/1165CHETAN/TechBytes",
  },
  {
    title: "WeaveHub",
    description:
      "A web chat application that has real-time users, which connects seamlessly!!",
    tags: ["Clerk", "Next.js", "MongoDB", "Tailwind", "Vercel"],
    imageUrl: rmtdevImg,
    viewLink: "https://weavehub-chetan.vercel.app/",
    videoLink: "https://www.canva.com/design/DAFzeKzgcmM/9qZYKqJ71iccpnmVwJ7fZQ/watch?utm_content=DAFzeKzgcmM&utm_campaign=designshare&utm_medium=link&utm_source=editor",
    githubLink: "https://github.com/1165CHETAN/THREADS-app",
  },
  {
    title: "SecureConnect",
    description:
      "Developed SecureConnect, an authentication platform with JWT and HTTP-only cookie.",
    tags: ["Postman", "Bootstrap", "Jwt", "Mongodb", "Vite"],
    imageUrl: wordanalyticsImg,
    viewLink: "https://www.canva.com/design/DAF34_IZKys/_zmjEEDJ7HDQ2Pfc1Q74EQ/watch?utm_content=DAF34_IZKys&utm_campaign=designshare&utm_medium=link&utm_source=editor",
    videoLink: "https://www.canva.com/design/DAF34_IZKys/_zmjEEDJ7HDQ2Pfc1Q74EQ/watch?utm_content=DAF34_IZKys&utm_campaign=designshare&utm_medium=link&utm_source=editor",
    githubLink: "https://github.com/1165CHETAN/SecureConnect-",
  },
] as const;


export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "Python",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "MongoDB",
  "Vite",
  "Express.js",
  "Bootstrap",
  "Tailwind CSS",
  
] as const;
