"use client";
import Navbar from "src/component/Navbar";
import Navigation from "src/component/Navigation";
import Footer from "src/component/Footer";
import Filter from "src/component/Filter";
import { useRouter } from "next/navigation";
import Reciever from "src/component/CardReciever";
import { FaChevronLeft } from "react-icons/fa6";

function Transfer() {
  const router = useRouter();
  return (
    <>
      <main className="flex flex-col items-center w-full h-screen">
        <Navbar />
        <div className="container md:pt-28 md:pb-5 flex justify-center h-screen">
          <Navigation />
          <section className="md:w-[76%] w-full h-full">
            <div className="py-5 flex items-center md:hidden">
              <FaChevronLeft />
              <p className="font-bold ml-2">Reciever</p>
            </div>
            <Reciever />
            <Filter />
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Transfer;
