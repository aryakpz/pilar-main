import { useState } from "react";
import { Header, AssetHeader } from "../components";
import { AssetList } from "../components";

export const Assets: React.FC = () => {
    const [searchValue, setSearchValue] = useState<string>("")
    const handleSearch = (value: string) => {
        setSearchValue(value)
    }

    return (
        <div >
            <Header />
            <main className="w-full h-screen overflow-y-auto pt-10 bg-gray-100">
                <div className="px-12 pb-5 sm:px-24 md:px-28 lg:px-36">
                    <AssetHeader onSearchChange={handleSearch} />
                    <AssetList searchValue={searchValue}/>
                </div>
            </main>
        </div>
    )  
}