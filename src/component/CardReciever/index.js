
'use client';
import {useEffect, useState} from 'react'
import Image from 'next/image'
import avatar from "public/avatar.png"
import axios from 'axios'
import { useRouter } from "next/navigation";





function CardReciever() {
    const router = useRouter()
    const [data, setData] = useState([])
    const [serach, setSerach] = useState("")

    const getData = () => {
        axios
            .get(`http://localhost:5001/api/users?search=${serach}`)
            .then(res => {
                setData(res.data.data)
            })
            .catch(err => console.log(err))
        }

    useEffect(() => {
        getData()

    }, [serach]);

  return (
    <>
        <div className='flex flex-col md:bg-white  md:rounded-2xl w-full  md:shadow-xl mt-8 md:h-[720px]'>
            <div className='flex justify-between mb-6 md:px-4 pt-10'>
                <div className='w-full flex justify-center '>         
                    <input 
                    onChange={(e)=> setSerach(e.target.value)}
                    type="text" placeholder="Serach Your Contact" className="input input-ghost w-[95%] bg-[#3A3D421A]" />
                </div>
            </div>
            <div className='overflow-scroll scrollbar-hide'>
                {
                    data.map((item,i) => (
                        <div 
                        key={i}
                        onClick={() => router.push(`/Transfer/${item.user_id}`)}
                        className = "card bg-base-100 shadow-md w-full my-2 md:my-4 md:shadow-none" > 
                            <div className="card-body p-4 flex flex-row justify-start items-center">
                                <Image src={avatar} alt="avataravatar" className='w-16 mr-2'/>
                                <div className='flex flex-col justify-between w-2/3'>
                                    <p className='font-semibold text-md mb-2'>{item.username}</p>
                                    <p className='font-normal text-[#646464] text-sm'>{item.phone_number}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </>
  )
}

export default CardReciever