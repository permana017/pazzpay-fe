"use client";
import { useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa6";
import { MdLockOutline, MdOutlineRemoveRedEye } from "react-icons/md";

const InputPassword = ({ onChange, placeholder, name, value, error }) => {
  const [type, setType] = useState("password");
  const [isFocused, setIsFocused] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleSetHidden = () => {
    setIsHidden(!isHidden);
    if (type == "text") {
      setType("password");
    } else {
      setType("text");
    }
  };

  return (
    <div className="relative w-full mb-3">
      <div className="absolute h-full p-2 flex items-center justify-center">
        <MdLockOutline
          size={24}
          className={
            error
              ? "text-red-500"
              : isFocused
              ? "text-primary"
              : "text-gray-400"
          }
        />
      </div>
      <input
        onFocus={handleFocus}
        onBlur={handleBlur}
        name={name}
        onChange={onChange}
        value={value}
        type={type}
        placeholder={placeholder}
        className={`w-full text-base outline-none pl-10 p-2.5 border-b-2 focus:border-primary ${
          error ? "focus:border-red-500 border-red-500" : ""
        }`}
      />
      <div
        className={`absolute h-full p-2 flex items-center justify-center top-0 right-0 
          ${isHidden ? " text-primary" : "  text-gray-400"} `}
      >
        {!isHidden ? (
          <FaRegEyeSlash
            onClick={handleSetHidden}
            size={24}
            className="cursor-pointer"
          />
        ) : (
          <MdOutlineRemoveRedEye
            onClick={handleSetHidden}
            size={24}
            className="cursor-pointer"
          />
        )}
      </div>
      {error && (
        <p className="text-xs font-medium text-red-500 absolute -bottom-5">
          {error}
        </p>
      )}
    </div>
  );
};

export default InputPassword;
