'use client';
import {useState, useEffect} from 'react'
import Image from 'next/image'
import Navbar from 'src/component/Navbar'
import Navigation from 'src/component/Navigation'
import avatar from "public/avatar.png"
import Footer from 'src/component/Footer'
import { useRouter } from 'next/navigation';
import axios  from 'axios';

function Confirmation() {
    const [result, setResult] = useState("")
    
    const router = useRouter()
    const data = JSON.parse(localStorage.getItem("@transfer"))
    const btn = "btn btn-ghost w-20 mx-3 rounded-full text-4xl border-none h-20"
    console.log("reciever", data);


    // const dataTransfer = {
    //     sender_id: data.sender_id,
    //     reciever_id: data.reciever_id,
    //     reciever_id: data.reciever_id,
    //     amount: data.amount
    // }



    const handleConfirm = (event) => {
        event.preventDefault();
        axios.post("http://localhost:5001/api/transaction/transfer",{
            sender_id: data.sender_id,
            reciever_id: data.reciever_id,
            reciever_id: data.reciever_id,
            reciever_name: data.reciever_name,
            reciever_phone: data.phone_reciever,
            amount: data.amount
        })
          .then((res) => {
            // console.log(res.data.data.message);
            alert(res.data.data.message);
        })
        .catch((res) => {
            alert(res.response.data.message);
            router.push("/Transfer/Confirmation")
          });
      };




    return (
        <main className='flex flex-col items-center w-full'>
            <Navbar/>
            <div className='container md:mt-36 flex justify-center'>
                <Navigation/>
                <form 
                onSubmit={handleConfirm}
                className='md:w-[76%] w-full md:shadow-md md:rounded-3xl md:p-5'>
                    <div className='mt-12 mb-10 flex items-center'>
                        <p className='font-semibold ml-5 text-lg'>Transfer To</p>
                    </div>
                    <div className="card bg-base-100 shadow-md w-full my-2 md:my-4 md:shadow-none">
                        <div className="card-body p-4 flex flex-row items-center">
                            <Image src={avatar} alt="avataravatar" className='w-16 mr-2'/>
                            <div className='flex flex-col justify-between w-2/3'>
                                <p className='font-semibold text-md mb-2'>{data?.reciever_name}</p>
                                <p className='font-normal text-[#646464] text-sm'>{data?.phone_reciever}</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1 className='ml-4 mt-14 mb-5 text-lg font-semibold text-[#514F5B]'>Detail</h1>
                        <div className='p-4 text-[#514F5B]'>
                            <p className='text-base'>Amount</p>
                            <p className='font-medium text-xl'>Rp{data?.amount}</p>
                        </div>
                        <div className='p-4'>
                            <p className='text-base'>Balance Left</p>
                            <p className='font-medium text-xl'>Rp{data.balance_left}</p>
                        </div>
                        <div className='p-4'>
                            <p className='text-base'>Date & Time</p>
                            <p className='font-medium text-xl'></p>
                        </div>
                        <div className='p-4'>
                            <p className='text-base'>Notes</p>
                            <p className='font-medium text-xl'>{data?.description}</p>
                        </div>
                    </div>
                    <div className='flex justify-end mt-32'>
                        <button className='btn btn-primary text-end' type='submit'>confirm</button>
                    </div>
                </form>
            </div>
            <Footer/>
        </main>
    )
}

export default Confirmation