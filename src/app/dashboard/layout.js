"use client";
import React, { useEffect, useState } from "react";
import Navbar from "src/component/Navbar";
import Navigation from "src/component/Navigation";
import Footer from "src/component/Footer";
import { useRouter } from "next/navigation";
import Topup from "src/component/Topup";
import Cookies from "js-cookie";
import { redirect } from "next/navigation";
import { useDispatch } from "react-redux";
import { fetchUserById } from "@/redux/user/userAction";

function LayoutDashbord({ children }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const userId = Cookies.get("@userLogin");
  const [showModal, setShowModal] = useState(false);

  if (!userId || userId == null || userId == undefined) {
    redirect("/");
  }

  useEffect(() => {
    dispatch(fetchUserById(userId));
  }, [userId, dispatch]);

  const handleOpenModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <main className="flex flex-col items-center w-full">
      <Navbar />
      <div className="container flex justify-center h-screen">
        <div className="flex gap-5 w-full md:py-5 md:pt-24 h-screen">
          <Navigation onClick={handleOpenModal} />
          {children}
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default LayoutDashbord;
