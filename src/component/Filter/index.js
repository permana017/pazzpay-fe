import React from 'react'
import Image from 'next/image'
import arrowRed from "public/arrow-up-red.png"
import arrowGreen from "public/arrow-down-green.png"


function Filter() {
  return (
    <div>
        <div className='flex md:hidden mt-10 fixed bottom-0 w-full justify-center left-0 px-4 bg-white h-20 items-center'>
            <div className='flex items-center justify-between h-[57px] w-full'>
                <button className="btn btn-outline btn-primary border-none shadow-md h-full">
                    <Image src={arrowRed} alt="avatar" className='w-8 h-8'/>
                </button>
                <button className="btn btn-outline btn-primary border-none shadow-md h-full">
                    <Image src={arrowGreen} alt="avatar" className='w-8 h-8'/>
                </button>
                <button className="btn btn-outline btn-primary border-none shadow-md w-1/2 h-full">Filter by Date</button>
            </div>
        </div>
    </div>
  )
}

export default Filter