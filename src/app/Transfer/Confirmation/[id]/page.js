'use client';
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Navbar from 'src/component/Navbar'
import Navigation from 'src/component/Navigation'
import avatar from "public/avatar.png"
import Footer from 'src/component/Footer'
import { useRouter, redirect } from 'next/navigation';
import axios from 'axios';
import Cookies from 'js-cookie';
import { rupiah } from '@/helper/formatCurrency';
import { FaChevronLeft } from 'react-icons/fa6';

function Confirmation() {
    const [result, setResult] = useState("")
    const [data, setData] = useState([])
    const transfer = (Cookies.get("@transfer"))

    const router = useRouter()
    useEffect(() => {
        if (!transfer || transfer !== undefined || transfer !== null) {
            setData(JSON.parse(transfer))
        }
    }, [transfer])
    const btn = "btn btn-ghost w-20 mx-3 rounded-full text-4xl border-none h-20"

    let d = new Date

    const date = d.getDate() + "-" + d.getMonth() + "-" + d.getFullYear() + " , " + d.getHours() + "." + d.getMinutes()




    const handleConfirm = (event) => {
        event.preventDefault();
        axios.post("https://pazzpaybe.cyclic.app/api/transaction/transfer", {
            sender_id: data.sender_id,
            reciever_id: data.reciever_id,
            reciever_id: data.reciever_id,
            reciever_name: data.reciever_name,
            reciever_phone: data.phone_reciever,
            amount: data.amount
        })
            .then((res) => {
                alert(res.data.data.message);
                router.push("Home")
            })
            .catch((res) => {
                alert(res.response.data.message);
                console.log(res.response.data.message);
                router.push("/Transfer")
            });
    };




    return (
        <>
            <Navbar />
            <main className='flex flex-col items-center w-full h-screen'>
                <div className='container md:pt-28 md:pb-5 flex justify-center h-screen'>
                    <Navigation />
                    <form
                        onSubmit={handleConfirm}
                        className='md:w-[76%] w-full md:shadow-md md:rounded-2xl md:p-5 md:border relative'>
                        <div className='flex items-center py-3 md:p-0'>
                            <FaChevronLeft className='md:hidden' />
                            <p className='font-bold ml-2'>Transfer To</p>
                        </div>
                        <div className="card bg-base-100 shadow-md w-full my-2 md:my-4 md:shadow-none">
                            <div className="card-body p-4 flex flex-row items-center">
                                <Image src={avatar} alt="avataravatar" className='w-12 h-12 mr-2' />
                                <div className='flex flex-col justify-between w-2/3'>
                                    <p className='font-semibold text-md mb-1'>{data?.reciever_name}</p>
                                    <p className='font-normal text-[#646464] text-sm'>{data?.phone_reciever}</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h1 className='font-bold text-[#514F5B] mb-3'>Detail</h1>
                            <div className='mb-5 text-[#514F5B]'>
                                <p className='text-base'>Amount</p>
                                <p className='font-medium text-xl'>{data?.amount ? rupiah(data.amount) : 'Rp -'}</p>
                            </div>
                            <div className='mb-5'>
                                <p className='text-base'>Balance Left</p>
                                <p className='font-medium text-xl'>{rupiah(data.balance_left)}</p>
                            </div>
                            <div className='mb-5'>
                                <p className='text-base'>Date & Time</p>
                                <p className='font-medium text-xl'>{date ?? '-'}</p>
                            </div>
                            <div className='mb-5'>
                                <p className='text-base'>Notes</p>
                                <p className='font-medium text-xl'>{data?.description ?? '-'}</p>
                            </div>
                        </div>
                        <div className='flex justify-end absolute bottom-6 right-6'>
                            <button className='btn btn-primary text-end' type='submit'>confirm</button>
                        </div>
                    </form>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Confirmation