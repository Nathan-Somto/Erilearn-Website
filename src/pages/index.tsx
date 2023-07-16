import Courses from "@/components/Courses";
import Faqs from "@/components/Faqs";
import Hero from "@/components/Hero";
import Perks from "@/components/Perks";
import Steps from "@/components/Steps";
import Testimonials from "@/components/Testimonials";
import WhyUs from "@/components/WhyUs";
import Head from "next/head";
import React from "react";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <>
      <Head>
        <title> Erilearn - Promoting Learning</title>
      </Head>
      <Hero />
      <main className="mt-[100px]">
        <Courses />
        <div className="pt-[100px] bg-[#FDF5F5]">
          <WhyUs />
          <Perks />
        </div>
        <Steps />
        <div className="bg-[#FDF5F5] border-t border-solid border-gray-100">
          <Testimonials />
        </div>
        <Faqs />
      </main>
    </>
  );
};
export default HomePage;
