"use client";
import { useSelector } from "react-redux";

function CardField({ label, value }) {
  return (
    <div className="card w-full bg-base-100 shadow-md mt-5">
      <div className="card-body p-4">
        <h2 className="text-[#7A7886]">{label}</h2>
        <p className="font-bold text-lg text-[#514F5B]">{value}</p>
      </div>
    </div>
  );
}
function InputField({ label, value, placeholder }) {
  return (
    <div className="card w-full bg-base-100 shadow-md">
      <div className="card-body p-4">
        <h2 className="text-[#7A7886]">{label}</h2>
        <p className="font-bold text-lg text-[#514F5B]">{value}</p>
      </div>
    </div>
  );
}

function PersonalInformation() {
  const user = useSelector((state) => state.user.user);
  return (
    <div className="w-full rounded-xl md:bg-[#FFF] shadow-x py-6 md:p-6">
      <p className="w-full text-lg font-bold text-[#3A3D42]">
        Personal Information
      </p>
      <p className="font-normal text-[#7A7886] md:w-[75%]">
        We got your personal information from the sign up proccess. If you want
        to make changes on your information, contact our support.
      </p>
      <div className="w-full">
        <CardField label="Username" value={user?.username} />
        <CardField label="Verified E-mail" value={user?.email} />
        <CardField
          label="Phone Number"
          value={user?.phone_number ? user.phone_number : "-"}
        />
      </div>
    </div>
  );
}

export default PersonalInformation;
