"use client";
import { useState } from "react";
import Image from "next/image";
import avatar from "public/avatar.png";
import arrow from "public/arrow-up-black.png";
import { useRouter } from "next/navigation";
import { GoArrowRight } from "react-icons/go";
import { useSelector } from "react-redux";
import { useEffect } from "react/cjs/react.development";

const Btn = ({ title, toggle, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center mt-5 text-[#4D4B57] border-none justify-between btn bg-[#E5E8ED] w-full h-10 hover:btn-primary max-w-lg capitalize"
    >
      <p>{title}</p>
      {toggle}
      <GoArrowRight size={30} />
    </button>
  );
};

function Profile() {
  const router = useRouter();
  const [date, setdate] = useState(true);
  const user = useSelector((state) => state.user.user);

  return (
    <div className="w-full md:shadow-xl rounded-2xl py-10 md:bg-white md:p-5">
      <div className="w-full flex flex-col items-center mt-10">
        <Image src={avatar} alt="avatar" className="w-20" />
        <p className="text-[#7A7886] mt-3 font-semibold cursor-pointer">Edit</p>
        <p className="text-2xl text-[#4D4B57] font-bold mt-4">
          {user?.username}
        </p>
        <p className="text-[#7A7886]">
          {"+62 "}
          {user?.phone_number && user.phone_number !== "null"
            ? user.phone_number
            : "-"}
        </p>
      </div>
      <div className="mt-10 flex flex-col items-center">
        <Btn
          onClick={() => router.push("/dashboard/personal-information")}
          arrow={<Image className="w-7 h-8 rotate-90" src={arrow} alt="" />}
          title="Personal Information"
        />
        <Btn
          arrow={<Image className="w-7 h-8 rotate-90" src={arrow} alt="" />}
          title="Change Password"
        />
        <Btn
          arrow={<Image className="w-7 h-8 rotate-90" src={arrow} alt="" />}
          title="Change PIN"
        />
        <div className="w-full md:hidden flex justify-center">
          <div className="flex items-center mt-5 font-semibold text-[#4D4B57] border-none justify-between bg-[#E5E8ED] w-full py-3 rounded-lg px-4 max-w-lg">
            <p>Notification</p>
            <input type="checkbox" className="toggle toggle-primary" />
          </div>
        </div>
        <Btn title="Logout" />
      </div>
    </div>
  );
}

export default Profile;
