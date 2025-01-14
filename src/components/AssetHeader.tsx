import { ButtonType, ButtonVariant } from "../types"
import { Button } from "./Button"
import { SearchBar } from "./SearchBar"
import { getTimePeriodOfDay } from "../utils"
import { AssetInnterButton } from "./AssetInnerButton"
import { useState } from "react"

type HeaderProps = {
    onSearchChange: (value: string) => void
}

export const AssetHeader: React.FC<HeaderProps> = ({ onSearchChange }) => {
    const [activeBtn, setActiveBtn] = useState<string>('list')
    const handleClick = () => { }
    const onSearch = (value: string) => {
        onSearchChange(value)
    }
    const greet = getTimePeriodOfDay();
    const handleSelect = (id: string) => {
        setActiveBtn(id)
    }

    return (
        <>
            <div className="flex flex-col gap-6 mb-8">
                <h4 className="font-medium text-sm sm:text-lg text-gray-700">
                    Good {greet}, Admin!
                </h4>
                <div className="flex justify-between items-center flex-wrap gap-2">
                    <AssetInnterButton onSelect={handleSelect} />
                    {activeBtn === 'list' &&
                        <Button
                            label="New Asset"
                            type={ButtonType.BUTTON}
                            onClick={handleClick}
                            showAddIcon={true}
                            variant={ButtonVariant.DARK}
                        />}
                </div>
            </div>
            {activeBtn === 'list' &&
                <>
                    <div className="flex justify-between items-center gap-2 flex-wrap">
                        <SearchBar onSearch={onSearch} />
                    </div>
                    <div className="mt-4 mb-6 h-px bg-gray-200"></div></>
            }
        </>
    )
}