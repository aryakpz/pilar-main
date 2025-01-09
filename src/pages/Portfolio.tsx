import React, { useState } from "react";
import { Button } from "../components";
import { useNavigate } from "react-router-dom";
import { ButtonType, ButtonVariant } from "../types";
import { Header } from "../components";
import { SelectBox } from "../components";

export const Portfolio: React.FC = () => {
    const nav = useNavigate()
    const [country,setCountry]=useState("")
    const handleClick = () => {
        nav('')
    }

    const onSelectChange=(value:string)=>{
        setCountry(value)
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
            <SelectBox onSelectChange={onSelectChange}/>
        </div>
    )
}