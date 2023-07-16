import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
type Props = {
  image: string;
  name: string;
  title: string;
};

const ImageCard = ({ image, name, title }: Props) => {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const cardVariants: Variants = {
    initial: { width: 128, height: 380, borderRadius: 20 },
    hover: {
      width: 360,
      height: 470,
      borderRadius: 16,
      transition: {
        delayChildren: 1.35,
        staggerChildren: 0.2,
        duration: 0.65,
        ease: "easeIn",
      },
    },
  };

  const textVariants: Variants = {
    initial: { opacity: 0 },
    hover: {
      opacity: 1,
      transition: {
        duration: 0.45,
      },
    },
  };
  return (
    <div className="swiper-slide !h-[auto] !w-[auto]">
      <motion.div
        variants={cardVariants}
        initial={"initial"}
        whileHover={"hover"}
        whileTap={"hover"}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleMouseEnter}
        onTouchEnd={handleMouseLeave}
        className="relative top-0 bottom-0 cursor-pointer  flex-shrink-0 h-[380px]   overflow-hidden rounded-[16px]"
      >
        <Image src={"/" + image} alt={name} fill className="object-cover" />
        <motion.div
          transition={{ duration: 0.55, ease: "easeIn" }}
          initial={{
            background:
              "linear-gradient(0deg, rgba(117, 98, 98, 0.50) 0%, rgba(117, 98, 98, 0.50) 100%)",
          }}
          animate={
            isHovering
              ? {
                  background:
                    "linear-gradient(to top left,rgba(30,0,0,0.79), rgba(0,0,0,0))",
                }
              : {
                  background:
                    "linear-gradient(0deg, rgba(117, 98, 98, 0.50) 0%, rgba(117, 98, 98, 0.50) 100%)",
                }
          }
          className="absolute  pl-[20px] flex flex-col justify-end pb-[18px] bg-gradient-to-tl from-[rgba(30,0,0,0.79)] to-[rgba(0,0,0,0)] top-0 bottom-0 right-0 left-0 z-[50] h-full w-full"
        >
          <motion.h3
            variants={textVariants}
            initial="initial"
            animate={isHovering ? "hover" : "initial"}
            className="text-white"
          >
            {name}
          </motion.h3>
          <motion.p
            variants={textVariants}
            initial="initial"
            animate={isHovering ? "hover" : "initial"}
            className="text-[12px] leading-normal font-semibold text-[#FAC4C2] font-poppins"
          >
            {title}
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ImageCard;
