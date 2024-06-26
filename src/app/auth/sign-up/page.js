"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import Fade from "react-reveal/Fade";
import axiosInstance from "@/helper/axiosInstance";
import Swal from "sweetalert2";
import { MdOutlineEmail, MdOutlinePhone } from "react-icons/md";
import Input from "../../../component/Input";
import InputPassword from "../../../component/InputPassword";
import { z } from "zod";
import { VscLoading } from "react-icons/vsc";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { FiUser } from "react-icons/fi";
import Link from "next/link";

function Login() {
  const [signForm, setSignupForm] = useState({
    email: "",
    password: "",
    username: "",
    phone_number: "",
  });
  const [validate, setValidate] = useState({ error: false, message: "" });
  const formSchema = z.object({
    username: z.string().min(1, "Username is required"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password is required min 8 character"),
    phone_number: z.string().min(9, "phone number required min 9 character"),
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    username: "",
    phone_number: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async () => {
    setIsLoading(true);
    try {
      const res = await axiosInstance.post("/auth/regis-user", signForm);
      Swal.fire({
        title: "Success Sign Up!",
        text: "Please Login to continue",
        icon: "success",
        confirmButtonColor: "#6379F4",
      });
      router.push("/auth/login");
    } catch (error) {
      setValidate({ error: true, message: error.response.data?.message });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChangeInput = (event) => {
    const { value, name } = event.target;
    setSignupForm({ ...signForm, [name]: value });
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
      formSchema.parse({ ...signForm });
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
    <form
      onSubmit={handleSubmit}
      className="w-full flex flex-col justify-center h-full"
    >
      <div>
        <Fade right>
          <p className="mb-5 text-xl lg:text-2xl font-semibold text-wrap lg:max-w-[90%]">
            Start Accessing Banking Needs With All Devices and All Platforms
            With 30.000+ Users
          </p>
        </Fade>
        <Fade right delay={200}>
          <p className="text-sm lg:text-base text-gray-400">
            Transfering money is eassier than ever, you can access FazzPay
            wherever you are. Desktop, laptop, mobile phone? we cover all of
            that for you!
          </p>
        </Fade>
        <Fade right delay={300}>
          <div
            className={`flex flex-col gap-5 my-8 relative ${
              validate.error ? "mb-8 mt-6" : ""
            }`}
          >
            <Input
              name="username"
              icon={<FiUser size={24} />}
              value={signForm.username}
              onChange={handleChangeInput}
              placeholder="Input your username"
              error={errors.username}
            />
            <Input
              name="email"
              icon={<MdOutlineEmail size={24} />}
              value={signForm.email}
              onChange={handleChangeInput}
              placeholder="Input your e-mail"
              error={errors.email}
            />
            <Input
              type="number"
              name="phone_number"
              icon={<MdOutlinePhone size={24} />}
              value={signForm.phone_number}
              onChange={handleChangeInput}
              placeholder="Input your phone number"
              error={errors.phone_number}
            />
            <InputPassword
              name="password"
              value={signForm.password}
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
              Sign Up
            </button>
          ) : (
            <button
              type="button"
              className="btn btn-primary text-white rounded-md w-full opacity-90 text-base gap-2 items-center capitalize"
            >
              <VscLoading className="animate-spin" size={20} />
              loading
            </button>
          )}
          <p className="text-center mt-5">
            Already have an account? Let’s{" "}
            <Link href="/auth/login">
              <span className="text-primary font-semibold cursor-pointer">
                Login
              </span>{" "}
            </Link>
          </p>
        </Fade>
      </div>
    </form>
  );
}

export default Login;
