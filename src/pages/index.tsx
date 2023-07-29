import Loader from '@/components/Loader'
import  Head  from 'next/head'
import React from 'react'

const LoadingPage = () => {
  return (
    <>
    <Head>
        <title> Erilearn - Promoting Learning</title>
      </Head>
    <Loader/> 
    </>
  )
}

export default LoadingPage