import React, { ReactNode } from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { useRouter } from 'next/router'

type Props = {children:ReactNode}

const Layout = ({children}:Props) => {
  const Router = useRouter();
  return (
    <>
   {Router.pathname !== '/' && <Navbar/>}
    <div className="mt-24">
    {children}
    </div>
  {Router.pathname !== '/' &&  <Footer/>}
    </>
  )
}
export default Layout;