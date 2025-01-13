import React, { useState } from "react";
import { Button, SearchBar } from "../components";
import { useNavigate } from "react-router-dom";
import { ButtonType, ButtonVariant, Language, SortSelect } from "../types";
import { Header } from "../components";
import { SelectBox } from "../components";
import { LanguageSelector } from "../components";
import { SortSelector } from "../components";


export const Portfolio: React.FC = () => {
    const nav = useNavigate()
    const [country, setCountry] = useState("")
    const [search, setSearch] = useState("")
    const [language, setLanguage] = useState("en")
    const [sortPortfolios, setsortPortfolios] = useState<SortSelect>(SortSelect.ASC)
    const handleClick = () => {
        nav('')
    }

    const onLanguageChange = (value: Language) => {
        setLanguage(value)
    }

    const onSelectChange = (value: string) => {
        setCountry(value)
    }

    const onSearch = (value: string) => {
        setSearch(value)
    }

    const getSortedPortfolios = (value: SortSelect) => {
        setsortPortfolios(value)
    }

    return (
        <div>
            <Header />
            <div className="p-10">
            </div>
            <div className="p-10">
                <SearchBar onSearch={onSearch} />
            </div>
            <SelectBox onSelectChange={onSelectChange} />
            <div className="p-5">
                <LanguageSelector onSelectChange={onLanguageChange} />
            </div>
            <div className="p-5">
                <SortSelector handleSort={getSortedPortfolios} />
            </div>
        </div>
    )
}