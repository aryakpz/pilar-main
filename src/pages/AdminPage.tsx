import React from "react";
import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";
import { ButtonType, ButtonVariant } from "../types/enum";

export const AdminPage: React.FC = () => {
    const nav = useNavigate()
    const handleClick = () => {
        console.log("clicked")
        nav('')
    }

    return (
        <div className="flex w-full flex-col">
            <div>
            <Button
                label=" +  New portfolio"
                type={ButtonType.BUTTON}
                onClick={handleClick}
                style=""
                variant={ButtonVariant.DARK}
            />
            <div className="p-5">
            </div>
            <Button
                label="View More"
                type={ButtonType.BUTTON}
                onClick={handleClick}
                style=""
                variant={ButtonVariant.LIGHT}
            />
            </div>
        </div>
    )
}