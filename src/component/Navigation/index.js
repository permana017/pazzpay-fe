"use client";
import { useRouter, usePathname } from "next/navigation";
import Cookies from "js-cookie";
import { RxDashboard } from "react-icons/rx";
import { IoMdArrowUp } from "react-icons/io";
import { FiUser } from "react-icons/fi";
import { FiLogIn } from "react-icons/fi";
import { MdOutlineHistory } from "react-icons/md";

function Navigation({ onClick }) {
  const router = useRouter();
  const path = usePathname();
  const onLogout = () => {
    alert("apakah kamu yakin");
    Cookies.remove("@userLogin");
    router.push("/");
  };
  const styleMenu =
    "flex items-center gap-2 hover:text-[#6379F4] text-gray-600 hover:font-semibold cursor-pointer";
  const styleMenuActive =
    "flex items-center gap-2 hover:text-[#6379F4] hover:font-semibold cursor-pointer text-[#6379F4] font-semibold";
  const menus = [
    {
      label: "Dashboard",
      path: "/dashboard",
      icon: <RxDashboard size={22} />,
    },
    {
      label: "Transfer",
      path: "/dashboard/transfer",
      icon: <IoMdArrowUp size={22} />,
    },
    {
      label: "History",
      path: "/dashboard/history",
      icon: <MdOutlineHistory size={22} />,
    },
    {
      label: "Profile",
      path: "/dashboard/profile",
      icon: <FiUser size={22} />,
    },
  ];

  const handleClickMenu = (item) => {
    if (item.label != "Topup") {
      router.push(item.path);
    } else {
      if (path != "/Home") {
        router.push("/Home");
      } else {
        onClick();
      }
    }
  };

  return (
    <>
      <div className="hidden md:flex min-w-[240px] ">
        <div className="card p-0 w-full bg-base-100 shadow-md">
          <div className="card-body p-5 flex-col justify-between">
            <div className="flex flex-col gap-3">
              {menus.map((item, i) => (
                <div
                  key={i}
                  className={path == item.path ? styleMenuActive : styleMenu}
                  onClick={() => handleClickMenu(item)}
                >
                  {item.icon}
                  <h2 className="text font-semibold">{item.label}</h2>
                </div>
              ))}
            </div>
            <div>
              <div
                onClick={onLogout}
                className="flex items-center cursor-pointer hover:text-[#6379F4] hover:font-semibold gap-2"
              >
                <FiLogIn size={22} className="rotate-180" />
                <h2 className="font-semibold">Logout</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navigation;
