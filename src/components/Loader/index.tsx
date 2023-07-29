import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";

const Loader = () => {
  const Router = useRouter()
  return (
    <motion.div
      initial={{ height: "100%" }}
      animate={{ height: "0%" }}
      transition={{ delay: 3, duration: 0.8 }}
      onAnimationComplete={() => Router.replace('/home')}
      className="h-full fixed grid place-items-center top-0 bottom-0 left-0 right-0 w-full z-[500000] bg-white"
    >
      <motion.div
        initial={{ scale: 1, opacity: 1 }}
        animate={{ scale: 0, opacity: 0 }}
        transition={{ duration: 0.8, delay: 2.45 }}
        className="flex gap-1 items-center h-[100px] w-full justify-center overflow-hidden"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: [ 0.5, 1, 1.1, 1.5, 1.1, 1] }}
          transition={{
            duration: 1.35,
            ease: [0.23, 0.41, 0.5, 0.31],
          }}
        >
          <Image
            alt="Erilearn Logo"
            className="h-[60px] w-[60px]"
            priority
            src={"/logo.svg"}
            width={60}
            height={60}
          />
        </motion.div>
        <motion.p
          initial={{ y: 150, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.15, duration: 0.65, ease: "easeInOut" }}
          className="text-[2.5rem] font-medium font-poppins text-[#373737]"
        >
          Erilearn
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default Loader;
