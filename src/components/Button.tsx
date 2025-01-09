import React from "react";
import clsx from "clsx";
import { ButtonProps } from "../types/type";
import { ButtonVariant } from "../types/enum";

export const Button: React.FC<ButtonProps> = ({ label, style, type, onClick, variant }) => {
    return (
        <button
            className={clsx( style, "rounded-md px-4 py-2",
                {
                    "bg-btn-black text-white font-medium": variant === ButtonVariant.DARK,
                    "bg-btn-white font-medium": variant === ButtonVariant.LIGHT,
                }
            )}
            type={type}
            onClick={onClick}
        >
            {label}
        </button>
    );
};                                                                                                                                                                                          