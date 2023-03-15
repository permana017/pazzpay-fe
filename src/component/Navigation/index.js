
'use client'
import Image from "next/image"
import grid from "public/grid-black.png"
import user from "public/user.png"
import plus from "public/plus-black.png"
import arrow from "public/arrow-up-black.png"
import logOut from "public/log-out.png"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import Topup from "../Topup"
import Cookies from "js-cookie"



function Navigation() {
    
    const router = useRouter()

    const onLogout  = () =>{
        alert("apakah kamu yakin")
        Cookies.remove('@userLogin')
        router.push('/')
    }


  return (
    <>
        <div className='hidden md:flex md:w-[24%] min-h-[720px]'>
            <div className="card mr-5 w-full bg-base-100 shadow-xl ">
                <div className="card-body flex-col justify-between">
                    <div>
                        <div className="flex mt-5 cursor-pointer hover:text-[#6379F4] hover:font-semibold cursor-pointer hover:text-[#6379F4] hover:font-semibold" onClick={()=> router.push("/Home")}>
                            <Image className="w-8 h-8 mr-6" src={grid} alt=""/>
                            <h2 className="text-lg">Dashboard</h2>
                        </div>
                        <div className="flex mt-5 cursor-pointer hover:text-[#6379F4] hover:font-semibold" onClick={()=> router.push("/Transfer")}>
                            <Image className="w-8 h-8 mr-6 " src={arrow} alt=""/>
                            <h2 className="text-lg">Transfer</h2>
                        </div>
                        <div className="flex mt-5 ">
                            <Image className="w-8 h-8 mr-6" src={plus} alt=""/>
                            <h2 className="text-lg">
                                <>
                                    <Topup showModal={
                                            <label htmlFor="my-modal" className="cursor-pointer hover:text-[#6379F4] hover:font-semibold">Topup</label>
                                    }/>
                                </>
                            </h2>
                        </div>
                        <div 
                        onClick={()=>router.push("/Profile")}
                        className="flex mt-5 cursor-pointer hover:text-[#6379F4] hover:font-semibold">
                            <Image className="w-8 h-8 mr-6" src={user} alt=""/>
                            <h2 className="text-lg">Profile</h2>
                        </div>
                    </div>
                    <div>
                        <div
                        onClick={onLogout} 
                        className="flex mb-5 cursor-pointer hover:text-[#6379F4] hover:font-semibold mt-64">
                            <Image className="w-8 h-8 mr-6 " src={logOut} alt=""/>
                            <h2 className="text-lg">Logout</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Navigation