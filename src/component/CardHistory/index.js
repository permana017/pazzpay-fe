"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import avatar from "public/avatar.png";
import { useRouter, redirect } from "next/navigation";
import Cookies from "js-cookie";
import axiosInstance from "@/helper/axiosInstance";

function CardHistory({ heigth }) {
  const router = useRouter();
  const userId = Cookies.get("@userLogin");
  if (!userId || userId == null || userId == undefined) {
    redirect("/");
  }
  const [data, setData] = useState([]);
  useEffect(() => {
    axiosInstance
      .get(`/transaction/transfer/${userId}`)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div
        className={`flex flex-col md:bg-white  md:rounded-2xl w-full  md:shadow-xl ${heigth} p-5`}
      >
        <div className="flex justify-between mb-6">
          <h2 className="text-lg font-bold">Transaction History</h2>
          <p
            className="font-semibold text-[#6379F4] cursor-pointer"
            onClick={() => router.push("/History")}
          >
            See all
          </p>
        </div>
        <div className="overflow-scroll scrollbar-hide">
          {data?.map((item, i) => (
            <div
              key={i}
              className="bg-base-100 shadow-md w-full my-2 md:my-4 md:shadow-none"
            >
              <div className=" flex flex-row justify-between items-center">
                <div className="flex items-center gap-2">
                  <Image
                    src={avatar}
                    alt="avataravatar"
                    className="w-12 h-12"
                  />
                  <div className="w-2/3">
                    <p className="font-semibold text-md mb-1">
                      {item.sender_id === userId
                        ? item.reciever_name
                        : item.sender_name}
                    </p>
                    <p className="font-normal text-[#646464] text-sm">
                      {item.sender_id === userId ? "Transfer" : "Accept"}
                    </p>
                  </div>
                </div>
                {item.sender_id === userId ? (
                  <h3 className="text-[#FF5B37]  text-lg font-bold">
                    -{item.amount}
                  </h3>
                ) : (
                  <h3 className="text-[#1EC15F] text-lg font-bold">
                    +{item.amount}
                  </h3>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default CardHistory;
