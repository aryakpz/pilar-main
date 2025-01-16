import React from "react";
import clsx from "clsx";
import { ButtonType, ButtonVariant } from "../types";
import image from '/assets/images/plus.svg'

export type ButtonProps = {
    label: string;
    style?: string;
    type?: ButtonType;
    variant?: ButtonVariant;
    showAddIcon: boolean;
    onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({ label, style, type, onClick, variant, showAddIcon }) => {
    const buttonClass = clsx(style, "flex items-center rounded-md text-sm p-0.5 border border-transparent ",
        {
            "bg-btn-black text-white font-medium": variant === ButtonVariant.DARK,
            "bg-btn-white font-medium": variant === ButtonVariant.LIGHT,
        }
    )
    const labelClass = clsx("flex items-center rounded-md text-sm",
        {
            "px-4 py-2": variant === ButtonVariant.DARK,
            "px-3 py-1.5": variant === ButtonVariant.LIGHT
        })

    return (
        <button
            className={buttonClass}
            type={type}
            onClick={onClick}
        >
            <span className={labelClass}>
                {showAddIcon && <img src={image} alt={image} className="pl-3" />}
                <span className="text-xs sm:text-sm">{label}</span>
            </span>
        </button>
    );
};
