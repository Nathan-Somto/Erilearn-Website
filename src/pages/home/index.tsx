import Courses from '@/components/Courses'
import Hero from '@/components/Hero'
import Perks from '@/components/Perks'
import WhyUs from '@/components/WhyUs'
import React from 'react'

type Props = {}

const Home = (props: Props) =>
 {
  return (
    <>
   <Hero/>
    <main className='mt-[100px]'>
    <Courses/>
    <div className="pt-[100px] bg-[#FDF5F5]">
    <WhyUs/>
    <Perks/>
    </div>
    </main>
    </>
  )
}
export default Home;