import { useState } from "react";
import { Header, AssetHeader, AssetOverview, AssetList } from "../components";
import { AssetDashboard } from "../components/AssetDashboard";
import { Navigate, Route, Routes } from "react-router-dom";

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
                    <Routes>
                        <Route path="/" element={<Navigate to="list" replace />} />
                        <Route path="list" element={<AssetList searchValue={searchValue} />} />
                        <Route path="view" element={<AssetOverview />} />
                        <Route path="dashboard" element={<AssetDashboard />} />
                    </Routes>
                </div>
            </main>
        </div>
    )
}
