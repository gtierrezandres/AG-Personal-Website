import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import Colores from "@/public/colores-landing-page.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
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
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "UC San Diego",
    location: "La Jolla, CA",
    description:
      "Obtained my B.S. in Computer Engineering.",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "ByteBridge Consulting LLC",
    location: "San Diego, CA",
    description:
      "Founded my own consulting firm.",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  {
    title: "Full-Stack/ Data Engineer",
    location: "San Diego/Miami",
    description:
      "Established meaningful connections with two clients. Orchestrated the development of scalable cloud-based data architecture on AWS, using Glue and ETL pipelines with Apache Spark. Additionally, I built an internal tool webapp comprised of LLMs, a forecasting model, and digestion of Hubspot Data. My stack includes React, TypeScript, Next.js, Python, and Tailwind CSS.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Colores Coffee Roasters",
    description:
      "I worked as a full-stack developer creating this e-commerce website for a coffee roasters brand.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "TypeScript"],
    imageUrl: Colores,
    websiteUrl: "https://colores-coffee-roasters.vercel.app/",
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
    websiteUrl: "https://colores-coffee-roasters.vercel.app/",
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
    websiteUrl: "https://colores-coffee-roasters.vercel.app/",
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
  "Git",
  "Tailwind CSS",
  "Framer Motion",
  "C/C++",
  "AWS Glue",
  "Apache Airflow",
  "ETL pipelines",
  "Apache Spark",
  // "Prisma",
  // "MongoDB",
  // "Redux",
  // "GraphQL",
  // "Apollo",
  // "Express",
  "PostgreSQL",
  "Python",
  "Flask"
  // "Django",
] as const;
