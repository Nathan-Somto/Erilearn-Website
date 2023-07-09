import Layout from '@/components/Layout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter,Poppins } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({
  subsets:["latin"],
  weight:["400", "700"],
  variable:'--font-poppins'
})
export default function App({ Component, pageProps }: AppProps) {
  return(
    <div className={inter.className}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </div>
  )
}
