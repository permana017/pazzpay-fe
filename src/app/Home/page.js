"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import avatar from "public/avatar.png";
import bell from "public/bell.png";
import arrowUp from "public/arrow-up.png";
import plus from "public/plus.png";
import Navbar from "src/component/Navbar";
import Navigation from "src/component/Navigation";
import CardHistory from "src/component/CardHistory";
import CardGrapich from "src/component/CardGraphic";
import Footer from "src/component/Footer";
import CardSaldo from "src/component/CardSaldo";
import { useRouter } from "next/navigation";
import Topup from "src/component/Topup";
import Cookies from "js-cookie";
import { redirect } from "next/navigation";
import axios from "axios";

function Home() {
    const router = useRouter();
    const userId = Cookies.get("@userLogin");
    const [showModal, setShowModal] = useState(false);

    if (!userId || userId == null || userId == undefined) {
        redirect("/");
    }
    const [user, setUser] = useState([]);
    const getUser = () => {
        axios
            .get(`https://pazzpaybe.cyclic.app/api/users/${userId}`)
            .then((res) => {
                setUser(res.data.data);
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        getUser();
    }, [userId]);

    const handleOpenModal = () => {
        console.log('masuk sini');
        setShowModal(true);
    };
    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <main className="flex flex-col items-center w-full">
            <Navbar />
            <div className="container flex justify-center h-screen">
                <div className="flex w-full md:p-5 md:pt-28 h-screen">
                    <Navigation onClick={handleOpenModal} />
                    <section className="md:w-[76%] w-full h-full flex flex-col">
                        <div className="my-5 flex justify-between items-center md:hidden">
                            <Image src={avatar} alt="avatar" className="w-14" />
                            <div className="w-2/3 text-lg">
                                <p className="font-normal text-[#646464]">Hello,</p>
                                <p className="font-bold">{user.username}</p>
                            </div>
                            <Image src={bell} alt="avatar" className="w-8 h-8" />
                        </div>
                        <CardSaldo
                            onClose={handleCloseModal}
                            onClick={handleOpenModal}
                            isOpen={showModal}
                            user={user}
                            refetch={getUser}
                        />
                        <div className="flex justify-between md:hidden">
                            <button
                                onClick={() => router.push("/Transfer")}
                                className="btn btn-active btn-ghost text-base h-14 font-bold text-[#514F5B] mt-8 mb-10 w-[48%]"
                            >
                                <Image src={arrowUp} className="w-7 mr-4" alt="icon" />
                                Transfer
                            </button>
                            <div className="btn btn-active btn-ghost text-base h-14 font-bold text-[#514F5B] mt-8 mb-10 w-[48%]">
                                <Image src={plus} className="w-7 mr-4" alt="icon" />
                                <Topup
                                    showModal={
                                        <label
                                            htmlFor="my-modal"
                                            className="cursor-pointer hover:text-[#6379F4] hover:font-semibold"
                                        >
                                            Topup
                                        </label>
                                    }
                                />
                            </div>
                        </div>
                        <div className="flex pt-5 h-[calc(100%-126px)]">
                            <div className="hidden md:flex md:w-[55%] md:mr-5 h-max">
                                <CardGrapich />
                            </div>
                            <div className="md:w-[45%] w-full h-full">
                                <CardHistory heigth="h-full" />
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <Footer />
        </main>
    );
}

export default Home;
