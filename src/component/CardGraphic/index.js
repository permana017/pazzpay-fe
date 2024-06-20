import { FaArrowUp } from "react-icons/fa6";

function CardGrapich() {
  return (
    <>
      <div className="flex flex-col justify-between bg-white md:shadow-md rounded-2xl w-full md:p-5">
        <div className="hidden md:flex justify-between">
          <div className="flex flex-col">
            <FaArrowUp size={28} className="text-green-500" />
            <h2 className="text-base">Income</h2>
            <h1 className="text-lg font-semibold">Rp2.120.000</h1>
          </div>
          <div className="flex flex-col">
            <FaArrowUp size={28} className="text-red-500 rotate-180" />
            <h2 className="text-base">Expense</h2>
            <h1 className="text-lg font-semibold">Rp2.120.000</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardGrapich;
