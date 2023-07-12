import Layout from '@/components/Layout'
import '@/styles/globals.css'
import { AnimatePresence } from 'framer-motion'
import type { AppProps } from 'next/app'
import { Inter,Poppins } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({
  subsets:["latin"],
  weight:["400", "700"],
  variable:'--font-poppins'
})
export default function App({ Component, pageProps,router }: AppProps) {
  return(
    <AnimatePresence mode="wait" >
    <div className={inter.className}>
    <Layout>
      <Component {...pageProps} key={router.pathname} />
    </Layout>
    </div>
    </AnimatePresence>
  )
}
