import React from "react";
import data from "@/data/data.json";
import Image from "next/image";
import { motion } from "framer-motion";
type Props = {};

function StudentCompanies({}: Props) {
  const { Companies } = data;
  return (
    <section id="student's-companies" className="mx-auto w-[90%] my-[65px]">
      <motion.div
        initial={{ y: "100px", opacity: 0 }}
        whileInView={{ y: "0", opacity: 1 }}
        transition={{ duration: 0.65, ease: "easeIn" }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h3 className="  mb-3 uppercase text-[1.02rem] sm:text-[1.1rem] font-semibold text-[#c7403c]">
          {Companies.heading3}
        </h3>
        <h1 className=" text-[25px] sm:text-[30px] md:text-[42px]  text-secondary leading-[1.5]">
          {Companies.heading1}
        </h1>
        <p className="opacity-[80%] text-secondary text-base min-w-[250px] w-[70%] mt-5 mx-auto">
          {Companies.para}
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.65, ease: "easeIn", delay:0.125 }}
        viewport={{ once: true }}
        className="sm:grid-cols-4 grid-cols-2 mt-10 grid gap-3 justify-center content-center w-full "
      >
        {Companies.images.map((item) => (
          <Image
            src={item}
            height={50}
            width={80}
            key={item}
            className="object-cover w-fit h-fit self-center justify-self-center"
            alt="company"
          />
        ))}
      </motion.div>
    </section>
  );
}

export default StudentCompanies;
