import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
const NotfoundPage = () => {
  return (
    <>
      <Head>
        <title>Erilearn - Not Found</title>
      </Head>
      <main className="bg-black fixed inset-0 h-full w-full z-[6000000] grid place-items-center">
        <nav className="absolute top-0 w-full h-20 flex items-center px-[5%] bg-black shadow-[0_0_3px_#555]">
          <Link
            href="/"
            className="flex text-white gap-1 text-[22px] items-end relative top-0 z-[55]"
          >
            {/* Logo */}
            <Image src={"/logo.svg"} alt="logo" width={30} height={30} />
            Erilearn
          </Link>
        </nav>
        <section className="text-center">
          <h1 className="text-[50px] neon-text md:text-[100px]">404</h1>
          <p className="neon-text text-[1.25rem] md:text-[1.75rem] mt-6 ">
            Page not Found
          </p>
        </section>
      </main>
    </>
  );
};

export default NotfoundPage;
