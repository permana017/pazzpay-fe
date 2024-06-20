"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import avatar from "public/avatar.png";
import arrowUp from "public/arrow-up.png";
import plus from "public/plus.png";
import CardHistory from "src/component/CardHistory";
import CardGrapich from "src/component/CardGraphic";
import CardSaldo from "src/component/CardSaldo";
import { useRouter } from "next/navigation";
import Topup from "src/component/Topup";
import Cookies from "js-cookie";
import { redirect } from "next/navigation";
import axiosInstance from "@/helper/axiosInstance";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserById } from "@/redux/user/userAction";
import { FaArrowUp, FaPlus } from "react-icons/fa6";

function Dashborad() {
  const router = useRouter();
  const userId = Cookies.get("@userLogin");
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const user = useSelector((state) => state.user.user);
  const isLoading = useSelector((state) => state.user.loading);

  console.log(user);

  if (!userId || userId == null || userId == undefined) {
    redirect("/");
  }
  const getUser = () => {
    dispatch(fetchUserById(userId));
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <section className="w-full h-full flex flex-col py-8 lg:py-0">
      <div className="my-5 flex gap-2 md:gap-4 items-center md:hidden">
        {isLoading ? (
          <>
            <div className="w-12 h-12 md:h-14  md:w-14 bg-slate-400 animate-pulse rounded-md"></div>
            <div className="w-2/3 lg:text-lg">
              <p className="p-2 bg-slate-400 animate-pulse rounded w-20 mb-2"></p>
              <p className="p-2 bg-slate-400 animate-pulse rounded w-40"></p>
            </div>
          </>
        ) : (
          <>
            <Image src={avatar} alt="avatar" className="w-12 md:w-14" />
            <div className="w-2/3 lg:text-lg">
              <p className="font-normal text-[#646464]">Hello,</p>
              <p className="font-bold">{user?.username}</p>
            </div>
          </>
        )}
      </div>
      <CardSaldo onClick={handleOpenModal} user={user} />
      <Topup
        isOpen={showModal}
        onClose={handleCloseModal}
        data={user}
        refetch={getUser}
      />
      <div className="flex justify-between md:hidden py-5">
        <button
          onClick={() => router.push("/dashboard/transfer")}
          className="btn btn-active btn-ghost text-base  font-bold text-[#514F5B] w-[48%] capitalize"
        >
          <FaArrowUp size={18} className="mr-3 text-blue-500" />
          Transfer
        </button>
        <button
          onClick={handleOpenModal}
          className="btn btn-active btn-ghost text-base font-bold text-[#514F5B] w-[48%] capitalize"
        >
          <FaPlus size={18} className="mr-3 text-blue-500" />
          Topup
        </button>
      </div>
      <div className="flex flex-col lg:flex-row pt-5 h-[calc(100%-126px)] gap-4 lg:gap-0">
        <div className="hidden md:flex md:w-full lg:w-[55%] md:mr-5 h-max">
          <CardGrapich />
        </div>
        <div className="lg:w-[45%] w-full h-full">
          <CardHistory heigth="h-full" />
        </div>
      </div>
    </section>
  );
}

export default Dashborad;
