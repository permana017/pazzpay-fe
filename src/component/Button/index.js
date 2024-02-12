import React from "react";

function Button({
    children,
    onClick,
    outline,
    disabled,
    color,
    bg,
    rounded,
    padding,
}) {
    const bgStyle = bg ?? "bg-primary";
    const colorStyle = color ?? "text-white";
    const roundedStyle = rounded ?? "rounded-md";
    const paddingStyle = padding ?? "p-2.5";
    const base = `${bgStyle} ${colorStyle} ${roundedStyle} ${paddingStyle} font-semibold h-max`;
    const outlineStyle = outline
        ? "border-2 bg-none hover:bg-primary hover:bg-white hover:text-primary hover:bg-opacity-90"
        : "";
    return (
        <button
            disabled={disabled}
            onClick={onClick}
            className={`${base} ${outlineStyle}`}
        >
            {children}
        </button>
    );
}

export default Button;
