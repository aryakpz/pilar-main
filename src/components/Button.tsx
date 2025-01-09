import React from "react";
import clsx from "clsx";
import { ButtonProps } from "../types";
import { ButtonVariant } from "../types";
import image from '/assets/images/plus.svg'

export const Button: React.FC<ButtonProps> = ({ label, style, type, onClick, variant, isImg }) => {
    const buttonClass = clsx(style, "flex items-center rounded-md text-sm p-0.5 border border-transparent ",
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
            <span className="flex items-center rounded-md text-sm px-4 py-2">
                {isImg && <img src={image} alt={image}  />}
                <span className="pl-3 text-xs sm:text-sm">{label}</span>
            </span>
        </button>
    );
};
