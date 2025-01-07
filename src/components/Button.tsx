import React from "react";
import clsx from "clsx";
import { ButtonProps } from "../types/type";

export const Button: React.FC<ButtonProps> = ({ label, classname, type, onClick, btntype }) => {
    return (
        <button
            className={clsx(  classname,  "rounded md px-4 py-2",
                {
                    "bg-btn-black text-white font-medium": btntype === "Dark",
                    "bg-btn-white font-medium": btntype === "Light",
                }
            )}
            type={type}
            onClick={onClick}
        >
            {label}
        </button>
    );
};
