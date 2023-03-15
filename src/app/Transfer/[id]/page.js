'use client';
import {useState, useEffect} from 'react'
import Image from 'next/image'
import arrowUp from "public/arrow-up-black.png"
import edit from "public/edit-2.png"
import deleted from "public/delete.png"
import Navbar from 'src/component/Navbar'
import Navigation from 'src/component/Navigation'
import avatar from "public/avatar.png"
import Footer from 'src/component/Footer'
import { useRouter, usePathname, redirect } from 'next/navigation';
import axios from 'axios';
import Cookies from 'js-cookie';





function TransferInput () {
    const router = useRouter();
    const userId =  Cookies.get("@userLogin")

    const pathname = usePathname();
    const id = pathname.split("/")[2]
    const [result, setResult] = useState(0)
    console.log("result", result);
    const [data, setData] = useState([])
    const [dataUser, setDataUser] = useState([])
    const [desc, setdesc] = useState("")

    


    useEffect(() => {
        axios
        .get(`https://pazzpaybe.cyclic.app/api/users/${id}`)
        .then(res => {
            setData(res.data.data)
        })
        .catch(err => console.log(err))
    }, [])

        

    const getDataUser = () => {
        axios
            .get(`https://pazzpaybe.cyclic.app/api/users/${userId}`)
            .then(res => {
                setDataUser(res.data.data)
            })
            .catch(err => console.log(err))
        }

    useEffect(() => {
        getDataUser()

    }, []);

    const dataTransfer = {
        amount:result,
        sender_id: dataUser.user_id,
        reciever_id: data.user_id,
        sender_name: dataUser.username,
        reciever_name: data.username,
        phone_sender: dataUser.phone_number,
        phone_reciever: data.phone_number,
        description:desc,
        img_sender: data.img,
        balance_left:dataUser.saldo - result
    }

    const handleTransfer = (event) =>{
        event.preventDefault();
        Cookies.set("@transfer", JSON.stringify(dataTransfer));
        router.push(`/Transfer/Confirmation/${data?.user_id}`);
    }
    const backspace = () => {
        setResult(result.slice(0, result.length -1))
    }



    const btn = "btn btn-ghost w-20 mx-3 rounded-full text-4xl border-none h-20"

 

    return (
        <main className='flex flex-col items-center w-full'>
            <Navbar/>
            <div className='container md:mt-36 flex justify-center'>
                <Navigation/>
                <form 
                onSubmit={handleTransfer}
                className='md:w-[76%] w-full md:shadow-md md:rounded-3xl'>
                    <div className='mt-12 mb-10 flex items-center md:hidden'>
                        <Image onClick={()=> router.push("/Transfer")} src={arrowUp} alt="avatar" className='w-8 h-8 -rotate-90'/>
                        <p className='font-bold ml-5 text-xl'>Transfer</p>
                    </div>
                    <div className="card bg-base-100 shadow-md w-full my-2 md:my-4 md:shadow-none">
                        <div className="card-body p-4 flex flex-row items-center">
                            <Image src={avatar} alt="avataravatar" className='w-16 mr-2'/>
                            <div className='flex flex-col justify-between w-2/3'>
                                <p className='font-semibold text-md mb-2'>{data.username}</p>
                                <p className='font-normal text-[#646464] text-sm'>{data.phone_number}</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-full mt-5'>
                        <p className='text-[#7C7895] font-semibold text-center'>Rp{dataUser.saldo} Available</p>
                        <input
                            onChange={(e)=> setResult(e.target.value)}
                            value={result}
                            placeholder="0.00"
                            type="number"
                            className="input w-full text-[#6379F4] focus:outline-none text-center text-5xl font-semibold py-10"/>
                        <div className='flex justify-center  mt-28'>
                            <div className='flex items-center border-b-[3px] w-full md:w-[60%]'>
                                <Image src={edit} alt="name" className="w-[25px] mr-5 "/>
                                <input
                                    onChange={(e)=> setdesc(e.target.value)}
                                    type="text"
                                    placeholder="Add some notes"
                                    className="w-full text-base outline-none py-3"/>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-end mt-52 md:mr-8'>
                        <button className='btn btn-primary text-end' type='submit'>continue</button>
                    </div>
                </form>
            </div>
            <Footer/>
        </main>
    )
}

export default TransferInput 