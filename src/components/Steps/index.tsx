import React from "react";
import data from "@/data/data.json";
import Image from "next/image";
import { motion } from "framer-motion";
type Props = {};

const Steps = (props: Props) => {
  const { Steps } = data;
  return (
    <section id="Steps" className="mt-[100px] pb-[35px] px-[5%]">
      <motion.div
        initial={{ x: "-100%" }}
        whileInView={{ x: "0%" }}
        transition={{ duration: 0.65, ease: "easeIn" }}
      >
        <h3 className="mb-3 uppercase text-[1.1rem] font-semibold text-[#c7403c]">
          {Steps.heading3}
        </h3>
        <h1 className=" text-[30px] md:text-[42px]  text-secondary">
          {Steps.heading1}
        </h1>
      </motion.div>
      <div className="mt-[50px] flex lg:items-center  flex-col lg:flex-row">
        <div className="mb-[40px] lg:mb-0">
          {Steps.Step.map((item, index) => (
            <div
              key={index}
              className="flex gap-[20px]  lg:gap-[40px] items-start  "
            >
              <div>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.25 + 0.25,
                    ease: "easeIn",
                  }}
                  className="text-[#C7403C] font-bold  lg:text-[14px] mb-2 pt-2"
                >
                  0{index + 1}
                </motion.p>
                {Steps.Step.length - 1 !== index && (
                  <motion.div
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    transition={{ duration: 0.55, delay: index * 0.03 + 0.25 }}
                    className="w-[1px] mx-auto h-[100px] bg-[#F48885]"
                  ></motion.div>
                )}
              </div>
              <motion.div  transition={{
                    duration: 0.55,
                    delay: (index * 0.15) + 0.25,
                    ease: "easeIn",
                  }} initial={{opacity:0.5}} whileInView={{opacity:1}} className="w-[80%]">
                <h2 className="text-[20px] text-secondary font-semibold mb-2 p-0">
                  {item.heading2}
                </h2>
                <p className="w-[80%] block text-[#5D5D61] font-poppins">
                  {item.para}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
        <motion.figure
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.55, ease: "easeIn" ,delay:0.2 }}
          className="h-[390px] relative overflow-hidden min-w-[300px] w-[80%] max-w-[400px] rounded-t-[90px] rounded-b-[120px]"
        >
          <Image
            src="/taiwo_laptop.png"
            className="object-cover"
            fill
            alt="taiwo and timi"
          />
        </motion.figure>
      </div>
    </section>
  );
};

export default Steps;
