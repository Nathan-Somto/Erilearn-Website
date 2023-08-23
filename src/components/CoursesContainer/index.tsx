import React from "react";
import { motion } from "framer-motion";
type Props = {
  children: React.ReactNode;
};
const CoursesContainer = ({ children }: Props) => {
  return (
    <section className="w-[90%] mx-auto" id="Courses">
      <div
        className="flex items-center justify-between mb-14 h-[100px] overflow-hidden"
      >
        <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: "easeIn" }}
        >
          <h3 className="mb-3 uppercase text-[1.1rem] font-semibold text-[#c7403c]">
            Our Courses
          </h3>
          <h1 className="text-secondary text-[30px]  md:text-[42px]">
            Explore Our Career Courses
          </h1>
        </motion.div>
      </div>
      <div className="gap-[40px] justify-center min-[600px]:justify-start  items-center flex flex-wrap">
        {children}
      </div>
    </section>
  );
};

export default CoursesContainer;
