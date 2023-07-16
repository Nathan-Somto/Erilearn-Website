import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
type Props = {
  imageUrl: string;
  badge: string;
  heading: string;
  para: string;
  isOdd: boolean;
};

const AboutSection = ({ imageUrl, badge, heading, para, isOdd }: Props) => {
  return (
    <section
      className={`flex w-[90%]  lg:w-[80%] mx-auto gap-[20px] lg:min-w-[1000px] flex-col-reverse  min-h-[450px] ${
        isOdd ? "lg:flex-row" : "lg:flex-row-reverse"
      }`}
    >
      <motion.figure
        initial={isOdd ? { x: "-100%" } : { x: "100%" }}
        whileInView={{ x: "0%" }}
        transition={{ duration: 0.55, ease: "easeIn" }}
        viewport={{once:true}}
        className="relative max-w-[550px] h-[450px] flex-shrink-0 min-w-[300px] w-[80%]"
      >
        <div className="absolute top-0 left-0 overflow-hidden rounded-[32px]">
          <Image
            src={"/" + imageUrl}
            alt={badge}
            height={380}
            className="h-[380px] object-cover"
            width={480}
          />
          <div className="bg-[rgba(69,42,42,0.50)] absolute top-0 h-full w-full bottom-0 left-0 right-0 z-[2]"></div>
        </div>
        <Image
          src={"/" + imageUrl}
          alt={badge}
          height={380}
          width={480}
          className="border-[7px] h-[380px] object-cover z-[3] absolute left-[40px] top-[40px] rounded-[32px] border-solid border-[#fff]"
        />
      </motion.figure>
      <motion.div
        initial={{ opacity: 0,y:50}}
        whileInView={{ opacity: 1,y:0 }}
        transition={{ duration: 0.55, ease: "easeIn" }}
        viewport={{once:true}}
        className="space-y-[20px] mb-[40px] lg:mb-0 lg:mt-[40px]"
      >
        <p className="badge">{badge}</p>
        <h2 className="lg:text-[35px] font-bold">{heading}</h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.8 }}
          transition={{ duration: 0.55, delay: 0.68, ease: "easeIn" }}
          viewport={{once:true}}
          className="w-[80%] opacity-80"
        >
          {para}
        </motion.p>
      </motion.div>
    </section>
  );
};

export default AboutSection;
