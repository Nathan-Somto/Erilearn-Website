import React from "react";
import Image from "next/image";
import data from "@/data/data.json";
import { motion } from "framer-motion";
type Props = {};

const Perks = (props: Props) => {
  const { Perks } = data;
  return (
    <section className=" max-w-[calc(3*370px)] w-[80%] mx-auto pt-[30px] pb-[50px] border-t border-solid min-h-[500px] items-center text-center lg:text-left space-y-[40px] lg:space-y-0  flex flex-col lg:gap-[10%] lg:flex-row justify-center">
      <motion.figure
        initial={{ x: "-100%",opacity:0 }}
        whileInView={{ x: "0",opacity:1 }}
        transition={{ duration: 0.65, delay: 0.2, ease:"easeIn" }}
      >
        <Image
          src={"/ima_arm.png"}
          alt={"ima's son"}
          width={375}
          height={375}
          className="rounded-[50%]"
        />
      </motion.figure>
      <motion.div
        initial={{ x: "100%", opacity:0 }}
        whileInView={{ x: "0" ,opacity:1 }}
        transition={{ duration: 0.65, delay: 0.2, ease:'easeIn' }}
        className="lg:w-[50%] flex-shrink-0"
      >
        <h1
          className={
            "text-secondary text-[30px] md:text-[42px] mb-7 leading-[60px]"
          }
        >
          {Perks.heading1}
        </h1>
        <div className="flex flex-col gap-6 text-[1.1rem] font-poppins">
          <p className="mx-auto lg:mx-0 w-[80%] opacity-80">{Perks.para1}</p>
          <p className="mx-auto lg:mx-0 w-[80%] opacity-80">{Perks.para2}</p>
          <button className="primary-btn lg:mx-0 mx-auto w-[195px]">
            {Perks.btn}
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Perks;
