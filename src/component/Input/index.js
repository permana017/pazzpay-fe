import { useState } from "react";

const Input = ({
  onChange,
  placeholder,
  type = "text",
  name,
  icon,
  value,
  error,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className="relative w-full mb-3">
      <div
        className={`absolute h-full p-2 flex items-center justify-center ${
          error ? "text-red-500" : isFocused ? "text-primary" : "text-gray-400"
        }`}
      >
        {icon}
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
      {error && (
        <p className="text-xs font-medium text-red-500 absolute -bottom-5">
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;
