import React, { useRef, useEffect } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import Image from "next/image";
import data from "@/data/about.json";
import AboutSection from "@/components/AboutSection";
import Steps from "@/components/Steps";
import ImageCard from "@/components/ImageCard";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
const AboutPage = () => {
  const { hero, sections, team } = data;
  const swiperRef = useRef<Swiper | null>(null);
  useEffect(() => {
    swiperRef.current = new Swiper(".swiper-container", {
      direction: "horizontal",
      spaceBetween: 20,
      speed: 600,
    });

    // Clean up Swiper instance on component unmount
    return () => {
      if (swiperRef.current) {
        swiperRef.current.destroy();
      }
    };
  }, []);

  return (
    <>
      <Head>
        <title>Erilearn | Who we are</title>
        <meta name="description" content="Discover Erilearn - Your Pathway to a Tech Career in Just 3 Months. Learn how our comprehensive courses and experienced instructors can help you transition to the tech industry successfully." />
        <meta name="keywords" content="Erilearn, tech career, 3 months, technology, courses, instructors, mission, vision" />
        <meta name="author" content="Nathan Somto" />
        <meta property="og:title" content="Erilearn - Learn about Who we are" />
        <meta property="og:description" content="Discover Erilearn - Your Pathway to a Tech Career in Just 3 Months. Learn how our comprehensive courses and experienced instructors can help you transition to the tech industry successfully." />
        <meta property="og:image" content="/laptops.png" />
        <meta property="og:url" content="https://erilearn-website.vercel.app/about" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Erilearn - Learn about Who we are" />
        <meta name="twitter:description" content="Discover Erilearn - Your Pathway to a Tech Career in Just 3 Months. Learn how our comprehensive courses and experienced instructors can help you transition to the tech industry successfully." />
        <meta name="twitter:image" content="/laptops.png" />
        <meta name="twitter:url" content="https://erilearn-website.vercel.app/about" />
      </Head>
      <div className="text-secondary">
        <header className="flex lg:flex-row overflow-x-hidden flex-col pt-[96px] lg:pt-0 items-center min-h-[calc(100vh+96px)] -mt-[96px]  w-[90%] mx-auto gap-[20px]">
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 0.65, ease: "easeIn", type:"tween" }}
            animate={{ x: "0%", opacity: 1 }}
            className="lg:w-[65%]  mb-[30px] lg:mb-0 mx-auto text-center lg:text-left flex-shrink-0 space-y-[24px]"
          >
            <p className="badge">{hero.badge}</p>
            <h1 className="lg:w-[60%] text-[45px] leading-[1.3] max-[1023px]:max-w-[320px] max-[1023px]:mx-auto w-full lg:leading-normal font-bold lg:text-[62px]">
              {hero.heading1}
            </h1>
            <div className="opacity-80 text-[1rem] lg:text-[1.1rem] space-y-5 w-full lg:w-[80%]">
              <p>{hero.para1}</p>
              <p>{hero.para2}</p>
            </div>
            <button className="primary-btn min-w-[300px] w-[50%] max-w-[300px]">
              {hero.btn}
            </button>
          </motion.div>
          <motion.figure
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.25 }}
            className="overflow-hidden rounded-[40%]"
          >
            <Image
              src={"/ima_arm.png"}
              alt="imas son"
              height={400}
              width={400}
              priority
            />
          </motion.figure>
        </header>
        <main>
          <div className="bg-[#FDF5F5] py-[100px]">
            {sections.map((item, index) => (
              <AboutSection key={item.id} {...item} isOdd={index % 2 === 0} />
            ))}
          </div>
          <Steps />
          <section id="team" className="mt-[50px] w-[90%] mx-auto">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.65,delay:0.2, ease: "easeIn" }}
            >
              <p className="badge mb-3">{team.badge}</p>
              <h2>{team.heading}</h2>
            </motion.div>
            <div className="swiper-container h-[500px] mt-[50px] w-[80vw] ">
              <div className="swiper-wrapper ">
                {team.card.map((item, index) => (
                  <ImageCard key={index + item.name} {...item} />
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default AboutPage;
