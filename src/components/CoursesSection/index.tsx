import React from "react";
import data from "@/data/data.json";
import Card from "../CoursesCard";
import Link from 'next/link';
import { motion } from "framer-motion";
type Props = {};

const Courses = (props: Props) => {
  const { Courses } = data;
  return (
    <section className="mb-[100px]" id="Courses">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: "easeIn" }}
        className="px-[5%] flex items-center justify-between"
      >
        <div>
        <h3 className="mb-3 uppercase text-[1.02rem] sm:text-[1.1rem] font-semibold text-[#c7403c]">
          {Courses.heading3}
        </h3>
        <h1 className="text-secondary text-[25px] sm:text-[30px]  md:text-[42px]">
          {Courses.heading1}
        </h1>
        </div>
        <Link href='courses' className="text-[#c7403c] text-[1rem] sm:text-[1.08rem] font-semibold self-end">See All</Link>
      </motion.div>
      <div className="relative">
        <motion.div
          className="flex flex-wrap justify-center w-full gap-[40px]  px-8 mt-[100px]  items-center pb-[50px]"
        >
         
          {Courses.card.slice(0,3).map((item, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: (index * 0.35) + 0.15, duration: 0.55 }}
            >
              <Card {...item} />
            </motion.div>
          ))}
          
        </motion.div>
      </div>
    </section>
  );
};

export default Courses;
