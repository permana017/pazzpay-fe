import React from 'react'
import Image from 'next/image'
import avatar from "public/avatar.png"
import bell from "public/bell.png"
import arrowUp from "public/arrow-up.png"
import plus from "public/plus.png"
import Navbar from 'src/component/Navbar'
import Navigation from 'src/component/Navigation'
import CardHistory from 'src/component/CardHistory'
import CardGrapich from 'src/component/CardGraphic'
import Footer from 'src/component/Footer'
import CardSaldo from 'src/component/CardSaldo'

function Home() {
    return (
        <main className='flex flex-col items-center w-full'>
            <Navbar/>
            <div className='container md:mt-36 flex justify-center'>
                <Navigation/>
                <section className='md:w-[76%] w-full'>
                  <div className='mt-12 mb-10 flex justify-between items-center md:hidden'>
                      <Image src={avatar} alt="avatar" className='w-14'/>
                      <div className='w-2/3 text-lg'>
                          <p className='font-normal text-[#646464]'>Hello,</p>
                          <p className='font-bold'>Robert Chandler</p>
                      </div>
                      <Image src={bell} alt="avatar" className='w-8 h-8'/>
                  </div>
                  <CardSaldo/>
                  <div className='flex justify-between md:hidden'>
                      <button
                          className="btn btn-active btn-ghost text-base h-14 font-bold text-[#514F5B] mt-8 mb-10 w-[48%]">
                          <Image src={arrowUp} className="w-7 mr-4" alt="icon"/>
                          Transfer</button>
                      <button
                          className="btn btn-active btn-ghost text-base h-14 font-bold text-[#514F5B] mt-8 mb-10 w-[48%]">
                          <Image src={plus} className="w-7 mr-4" alt="icon"/>
                          Top Up</button>
                  </div>
                  <div className='flex'>
                    <div className='hidden md:flex md:w-[55%] md:mr-5'>
                        <CardGrapich/>
                    </div>
                    <div className='md:w-[45%] w-full'>
                        <CardHistory/>
                    </div>
                  </div>
                </section>
            </div>
            <Footer/>
        </main>
    )
}

export default Home