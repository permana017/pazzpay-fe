import { useRouter, usePathname } from "next/navigation"
import Cookies from "js-cookie"
import { RxDashboard } from "react-icons/rx";
import { IoMdArrowUp } from "react-icons/io";
import { FiPlus } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { FiLogIn } from "react-icons/fi";

function Navigation({ onClick }) {

    const router = useRouter()
    const path = usePathname()
    const onLogout = () => {
        alert("apakah kamu yakin")
        Cookies.remove('@userLogin')
        router.push('/')
    }
    const styleMenu = 'flex items-center gap-2 hover:text-[#6379F4] hover:font-semibold cursor-pointer'
    const styleMenuActive = 'flex items-center gap-2 hover:text-[#6379F4] hover:font-semibold cursor-pointer text-[#6379F4] font-semibold'
    const menus = [
        {
            label: 'Dasboard',
            path: '/Home',
            icon: <RxDashboard size={22} />
        },
        {
            label: 'Transfer',
            path: '/Transfer',
            icon: <IoMdArrowUp size={22} />
        },
        {
            label: 'Topup',
            path: '/Topup',
            icon: <FiPlus size={22} />
        },
        {
            label: 'Profile',
            path: '/Profile',
            icon: <FiUser size={22} />
        },
    ]

    const handleClickMenu = (item) => {
        if (item.label != 'Topup') {
            router.push(item.path)
        } else {
            if (path != '/Home') {
                router.push('/Home')
            } else {
                onClick()
            }
        }
    }

    return (
        <>
            <div className='hidden md:flex md:w-[24%]'>
                <div className="card p-0 mr-5 w-full bg-base-100 shadow-xl border">
                    <div className="card-body p-5 flex-col justify-between">
                        <div className='flex flex-col gap-3'>
                            {
                                menus.map((item, i) => (
                                    <div key={i} className={path == item.path ? styleMenuActive : styleMenu} onClick={() => handleClickMenu(item)}>
                                        {item.icon}
                                        <h2 className="text-lg">{item.label}</h2>
                                    </div>
                                ))
                            }
                        </div>
                        <div>
                            <div
                                onClick={onLogout}
                                className="flex items-center cursor-pointer hover:text-[#6379F4] hover:font-semibold gap-2">
                                <FiLogIn size={22} className='rotate-180' />
                                <h2 className="text-lg">Logout</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navigation