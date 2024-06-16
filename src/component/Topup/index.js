"use client";
import { useState } from "react";
import Cookies from "js-cookie";
import Modal from "src/component/Modal/index";
import { IoMdClose } from "react-icons/io";
import axiosInstance from "@/helper/axiosInstance";

function Topup({ isOpen, onClose, data, refetch }) {
  const userId = Cookies.get("@userLogin");
  const [update, setUpdate] = useState({ saldo: 0 });

  const handleConfirm = (event) => {
    event.preventDefault();
    let count = Number(update.saldo);
    if (data) {
      count = count + Number(data.saldo);
    }
    axiosInstance
      .patch(`users/${userId}`, { saldo: count })
      .then((res) => {
        refetch();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => onClose());
  };

  const handleInput = (e) => {
    let { value } = e.target;
    setUpdate({ ...update, saldo: value });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form
        onSubmit={handleConfirm}
        className="bg-white p-5 rounded-lg w-full max-w-md"
      >
        {/* {data} */}
        <div className="">
          <div className="flex w-full justify-between mb-4">
            <h3 className=" flex font-semibold text-lg">Topup</h3>
            <IoMdClose
              onClick={onClose}
              size={18}
              className="cursor-pointer text-red-500"
            />
          </div>
          <h3 className="text-sm mb-7 w-full  md:w-[50%]">
            Enter the amount of money, and click submit
          </h3>
          <input
            onChange={handleInput}
            type="number"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
          <button className="btn btn-active btn-primary mt-7" type="submit">
            Confirm
          </button>
        </div>
      </form>
    </Modal>
  );
}

export default Topup;
