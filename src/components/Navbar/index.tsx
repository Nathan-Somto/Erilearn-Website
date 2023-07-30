import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import DesktopNav from "./DesktopNav";
import { motion, AnimatePresence } from "framer-motion";
import MobileNav from "./MobileNav";

const Navbar = () => {
  /* Mobile nav open and close */
  const [openMobileNav, setOpenMobileNav] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const nav = useRef<HTMLElement | null>(null);
  useEffect(() => {
    function handleScroll() {
      if (nav.current !== null) {
        if (window.scrollY >= nav.current.offsetHeight ) {
          setHasScrolled(true);
          return;
        }
        setHasScrolled(false);
      }
    }
    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);
  const mobileNavToggle = ()=>{
    document.body.classList.toggle('overflow-hidden');
    document.body.classList.toggle('h-screen');
    setOpenMobileNav((prevState) => !prevState);
    setHasScrolled((prevState) => !prevState);
  }
  return (
    <motion.nav
      ref={nav}
      initial={
        hasScrolled
          ? { y: -100, opacity: 0, backgroundColor: "transparent" }
          : { backgroundColor: "transparent" }
      }
      animate={
        hasScrolled
          ? { y: 0, opacity: 1, backgroundColor: "white" }
          : { backgroundColor: "transparent" }
      }
      transition={{ duration: 0.55, ease: "easeIn"}}
      className={`fixed top-0 h-[100px] 
       justify-between py-3 flex items-center left-0 right-0 w-full px-[5%] z-[5000] `}
    >
      <Link href="/" className="flex gap-1 text-[22px] items-end relative top-0 z-[55]">
        {/* Logo */}
        <Image src={"/logo.svg"} alt="logo" width={30} height={30} />
        Erilearn
      </Link>
      {/* Desktop Nav */}
      <DesktopNav />
      <motion.div
        initial={{ scale: 1 }}
        animate={openMobileNav ? { scale: 0.9 } : {}}
        onClick={mobileNavToggle}
        className=" block lg:hidden  cursor-pointer relative top-0 z-[55]"
      >
        <motion.div
          transition={{ duration: 0.25 }}
          initial={{ y: 0, rotate: 0 }}
          animate={openMobileNav ? { y: 7, rotate: 45 } : {}}
          className="h-[2px] w-[30px] bg-gray-900 mb-2 "
        ></motion.div>
        <motion.div
          transition={{ duration: 0.25 }}
          initial={{ y: 0, rotate: 0, width: 20 }}
          animate={openMobileNav ? { y: -5, rotate: -45, width: 30 } : {}}
          className="h-[2px] w-5 bg-gray-900"
        ></motion.div>
      </motion.div>
      {/* Mobile Nav */}
      <AnimatePresence mode="wait">
        {openMobileNav && <MobileNav />}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
