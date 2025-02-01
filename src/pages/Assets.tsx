import { Outlet } from "react-router-dom";
import { Header, AssetHeader } from "../components";

export const Assets: React.FC = () => {

    return (
        <div >
            <Header />
            <main className="w-full h-screen overflow-y-auto pt-10 bg-gray-100">
                <div className="px-12 pb-5 sm:px-24 md:px-28 lg:px-36">
                    <AssetHeader />
                    <Outlet />
                </div>
            </main>
        </div>
    )
} 