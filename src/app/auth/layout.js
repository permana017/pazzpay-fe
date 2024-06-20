"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import hero from "public/herro.webp";
import CardInput from "src/component/CardInput/cardInput";
import img from "public/mail.png";
import imgLock from "public/lock.png";
import Cookies from "js-cookie";
import Fade from "react-reveal/Fade";
import axiosInstance from "@/helper/axiosInstance";
import Swal from "sweetalert2";

function AuthLayout({ children }) {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const [validate, setValidate] = useState({ error: false, message: "" });
  const router = useRouter();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const res = await axiosInstance.post("/auth/login-user", loginForm);
      Cookies.set("@userLogin", res.data.result.user.user_id);
      //   alert(res.data.message);
      Swal.fire({
        title: "Success Login!",
        icon: "success",
        confirmButtonColor: "#6379F4",
      });
      router.push("/Home");
    } catch (error) {
      setValidate({ error: true, message: error.response.data?.message });
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setValidate({
        ...validate,
        error: false,
      });
    }, 3000);
  }, [validate.error == true]);

  return (
    <div className="md:flex md:w-full md:h-screen md:overflow-hidden">
      <div className="md:bg-banner md:bg-cover lg:w-[60%] md:w-[50%] md:text-white hidden md:flex">
        <div className="p-10 lg:px-24 lg:py-10">
          <Fade left>
            <p className="text-3xl font-semibold">FazzPay</p>
          </Fade>
          <div className="w-full flex justify-center">
            <Fade left delay={300}>
              <Image src={hero} alt="name" height="470" width="470" />
            </Fade>
          </div>
          <Fade bottom>
            <p className="mb-5 text-2xl font-semibold">
              App that Covering Banking Needs.
            </p>
          </Fade>
          <Fade bottom delay={200}>
            <p className="mb-14 text-base text-[#FFFFFFCC] font-normal">
              FazzPay is an application that focussing in banking needs for all
              users in the world. Always updated and always following world
              trends. 5000+ users registered in FazzPay everyday with worldwide
              users coverage.
            </p>
          </Fade>
        </div>
      </div>
      <div className="flex flex-col items-center h-[100vh] md:h-auto lg:w-[40%] md:w-[50%] p-5 md:py-5 md:pr-10 lg:pr-24 bg-white">
        <div className="pt-14 pb-10 text-3xl text-[#6379F4] font-semibold md:hidden">
          FazzPay
        </div>
        {children}
      </div>
    </div>
  );
}

export default AuthLayout;
