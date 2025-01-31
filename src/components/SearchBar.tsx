import React from "react";
import searchIcon from "/assets/images/search-icon.svg"

type SearchProps = {
    onSearch: (value: string) => void
}

export const SearchBar: React.FC<SearchProps> = ({ onSearch }) => (
    <div className="flex flex-row">
        <div className="rounded-lg  relative w-full">
            <div className="absolute left-0 items-center pl-3 flex inset-y-0">
                <img src={searchIcon} className="w-5 h-5" />
            </div>
            <input
                placeholder="Search"
                className="block w-full text-sm p-2.5 pl-10 rounded-lg focus:ring focus:ring-black border"
                onChange={(e) => onSearch(e.target.value)} />
        </div>
    </div>
)