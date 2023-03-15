import Image from "next/image"




export default function CardInput({username, password, email, desc, title, textBtn, option, pin, handleOnSubmit, validate, phone}) {
    return (
        <>
            <div
                className='px-5 bg-white rounded-t-[30px] w-full shadow-[0px_0px_100px_rgba(17,12,46,0.15)] md:bg-none md:shadow-none md:rounded-none'>
                <div className="text-center flex flex-col items-center">
                    <div className="w-full flex flex-col items-center md:hidden">
                        <p className="pt-10 text-2xl font-bold">{title}</p>
                        <p className="text-lg mt-5 mb-14 text-[#3A3D4299]">{desc}</p>
                    </div>
                    <div className="md:w-full md:flex md:flex-col hidden ">
                        <p className="pt-10 text-2xl font-semibold text-left">Start Accessing Banking
                            Needs With All Devices and All Platforms With 30.000+ Users</p>
                        <p className="text-base mt-10 w-[85%] mb-20 text-[#3A3D4299] text-left">Transfering
                            money is eassier than ever, you can access FazzPay wherever you are. Desktop,
                            laptop, mobile phone? we cover all of that for you!</p>
                    </div>
                    {validate}
                    <form className="w-full" onSubmit={handleOnSubmit}>
                        {username}
                        {email}
                        {phone}
                        {password}
                        {pin}
                        {textBtn}
                        <div>
                            {option}
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
