"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import Fade from "react-reveal/Fade";
import axiosInstance from "@/helper/axiosInstance";
import Swal from "sweetalert2";
import { MdOutlineEmail } from "react-icons/md";
import Input from "../../../component/Input";
import InputPassword from "../../../component/InputPassword";
import { z } from "zod";
import { VscLoading } from "react-icons/vsc";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Link from "next/link";

function Login() {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const [validate, setValidate] = useState({ error: false, message: "" });
  const formSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password is required min 8 character"),
  });
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async () => {
    setIsLoading(true);
    try {
      const res = await axiosInstance.post("/auth/login-user", loginForm);
      Cookies.set("@userLogin", res.data.result.user.user_id);
      Swal.fire({
        title: "Success Login!",
        icon: "success",
        confirmButtonColor: "#6379F4",
      });
      router.push("/dashboard");
    } catch (error) {
      setValidate({ error: true, message: error.response.data?.message });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChangeInput = (event) => {
    const { value, name } = event.target;
    setLoginForm({ ...loginForm, [name]: value });
    try {
      formSchema.shape[name].parse(value);
      setErrors({ ...errors, [name]: "" });
    } catch (err) {
      setErrors({ ...errors, [name]: err.errors[0].message });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      formSchema.parse({ ...loginForm });
      handleLogin();
    } catch (err) {
      const validationErrors = err.errors.reduce((acc, error) => {
        acc[error.path[0]] = error.message;
        return acc;
      }, {});
      setErrors(validationErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full py-10">
      <Fade right>
        <p className="mb-5 text-xl lg:text-2xl font-semibold text-wrap lg:max-w-[90%]">
          Start Accessing Banking Needs With All Devices and All Platforms With
          30.000+ Users
        </p>
      </Fade>
      <Fade right delay={200}>
        <p className="text-sm lg:text-base text-gray-400">
          Transfering money is eassier than ever, you can access FazzPay
          wherever you are. Desktop, laptop, mobile phone? we cover all of that
          for you!
        </p>
      </Fade>
      <Fade right delay={300}>
        <div
          className={`flex flex-col gap-5 my-20 relative ${
            validate.error ? "mb-10 mt-12" : ""
          }`}
        >
          <Input
            name="email"
            icon={<MdOutlineEmail size={24} />}
            value={loginForm.email}
            onChange={handleChangeInput}
            placeholder="Input your e-mail"
            error={errors.email}
          />
          <InputPassword
            name="password"
            value={loginForm.password}
            onChange={handleChangeInput}
            error={errors.password}
            placeholder="Input your password"
          />
          {validate.error && (
            <div role="alert" className="alert alert-error p-3 px-4">
              <div className="flex justify-between w-full">
                <IoIosCloseCircleOutline
                  size={24}
                  className="cursor-pointer"
                  onClick={() => setValidate({ ...validate, error: false })}
                />
                <span>{validate.message}</span>
              </div>
            </div>
          )}
        </div>
      </Fade>
      <Fade right delay={400}>
        {!isLoading ? (
          <button
            type="submit"
            className="btn btn-primary text-white rounded-md w-full opacity-90 capitalize text-base"
          >
            login
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-primary text-white rounded-md w-full opacity-90 capitalize text-base gap-2 items-center"
          >
            <VscLoading className="animate-spin" size={20} />
            loading
          </button>
        )}
        <p className="text-center mt-5">
          Don’t have an account? Let’s{" "}
          <span className="text-primary font-semibold cursor-pointer">
            <Link href="/auth/sign-up">Sign Up</Link>
          </span>{" "}
        </p>
      </Fade>
    </form>
  );
}

export default Login;
