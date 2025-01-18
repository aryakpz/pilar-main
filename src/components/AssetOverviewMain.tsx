import { Outlet } from "react-router-dom"
import { LeftSideBar } from "./LeftSideBar"

export const AssetOverviewMain = () => {
    return (
        <div className="flex flex-1 overflow-hidden">
            <LeftSideBar />
            <main className="w-full overflow-y-auto p-4 bg-white">
                <Outlet />
            </main>
        </div>
    )
}        
