import React, { useState } from "react";
import data from "@/data/data.json";
import { motion } from "framer-motion";
type Props = {};

const Faqs = (props: Props) => {
  const [active, setActive] = useState(-1);
  const { Faq } = data;
  const heading2 = Faq.heading2.split(" ");
  return (
    <section
      className="mt-[100px] pt-[50px] overflow-y-hidden pb-[30px] mx-[10%]"
      id="Faqs"
    >
      <motion.h1
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.65, ease: "easeIn" }}
        className="uppercase text-[30px] md:text-[42px] mb-[40px] text-secondary text-center"
      >
        {Faq.heading1}
      </motion.h1>
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        whileInView={{ y: "0%", opacity: 1 }}
        transition={{ duration: 0.65, ease: "easeIn" }}
        className="mb-[50px]"
      >
        <h3 className="text-primary font-bold mb-4 text-[18px]">
          {Faq.heading3}
        </h3>
        <h2 className="font-bold mb-3 overflow-hidden">
          {heading2[0]}{" "}
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.55, delay: 0.65, ease: "easeIn" }}
            className="text-primary "
          >
            {Faq.heading2Span}
          </motion.span>{" "}
          {heading2[1]}
        </h2>
        <p className="font-poppins text-[1.1rem] opacity-80">{Faq.para}</p>
      </motion.div>
      <div>
        {Faq.FAQS.map((item, index) => (
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{
              duration: 0.65,
              ease: "easeIn",
              delay: index * 0.05 + 0.25,
            }}
            key={index}
            className="mb-4 py-6 px-4 border border-solid border-[#b9b8b8] rounded-md text-[#5D5D61]"
          >
            <div
              onClick={() => {
                if (active === index) {
                  setActive(-1);
                  return;
                }
                setActive(index);
              }}
              className=" cursor-pointer flex justify-between items-center"
            >
              {" "}
              <h3 className="text-[18px] md:text-[24px]">
                {item.question}
              </h3>{" "}
              {active === index ? (
                <div className="text-[24px] rotate-[360deg]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                  >
                    <path
                      d="M20.2803 9.75014L12.3373 17.6744C12.1449 17.8663 11.8333 17.866 11.6413 17.6735L10.946 16.9767C10.7541 16.7842 10.7544 16.4726 10.9469 16.2806L18.8898 8.35638C19.0822 8.1644 19.3939 8.16477 19.5859 8.3572L20.2811 9.05408C20.4731 9.24652 20.4727 9.55816 20.2803 9.75014Z"
                      fill="#373737"
                    />
                    <path
                      d="M5.12526 8.33989L12.7729 16.0056C12.9648 16.198 12.9645 16.5096 12.772 16.7016L12.0752 17.3969C11.8827 17.5888 11.5711 17.5885 11.3791 17.396L3.7315 9.73036C3.53952 9.53793 3.53989 9.22629 3.73233 9.03431L4.42921 8.33907C4.62164 8.14708 4.93328 8.14745 5.12526 8.33989Z"
                      fill="#373737"
                    />
                  </svg>
                </div>
              ) : (
                <div className="text-[24px] rotate-[270deg]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                  >
                    <path
                      d="M20.2803 9.75014L12.3373 17.6744C12.1449 17.8663 11.8333 17.866 11.6413 17.6735L10.946 16.9767C10.7541 16.7842 10.7544 16.4726 10.9469 16.2806L18.8898 8.35638C19.0822 8.1644 19.3939 8.16477 19.5859 8.3572L20.2811 9.05408C20.4731 9.24652 20.4727 9.55816 20.2803 9.75014Z"
                      fill="#373737"
                    />
                    <path
                      d="M5.12526 8.33989L12.7729 16.0056C12.9648 16.198 12.9645 16.5096 12.772 16.7016L12.0752 17.3969C11.8827 17.5888 11.5711 17.5885 11.3791 17.396L3.7315 9.73036C3.53952 9.53793 3.53989 9.22629 3.73233 9.03431L4.42921 8.33907C4.62164 8.14708 4.93328 8.14745 5.12526 8.33989Z"
                      fill="#373737"
                    />
                  </svg>
                </div>
              )}
            </div>
            {active === index && (
              <div className="mt-4">
                <p>{item.answer}</p>
              </div>
            )}
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: "easeIn" }}
        className="text-secondary mt-12"
      >
        <h2>{Faq.bottom.heading2}</h2>
        <p className="opacity-80 w-[80%] mb-3 mt-6">{Faq.bottom.para}</p>
        <motion.button
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.45, delay: 0.45 }}
          onClick={() => window.location.href = 'contact'}
          className="primary-btn-outline font-semibold"
        >
          {Faq.bottom.btn}
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Faqs;
