import React from 'react'
import Image from 'next/image'
import arrow from "public/arrow-down-green.png"
import arrowRed from "public/arrow-up-red.png"
import graphic from "public/graphic.png"



function CardGrapich() {
  return (
    <>
        <div className='flex flex-col justify-between bg-white md:shadow-xl rounded-2xl w-full md:mt-8 md:p-10'>
            <div className='hidden md:flex justify-between'>
                <div className="flex flex-col mt-5">
                    <Image className="w-8 h-8 mr-6 " src={arrow} alt=""/>
                    <h2 className="text-base">Income</h2>
                    <h1 className='text-lg font-semibold'>Rp2.120.000</h1>
                </div>
                <div className="flex flex-col mt-5">
                    <Image className="w-8 h-8 mr-6 " src={arrowRed} alt=""/>
                    <h2 className="text-base">Expense</h2>
                    <h1 className='text-lg font-semibold'>Rp2.120.000</h1>
                </div>
            </div>
            <Image className="mt-10 md:mt-0" src={graphic} alt=""/>
        </div>
    </>
  )
}

export default CardGrapich