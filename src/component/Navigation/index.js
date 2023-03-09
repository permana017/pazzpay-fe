
'use client'
import Image from "next/image"
import grid from "public/grid-black.png"
import user from "public/user.png"
import plus from "public/plus-black.png"
import arrow from "public/arrow-up-black.png"
import logOut from "public/log-out.png"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import axios from "axios"


function Navigation() {
    
    const router = useRouter()
    const userId = JSON.parse(localStorage.getItem("@userLogin"))?.user.user_id;
    const [update, setUpdate] = useState(0)
    console.log("test", update);

    const handleConfirm = (event) => {
        console.log("yttedgfghsd");
        event.preventDefault();
        axios.put(`http://localhost:5001/users/${userId}`,{
            saldo: update,
            'Access-Control-Allow-Headers':'*',
            'content-type': 'multipart/form-data; boundary=<calculated when request is sent>',
        })
          .then((res) => {
            // alert("Top up success")
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
            // alert(res.response.data.message);
            // router.push("/Transfer/Confirmation")
          });
      };

  return (
    <>
        <div className='hidden md:flex md:w-[24%]'>
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
                                    <label htmlFor="my-modal" className="cursor-pointer hover:text-[#6379F4] hover:font-semibold">Topup</label>
                                    <input type="checkbox" id="my-modal" className="modal-toggle" />
                                    <form 
                                    onSubmit={handleConfirm}
                                    className="modal">
                                        <div className="modal-box">
                                            <div className="flex w-full justify-between items-center">
                                                <h3 className=" flex font-semibold text-lg mb-4">Topup</h3>
                                                <div className="modal-action">
                                                    <label htmlFor="my-modal" className=" text-3xl">x</label>  
                                                </div>
                                            </div>
                                            <h3 className="text-sm mb-12 w-[50%]">Enter the amount of money, and click submit</h3>
                                            <input
                                            onChange={(e)=> setUpdate(e.target.value)}
                                            type="number" placeholder="Type here" className="input input-bordered w-full" />
                                            <button className="btn btn-active btn-primary mt-10" type="submit">Confirm</button>
                                        </div>
                                    </form>
                                </>
                            </h2>
                        </div>
                        <div className="flex mt-5 cursor-pointer hover:text-[#6379F4] hover:font-semibold">
                            <Image className="w-8 h-8 mr-6" src={user} alt=""/>
                            <h2 className="text-lg">Profile</h2>
                        </div>
                    </div>
                    <div>
                        <div className="flex mb-5 cursor-pointer hover:text-[#6379F4] hover:font-semibold mt-64">
                            <Image className="w-8 h-8 mr-6 " src={logOut} alt=""/>
                            <h2 className="text-lg">Profile</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Navigation