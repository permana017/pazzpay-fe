


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


function Login() {
    const [loginForm, setLoginForm] = useState({
        email: "",
        password: "",
      });
      console.log("login",loginForm);
      const [validate, setValidate] = useState({ error: false, message: "" });
      const router= useRouter();
    
      const handleLogin = (event) => {
        event.preventDefault();
        console.log("login",loginForm);
        axios({
          url: "http://localhost:5001/api/auth/login-user",
          method: "POST",
          data: loginForm,
        })
          .then((res) => {
            console.log(res.data.data);
            localStorage.setItem("@userLogin", JSON.stringify(res.data.result));
            alert(res.data.message);
            router.push("/Home");
          })
          .catch((err) => {
            setValidate({ error: true, message: err.response.data.message });
          });
      };



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
                handleOnSubmit={handleLogin}
                desc={<>Login to your existing account to access
                    all the features in FazzPay.</>}
                email={
                    <div className = 'flex items-center border-b-[3px] w-full' > 
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
                    <div className = 'flex items-center border-b-[3px] w-full' > 
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
                        <span className="text-base text-[#6379F4]"> Sign Up</span>
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