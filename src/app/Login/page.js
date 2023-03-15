


'use client';
import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import Image from "next/image"
import hero from "public/herro.webp"
import CardInput from "src/component/CardInput/cardInput"
import img from "public/mail.png"
import imgLock from "public/lock.png"
import axios from "axios";
import Cookies from "js-cookie";


function Login() {
    const [loginForm, setLoginForm] = useState({
        email: "",
        password: "",
      });
      const [validate, setValidate] = useState({ error: false, message: "" });  
      const router= useRouter();
    
      const handleLogin = (event) => {
        event.preventDefault();
        axios({
          url: "http://localhost:5001/api/auth/login-user",
          method: "POST",
          data: loginForm,
        })
          .then((res) => {
            Cookies.set("@userLogin", res.data.result.user.user_id)
            // console.log(res.data.result.user.user_id);
            alert(res.data.message);
            router.push("/Home");
          })
          .catch((err) => {
            setValidate({ error: true, message: err?.response?.data?.message});
          });
      };

      useEffect(() => {
        setTimeout(() => {
            setValidate({
                ...validate,
                error:false
            })
        }, 3000);
      }, [validate.error == true])
      



    return (
        <div className="md:flex md:w-full">
            <div
                className="md:bg-banner md:bg-cover md:w-[55%] md:text-white hidden md:flex ">
                <div className="container ">
                    <p className="pt-14 text-3xl font-semibold mb-10">FazzPay</p>
                    <Image src={hero} alt="name" className="w-full"/>
                    <p className="mb-8 text-2xl font-semibold">App that Covering Banking Needs.</p>
                    <p className="mb-14 text-base text-[#FFFFFFCC] font-normal">FazzPay is an
                        application that focussing in banking needs for all users in the world. Always
                        updated and always following world trends. 5000+ users registered in FazzPay
                        everyday with worldwide users coverage.</p>
                </div>
            </div>
            <div
                className='flex flex-col justify-between items-center h-[100vh] md:h-auto md:w-[45%] md:pr-[134px]'>
                <div className="pt-24 text-3xl text-[#6379F4] font-semibold md:hidden">FazzPay</div>
                <CardInput
                validate={ validate.error == true ? (
                    <div className="alert alert-error shadow-lg mb-5">
                        <div className="w-full flex justify-left">
                            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <span>{validate.message}</span>
                        </div>
                    </div>
                ):null
                }
                handleOnSubmit={handleLogin}
                desc={<>Login to your existing account to access
                    all the features in FazzPay.</>}
                email={
                    <div className = 'flex items-center border-b-[3px] w-full md:mt-10 mt-5' > 
                        <Image src={img} alt="name" className="w-[25px] mr-5 "/>
                        <input
                            onChange={(e)=> setLoginForm({
                                ...loginForm,
                                email: e.target.value
                            })}
                            type="email"
                            placeholder="Enter your e-mail"
                            className="w-full text-base outline-none py-3"/>
                    </div>
                }
                
                password={
                    <div className = 'flex items-center border-b-[3px] w-full md:mt-10 mt-5  mb-16' > 
                    <Image src={imgLock} alt="name" className="w-[25px] mr-5 "/>
                    <input
                        onChange={(e)=> setLoginForm({
                            ...loginForm,
                            password: e.target.value
                        })}
                        type="text"
                        placeholder="Enter your password"
                        className="w-full text-base outline-none py-3"/>
                </div> 
                }
                option={
                    <p className="text-base font-medium mt-7 mb-12">Don’t have an account? Let’s
                        <span
                        onClick={()=>router.push("/Signup")} 
                        className="text-base text-[#6379F4] cursor-pointer"> Sign Up</span>
                    </p>
                }
                textBtn={
                    <button className="btn btn-active btn-ghost w-full md:mt-24 text-lg text-[#88888F] font-semi-bold">Login</button>
                }
                /> 
            </div>
        </div>

    )
}

export default Login