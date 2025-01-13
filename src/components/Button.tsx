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
    onClick: (value?: any) => void;
}

export const Button: React.FC<ButtonProps> = ({ label, style, type, onClick = () => { }, variant, showAddIcon }) => {
    const buttonClass = clsx("flex items-center rounded-lg text-sm p-0.5 border border-transparent",
        {
            "bg-btn-black text-white font-medium": variant === ButtonVariant.DARK,
            "font-medium border-none": variant === ButtonVariant.LIGHT,
        },
        style
    )

    return (
        <button
            className={buttonClass}
            type={type}
            onClick={() => onClick()}
        >
            <span className="flex items-center rounded-md text-sm px-4 py-2 ">
                {showAddIcon && <img src={image} alt={image} className="pr-3" />}
                <span className="text-xs sm:text-sm">{label}</span>
            </span>
        </button>
    );
};