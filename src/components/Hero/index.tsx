import React from "react";
import data from "@/data/data.json";
import Image from "next/image";
import { motion } from "framer-motion";
type Props = {};

const Hero = (props: Props) => {
  const { hero } = data;
  return (
    <header className="bg-gradient-to-tl overflow-hidden from-[rgba(244,137,133,0.61)] pt-32 xl:pt-0 xl:flex-row flex-col via-[#fff] to-[rgba(244,137,133,0.21)] flex w-full -mt-24  min-h-screen xl:items-center justify-center px-[5%]">
      <motion.div
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: "0%", opacity: 1 }}
        transition={{ duration: 0.75, ease: "easeIn" }}
        className="mt-[10%] text-center xl:text-left lg:mt-0"
      >
        <h1 className="text-[50px] md:text-[62px] xl:text-[72px] w-[80%] xl:w-full mx-auto text-secondary  xl:leading-[85px]">
          {hero.heading1}
          <span className="text-primary">{hero.span}</span>
        </h1>
        <p className="opacity-80 mt-6 mx-auto xl:border-l-4 border-solid border-primary pl-4 w-[80%] xl:w-[60%] text-[17px] xl:mx-0 font-medium xl:text-[20px]">
          {hero.paragraph}
        </p>
        <div className="mt-8">
          <button className="primary-btn">Enroll now</button>
          <button className="primary-btn bg-transparent hover:border-2 hover:opacity-100 text-secondary border border-solid border-gray-70 ml-8">
            Watch video
          </button>
        </div>
      </motion.div>
      <div className="relative hidden xl:block flex-shrink-0 w-[650px] mt-[50px] mr-[5%]   h-[500px]">
        <motion.figure initial={{x:-50,opacity:0}}  animate={{x:0,opacity:1}} transition={{delay:0.7, duration:0.7, ease:'easeIn'}} className="absolute flex-shrink-0 z-[5] top-[-5px] rounded-[128px] border-4 border-solid border-white overflow-hidden left-[20%]">
          <Image src={"/ope.png"} alt="staff" height={350} width={280} />
        </motion.figure>
        <motion.figcaption initial={{scale:0}} animate={{scale:1}} transition={{duration:0.7, delay:1.1}} className="absolute right-[2px] z-[6] top-[12px] bg-white text-[1.1rem] text-secondary px-8 py-5 shadow-md rounded-[32px]">
          <span className="text-primary font-semibold">{hero.tagSpan} </span>
          {hero.tagPara}
        </motion.figcaption>
        <motion.figure initial={{x:50,opacity:0}}  animate={{x:0,opacity:1}} transition={{delay:0.8, duration:0.75, ease:'easeIn'}} className="absolute flex-shrink-0 top-[100px] rounded-[134px] overflow-hidden right-0">
          <Image src={"/ima_son.png"} alt="student" height={400} width={300} />
        </motion.figure>
        <motion.figcaption initial={{scale:0}} animate={{scale:1}} transition={{duration:0.8, delay:1.2}} className="absolute right-[200px] z-[7] bottom-[70px] bg-white text-secondary px-8 py-5 shadow-md rounded-[32px]">
          <span className="text-primary font-semibold">{hero.tagSpan} </span>
          {hero.tagPara}
        </motion.figcaption>
      </div>
      <div className="xl:hidden mt-12">
        <motion.figure initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.75,duration:0.65, ease:'easeIn'}} className="relative rounded-[25%] overflow-hidden mx-auto w-[350px] h-[350px]">
          <Image src={"/taiwo.png"} className="object-cover" fill alt="taiwo" />
        </motion.figure>
      </div>
    </header>
  );
};

export default Hero;
