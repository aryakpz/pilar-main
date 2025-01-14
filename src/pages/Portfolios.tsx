import { useState } from "react";
import { Header, PortfolioList, PortfolioHeader } from "../components";
import { SortSelect } from "../types";

export const Portfolio: React.FC = () => {
    const [searchValue, setSearchValue] = useState<string>("")
    const [sortType, setSortType] = useState<SortSelect>(SortSelect.ASC)
    const handleSearch = (value: string) => {
        setSearchValue(value)
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
            </main>
        </div>
    )
}

