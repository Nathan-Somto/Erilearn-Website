import Faqs from '@/components/Faqs'
import Head from 'next/head'
import React from 'react'

const FaqsPage = () => {
  return (
    <>
    <Head>
    <title>Erilearn | FAQ</title>
    <meta name="description" content="Get answers to frequently asked questions about Erilearn. Accelerate your transition into tech with our comprehensive courses and expert guidance." />
    <meta name="keywords" content="Erilearn, FAQ, Frequently Asked Questions, Tech Transition, Tech Education, Web Development, Career Change" />
    <meta name="author" content="Erilearn" />
    </Head>
   <Faqs/>
    </>
  )
}

export default FaqsPage