"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import avatar from "public/avatar.png";
import bell from "public/bell.png";
import BeforeLogin from "./beforeLogin";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import axiosInstance from "@/helper/axiosInstance";

function Navbar() {
  // const data = getUser()
  // console.log(data);
  const [data, setData] = useState([]);
  const userId = Cookies.get("@userLogin");
  useEffect(() => {
    axiosInstance
      .get(`/users/${userId}`)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => console.log(err));
  }, [userId]);

  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (Cookies.get("@userLogin")) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, []);

  const onLogout = () => {
    Cookies.remove("@userLogin");
    setIsLogin(false);
    router.push("/Home");
  };

  return (
    <div className="hidden md:flex justify-center w-full bg-red-900 fixed z-20">
      <div className="navbar bg-base-100 w-full p-0 shadow-md flex justify-center h-[80px] ">
        <div className="container flex items-center">
          <div onClick={() => router.push("/")} className="flex-1">
            <a className="btn btn-ghost normal-case text-2xl text-[#6379F4]">
              FazzPay
            </a>
          </div>
          {isLogin ? (
            <>
              <div className="flex-none">
                <div className="dropdown dropdown-end top-1">
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="rounded">
                      <Image src={avatar} alt="avatar" className="w-14" />
                    </div>
                  </label>
                  <div>
                    <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box absolute left-[90]">
                      <li className='flex justify-between"'>
                        <a className="flex justify-between">Profile</a>
                      </li>
                      <li>
                        <a>Settings</a>
                      </li>
                      <li>
                        <button onClick={() => onLogout()}>Logout</button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="flex justify-end items-center w-48 h-12">
                <div className="w-2/3 mr-5 flex flex-col justify-between h-full">
                  <p className="font-bold text-base">{data.username}</p>
                  <p className="font-normal text-xs text-[#646464]">
                    {data.phone_number}
                  </p>
                </div>
                <Image src={bell} alt="avatar" className="w-8 h-8" />
              </div>
            </>
          ) : (
            <BeforeLogin />
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
