import React from "react";
import clsx from "clsx";
import { ButtonProps } from "../types";
import { ButtonVariant } from "../types";

export const Button: React.FC<ButtonProps> = ({ label, style, type, onClick, variant }) => {
    const buttonClass = clsx(style, "rounded-md px-4 py-2",
        {
            "bg-btn-black text-white font-medium": variant === ButtonVariant.DARK,
            "bg-btn-white font-medium": variant === ButtonVariant.LIGHT,
        }
    )

    return (
        <button
            className={buttonClass}
            type={type}
            onClick={onClick}
        >
            {label}
        </button>
    );
};
