"use client";
import React from "react";
import Image from "next/image";
import CardHistory from "src/component/CardHistory";
import Filter from "src/component/Filter";
import { useRouter } from "next/navigation";
import { FaChevronLeft } from "react-icons/fa6";
import Link from "next/link";

function History() {
  const router = useRouter();
  return (
    <section className="w-full py-8 md:p-0">
      <Link
        href="/dashboard"
        className=" flex items-center md:hidden mb-5 gap-1"
      >
        <FaChevronLeft />
        <p className="font-bold text-lg">History</p>
      </Link>
      <CardHistory />
      <Filter />
    </section>
  );
}

export default History;
