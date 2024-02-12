import { useRouter } from "next/navigation";
import Topup from "../Topup";
import Button from "src/component/Button";
import { FaPlus } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa6";
import { rupiah } from 'src/helper/formatCurrency'

function CardSaldo({ user, refetch, isOpen, onClose, onClick }) {
    const router = useRouter();
    return (
        <>
            <Topup isOpen={isOpen} onClose={onClose} data={user} refetch={refetch} />
            <div className="card-compact p-0 rounded-xl w-full bg-primary text-primary-content">
                <div className="card-body flex-row justify-between">
                    <div className="flex flex-col justify-between">
                        <p className="font-medium">Balance</p>
                        <p className="text-xl md:text-2xl font-semibold">
                            {user.saldo != null ? rupiah(user.saldo) : 0}
                        </p>
                        <p className="font-medium">+62 {user.phone_number ?? '-'}</p>
                    </div>
                    <div className="hidden md:flex flex-col justify-between gap-2">
                        <Button onClick={() => router.push("/Transfer")} outline>
                            <div className="flex items-center gap-2 justify-center">
                                <FaArrowUp size={18} />
                                TRANSFER
                            </div>
                        </Button>
                        <Button onClick={onClick} outline>
                            <div className="flex items-center gap-2 justify-center">
                                <FaPlus size={18} />
                                TOPUP
                            </div>
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CardSaldo;
