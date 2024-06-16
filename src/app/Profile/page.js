"use client";
import Navbar from "src/component/Navbar";
import { useState } from "react";
import Navigation from "src/component/Navigation";
import Footer from "src/component/Footer";
import Image from "next/image";
import avatar from "public/avatar.png";
import arrow from "public/arrow-up-black.png";
import { useRouter } from "next/navigation";

const Btn = ({ title, arrow, toggle, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center mt-5 text-[#4D4B57] border-none justify-between btn bg-[#E5E8ED] w-full h-10"
    >
      <p>{title}</p>
      {toggle}
      {arrow}
    </button>
  );
};

function Profile() {
  const router = useRouter();
  const [date, setdate] = useState(true);

  return (
    <div className="w-full flex flex-col items-center">
      <Navbar />
      <div className="container flex justify-between md:mt-[100px] mb-5">
        <Navigation />
        <div className="md:w-[75%] w-full md:shadow-xl rounded-2xl md:px-[206px] py-[63px]">
          <div className="w-full flex flex-col items-center mt-10">
            <Image src={avatar} alt="avatar" className="w-20" />
            <p className="text-[#7A7886] mt-3">Edit</p>
            <p className="text-2xl text-[#4D4B57] font-bold mt-4">
              Robert Chandler
            </p>
            <p className="text-[#7A7886]">+62 813-9387-7946</p>
          </div>
          <div className="mt-10">
            <Btn
              onClick={() => router.push("/PersonalInformation")}
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
            <div className="w-full md:hidden">
              <div className="flex items-center mt-5 font-semibold text-[#4D4B57] border-none justify-between bg-[#E5E8ED] w-full py-3 rounded-lg px-4">
                <p>Notification</p>
                <input type="checkbox" className="toggle toggle-primary" />
              </div>
            </div>
            <Btn title="Logout" />
          </div>
        </div>
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
}

export default Profile;
