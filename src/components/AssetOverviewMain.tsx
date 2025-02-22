import { Outlet } from "react-router-dom";
import { SideBar } from "./LeftSideBar";

export const AssetOverviewMain = () => {
  return (
    <div className="flex flex-1 overflow-hidden">
      <div className="w-fit flex border-r bg-white">
        <SideBar />
      </div>
        <Outlet />
    </div>
  );
};
