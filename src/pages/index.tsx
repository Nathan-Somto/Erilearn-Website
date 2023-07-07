import Head from 'next/head'
import Image from 'next/image'

import Link from 'next/link'



export default function Home() {
  return (
   <>
   <Head>
    <title> Erilearn - Transition to Tech toady</title>
   </Head>
    <main>
      <h1>Loading Page</h1>
      <Link href='/home'>Home</Link>
    </main>
   </>
  )
}
