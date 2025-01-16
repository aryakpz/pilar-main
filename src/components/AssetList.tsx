import { useState } from "react";
import { useJsonFetch } from "../hooks"
import { OverviewCard, SortSelect } from "../types";
import { OverViewCard } from "./OverViewCard";
import { SearchBar } from "./SearchBar";
import { SortSelector } from "./SortSelectbox";

export const AssetList: React.FC = () => {
    const [searchValue, setSearchValue] = useState<string>("")
    const [sortType, setSortType] = useState('')
    const { data } = useJsonFetch();

    const onSearch = (value: string) => {
        setSearchValue(value)
    }
    const handleSort = (value: SortSelect) => {
        setSortType(value)
    }

    const assets = data?.assetCards
        ?.filter((item: OverviewCard) => (
            item.title.toLowerCase().includes(searchValue.toLowerCase())
        ))
        ?.sort((a: OverviewCard, b: OverviewCard) => {
            if (sortType === SortSelect.DES) {
                return b.title.localeCompare(a.title)
            }
            else if ((sortType === SortSelect.ASC))
                return a.title.localeCompare(b.title)
        })
      
    return (
        <>
            <div className="flex justify-between items-center gap-2 flex-wrap">
                <SearchBar onSearch={onSearch} />
                <SortSelector handleSort={handleSort} />
            </div>
            <div className="mt-4 mb-6 h-px bg-gray-200"></div>
            <div className="flex flex-wrap gap-x-4 gap-y-5">
                {assets?.map((item: OverviewCard) => (
                    <OverViewCard item={item} key={item.id} />
                ))}
            </div>
        </>
    )
}


