"use client";
import { Inter } from "@next/font/google";
import Navbar from "src/component/Navbar";
import img from "../../src/assets/png-phone.webp";
import Image from "next/image";
import imgPartner from "src/assets/partners.png";
import Phone from "src/assets/phone-circle.png";
import Lock from "src/assets/lock-circle.png";
import download_icon from "src/assets/download_icon.png";
import phoneCart from "src/assets/phone-cart.webp";
import phoneHistory from "src/assets/phone-history.webp";
import imgResponder from "src/assets/users.png";
import { useRouter } from "next/navigation";
import React from "react";
import Fade from "react-reveal/Fade";
import Button from "src/component/Button/index";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();

  return (
    <div>
      <section className="w-full bg-[url('../../src/assets/banner.webp')] bg-cover flex flex-col items-center">
        <navbar className="fixed z-10 backdrop-blur-2xl bg-[#6379F4]/80 shadow-lg w-full flex justify-center">
          <div className="container z-20">
            <div className="w-full flex justify-between md:h-[100px] h-[80px] items-center">
              <Fade left>
                <p className="w-50 md:text-[30px] text-[24px] font-bold text-white">
                  FazzPay
                </p>
              </Fade>
              <Fade right>
                <div className="flex gap-3">
                  <Button
                    onClick={() => router.push("/auth/login")}
                    outline
                    padding="p-2.5 px-5"
                  >
                    Login
                  </Button>
                  <Button
                    onClick={() => router.push("/auth/sign-up")}
                    outline
                    padding="p-2.5 px-4"
                  >
                    Signup
                  </Button>
                </div>
              </Fade>
            </div>
          </div>
        </navbar>
        <div className="container flex mt-[140px]">
          <Fade left>
            <div className="md:w-1/2 md:pt-40 pt-24 w-full pb-10">
              <p className="text-xl text-[48px] leading-[60px] md:text-[60px] font-bold text-[#FFFFFF] mb-10 h-auto md:leading-[90px]">
                Awesome App For Saving Time.
              </p>
              <p className="md:text-xl text-lg text-[#FFFFFF] mb-12">
                We bring you a mobile app for banking problems that oftenly
                wasting much of your times.
              </p>
              <button className="btn bg-[#FFF] border-none color-[#6379F4] px-8">
                Try It Free
              </button>
            </div>
          </Fade>
          <Fade bottom>
            <div className="hidden md:flex w-1/2 pt-20">
              <Image
                src={img}
                alt="image"
                width={600}
                className="h-[750px] ml-10"
              />
            </div>
          </Fade>
        </div>
      </section>
      <section className="w-full flex justify-center bg-[#473AD10F]">
        <div className="container">
          <div className="md:py-[90px] py-12">
            <Image
              src={imgPartner}
              alt="partner"
              className="md:h-[120px] h-[60px] w-full"
            />
          </div>
        </div>
      </section>
      <section className="w-full flex justify-center bg-[#FAFCFF]">
        <div className="container">
          <div className="flex flex-col items-center md:py-[120px] py-16">
            <Fade bottom>
              <p className="md:text-[60px] text-[48px] font-extrabold mb-8 text-center md:text-left">
                <span className="text-[#6379F4]">About</span> the Application.
              </p>
            </Fade>
            <Fade bottom>
              <p className="text-xl md:w-[55%] w-[95%] text-center">
                We have some great features from the application and it’s
                totally free to use by all users around the world.
              </p>
            </Fade>
            <div className="w-full mt-10  flex flex-col md:flex-row md:justify-between">
              <Fade bottom>
                <div className="card md:w-[32%] w-full mb-8 md:mb-0 bg-base-100 shadow-xl ">
                  <div className="card-body items-center">
                    <Image src={Phone} className="mt-4" alt="hahahah" />
                    <h2 className="card-title py-5">24/7 Support</h2>
                    <p className="w-[90%] text-center text-[#3A3D42E5]">
                      We have 24/7 contact support so you can contact us
                      whenever you want and we will respond it.
                    </p>
                  </div>
                </div>
              </Fade>
              <Fade bottom delay={200}>
                <div className="card md:w-[32%] w-full mb-8 md:mb-0 bg-base-100 shadow-xl">
                  <div className="card-body items-center">
                    <Image src={Lock} className="mt-4" alt="hahahah" />
                    <h2 className="card-title py-5">Data Privacy</h2>
                    <p className="w-[90%] text-center text-[#3A3D42E5]">
                      We make sure your data is safe in our database and we will
                      encrypt any data you submitted to us.
                    </p>
                  </div>
                </div>
              </Fade>
              <Fade bottom delay={400}>
                <div className="card md:w-[32%] w-full mb-8 md:mb-0 bg-base-100 shadow-xl">
                  <div className="card-body items-center">
                    <Image src={download_icon} className="mt-4" alt="hahahah" />
                    <h2 className="card-title py-5">Easy Download</h2>
                    <p className="w-[90%] text-center text-[#3A3D42E5]">
                      Zwallet is 100% totally free to use it’s now available on
                      Google Play Store and App Store.
                    </p>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </section>
      <section className="flex justify-center w-full bg-[#473AD10F]">
        <div className="container">
          <div className="w-full flex justify-between">
            <div className="hidden md:w-[40%] md:flex md:flex-col">
              <Fade top>
                <Image src={phoneHistory} alt="" className="w-[469px]" />
              </Fade>
              <Fade bottom>
                <Image src={phoneCart} alt="" className="w-[469px]" />
              </Fade>
            </div>
            <div className="md:w-[60%] w-full md:py-[174px] py-[60px] md:pl-5">
              <Fade bottom>
                <p className="md:text-[60px] text-[48px] md:w-[80%] w-full font-bold mb-8">
                  All The <span className="text-[#6379F4]"> Great </span>
                  FazzPay Features.
                </p>
              </Fade>
              <div className="mt-10 w-full flex flex-col">
                <Fade right delay={200}>
                  <div className="card w-full bg-base-100 shadow-xl">
                    <div className="card-body p-6">
                      <h2 className="card-title">
                        <span className="text-[#6379F4]">1.</span>Small Fee
                      </h2>
                      <p className="text-[#3A3D42E5] md:text-xl text-lg">
                        We only charge 5% of every success transaction done in
                        FazzPay app.
                      </p>
                    </div>
                  </div>
                </Fade>
                <Fade right delay={400}>
                  <div className="card w-full bg-base-100 shadow-xl mt-8">
                    <div className="card-body p-6">
                      <h2 className="card-title">
                        <span className="text-[#6379F4]">2.</span>Data Secured
                      </h2>
                      <p className="text-[#3A3D42E5] md:text-xl text-lg">
                        All your data is secured properly in our system and it’s
                        encrypted.
                      </p>
                    </div>
                  </div>
                </Fade>
                <Fade right delay={600}>
                  <div className="card w-full bg-base-100 shadow-xl mt-8">
                    <div className="card-body p-6">
                      <h2 className="card-title">
                        <span className="text-[#6379F4]">3.</span>User Friendly
                      </h2>
                      <p className="text-[#3A3D42E5] md:text-xl text-lg">
                        FazzPay come up with modern and sleek design and not
                        complicated.
                      </p>
                    </div>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex w-full justify-center bg-[#FAFCFF]">
        <div className="container">
          <div className="w-full flex flex-col items-center md:py-[120px] py-16">
            <Fade bottom>
              <p className="md:text-[60px] text-[48px] font-bold text-center">
                What Users are
                <span className="text-[#6379F4]"> Saying.</span>
              </p>
              <p className="text-xl text-[#3A3D42] md:w-[55%] w-full text-center justify-center mt-8">
                We have some great features from the application and it’s
                totally free to use by all users around the world.
              </p>
            </Fade>
            <Fade bottom delay={400}>
              <div className="w-full mt-10">
                <div className="carousel w-full">
                  <div
                    id="slide1"
                    className="carousel-item relative w-full flex justify-center"
                  >
                    <div className="w-[90%] bg-white md:p-14 p-8 my-14 flex flex-col items-center shadow-xl rounded-xl">
                      <Image
                        src={imgResponder}
                        alt="hahah"
                        className="w-[120px] h-[120px]"
                      />
                      <p className="text-2xl font-semibold mt-4 mb-2">
                        Alex Hansinburg
                      </p>
                      <p className="text-[#56585B] text-lg ">Designer</p>
                      <p className="text-[#56585B] text-xl text-center mt-12">
                        “This is the most outstanding app that I’ve ever try in
                        my live, this app is such an amazing masterpiece and
                        it’s suitable for you who is bussy with their bussiness
                        and must transfer money to another person aut there.
                        Just try this app and see the power!”
                      </p>
                    </div>
                    <div className=" hidden absolute md:flex justify-between transform -translate-y-1/2 left-0 right-0 top-1/2">
                      <a
                        href="#slide4"
                        className="btn bg-white border-none shadow-lg"
                      >
                        ❮
                      </a>
                      <a
                        href="#slide2"
                        className="btn bg-white border-none shadow-lg"
                      >
                        ❯
                      </a>
                    </div>
                  </div>
                  <div
                    id="slide2"
                    className="carousel-item relative w-full flex justify-center"
                  >
                    <div className="w-[90%] bg-white md:p-14 p-8 my-14 flex flex-col items-center shadow-xl rounded-xl">
                      <Image
                        src={imgResponder}
                        alt="hahah"
                        className="w-[120px] h-[120px]"
                      />
                      <p className="text-2xl font-semibold mt-4 mb-2">
                        Alex Hansinburg
                      </p>
                      <p className="text-[#56585B] text-lg ">Designer</p>
                      <p className="text-[#56585B] text-xl text-center mt-12">
                        “This is the most outstanding app that I’ve ever try in
                        my live, this app is such an amazing masterpiece and
                        it’s suitable for you who is bussy with their bussiness
                        and must transfer money to another person aut there.
                        Just try this app and see the power!”
                      </p>
                    </div>
                    <div className=" hidden absolute md:flex justify-between transform -translate-y-1/2 left-0 right-0 top-1/2">
                      <a
                        href="#slide1"
                        className="btn bg-white border-none shadow-lg"
                      >
                        ❮
                      </a>
                      <a
                        href="#slide3"
                        className="btn bg-white border-none shadow-lg"
                      >
                        ❯
                      </a>
                    </div>
                  </div>
                  <div
                    id="slide3"
                    className="carousel-item relative w-full flex justify-center"
                  >
                    <div className="w-[90%] bg-white md:p-14 p-8 my-14 flex flex-col items-center shadow-xl rounded-xl">
                      <Image
                        src={imgResponder}
                        alt="hahah"
                        className="w-[120px] h-[120px]"
                      />
                      <p className="text-2xl font-semibold mt-4 mb-2">
                        Alex Hansinburg
                      </p>
                      <p className="text-[#56585B] text-lg ">Designer</p>
                      <p className="text-[#56585B] text-xl text-center mt-12">
                        “This is the most outstanding app that I’ve ever try in
                        my live, this app is such an amazing masterpiece and
                        it’s suitable for you who is bussy with their bussiness
                        and must transfer money to another person aut there.
                        Just try this app and see the power!”
                      </p>
                    </div>
                    <div className=" hidden absolute md:flex justify-between transform -translate-y-1/2 left-0 right-0 top-1/2">
                      <a
                        href="#slide2"
                        className="btn bg-white border-none shadow-lg"
                      >
                        ❮
                      </a>
                      <a
                        href="#slide4"
                        className="btn bg-white border-none shadow-lg"
                      >
                        ❯
                      </a>
                    </div>
                  </div>
                  <div
                    id="slide4"
                    className="carousel-item relative w-full flex justify-center"
                  >
                    <div className="w-[90%] bg-white md:p-14 p-8 my-14 flex flex-col items-center shadow-xl rounded-xl">
                      <Image
                        src={imgResponder}
                        alt="hahah"
                        className="w-[120px] h-[120px]"
                      />
                      <p className="text-2xl font-semibold mt-4 mb-2">
                        Alex Hansinburg
                      </p>
                      <p className="text-[#56585B] text-lg ">Designer</p>
                      <p className="text-[#56585B] text-xl text-center mt-12">
                        “This is the most outstanding app that I’ve ever try in
                        my live, this app is such an amazing masterpiece and
                        it’s suitable for you who is bussy with their bussiness
                        and must transfer money to another person aut there.
                        Just try this app and see the power!”
                      </p>
                    </div>
                    <div className=" hidden absolute md:flex justify-between transform -translate-y-1/2 left-0 right-0 top-1/2">
                      <a
                        href="#slide3"
                        className="btn bg-white border-none shadow-lg"
                      >
                        ❮
                      </a>
                      <a
                        href="#slide1"
                        className="btn bg-white border-none shadow-lg"
                      >
                        ❯
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </section>
      <footer className="w-full  bg-[#6379F4] flex justify-center">
        <div className="container">
          <div className="py-12 md:py-20 w-full">
            <div className="border-b-[1px] pb-12 mb-4">
              <Fade left delay={200}>
                <p className="text-white font-semibold  text-[34px] mb-[30px]">
                  FazzPay
                </p>
              </Fade>
              <Fade left delay={400}>
                <p className="md:w-1/4 w-full text-[#EFEFEFBF]">
                  Simplify financial needs and saving much time in banking needs
                  with one single app.
                </p>
              </Fade>
              <Fade left delay={600}>
                <div className="w-full flex flex-col text-white md:hidden mt-5">
                  <p>+62 5637 8882 9901</p>
                  <p>contact@fazzpay.com</p>
                </div>
              </Fade>
            </div>
            <div className="w-ful flex justify-between text-[#FFFFFF]">
              <Fade bottom delay={800}>
                <div className="md:w-1/3 w-full">
                  <p>2020 FazzPay. All right reserved.</p>
                </div>
              </Fade>
              <div className="hidden w-1/3 md:flex justify-between">
                <Fade bottom delay={1000}>
                  <p>+62 5637 8882 9901</p>
                </Fade>
                <Fade bottom delay={1000}>
                  <p>contact@fazzpay.com</p>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
