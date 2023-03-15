
'use client';
import Image from "next/image"
import arrowBlack from "public/arrow-up-black.png"
import plusBlack from "public/plus-black.png"
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import axios from "axios";

function CardSaldo() {
    const router = useRouter()
    const userId = JSON.parse(localStorage.getItem("@userLogin"))?.user?.user_id;
    const [data, setData] = useState([])
    useEffect(() => {
        axios
        .get(`http://localhost:5001/api/users/${userId}`)
        .then(res => {
            setData(res.data.data)
        })
        .catch(err => console.log(err))
    }, [])

  return (
    <>
        <div className="card-compact rounded-xl p-2 w-full bg-primary text-primary-content">
            <div className="card-body flex-row justify-between">
                <div className='flex flex-col justify-between'>
                    <p>Balance</p>
                    <h2 className="card-title text-2xl md:text-4xl md:my-3">Rp {data.saldo != null ? data.saldo : 0}</h2>
                    <p className='md:mt-6'>{data.phone_number}</p>
                </div>
                <div className='hidden md:flex flex-col justify-between'>
                    <button
                        onClick={()=> router.push("/Transfer")}
                        className="btn btn-outline btn-ghost text-base h-14 font-bold text-[#FFF] my-2 w-full">
                        <Image src={arrowBlack} className="w-7 mr-4" alt="icon"/>
                        Transfer</button>
                    <button
                        onClick={()=> router.push("/Topup")}
                        className="btn btn-outline btn-ghost text-base h-14 font-bold text-[#FFF] my-2 w-full">
                        <Image src={plusBlack}  className="w-7 mr-8" alt="icon"/>
                        Top Up</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default CardSaldo