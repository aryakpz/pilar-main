import { Outlet } from "react-router-dom";
import { LeftSideBar } from "./LeftSideBar";

export const AssetOverviewMain = () => {
  return (
    <div className="flex flex-1 overflow-hidden">
      <div className="w-fit flex border-r bg-white">
        <LeftSideBar />
      </div>
        <Outlet />
    </div>
  );
};
