"use client";
import { useState } from "react";
import Cookies from "js-cookie";
import Modal from "src/component/Modal/index";
import { IoMdClose } from "react-icons/io";
import axiosInstance from "@/helper/axiosInstance";
import CurrencyInput from "react-currency-input-field";
import Swal from "sweetalert2";

// function InputCurrency(value, valueChange, onChange) {
//   return (
//     <input
//       onChange={onChange}
//       value
//       type="number"
//       placeholder="Type here"
//       className="input input-bordered w-full"
//     />
//   );
// }

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
        console.log(res);
        refetch();
        Swal.fire({
          title: "Success Topup!",
          icon: "success",
          confirmButtonColor: "#6379F4",
        });
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => onClose());
  };

  const handleInput = (value) => {
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
          <h3 className="text-sm mb-7 w-full">
            Enter the amount of money, and click submit
          </h3>
          {/* <input
            onChange={handleInput}
            type="number"
            placeholder="Type here"
            className="input input-bordered w-full"
          /> */}
          <CurrencyInput
            id="input-example"
            name="input-name"
            className="input input-bordered w-full"
            placeholder="Please input balance here"
            prefix="Rp "
            // decimalsLimit={2}
            onValueChange={(value, name, values) => handleInput(value)}
          />
          <button
            className="btn btn-active btn-primary mt-7 capitalize"
            type="submit"
          >
            Confirm
          </button>
        </div>
      </form>
    </Modal>
  );
}

export default Topup;
