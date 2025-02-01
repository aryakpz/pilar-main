import React from "react";
import clsx from "clsx";
import { ButtonType, ButtonVariant } from "../types";
import image from '/assets/images/plus.svg'
import supportImg from '/assets/images/support.svg'

export type ButtonProps = {
    label: string;
    style?: string;
    type?: ButtonType;
    variant?: ButtonVariant;
    showAddIcon: boolean;
    onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({ label, style, type, onClick, variant, showAddIcon }) => {
    const buttonClass = clsx("flex items-center rounded-md text-sm p-0.5 border border-transparent ",
        {
            "bg-btn-black text-white font-medium": variant === ButtonVariant.DARK,
            " font-medium": variant === ButtonVariant.LIGHT,
        }, style
    )
    const labelClass = clsx("flex items-center rounded-md text-sm",
        {
            "px-4 py-2 text-white": variant === ButtonVariant.DARK,
            "px-3 py-1.5": variant === ButtonVariant.LIGHT
        }, style)

    return (
        <button
            className={buttonClass}
            type={type}
            onClick={onClick}
        >
            <span className={labelClass}>
                {label === "Get support" ?
                    <span className="flex flex-row align-middle items-center p-1  ">
                        <span className="text-xs sm:text-sm"> {label}</span>
                        <img src={supportImg} alt={supportImg} className="ml-2 h-5 w-5 " />
                    </span>
                    : <>
                        {showAddIcon && <img src={image} alt={image} className="pr-3" />}
                        <span className="text-xs sm:text-sm">{label}</span>
                    </>
                }
            </span>
        </button>
    );
};
