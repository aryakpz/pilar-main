import React from "react";
import { buttonProps } from "../Types/Type";

export const Button: React.FC<buttonProps> = ({ label, classname, type, onClick, btntype }) => {
    let btnStyle: string = "";

    if (btntype === "bg-black") {
        btnStyle = `bg-btn-black text-white`
    }
    else if (btntype === "bg-white") {
        btnStyle = `bg-btn-white`
    }
    else {
        btnStyle = ""
    }

    return (
        <button
            className={`${classname} ${btnStyle} rounded md px-4 py-2 `} type={type}
            onClick={onClick}>
            {label}
        </button>
    )
}
