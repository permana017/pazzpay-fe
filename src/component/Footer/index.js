import React from 'react'

function Footer() {
  return (
    <div className='hidden md:flex bg-[#6379F4]  justify-center w-full mt-10'>
        <div className='container'>
            <div className='flex justify-between py-5 text-white text-base'>
                <p>2020 FazzPay. All right reserved.</p>
                <div className='flex justify-between'>
                    <p className='mr-10'>+62 5637 8882 9901</p>
                    <p>contact@fazzpay.com</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer