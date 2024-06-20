"use client";
import { useRouter } from "next/navigation";
import Topup from "../Topup";
import { FaPlus } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa6";
import { rupiah } from "src/helper/formatCurrency";
import { useSelector } from "react-redux";

function CardSaldo({ refetch, isOpen, onClose, onClick }) {
  const user = useSelector((state) => state.user.user);
  const router = useRouter();
  return (
    <>
      <Topup isOpen={isOpen} onClose={onClose} data={user} refetch={refetch} />
      <div className="card-compact p-0 rounded-xl w-full bg-primary text-primary-content shadow-md">
        <div className="card-body flex-row justify-between">
          {user ? (
            <div className="flex flex-col gap-2">
              <p className="font-medium">Balance</p>
              <p className="text-xl md:text-2xl font-semibold">
                {user?.saldo && user?.saldo !== "null" ? (
                  rupiah(user?.saldo)
                ) : (
                  <p>Rp 0,-</p>
                )}
              </p>
              <p className="font-medium">+62 {user?.phone_number ?? "-"}</p>
            </div>
          ) : (
            <div className="">
              <p className="p-2 w-20 rounded bg-slate-200 animate-pulse  my-3"></p>
              <p className="w-40 p-3 rounded bg-slate-200 animate-pulse mb-3"></p>
              <p className="w-40 p-2 rounded bg-slate-200 animate-pulse"></p>
            </div>
          )}
          <div className="hidden md:flex flex-col justify-between gap-2">
            <button
              onClick={() => router.push("/dashboard/transfer")}
              className="btn btn-outline border-white border-2 hover:btn-primary text-white "
            >
              <div className="flex items-center gap-2 justify-center capitalize">
                <FaArrowUp size={18} />
                <p>Transfer</p>
              </div>
            </button>
            <button
              onClick={onClick}
              className="btn btn-outline border-white border-2 hover:btn-primary text-white capitalize"
            >
              <div className="flex w-full items-center gap-2 justify-start">
                <FaPlus size={18} />
                <p>Topup</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardSaldo;
