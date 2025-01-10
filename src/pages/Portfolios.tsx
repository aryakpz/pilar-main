import { useState } from "react";
import { Header, PortfolioList, PortfolioHeader } from "../components";
import { SortSelect } from "../types";

export const Portfolio: React.FC = () => {
    const nav = useNavigate()
    const [country, setCountry] = useState("")
    const [search, setSearch] = useState("")
    const [language, setLanguage] = useState("en")
    const [input, setInput] = useState("")
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
    const handleGetSort = (value: SortSelect) => {
        setSortType(value)
    }

    return (
        <div>
            <Header />
            <main className="w-full h-screen overflow-y-auto pt-10 bg-gray-100">
                <div className="px-12 pb-5 sm:px-24 md:px-28 lg:px-36">
                    <PortfolioHeader onSearchChange={handleSearch} onSelectSortType={handleGetSort} />
                    <PortfolioList searchValue={searchValue} sortType={sortType} />
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
            <LanguageSelector onSelectChange={onLanguageChange} />

            <div className="p-5">
                <InputLabel
                    text="Address line 1"
                    onChange={onInputChange} />
            </div>
        </div>
    )
}

