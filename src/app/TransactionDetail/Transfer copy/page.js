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
import { useRouter, usePathname  } from 'next/navigation';





function Transfer () {
    const router = useRouter()
    const data = router.query
  
    const pathname = usePathname();
    console.log("data parmas",pathname.split("/"))
    console.log("router",router.query)
    const [result, setResult] = useState("")
    console.log("result",result);
    console.log("ieu data",Number(result));
    const backspace = () => {
        setResult(result.slice(0, result.length -1))
    }
    const btn = "btn btn-ghost w-20 mx-3 rounded-full text-4xl border-none h-20"


    // useEffect(() => {
    //     console.log('data',data)
    // }, [router])
    
 

    return (
        <main className='flex flex-col items-center w-full'>
            <Navbar/>
            <div className='container md:mt-36 flex justify-center'>
                <Navigation/>
                <section className='md:w-[76%] w-full md:shadow-md md:rounded-3xl'>
                    <div className='mt-12 mb-10 flex items-center md:hidden'>
                        <Image src={arrowUp} alt="avatar" className='w-8 h-8 -rotate-90'/>
                        <p className='font-bold ml-5 text-xl'>Transfer  </p>
                    </div>
                    <div className="card bg-base-100 shadow-md w-full my-2 md:my-4 md:shadow-none">
                        <div className="card-body p-4 flex flex-row items-center">
                            <Image src={avatar} alt="avataravatar" className='w-16 mr-2'/>
                            <div className='flex flex-col justify-between w-2/3'>
                                <p className='font-semibold text-md mb-2'>Robert Chandler</p>
                                <p className='font-normal text-[#646464] text-sm'>+62 813-8492-9994</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-full mt-5'>
                        <p className='text-[#7C7895] font-semibold text-center'>Rp120.000 Available</p>
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
                                    type="text"
                                    placeholder="Add some notes"
                                    className="w-full text-base outline-none py-3"/>
                            </div>
                        </div>
                    </div>
                    <div className='hidden md:flex justify-end mt-32'>
                        <button className='btn btn-primary text-end'>continue</button>
                    </div>
                    <div className='flex flex-wrap w-full justify-between p-5 md:hidden'>
                        <button className={btn} onClick={(e)=> setResult(result.concat(1))}>1</button>
                        <button className={btn} onClick={(e)=> setResult(result.concat(2))}>2</button>
                        <button className={btn} onClick={(e)=> setResult(result.concat(3))}>3</button>
                        <button className={btn} onClick={(e)=> setResult(result.concat(4))}>4</button>
                        <button className={btn} onClick={(e)=> setResult(result.concat(5))}>5</button>
                        <button className={btn} onClick={(e)=> setResult(result.concat(6))}>6</button>
                        <button className={btn} onClick={(e)=> setResult(result.concat(7))}>7</button>
                        <button className={btn} onClick={(e)=> setResult(result.concat(8))}>8</button>
                        <button className={btn} onClick={(e)=> setResult(result.concat(9))}>9</button>
                        <button className={btn} onClick={(e)=> setResult(result.concat(0))}>0</button>
                        <button className={btn}>.</button>
                        <button className={btn} onClick={()=> backspace()}>
                            <Image src={deleted} className="w-8 h-8" alt="name"/>
                        </button>
                    </div>
                </section>
            </div>
            <Footer/>
        </main>
    )
}

export default Transfer 