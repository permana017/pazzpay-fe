"use client"
import React from 'react'
import Image from 'next/image'
import arrowUp from "public/arrow-up-black.png"
import Navbar from 'src/component/Navbar'
import Navigation from 'src/component/Navigation'
import CardHistory from 'src/component/CardHistory'
import Footer from 'src/component/Footer'
import Filter from 'src/component/Filter'
import { useRouter } from 'next/navigation'


function History() {
    const router = useRouter()
    return (
        <main className='flex flex-col items-center w-full'>
            <Navbar/>
            <div className='container md:mt-36 flex justify-center'>
                <Navigation/>
                <section className='md:w-[76%] w-full'>
                    <div className='mt-12 mb-5 flex items-center md:hidden'>
                        <Image onClick={()=>router.push("/Home")} src={arrowUp} alt="avatar" className='w-8 h-8 -rotate-90'/>
                        <p className='font-bold ml-5 text-xl'>History</p>
                    </div>
                    <div className='flex'>
                        <div className='w-full'>
                            <CardHistory heigth='h-[720px]'/>
                        </div>
                    </div>
                    <Filter/>
                </section>
            </div>
            <Footer/>
        </main>
    )
}

export default History