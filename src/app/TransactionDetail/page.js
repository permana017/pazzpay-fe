import React from 'react'
import Image from 'next/image'
import arrowUp from "public/arrow-up-black.png"
import Navbar from 'src/component/Navbar'
import CardHistory from 'src/component/CardHistory'
import CardGrapich from 'src/component/CardGraphic'
import Footer from 'src/component/Footer'
import CardSaldo from 'src/component/CardSaldo'

function TransactionDetail() {
    return (
        <main className='flex flex-col items-center w-full md:hidden'>
            <Navbar/>
            <div className='container md:mt-36 flex justify-center'>
                <section className='md:w-[76%] w-full'>
                    <div className='mt-12 mb-10 flex items-center md:hidden'>
                        <Image src={arrowUp} alt="avatar" className='w-8 h-8 -rotate-90'/>
                        <p className='font-bold ml-5 text-xl'>History</p>
                    </div>
                    <CardSaldo/>
                    <div className='flex mt-5'>
                        <p className='text-lg font-semibold'>In This Week</p>
                    </div>
                    <div className='flex flex-col w-full'>
                        <div className='flex w-full mr-5'>
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

export default TransactionDetail