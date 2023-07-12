import React from "react";
import data from "@/data/data.json";
import { motion } from "framer-motion";
import Card from "./Card";
type Props = {};

const WhyUs = (props: Props) => {
  const { WhyUs } = data;
  return (
  
    <section className="mb-[100px] " id="whyUs">
      <motion.div
        initial={{y:50, opacity:0}}
        whileInView={{y:0, opacity:1}}
        transition={{duration:0.65, ease:"easeIn"}}
       className="text-center">
        <h3 className="  mb-3 uppercase text-[1.1rem] font-semibold text-[#c7403c]">{WhyUs.heading3}</h3>
        <h1 className=" text-[30px] md:text-[42px]  text-secondary">{WhyUs.heading1}</h1>
      </motion.div>
      <div className="flex gap-[30px] items-center justify-center flex-wrap mt-[80px]">
        {WhyUs.Card.map((item, index) => (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            transition={{ delay: (index * 0.03) + 0.5, duration: 0.65 }}
            whileInView={{ scale: 1, opacity: 1 }}
            key={index}
          >
            <Card {...item} index={index}  />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyUs;
