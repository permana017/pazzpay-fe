import Image from "next/image"
import hero from "public/herro.webp"
import CardInput from "src/component/CardInput/cardInput"
import PinInput from "react-pin-input"

function PinPage() {
    return (
        <div className="md:flex md:w-full">
            <div
                className="md:bg-banner md:bg-cover md:w-[60%] md:text-white hidden md:flex ">
                <div className="container">
                    <p className="pt-14 text-3xl font-semibold mb-10">FazzPay</p>
                    <Image src={hero} alt="name" className="w-full"/>
                    <p className="mb-8 text-2xl font-semibold">App that Covering Banking Needs.</p>
                    <p className="mb-14 text-base text-[#FFFFFFCC] font-normal">FazzPay is an
                        application that focussing in banking needs for all users in the world. Always
                        updated and always following world trends. 5000+ users registered in FazzPay
                        everyday with worldwide users coverage.</p>
                </div>
            </div>
            <div className='flex flex-col justify-between items-center h-[100vh] md:h-auto md:w-[40%] md:pr-[134px]'>
                <div className="pt-24 text-3xl text-[#6379F4] font-semibold md:hidden">FazzPay</div>
                <CardInput
                title={<>Create Security PIN</>}
                desc={<>Create a PIN that’s contain 6 digits number for security purpose in FazzPay.</>}
                pin={
                    <div className="flex justify-between">
                        <input type="text" maxLength="1" placeholder="__" className=" appearance-none outline-none w-full w-12 h-16 text-center text-2xl font-bold" />
                        <input type="text" maxLength="1" placeholder="__" className="input input-bordered outline-none w-full w-12 btn-sm h-16 text-center text-2xl font-bold" />
                        <input type="text" maxLength="1" placeholder="__" className="input input-bordered outline-none w-full w-12 btn-sm h-16 text-center text-2xl font-bold" />
                        <input type="text" maxLength="1" placeholder="__" className="input input-bordered outline-none w-full w-12 btn-sm h-16 text-center text-2xl font-bold" />
                        <input type="text" maxLength="1" placeholder="__" className="input input-bordered outline-none w-full w-12 btn-sm h-16 text-center text-2xl font-bold" />
                        <input type="text" maxLength="1" placeholder="__" className="input input-bordered outline-none w-full w-12 btn-sm h-16 text-center text-2xl font-bold" />
                    </div>
                //     <PinInput
                //     length={5}
                //     focus
                //     // disabled
                //     secret
                //     // ref={p => (this.pin = p)}
                //     type="numeric"
                //     // onChange={this.onChange}
                //   />
                }
                textBtn={
                    <button className="btn btn-active btn-ghost w-full md:mt-24 text-lg text-[#88888F] font-semi-bold mt-[200px] mb-20">Confirm</button>
                }
                />
                {/* <PinInput length={5} focus type="text" inputMode="text" /> */}
            </div>
        </div>

    )
}

export default PinPage