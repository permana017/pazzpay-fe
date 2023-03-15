"use client"
import React from 'react'
import {useState, useEffect} from 'react';
import axios from "axios"
import Cookies from 'js-cookie'


function Topup({showModal}) {

    const userId = Cookies.get("@userLogin")?.user?.user_id
    const [update, setUpdate] = useState({saldo: 0})

    const handleConfirm = (event) => {
        event.preventDefault();
        axios
            .patch(`http://localhost:5001/api/users/${userId}`, update, {
                method: 'PATCH',
                headers: {
                    'Content-type': 'application/x-www-form-urlencoded'
                }
            })
            .then((res) => {
                // alert("Top up success")
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
                // alert(res.response.data.message); router.push("/Transfer/Confirmation")
            });
    };
    return (
        <div>
            {showModal}
            <input type="checkbox" id="my-modal" className="modal-toggle"/>
            <form onSubmit={handleConfirm} className="modal">
                <div className="modal-box">
                    <div className="flex w-full justify-between items-center">
                        <h3 className=" flex font-semibold text-lg mb-4">Topup</h3>
                        <div className="modal-action">
                            <label htmlFor="my-modal" className=" text-3xl">x</label>
                        </div>
                    </div>
                    <h3 className="text-sm mb-12 w-[50%]">Enter the amount of money, and click submit</h3>
                    <input
                        onChange={(e) => setUpdate({
                            ...update,
                            saldo: e.target.value
                        })}
                        type="number"
                        placeholder="Type here"
                        className="input input-bordered w-full"/>
                    <button className="btn btn-active btn-primary mt-10" type="submit">Confirm</button>
                </div>
            </form>
        </div>
    )
}

export default Topup