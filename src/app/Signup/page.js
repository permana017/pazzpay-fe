


'use client';
import { useState } from "react"
import Image from "next/image"
import hero from "public/herro.webp"
import CardInput from "src/component/CardInput/cardInput"
import person from "public/person.png"
import img from "public/mail.png"
import imgLock from "public/lock.png"
import axios from "axios";
import { useRouter } from "next/navigation";

function SignUp() {
    const router = useRouter()
    const [signupForm, setSignupForm] = useState({
        username: "",
        email:"",
        password:""
    })

    console.log("data", signupForm)

    const handleSignUp =(event)=>{
        event.preventDefault();
        axios({
            url: "http://localhost:5001/api/auth/regis-user",
            method: "POST",
            data: signupForm,
        })
            .then((res) => {
            alert(res.data.message);
            router.push("/Login");
            })
            .catch((err) => {
                console.log(err)
            });
    }


    return (
        <div className="md:flex md:w-full">
            <div
                className="md:bg-banner md:bg-cover md:w-[60%] md:text-white hidden md:flex ">
                <div className="container">
                    <p className="pt-14 text-3xl font-semibold mb-10">FazzPay</p>
                    <Image src={hero} alt="name" className="w-full"/>
                    <p className="mb-8 text-2xl font-semibold">App that Covering Banking Needs.</p>
                    <p className="mb-14 text-base text-[#FFFFFFCC] font-normal">FazzPay is an
                        application that focussing in banking needs for all users in the world. Always
                        updated and always following world trends. 5000+ users registered in FazzPay
                        everyday with worldwide users coverage.</p>
                </div>
            </div>
            <div className='flex flex-col justify-between items-center h-[100vh] md:h-auto md:w-[40%] md:pr-[134px]'>
                <div className="pt-24 text-3xl text-[#6379F4] font-semibold md:hidden">FazzPay</div>
                <CardInput
                    handleOnSubmit={handleSignUp}
                    title={<>Sign Up</>}
                    desc={<>Create your account to access FazzPay.</>}
                    username={
                    <div className = 'flex items-center border-b-[3px] w-full' > 
                        <Image src={person} alt="name" className="w-[25px] mr-5 "/>
                        <input
                            onChange={(e) =>
                                setSignupForm({
                                  ...signupForm,
                                  username: e.target.value,
                                })
                              }
                            type="text"
                            placeholder="Enter your fullname"
                            className="w-full text-base outline-none py-3"/>
                        </div>
                    }
                    email={
                    <div className='flex items-center border-b-[3px] w-full  mt-16'>
                        <Image src={img} alt="name" className="w-[25px] mr-5 "/>
                        <input
                            onChange={(e) =>
                                setSignupForm({
                                  ...signupForm,
                                  email: e.target.value,
                                })
                              }
                            type="text"
                            placeholder="Enter your e-mail"
                            className="w-full text-base outline-none py-3"/>
                    </div>
                    }
                    password={
                        <div>
                             <div className='flex items-center border-b-[3px] w-full mt-16 mb-10'>
                            <Image src={imgLock} alt="name" className="w-[25px] mr-5 "/>
                            <input
                                onChange={(e) =>
                                    setSignupForm({
                                    ...signupForm,
                                    password: e.target.value,
                                    })
                                }
                                type="text"
                                placeholder="Enter your password"
                                className="w-full text-base outline-none py-3"/>
                            </div>
                            {/* <label className="text-base font-semibold flex w-full justify-end">Forgot password?</label> */}
                        </div>
                    }
                    option={
                        <p className="text-base font-medium mt-7 mb-12">Don’t have an account? Let’s
                            <span className="text-base text-[#6379F4]"> Login</span>
                        </p>
                    }
                    textBtn={
                        <button className="btn btn-active btn-ghost w-full md:mt-24 text-lg text-[#88888F] font-semi-bold" type="submit">Login</button>
                    }
                />
            </div>
        </div>

    )
}

export default SignUp