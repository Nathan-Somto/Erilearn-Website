import Link from 'next/link'
import Image from 'next/image'
import React, { useState } from 'react'
import DesktopNav from './DesktopNav'
import { motion,AnimatePresence } from 'framer-motion'
import MobileNav from './MobileNav'

const Navbar = () => {
    /* Mobile nav open and close */
    const [openMobileNav,setOpenMobileNav] = useState(false);
  return (
   <nav className="fixed top-0 h-[100px] bg-transparent justify-between py-3 flex items-center left-0 right-0 w-full px-[5%] z-[100] ">
    <Link href="/home" className="flex gap-1 text-[22px] items-end">
        {/* Logo */}
        <Image 
        src={'/logo.svg'}
        alt="logo"
        width={30}
        height={30}
        />
        Erilearn
    </Link>
    {/* Desktop Nav */}
    <DesktopNav/>
    <motion.div 
      initial={{scale:1}}
      animate={openMobileNav ?{scale:0.9}: {}}
      onClick={()=> setOpenMobileNav(prevState => !prevState)}
      className=' block lg:hidden  cursor-pointer'>
      <motion.div
        transition={{duration:0.25}}
        initial={{y:0, rotate:0}}
        animate={openMobileNav?{y:7, rotate:45}:{}}
       className="h-[2px] w-[30px] bg-gray-900 mb-2"></motion.div>
      <motion.div
      transition={{duration:0.25}}
      initial={{y:0, rotate:0, width:20}}
      animate={openMobileNav?{y:-5, rotate:-45, width:30}:{}} 
      className="h-[2px] w-5 bg-gray-900"></motion.div>
    </motion.div>
    {/* Mobile Nav */}
    <AnimatePresence mode='wait'>
    {openMobileNav &&  <MobileNav/>}
    </AnimatePresence>
   
   </nav>
  )
}

export default  Navbar