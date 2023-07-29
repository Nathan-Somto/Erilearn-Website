import React from "react";
import data from "@/data/data.json";
import Image from 'next/image';
import { motion } from "framer-motion";
import { handleEnrollClick } from "@/utils";
type Props = {};

const Hero = (props: Props) => {
  const { hero } = data;
  return (
    <header className="bg-gradient-to-tl overflow-hidden from-[rgba(244,137,133,0.61)] pt-32 pb-20 xl:pb-0 xl:pt-0 xl:flex-row flex-col via-[#fff] to-[rgba(244,137,133,0.21)] flex w-full -mt-24  min-h-screen xl:items-center justify-center px-[5%]">
      <motion.div
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: "0%", opacity: 1 }}
        transition={{ duration: 0.75, ease: "easeIn" }}
        className="mt-[10%] text-center lg:text-left lg:mt-0"
      >
        <h1 className="text-[50px] md:text-[62px] xl:text-[72px] w-[80%] lg:mx-0 max-w-[600px]  xl:w-full mx-auto text-secondary leading-[70px] md:leading-[78px]  xl:leading-[85px]">
          {hero.heading1}
          <span className="text-primary">{hero.span}</span>
        </h1>
        <p className="opacity-80 mt-6 mx-auto lg:border-l-4 border-solid min-w-[250px] border-primary pl-4 w-[80%] lg:w-[60%] text-[17px] lg:mx-0 font-medium xl:text-[20px]">
          {hero.paragraph}
        </p>
        <div className="mt-8 flex flex-col gap-[12px] max-w-[500px] mx-auto justify-center items-center lg:max-w-full lg:justify-start lg:flex-row">
          <button className="primary-btn w-[225px] " onClick={handleEnrollClick}>Enroll now</button>
          <button className="primary-btn bg-transparent rounded-[8px]  w-[225px] text-[#3E3D3D] border-2 flex items-center gap-2 border-solid border-[#CFCFD1] ">
            <span>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 49 48"
                fill="none"
                className="hover:scale-110 ease-out duration-300 transition-all mx-auto cursor-pointer"
              >
                <path
                  d="M24.5 44C35.546 44 44.5 35.046 44.5 24C44.5 12.954 35.546 4 24.5 4C13.454 4 4.5 12.954 4.5 24C4.5 35.046 13.454 44 24.5 44Z"
                  stroke="#3E3D3D"
                  strokeWidth="4"
                  strokeLinejoin="round"
                />
                <path
                  d="M20.5 23.9998V17.0718L26.5 20.5358L32.5 23.9998L26.5 27.4638L20.5 30.9278V23.9998Z"
                  stroke="#3E3D3D"
                  strokeWidth="4"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span>

            Watch video
            </span>
          </button>
        </div>
      </motion.div>
      <div className="relative hidden xl:block flex-shrink-0 w-[650px] mt-[50px] mr-[5%]   h-[500px]">
        <motion.figure
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.7, ease: "easeIn" }}
          className="absolute flex-shrink-0 z-[5] top-[-5px] rounded-[128px] border-4 border-solid border-white overflow-hidden left-[20%]"
        >
          <Image src={"/ope.png"} priority alt="staff" height={350} width={280} className="object-cover h-[350px]" />
        </motion.figure>
        <motion.figcaption
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.7, delay: 1.1 }}
          className="absolute right-[2px] z-[6] top-[12px] bg-white text-[1.1rem] text-secondary px-8 py-5 shadow-md rounded-[32px]"
        >
          <span className="text-primary font-semibold">{hero.tagSpan} </span>
          {hero.tagPara}
        </motion.figcaption>
        <motion.figure
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.75, ease: "easeIn" }}
          className="absolute flex-shrink-0 top-[100px] rounded-[134px] overflow-hidden right-0"
        >
          <Image
            src={"/ima_son_chin.png"}
            alt="student"
            height={400}
            priority
            width={300}
            className="h-[400px] object-cover"
          />
        </motion.figure>
        <motion.figcaption
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute right-[200px] z-[7] bottom-[70px] bg-white text-secondary px-8 py-5 shadow-md rounded-[32px]"
        >
          <span className="text-primary font-semibold">{hero.tagSpan} </span>
          {hero.tagPara}
        </motion.figcaption>
      </div>
      <div className="xl:hidden mt-12">
        <motion.figure
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.75, duration: 0.65, ease: "easeIn" }}
          className="relative rounded-[25%] lg:w-full lg:rounded-[8px] overflow-hidden mx-auto lg:mx-0 w-[350px] h-[350px]"
        >
          <Image src={"/ima_arm.png"} className="object-cover" fill priority alt="taiwo" />
        </motion.figure>
      </div>
    </header>
  );
};

export default Hero;
