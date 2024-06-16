"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import arrowUp from "public/arrow-up-black.png";
import edit from "public/edit-2.png";
import Navbar from "src/component/Navbar";
import Navigation from "src/component/Navigation";
import avatar from "public/avatar.png";
import Footer from "src/component/Footer";
import { useRouter, usePathname, redirect } from "next/navigation";
import axios from "axios";
import Cookies from "js-cookie";
import { rupiah } from "@/helper/formatCurrency";
import { FaChevronLeft } from "react-icons/fa6";
import axiosInstance from "@/helper/axiosInstance";

function TransferInput() {
  const router = useRouter();
  const userId = Cookies.get("@userLogin");

  const pathname = usePathname();
  const id = pathname.split("/")[2];
  const [result, setResult] = useState(0);
  console.log("result", result);
  const [data, setData] = useState([]);
  const [dataUser, setDataUser] = useState([]);
  const [desc, setdesc] = useState("");

  useEffect(() => {
    axiosInstance
      .get(`/users/${id}`)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const getDataUser = () => {
    axiosInstance
      .get(`/users/${userId}`)
      .then((res) => {
        setDataUser(res.data.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getDataUser();
  }, []);

  const dataTransfer = {
    amount: result,
    sender_id: dataUser.user_id,
    reciever_id: data.user_id,
    sender_name: dataUser.username,
    reciever_name: data.username,
    phone_sender: dataUser.phone_number,
    phone_reciever: data.phone_number,
    description: desc,
    img_sender: data.img,
    balance_left: dataUser.saldo - result,
  };

  const handleTransfer = (event) => {
    event.preventDefault();
    Cookies.set("@transfer", JSON.stringify(dataTransfer));
    router.push(`/Transfer/Confirmation/${data?.user_id}`);
  };
  const backspace = () => {
    setResult(result.slice(0, result.length - 1));
  };

  const btn = "btn btn-ghost w-20 mx-3 rounded-full text-4xl border-none h-20";

  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center w-full h-screen">
        <div className="container md:mt-28 flex justify-center h-screen md:pb-5">
          <Navigation />
          <form
            onSubmit={handleTransfer}
            className="md:w-[76%] w-full md:shadow-md md:rounded-3xl md:border overflow-scroll scrollbar-hide md:p-6 relative"
          >
            <div className="py-5 flex items-center md:hidden">
              <FaChevronLeft onClick={() => router.push("/Transfer")} />
              <p className="font-bold ml-3">Transfer</p>
            </div>
            <p className="hidden md:block font-bold mb-3">Transfer</p>
            <div className="shadow-md w-full md:shadow-none mb-12 p-4 rounded-md flex flex-row items-center">
              <Image src={avatar} alt="avataravatar" className="w-12 h-12" />
              <div className="flex flex-col justify-between w-2/3 ml-3">
                <p className="font-semibold text-md mb-2">{data.username}</p>
                <p className="font-normal text-[#646464] text-sm">
                  {data.phone_number}
                </p>
              </div>
            </div>
            <div className="w-full">
              <p className="text-[#7C7895] font-semibold text-center">
                {rupiah(dataUser.saldo)} Available
              </p>
              <input
                onChange={(e) => setResult(e.target.value)}
                value={result}
                placeholder="0.00"
                type="number"
                className="input w-full text-[#6379F4] focus:outline-none text-center text-5xl font-semibold py-10"
              />
              <div className="flex justify-center  mt-28">
                <div className="flex items-center border-b-[3px] w-full md:w-[60%]">
                  <Image src={edit} alt="name" className="w-[25px] mr-5 " />
                  <input
                    onChange={(e) => setdesc(e.target.value)}
                    type="text"
                    placeholder="Add some notes"
                    className="w-full text-base outline-none py-3"
                  />
                </div>
              </div>
            </div>
            <div className="absolute bottom-6 right-6">
              <button className="btn btn-primary text-end" type="submit">
                continue
              </button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default TransferInput;
