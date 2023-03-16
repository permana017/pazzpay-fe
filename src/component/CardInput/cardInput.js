'use client'
import React from 'react';
import Fade from 'react-reveal/Fade';



export default function CardInput({username, password, email, desc, title, textBtn, option, pin, handleOnSubmit, validate, phone}) {
    return (
        <>
            <div
                className='px-5 bg-white rounded-t-[30px] w-full shadow-[0px_0px_100px_rgba(17,12,46,0.15)] md:bg-none md:shadow-none md:rounded-none'>
                <div className="text-center flex flex-col items-center">
                    <div className="w-full flex flex-col items-center md:hidden">
                        <Fade bottom >
                            <p className="pt-10 text-2xl font-bold">{title}</p>
                        </Fade>
                        <Fade bottom delay={200}>
                            <p className="text-lg mt-5 mb-14 text-[#3A3D4299]">{desc}</p>
                        </Fade>
                    </div>
                    <div className="md:w-full md:flex md:flex-col hidden ">
                        <Fade right  >
                            <p className="pt-10 text-2xl font-semibold text-left">Start Accessing Banking
                                Needs With All Devices and All Platforms With 30.000+ Users</p>
                        </Fade>
                        <Fade right delay={200}>
                            <p className="text-base mt-10 w-[85%] mb-20 text-[#3A3D4299] text-left">Transfering
                                money is eassier than ever, you can access FazzPay wherever you are. Desktop,
                                laptop, mobile phone? we cover all of that for you!</p>
                        </Fade>
                    </div>
                    {validate}
                    <form className="w-full" onSubmit={handleOnSubmit}>
                        <Fade bottom delay={400} >
                            {username}
                        </Fade>
                        <Fade bottom delay={600}>
                            {email}
                        </Fade>
                        <Fade bottom delay={800}>
                            {phone}
                        </Fade>
                        <Fade bottom delay={1000}>
                            {password}
                        </Fade>
                        <Fade bottom delay={1200}>
                            {pin}
                        </Fade>
                        <Fade right>
                            {textBtn}
                        </Fade>
                        <Fade right delay={200}>
                            <div>
                                {option}
                            </div>
                        </Fade>
                    </form>
                </div>
            </div>
        </>
    )
}
