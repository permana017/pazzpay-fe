import Filter from "src/component/Filter";
import Reciever from "src/component/CardReciever";
import { FaChevronLeft } from "react-icons/fa6";
import Link from "next/link";

function Transfer() {
  return (
    <section className="w-full">
      <Link href="/dashboard" className="py-5 flex items-center md:hidden">
        <FaChevronLeft />
        <p className="font-bold ml-2">Reciever</p>
      </Link>
      <Reciever />
      <Filter />
    </section>
  );
}

export default Transfer;
