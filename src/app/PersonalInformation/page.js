import React from 'react'
import Footer from 'src/component/Footer'
import Navbar from 'src/component/Navbar'
import Navigation from 'src/component/Navigation'

function InputLabel({label, value}) {
    return (
        <div className="card w-full bg-base-100 shadow-md mt-5">
            <div className="card-body p-4">
                <h2 className="text-[#7A7886]">{label}</h2>
                <p className='font-bold text-lg text-[#514F5B]'>{value}</p>
            </div>
        </div>
    )
}

function PersonalInformation() {
    return (
        <div className='w-full flex flex-col items-center'>
            <Navbar/>
            <div className='container mt-[160px] flex justify-between'>
                <Navigation/>
                <div className='w-[75%] rounded-xl bg-[#FFF] p-[30px] shadow-xl'>
                    <p className='w-full text-lg font-bold text-[#3A3D42]'>Personal Information</p>
                    <p className='w-full font-normal text-[#7A7886] w-[55%] mt-7'>We got your
                        personal information from the sign up proccess. If you want to make changes on
                        your information, contact our support.</p>
                    <div className='w-full mt-10'>
                        <InputLabel label="First Name" value="Robert"/>
                        <InputLabel label="Last Name" value="Last Name"/>
                        <InputLabel label="Verified E-mail" value="pewdiepie1@gmail.com"/>
                        <InputLabel label="Phone Number" value="+62 813-9387-7946"/>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default PersonalInformation