import Courses from "@/components/CoursesSection";
import Faqs from "@/components/Faqs";
import Hero from "@/components/Hero";
import Loader from "@/components/Loader";
import Perks from "@/components/Perks";
import Steps from "@/components/Steps";
import Testimonials from "@/components/Testimonials";
import WhyUs from "@/components/WhyUs";
import { AnimatePresence } from "framer-motion";
import Head from "next/head";
import React from "react";

type Props = {};

const HomePage = (props: Props) => {
  const siteName = 'Erilearn';
  const siteDescription = 'Accelerate your journey into the tech industry with our comprehensive courses and expert guidance. Join Erilearn today!';
  const ogImageUrl = '/preview-image.jpg'; 
  const websiteUrl = process.env.NEXT_PUBLIC_WEBSITE_URL;

  return (
    <>
      <Head>
      <title>Erilearn - Transition into Tech in 3 months</title>
        <meta name="description" content={siteDescription} />
        <meta name="keywords" content="Erilearn, tech career, 3 months, technology, courses, instructors, coding, programming, career shift, affordable, learn now pay later," />
        <meta property="og:title" content={`${siteName} - Transition into Tech in 3 Months`} />
        <meta property="og:description" content={siteDescription} />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:url" content={websiteUrl} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${siteName} - Transition into Tech in 3 Months`} />
        <meta name="twitter:description" content={siteDescription} />
        <meta name="twitter:image" content={ogImageUrl} />
        <meta name="twitter:url" content={websiteUrl} />
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
