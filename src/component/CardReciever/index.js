"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import avatar from "public/avatar.png";
import { useRouter } from "next/navigation";
import axiosInstance from "@/helper/axiosInstance";

function Reciever() {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [serach, setSerach] = useState("");

  const getData = () => {
    axiosInstance
      .get(`/users?search=${serach}`)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, [serach]);

  return (
    <>
      <div className="flex flex-col md:bg-white md:rounded-2xl w-full md:shadow-xl h-full md:p-6 md:border">
        <p className="hidden md:block font-bold mb-3">Reciever</p>
        <div className="w-full flex justify-center mb-5">
          <input
            onChange={(e) => setSerach(e.target.value)}
            type="text"
            placeholder="Serach Your Contact"
            className="input input-ghost w-full bg-[#3A3D421A]"
          />
        </div>
        <div className="overflow-scroll scrollbar-hide flex flex-col gap-5">
          {data.map((item, i) => (
            <div
              key={i}
              onClick={() => router.push(`/Transfer/${item.user_id}`)}
              className="bg-base-100 shadow-md w-full md:shadow-none cursor-pointer p-3 md:p-0 rounded-md"
            >
              <div className="flex justify-start items-center">
                <Image src={avatar} alt="avataravatar" className="w-12 h-12" />
                <div className="flex flex-col w-2/3 ml-2">
                  <p className="font-semibold text-md mb-1">{item.username}</p>
                  <p className="font-normal text-[#646464] text-sm">
                    {item.phone_number}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Reciever;
