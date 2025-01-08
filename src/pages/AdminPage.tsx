import React from "react";
import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";
import { ButtonType, ButtonVariant } from "../types/enum";
import { Header } from "../components/Header";
import { SelectBox } from "../components/SelectBox";

export const AdminPage: React.FC = () => {
    const nav = useNavigate()
    const handleClick = () => {
        console.log("clicked")
        nav('')
    }

    return (
        <div>
            <Header />
            <div className="p-10">
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
            <SelectBox/>
        </div>
    )
}