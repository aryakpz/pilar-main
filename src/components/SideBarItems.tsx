import { useState } from "react";
import { LeftSideBarType } from "../types";
import { DropdownMenu } from "./DropdownMenu";
import { useNavigate } from "react-router-dom";

type SideBarItemType = {
  item: LeftSideBarType;
};

export const SideBarItem: React.FC<SideBarItemType> = ({ item }) => {
  const nav = useNavigate();
  const [activeBtn, setActiveBtn] = useState<string | null>(null);

  const handleDropdownClick = (title: string) => {
    setActiveBtn((prev) => (prev === title ? null : title));
  };

  const handleTitleClick = (title: string) => {
    nav(title);
  };

  return (
    <a>
      <button
        className={`w-full hover:bg-gray-100 rounded-lg flex items-center false ${item.dropDown ? "group p-2" : "my-2  px-2 pb-1.5 pt-1.5  "}`}
        onClick={() =>
          item.dropDown
            ? handleDropdownClick(item.title)
            : handleTitleClick(item.title)
        }
      >
        <span className="w-7">
          <img src={item.image} alt={`${item.title} icon`} />
        </span>
        <span
          className={`flex-1 whitespace-nowrap text-left ${item.dropDown ? "pl-2" : "pl-1"}`}
        >
          {item.title}
        </span>
        {item.dropDown && (
          <span>
            <img src={item.dropDown} alt="Dropdown arrow" className="w-6 h-6" />
          </span>
        )}
      </button>
      {activeBtn === item.title && (
        <DropdownMenu menu={item.menu} onItemClick={handleTitleClick} />
      )}
    </a>
  );
};
