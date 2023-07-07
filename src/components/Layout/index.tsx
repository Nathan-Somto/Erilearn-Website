import React, { ReactNode } from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'

type Props = {children:ReactNode}

const Layout = ({children}:Props) => {
  return (
    <>
    <Navbar/>
    <div className="mt-24">
    {children}
    </div>
    <Footer/>
    </>
  )
}
export default Layout;