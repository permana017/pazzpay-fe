"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import edit from "public/edit-2.png";
import avatar from "public/avatar.png";
import { useRouter, usePathname, redirect } from "next/navigation";
import Cookies from "js-cookie";
import { rupiah } from "@/helper/formatCurrency";
import { FaChevronLeft } from "react-icons/fa6";
import axiosInstance from "@/helper/axiosInstance";
import { z } from "zod";
import CurrencyInput from "react-currency-input-field";

function TransferInput() {
  const router = useRouter();
  const userId = Cookies.get("@userLogin");

  const pathname = usePathname();
  const id = pathname.split("/")[3];
  const [amount, setAmount] = useState("");
  const [amountErr, setAmountErr] = useState(0);
  const [data, setData] = useState([]);
  const [dataUser, setDataUser] = useState([]);
  const [desc, setdesc] = useState("");
  const amountSchema = z
    .number()
    .min(2000, { message: "Minimum transfer Rp 2000" })
    .max(dataUser?.saldo, "Your balance is not enough");

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
    amount: amount,
    sender_id: dataUser.user_id,
    reciever_id: data.user_id,
    sender_name: dataUser.username,
    reciever_name: data.username,
    phone_sender: dataUser.phone_number,
    phone_reciever: data.phone_number,
    description: desc,
    img_sender: data.img,
    balance_left: dataUser.saldo - amount,
  };

  const handleChangeInput = async (value) => {
    let number = Math.floor(value);
    setAmount(number);
    try {
      amountSchema.parse(number);
      setAmountErr("");
    } catch (error) {
      if (!number) {
        setAmountErr("Minimum transfer Rp 2000");
      } else {
        setAmountErr(error.errors[0].message);
      }
    }
  };

  const handleTransfer = async (event) => {
    event.preventDefault();
    try {
      amountSchema.parse(amount);
      setAmountErr("");
      Cookies.set("@transfer", JSON.stringify(dataTransfer));
      router.push(`/dashboard/transfer/confirmation/${data?.user_id}`);
    } catch (error) {
      if (!amount) {
        setAmountErr("Minimum transfer Rp 2000");
      } else {
        setAmountErr(error.errors[0].message);
      }
    }
  };

  return (
    <>
      <form
        onSubmit={handleTransfer}
        className="w-full md:shadow-md md:rounded-2xl overflow-scroll scrollbar-hide md:p-6 relative md:bg-white"
      >
        <div
          onClick={() => router.push("/dashboard/transfer")}
          className="py-5 flex items-center md:hidden cursor-pointer"
        >
          <FaChevronLeft />
          <p className="font-bold ml-2">Transfer</p>
        </div>
        <p className="hidden md:block font-bold mb-3">Transfer</p>
        <div className="shadow-md w-full md:shadow-none mb-12 py-4 rounded-md flex flex-row items-center">
          <Image src={avatar} alt="avataravatar" className="w-12 h-12" />
          <div className="flex flex-col ml-3">
            <p className="font-semibold text-md mb-2">{data.username}</p>
            <p className="font-normal text-[#646464] text-sm">
              {data.phone_number ?? "-"}
            </p>
          </div>
        </div>
        <div className="w-full">
          <p className="text-[#7C7895] font-semibold text-center">
            {rupiah(dataUser.saldo)} Available
          </p>
          {/* <input
            onChange={handleChangeInput}
            value={amount}
            placeholder="0.00"
            type="number"
            className="input w-full text-[#6379F4] focus:outline-none text-center text-5xl font-semibold py-10 bg-transpareninput w-full text-[#6379F4] focus:outline-none text-center text-5xl font-semibold py-10 bg-transparent"
          /> */}
          <div className="flex items-center">
            <CurrencyInput
              id="input-example"
              name="input-name"
              groupSeparator="."
              decimalSeparator=","
              className="input w-full text-[#6379F4] focus:outline-none text-center text-5xl font-semibold  py-10"
              placeholder="0.00"
              prefix="Rp "
              decimalsLimit={2}
              onValueChange={(value, name, values) => handleChangeInput(value)}
            />
          </div>
          {amountErr ? (
            <p className="text-center text-red-500">{amountErr}</p>
          ) : null}
          <div className="flex justify-center  mt-28">
            <div className="flex items-center border-b-[3px] w-full md:w-[60%]">
              <Image src={edit} alt="name" className="w-[25px] mr-5 " />
              <input
                onChange={(e) => setdesc(e.target.value)}
                type="text"
                placeholder="Add some notes"
                className="w-full text-base outline-none py-3 bg-transparent"
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-6 right-6">
          <button className="btn btn-primary text-end capitalize" type="submit">
            continue
          </button>
        </div>
      </form>
    </>
  );
}

export default TransferInput;
