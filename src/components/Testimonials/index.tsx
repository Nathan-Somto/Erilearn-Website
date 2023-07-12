import React, { useState, useEffect } from "react";
import data from "@/data/data.json";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
type Props = {};

const Testimonials = (props: Props) => {
  const [currTestimonial, setCurrTestimonial] = useState(0);
  const { testimonials } = data;
  const N = testimonials.Card.length;
  const handleButtonClick = (index: number) => {
    setCurrTestimonial(index);
  };
  const handleNextArrowClick = () => {
    setCurrTestimonial((prevState) => (prevState + 1) % N);
  };
  const handlePrevArrowClick = () => {
    setCurrTestimonial((prevState) => (prevState - 1 + N) % N);
  };
  return (
    <section
      id="testimonials"
      className="mt-[100px] mx-[10%] flex pt-[50px] pb-[75px] w-full  flex-col"
    >
      <motion.div
        initial={{ x: "-100%", opacity: 0 }}
        whileInView={{ x: "0%", opacity: 1 }}
        transition={{ duration: 0.65, ease: "easeIn" }}
      >
        <h3 className="  mb-3 uppercase text-[1.1rem] font-semibold text-[#c7403c]">
          {testimonials.heading3}
        </h3>
        <h1 className=" text-[30px] md:text-[42px]  text-secondary">
          {testimonials.heading1}
        </h1>
      </motion.div>
      <div className="lg:flex mt-[60px] space-y-[80px] lg:space-y-0 lg:items-center lg:gap-[10%]  ">
        <motion.figure
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: [0,0,0,0,0,1] }}
          transition={{ duration: 0.65, ease: "easeIn" }}
          className="rounded-[40px] flex-shrink-0 w-[80%]  max-w-[500px] h-[320px] relative overflow-hidden"
        >
          <Image
            src={"/timi_sitting.png"}
            alt="timi sitting"
            fill
            className="object-cover"
          />
          <figcaption className="h-full w-full bg-[#3D3C3C66] text-white font-medium absolute top-0 bottom-0 left-0 right-0 z-[5] grid place-items-center ">
            <div className="space-y-3 text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="49"
                height="48"
                viewBox="0 0 49 48"
                fill="none"
                className="hover:scale-110 ease-out duration-300 transition-all mx-auto cursor-pointer"
              >
                <path
                  d="M24.5 44C35.546 44 44.5 35.046 44.5 24C44.5 12.954 35.546 4 24.5 4C13.454 4 4.5 12.954 4.5 24C4.5 35.046 13.454 44 24.5 44Z"
                  stroke="#FEFEFE"
                  strokeWidth="4"
                  strokeLinejoin="round"
                />
                <path
                  d="M20.5 23.9998V17.0718L26.5 20.5358L32.5 23.9998L26.5 27.4638L20.5 30.9278V23.9998Z"
                  stroke="#FEFEFE"
                  strokeWidth="4"
                  strokeLinejoin="round"
                />
              </svg>
              <p>Watch Video</p>
            </div>
          </figcaption>
        </motion.figure>
        <div className="flex flex-col lg:w-[500px] w-[80%] flex-shrink-0 overflow-x-hidden">
          <AnimatePresence mode="wait">
            {testimonials.Card.map(
              (item, index) =>
                currTestimonial === index && (
                  <motion.div
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "-100%" }}
                    transition={{ duration: 0.55, ease: "easeIn" }}
                    className="  mb-[70px] text-secondary space-y-4 "
                    key={item.name + index}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="60"
                      height="60"
                      viewBox="0 0 60 60"
                      fill="none"
                    >
                      <path
                        d="M6 26H22C23.0609 26 24.0783 25.5786 24.8284 24.8284C25.5786 24.0783 26 23.0609 26 22V10C26 8.93913 25.5786 7.92172 24.8284 7.17157C24.0783 6.42143 23.0609 6 22 6H10C8.93913 6 7.92172 6.42143 7.17157 7.17157C6.42143 7.92172 6 8.93913 6 10V26ZM6 26V40C6 43.713 7.475 47.274 10.1005 49.8995C12.726 52.525 16.287 54 20 54M34 26H50C51.0609 26 52.0783 25.5786 52.8284 24.8284C53.5786 24.0783 54 23.0609 54 22V10C54 8.93913 53.5786 7.92172 52.8284 7.17157C52.0783 6.42143 51.0609 6 50 6H38C36.9391 6 35.9217 6.42143 35.1716 7.17157C34.4214 7.92172 34 8.93913 34 10V26ZM34 26V40C34 43.713 35.475 47.274 38.1005 49.8995C40.726 52.525 44.287 54 48 54"
                        stroke="#F7A6A4"
                      />
                    </svg>
                    <p className="text-[24px] font-medium font-poppins ">
                      {item.testimonial}
                    </p>
                    <div className="flex items-center gap-4  border-l-[6px] rounded-[3px] pl-3 border-primary border-solid">
                      <Image
                        src={"/" + item.avatar}
                        alt={item.name}
                        height={50}
                        width={50}
                        className="rounded-[50%] w-[50px] h-[50px]"
                      />
                      <p className="font-medium font-poppins">{item.name}</p>
                    </div>
                  </motion.div>
                )
            )}
          </AnimatePresence>
          {/* Pagination Buttons */}
          <div className="flex items-center justify-between">
            <div className="flex gap-4 items-center">
              {testimonials.Card.map((_, index) => (
                <button
                  onClick={() => handleButtonClick(index)}
                  key={index}
                  className={`h-[12px] w-[12px] 
                  rounded-[50%] border border-solid ${
                    currTestimonial === index
                      ? "bg-primary"
                      : "bg-transparent opacity-50 "
                  } transition-all ease-in duration-250 delay-75 border-primary`}
                ></button>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <button onClick={handlePrevArrowClick} className="hover:opacity-50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M8.57146 7.42529L4.00004 11.999L8.57146 16.5716M18.8572 12.0002H4.00004"
                    stroke="rgb(239,77,72)"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button onClick={handleNextArrowClick} className="hover:opacity-50 rotate-[-180deg]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M8.57146 7.42529L4.00004 11.999L8.57146 16.5716M18.8572 12.0002H4.00004"
                    stroke="rgb(239, 77, 72 )"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
