import React, { useState } from "react";
import { motion } from "framer-motion";
type Props = {
  courseOutline: {
    weekNumber: number;
    topic: string;
    content: string[];
  }[];
};
const CourseFaq = ({ courseOutline }: Props) => {
  const [openContent, setOpenContent] = useState(-1);
  const isContent = (index: number) => openContent === index;
  const handleFaqClick = (index: number) => {
    if (isContent(index)) {
      setOpenContent(-1);
      return;
    }
    setOpenContent(index);
  };
  return (
    <div>
      {courseOutline.map((item, index) => (
        <motion.div
          key={item.weekNumber}
          animate={
            isContent(index)
              ? {  backgroundColor: "#e2e2e380" }
              : {  backgroundColor: "transparent" }
          }
          initial={  
               {  backgroundColor: "transparent" }
          }
          transition={{duration: 0.85, ease: 'easeIn'}}
          className={`font-poppins mt-[24px] text-secondary ${
            isContent(index)
              ? "py-[20px] rounded-[12px] border border-solid px-[24px]"
              : ""
          }`}
        >
          <div className="flex border-b justify-between  pb-4">
            <div className="flex gap-[16px]">
              <motion.div
                initial={{
                  height: 0,
                  backgroundColor: "transparent",
                  width: 0,
                }}
                animate={
                  isContent(index)
                    ? { height: "100%", backgroundColor: "#F26B67", width: 4 }
                    : { height: 0, backgroundColor: "transparent", width: 0 }
                }
                transition={{ delay: 0.45, duration: 0.55, ease: "easeIn" }}
              ></motion.div>
              <div>
                <p className="text-[#F26B67] text-[14px] mb-3">
                  Module {item.weekNumber}
                </p>
                <h2 className="text-[24px] font-semibold">{item.topic}</h2>
              </div>
            </div>
            <button onClick={() => handleFaqClick(index)}>
              {!isContent(index) ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                >
                  <path
                    d="M6 7.87512L0 1.87512L1.4 0.475121L6 5.07512L10.6 0.475121L12 1.87512L6 7.87512Z"
                    fill="#373737"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                >
                  <path
                    d="M6 0.125116L12 6.12512L10.6 7.52512L6 2.92512L1.4 7.52512L0 6.12512L6 0.125116Z"
                    fill="#F26B67"
                  />
                </svg>
              )}
            </button>
          </div>
          {isContent(index) && (
            <ul className="list-disc px-[24px] space-y-4 my-12 text-[17px] text-[#373737]">
              {item.content.map((item, index) => (
                <li key={item + index}>{item}</li>
              ))}
            </ul>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default CourseFaq;
