import React, { useState } from "react";
import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";
import { ButtonType, ButtonVariant, Language } from "../types/enum";
import { Header } from "../components/Header";
import { LanguageSelector } from "../components/languageSelectbox";

export const AdminPage: React.FC = () => {
    const nav = useNavigate()
    const [language,setLanguage]=useState("en")
    const handleClick = () => {
        nav('')
    }

    const onLanguageChange = (value:Language) => {
        setLanguage(value)
    }
    
    return (
        <div>
            <Header />
            <div className="p-10">
                <Button
                    label=" +  New portfolio"
                    type={ButtonType.BUTTON}
                    onClick={handleClick}
                    variant={ButtonVariant.DARK}
                />
                <div className="p-5">
                </div>
                <Button
                    label="View More"
                    type={ButtonType.BUTTON}
                    onClick={handleClick}
                    variant={ButtonVariant.LIGHT}
                />
            </div>
            <LanguageSelector onSelectChange={onLanguageChange} />
        </div>
    )
}