import { ButtonType, ButtonVariant } from "../types"
import { Button } from "./Button"
import { SearchBar } from "./SearchBar"
import { getTimePeriodOfDay } from "../utils"
import { Tabs } from "./Tabs"

type HeaderProps = {
    onSearchChange: (value: string) => void
}

export const AssetHeader: React.FC<HeaderProps> = ({ onSearchChange }) => {

    const handleClick = () => {
        console.log(`Button clicked`);
    };
    const onSearch = (value: string) => {
        onSearchChange(value)
    }
    const greet = getTimePeriodOfDay();

    return (
        <>
            <div className="flex flex-col gap-6 mb-8">
                <h4 className="font-medium text-sm sm:text-lg text-gray-700">
                    Good {greet}, Admin!
                </h4>
                <div className="flex justify-between items-center flex-wrap gap-2">
                    <Tabs />
                    <Button
                        label="New Asset"
                        type={ButtonType.BUTTON}
                        onClick={handleClick}
                        showAddIcon={true}
                        variant={ButtonVariant.DARK}
                    />
                </div>

                <div className="my-1 h-px bg-gray-200"></div>
            </div>
            <div className="flex justify-between items-center gap-2 flex-wrap">
                <SearchBar onSearch={onSearch} />
            </div>
        </>
    )
}
