import CoursesContainer from '@/components/CoursesContainer'
import Head from 'next/head'
import React from 'react'
import data from '@/data/data.json'
import CoursesCard from '@/components/CoursesCard'
import { motion } from "framer-motion";
import Testimonials from '@/components/Testimonials'
import Steps from '@/components/Steps'
type Props = {}

const CoursesPage = (props: Props) => {
  const {Courses} = data;
  const pageDescription = "Explore Erilearn's comprehensive courses to master Fullstack JavaScript, Fullstack Python, Product Management, Product Design, and 3D Design. Accelerate your transition into tech with expert guidance.";
  const pageKeywords = "Erilearn, Fullstack JavaScript, Fullstack Python, Product Management, Product Design, 3D Design, Tech Transition, Web Development, Product Strategy, UI/UX Design";
  return (
    <>
    <Head>
      <title>Erilearn - Our Courses</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={pageKeywords} />
    </Head>
    <main className='pt-[50px] min-h-screen'>
      <CoursesContainer>
      {Courses.card.map((item, index)=>(
          <motion.div
          key={item.level}
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: (index * 0.35) + 0.35, duration: 0.55 }}
          viewport={{once: true}}
          className="flex-shrink-0"
        >
        <CoursesCard {...item} />
        </motion.div>
      ))}
      </CoursesContainer>
      <Steps/>
      <Testimonials/>
    </main>
    </>
  )
}

export default CoursesPage