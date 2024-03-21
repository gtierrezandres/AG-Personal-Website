"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Computer Engineering</span> from
        <span className='italic'> UC San Diego</span>, {" "} I delved into various 
        domains within the field, from computer vision to cybersecurity.{" "}
        Rather than opting for a traditional path, I embarked on an entrepreneurial journey,
        establishing my own consulting firm. Through this venture,
        I've delivered diverse software solutions, ranging from intricate 
        ETL pipelines to dynamic website development. 
        My proficiency spans across a versatile tech 
        stack, including <span className='font-medium'>TypeScript, Tailwind CSS, React, 
        Next.js, Python, and SQL.</span> I am currently looking for a {" "}
        <span className='font-medium'>full-time position</span> as a software engineer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I find solace in the outdoors, whether it's playing padel or tennis, surfing, or simply spending time with friends and family.
      </p>
    </motion.section>
  );
}
