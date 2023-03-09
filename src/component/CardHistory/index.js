'use client';
import {useEffect,useState} from 'react'
import Image from 'next/image'
import avatar from "public/avatar.png"
import axios from 'axios'
import { useRouter } from 'next/navigation';


// export const revalidate = 10
// async function getData() {

//     const userId = JSON.parse(localStorage.getItem("@userLogin"))?.user.user_id;

//     try { 
//         const res = await fetch(`http://localhost:5001/api/transaction/transfer/${userId}`, {
//             next:{revalidate : 10}
//         });
//         return res.json()
//     } catch (error) {
//         return []
//     }
  
//   }
  



function CardHistory() {
    const router = useRouter()
    const userId = JSON.parse(localStorage.getItem("@userLogin"))?.user.user_id;
    console.log(userId);
    const [data, setData] = useState([])
    console.log("history",data);
    console.log("datasss", userId);


    useEffect(() => {
        axios
        .get(`http://localhost:5001/api/transaction/transfer/${userId}`)
        .then(res => {
            console.log(res);
            setData(res.data.data)
        })
        .catch(err => console.log(err))
    }, [])


  return (
    <>
        <div className='flex flex-col md:bg-white  md:rounded-2xlw-full  md:shadow-xl mt-8'>
            <div className='flex justify-between mb-6 md:px-4 pt-10'>
                <h2 className='text-lg font-bold'>Transaction History</h2>
                <p className='font-semibold text-[#6379F4] cursor-pointer' onClick={()=> router.push("/History")}>See all</p>
            </div>
            {
                data?.map((item) => (
                <> 
                    <div className = "card bg-base-100 shadow-md w-full my-2 md:my-4 md:shadow-none" > 
                        <div className="card-body p-4 flex flex-row justify-between items-center">
                            <Image src={avatar} alt="avataravatar" className='w-16 mr-2'/>
                            <div className='flex flex-col justify-between w-2/3'>
                                <p className='font-semibold text-md mb-2'>{item.reciever_name}</p>
                                <p className='font-normal text-[#646464] text-sm'>{item.reciever_phone}</p>
                            </div>
                            <h3 className='text-[#1EC15F] text-lg font-bold'>{item.saldo}</h3>
                        </div>
                    </div>
                </>
                ))
            }
        </div>
    </>
  )
}

export default CardHistory