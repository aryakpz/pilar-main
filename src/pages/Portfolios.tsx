import React, { useState } from "react";
import { Button, SearchBar } from "../components";
import { useNavigate } from "react-router-dom";
import { ButtonType, ButtonVariant, Language } from "../types";
import { Header } from "../components";
import { SelectBox } from "../components";
import { InputLabel } from "../components/InputLabel";


export const Portfolio: React.FC = () => {
    const nav = useNavigate()
    const [country, setCountry] = useState("")
    const [search, setSearch] = useState("")
    const [input, setInput] = useState("")
    const handleClick = () => {
        nav('')
    }

    const onSelectChange = (value: string) => {
        setCountry(value)
    }

    const onSearch = (value: string) => {
        setSearch(value)
    }

    const onInputChange = (value: string) => {
        setInput(value)
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
            <div className="p-10">
                <SearchBar onSearch={onSearch} />
            </div>
            <SelectBox onSelectChange={onSelectChange} />
        
            <div className="p-5">
                <InputLabel
                    text="Address line 1"
                    onChange={onInputChange}
                />
            </div>
        </div>
    )
}