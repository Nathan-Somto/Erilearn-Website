import React from "react";
import CoursesData from "@/data/course.json";
import Image from "next/image";
import CourseFaq from "@/components/CourseFaq";
import Head from "next/head";
import Testimonials from "@/components/Testimonials";
import Faqs from "@/components/Faqs";
import YoutubeVideo from "@/components/YoutubeVideo";
import { motion } from "framer-motion";
import { handleEnrollClick } from "@/utils";
import { GetStaticProps } from "next";
type Props = {
  course: dataProps<(typeof CoursesData.courses)[0]>
};
type dataProps<T> = {
  [P in keyof T]: T[P];
};
const CoursePage = ({course: data}: Props) => {
  return (
    <>
      <Head>
        <title>Erilearn - {data.courseName}</title>
        <meta name="description" content={data.meta_description}/>
        <meta name="keywords" content={data.meta_keywords} />
      </Head>
      <div className="">
        <header className="flex  flex-col  border-b-[#B7B7B9] border-b pb-[20px] justify-between  w-[90%] mx-auto space-y-[50px] lg:space-y-0  lg:flex-row  items-center min-h-screen">
          <div className="space-y-[32px] max-w-[900px]">
            <p className="badge">level {data.id}</p>
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.65, ease: "easeIn", delay: 0.34 }}
              className="text-[40px] leading-[1.3] md:text-[45px] max-w-[500px] lg:leading-[1.4] lg:text-[52px]"
            >
              {data.courseName}
            </motion.h1>
            <p className="lg:w-[80%] w-[90%] text-[#5D5D61] leading-[26px] font-poppins opacity-80">
              {data.description.split("\n").map((line, index) => (
                <motion.span
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.65,
                    delay: (index + 1) * 0.13 + 0.65,
                  }}
                  viewport={{ once: true }}
                  key={index}
                  className="block"
                >
                  {line}
                  <br />
                </motion.span>
              ))}
            </p>
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.65, delay: 0.95 }}
              viewport={{ once: true }}
              className="primary-btn w-[300px]"
            >
              Enroll Now
            </motion.button>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.65, delay: 0.15 }}
              viewport={{ once: true }}
              className="space-y-4 w-[80%] font-poppins border-t-[#B7B7B9] border-solid border-t !mt-[40px] pt-[32px]"
            >
              <p className="text-secondary text-[18px]">Your instructor</p>
              <div className="flex items-center gap-[20px]">
                <Image
                  src={"/" + data.avatar}
                  alt={"instructor avatar"}
                  height={72}
                  width={72}
                  className="rounded-[50%] w-[72px] h-[72px] object-cover"
                />
                <div className="text-[#373737]">
                  <p className="text-[20px] font-semibold mb-2">
                    {data.instructor}
                  </p>
                  <p>
                    works at{" "}
                    <span className="underline text-primary">
                      {data.workedAt}
                    </span>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            whileInView={{ x: "0%", opacity: 1 }}
            transition={{ duration: 0.65, delay: 0.55 }}
            viewport={{ once: true }}
            className="max-w-[400px] w-[80%] min-w-[300px] relative flex-shrink-0 h-[490px] self-start lg:!my-[5%] space-y-[15px] p-6 rounded-xl border-[#B7B7B9] border"
          >
            <p className="badge">Get Started</p>
            <p>{data.productCard.price}</p>
            <h3>{data.courseName}</h3>
            <button className="primary-btn-outline w-full " onClick={handleEnrollClick}>Enroll Now</button>
            <div className="grid content-center  grid-cols-2 text-[#342423] h-[150px]  text-[14px] gap-x-[50px] font-poppins gap-y-[20px]  border-t !mt-[30px] pt-[20px]  border-t-[#B7B7B9]">
              <p>
                <span className="text-[#373737] font-semibold text-[16px]">
                  Duration:{" "}
                </span>
                {data.productCard.duration}
              </p>
              <p>
                <span className="text-[#373737] font-semibold text-[16px]">
                  Course:{" "}
                </span>
                {data.productCard.course}
              </p>
              <p>
                <span className="text-[#373737] font-semibold text-[16px]">
                  Project:{" "}
                </span>
                {data.productCard.project}
              </p>
              <p>
                <span className="text-[#373737] font-semibold text-[16px]">
                  Level:{" "}
                </span>
                {data.productCard.level}
              </p>
            </div>
            <p
              role="link"
              className="underline absolute bottom-4 left-0 right-0 mx-auto text-[#373737] text-center font-semibold"
            >
              Download Curriculum
            </p>
          </motion.div>
        </header>
        <main>
          <section className=" space-y-[24px] pt-[50px] mb-[150px]  w-[90%] mx-auto">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.65, delay: 0.2, ease: "easeIn" }}
              viewport={{ once: true }}
              className="space-y-[24px]"
            >
              <p className="badge">Course Overview</p>
              <h2 className="font-bold leading-[1.3] text-[25px] sm:text-[30px] text-[#373737]">
                What&apos;s {data.courseName} ?
              </h2>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.65,
                delay: 0.55,
              }}
              viewport={{ once: true }}
              className="w-[80%] opacity-80 text-[#5D5D61] !mb-[60px] leading-[26px] font-poppins"
            >
              {data.courseOverview}
            </motion.p>
            {/* Youtube video embed comes here */}
            <YoutubeVideo
              src={data.videoLink}
              width={"100%"}
              height={"468px"}
            />
          </section>
          <section className="w-[90%] mx-auto">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.65, delay: 0.2, ease: "easeIn" }}
              viewport={{ once: true }}
              className="px-[16px] text-[#373737]"
            >
              <p className="badge">Curriculum</p>
              <h2 className="mb-[70px] mt-[25px] ">Our Learning Structure</h2>
            </motion.div>
            {/* Course curriculum comes here */}
            <CourseFaq courseOutline={data.weeks} />
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.65, delay: 0.95 }}
              viewport={{ once: true }}
              className="primary-btn-outline w-[300px] block mt-[60px] mx-auto "
            >
              Enroll Now
            </motion.button>
          </section>
          <Testimonials />
          <Faqs />
        </main>
      </div>
    </>
  );
};

export default CoursePage;

export async function getStaticPaths() {
  const coursesData = await import('@/data/course.json');
  const courseIds = coursesData.courses.map((course) => course.id.toString());
  const paths = courseIds.map((id) => ({
    params: { id },
  }));

  return { paths, fallback: false };
}

export  const getStaticProps: GetStaticProps<Props | {notFound: true}>  = async ({ params }) => {
  // Fetch the data for a specific course based on the provided ID

  if(params === undefined || typeof params.id !== 'string')
  {
    return { notFound: true };
  }
  const courseId = parseInt(params.id);
  const coursesData = await import('@/data/course.json');
  const course = coursesData.courses.find((course) => course.id === courseId);

  if (!course) {
    return { notFound: true };
  }

  return {
    props: { course },
  };
}
