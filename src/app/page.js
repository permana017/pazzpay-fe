
import { Inter } from '@next/font/google'
import Navbar from 'src/component/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <>
    <Navbar/>
   </>
  )
}
