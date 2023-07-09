import React, { useState, useRef, useEffect } from "react";
import data from "@/data/data.json";
import Card from "./Card";
import { motion } from "framer-motion";
type Props = {};

const Courses = (props: Props) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const coursesContainerRef = useRef<HTMLDivElement | null>(null);
  const { Courses } = data;
 
 
  const scrollToNext = () => {
    if (!coursesContainerRef.current) return;
   const newScrollPosition = scrollPosition + coursesContainerRef.current.clientWidth;
    if (newScrollPosition <= coursesContainerRef.current.scrollWidth) {
      setScrollPosition(newScrollPosition);
      coursesContainerRef.current.scrollBy({left:newScrollPosition, behavior:'smooth'});
      return;
    }
    setScrollPosition(0);
    coursesContainerRef.current.scrollBy({left:-newScrollPosition, behavior:'smooth'}); 
  };
  const scrollToPrev = () => {
    if (!coursesContainerRef.current) return;
    const newScrollPosition = scrollPosition - coursesContainerRef.current.clientWidth;
   
      setScrollPosition(newScrollPosition);
      coursesContainerRef.current.scrollBy({left:newScrollPosition, behavior:'smooth'});
      
  };
  return (
    <section className="mb-[100px]">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: "easeIn" }}
        className="px-[5%]"
      >
        <h3 className="mb-3 uppercase text-[1.1rem] font-semibold text-[#c7403c]">
          {Courses.heading3}
        </h3>
        <h1 className="text-secondary text-[30px]  md:text-[42px]">{Courses.heading1}</h1>
      </motion.div>
      <div className="relative">
      <motion.div
       
        ref={coursesContainerRef}
        className="flex scrollbar-hide overflow-x-scroll md:overflow-x-hidden gap-8  px-8 mt-[100px] h-[550px] items-center pb-[50px]"
      >
        <button className="absolute hidden md:block hover:opacity-50 left-[5px] z-[5] bg-secondary text-white font-bold py-2 px-4 rounded-[6px]" onClick={scrollToPrev}>&lt;</button>
        {Courses.card.map((item, index) => (
          <Card {...item} key={index} />
        ))}
        <button className="absolute hidden md:block hover:opacity-50 right-[5px] z-[5] bg-secondary text-white font-bold py-2 px-4 rounded-[6px]" onClick={scrollToNext}>&gt;</button>
      </motion.div>
      </div>
    </section>
  );
};

export default Courses;
