"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import avatar from "public/avatar.png";
import { useRouter, redirect } from "next/navigation";
import Cookies from "js-cookie";
import axiosInstance from "@/helper/axiosInstance";
import SkeletonUser from "../SkeletonUser";

function CardHistory({ heigth = "h-full" }) {
  const router = useRouter();
  const userId = Cookies.get("@userLogin");
  const [isLoading, setIsLoading] = useState(false);
  if (!userId || userId == null || userId == undefined) {
    redirect("/");
  }
  const [data, setData] = useState([]);

  const getAllUsers = () => {
    setIsLoading(true);
    axiosInstance
      .get(`/transaction/transfer/${userId}`)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <>
      <div
        className={`flex flex-col md:bg-white  md:rounded-2xl w-full  md:shadow-md ${heigth} md:p-5 `}
      >
        <div className="flex justify-between md:pb-5">
          <h2 className="text-lg font-bold">Transaction History</h2>
          <p
            className="font-semibold text-[#6379F4] cursor-pointer"
            onClick={() => router.push("/dashboard/history")}
          >
            See all
          </p>
        </div>
        <div className="overflow-scroll scrollbar-hide grid grid-cols-1 gap-3 lg:gap-4 py-3 lg:p-0 ">
          {!isLoading ? (
            data.length ? (
              data?.map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded p-3 shadow w-full md:shadow-none lg:p-0"
                >
                  <div className="flex flex-row justify-between items-center">
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
                      <h3 className="text-[#FF5B37]  font-semibold">
                        Rp -{item.amount}
                      </h3>
                    ) : (
                      <h3 className="text-[#1EC15F] font-semibold">
                        Rp +{item.amount}
                      </h3>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <p>No Transaction</p>
            )
          ) : (
            <>
              <SkeletonUser />
              <SkeletonUser />
              <SkeletonUser />
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default CardHistory;
