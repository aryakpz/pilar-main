import { ButtonType, ButtonVariant, SortSelect } from "../types"
import { Button } from "./Button"
import { SearchBar } from "./SearchBar"
import { getTimePeriodOfDay } from "../utils"
import { SortSelector } from "./SortSelectbox"

type HeaderProps = {
    onSearchChange: (value: string) => void
    onSelectSortType: (value: SortSelect) => void
}

export const PortfolioHeader: React.FC<HeaderProps> = ({ onSearchChange, onSelectSortType }) => {
    const handleClick = () => { }
    const onSearch = (value: string) => {
        onSearchChange(value)
    }
    const getSortType = (value: SortSelect) => {
        onSelectSortType(value)
    }
    const greet = getTimePeriodOfDay();

    return (
        <div className="flex flex-col gap-3 mb-6">
            <h4 className="font-medium text-sm sm:text-lg text-gray-700">
                Good {greet}, Admin!
            </h4>
            <div className="flex justify-between items-center flex-wrap gap-2">
                <h3 className="font-semibold text-3xl text-gray-900 ">All portfolio</h3>
                <Button
                    label="New portfolio"
                    type={ButtonType.BUTTON}
                    onClick={handleClick}
                    showAddIcon={true}
                    variant={ButtonVariant.DARK}
                />
            </div>
            <div className="flex justify-between items-center gap-2 flex-wrap">
                <SearchBar onSearch={onSearch} />
                <SortSelector handleSort={getSortType} />
            </div>
            <div className="my-1 h-px bg-gray-200"></div>
        </div>
    )
}