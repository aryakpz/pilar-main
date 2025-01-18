import { MenuType } from "../types";

type DropdownProps = {
    menu: MenuType | undefined,
    onItemClick: (value: string) => void
}

export const DropdownMenu: React.FC<DropdownProps> = ({ menu, onItemClick }) => {
    return (
        <ul className="mt-2 space-y-1 pl-8 ">
            {menu?.map((item) => (
                <li key={item.id} className="mt-2.5">
                    <button
                        className="flex w-full items-center rounded-lg px-3 py-1.5 text-base font-normal text-gray-900 hover:bg-gray-100"
                        onClick={() => onItemClick(item.data)}
                    >
                        {item.data}
                    </button>
                </li>
            ))}
        </ul>
    )
}