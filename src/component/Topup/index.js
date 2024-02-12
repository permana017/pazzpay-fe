"use client"
import React from 'react'
import { useState, useEffect } from 'react';
import axios from "axios"
import Cookies from 'js-cookie'
import Modal from 'src/component/Modal/index'
import { IoMdClose } from "react-icons/io";


function Topup({ isOpen, onClose, data, refetch }) {

    const userId = Cookies.get("@userLogin")
    const [update, setUpdate] = useState({ saldo: 0 })

    useEffect(() => {
        console.log('sdsad', data)
    }, [data])


    const handleConfirm = (event) => {
        event.preventDefault();
        let count = Number(update.saldo)
        if (data) {
            count = count + Number(data.saldo)
        }
        axios
            .patch(`https://pazzpaybe.cyclic.app/api/users/${userId}`, { saldo: count }, {
                method: 'PATCH',
                headers: {
                    'Content-type': 'application/x-www-form-urlencoded'
                }
            })
            .then((res) => {
                refetch()
            })
            .catch((err) => {
                console.log(err);
            }).finally(() => onClose())
    };

    const handleInput = (e) => {
        let { value } = e.target
        setUpdate({ ...update, saldo: value })
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <form onSubmit={handleConfirm} className="bg-white p-5 rounded-lg w-full max-w-md">
                {/* {data} */}
                <div className="">
                    <div className="flex w-full justify-between mb-4">
                        <h3 className=" flex font-semibold text-lg">Topup</h3>
                        <IoMdClose onClick={onClose} size={18} className='cursor-pointer text-red-500' />
                    </div>
                    <h3 className="text-sm mb-7 w-[50%]">Enter the amount of money, and click submit</h3>
                    <input
                        onChange={handleInput}
                        type="number"
                        placeholder="Type here"
                        className="input input-bordered w-full" />
                    <button className="btn btn-active btn-primary mt-7" type="submit">Confirm</button>
                </div>
            </form>
        </Modal>
    )
}

export default Topup