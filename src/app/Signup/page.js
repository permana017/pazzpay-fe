


'use client';
import { useState, useEffect } from "react"
import Image from "next/image"
import hero from "public/herro.webp"
import CardInput from "src/component/CardInput/cardInput"
import person from "public/person.png"
import img from "public/mail.png"
import imgLock from "public/lock.png"
import imgPhone from "src/assets/phone.png"
import axios from "axios";
import { useRouter } from "next/navigation";

function SignUp() {
    const router = useRouter()
    const [validate, setValidate] = useState({ error: false, message: "" });
    const [signupForm, setSignupForm] = useState({
        username: "",
        email:"",
        password:"",
        phone_number:""
    })

    useEffect(() => {
        setTimeout(() => {
            setValidate({
                ...validate,
                error:false
            })
        }, 3000);
      }, [validate.error == true])

    // console.log("data", signupForm)

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
                // console.log(err?.response?.data?.message);
                setValidate({ error: true, message: err?.response?.data?.message});
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
                    validate={validate?.error ? (
                        <div className="alert alert-error shadow-lg my-5">
                            <div className="w-full flex justify-left">
                                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                <span>{validate.message}</span>
                            </div>
                        </div>
                    ):null}
                    username={
                    <div className = 'flex items-center border-b-[3px] w-full' > 
                        <Image src={person} alt="name" className="w-[25px] mr-5"/>
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
                    <div className='flex items-center border-b-[3px] w-full mt-5  md:mt-10'>
                        <Image src={img} alt="name" className="w-[25px] mr-5"/>
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
                    phone={
                        <div>
                            <div className='flex items-center border-b-[3px] w-full mt-5 md:mt-10'>
                                <Image src={imgPhone} alt="name" className="w-[25px] mr-5"/>
                                <input
                                    onChange={(e) =>
                                        setSignupForm({
                                        ...signupForm,
                                        phone_number: e.target.value,
                                        })
                                    }
                                    type="text"
                                    placeholder="Enter your Phone Number"
                                    className="w-full text-base outline-none py-3"/>
                                </div>
                            {/* <label className="text-base font-semibold flex w-full justify-end">Forgot password?</label> */}
                        </div> 
                    }
                    password={
                        <div>
                             <div className='flex items-center border-b-[3px] w-full mt-5 md:mt-10 mb-10'>
                            <Image src={imgLock} alt="name" className="w-[25px] mr-5"/>
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
                            <span onClick={()=>router.push("/Login")} className="text-base text-[#6379F4] cursor-pointer">Login</span>
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