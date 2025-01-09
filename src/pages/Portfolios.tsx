import React, { useState } from "react";
import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";
import { ButtonType, ButtonVariant } from "../types/enum";
import { Header } from "../components/Header";
import { SearchBar } from "../components/SearchBar";

export const Portfolio: React.FC = () => {
    const nav = useNavigate()
    const [search, setSearch] = useState("")
    const handleClick = () => {
        nav('')
    }

    const onSearch = (value: string) => {
        setSearch(value)
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
            <div className="p-10">
                <SearchBar onSearch={onSearch} />
            </div>
        </div>
    )
}