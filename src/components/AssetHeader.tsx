import { AssetList, ButtonType, ButtonVariant } from "../types"
import { Button } from "./Button"
import { getTimePeriodOfDay } from "../utils"
import { AssetInnterButton } from "./AssetInnerButton"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const AssetHeader: React.FC = () => {
    const nav = useNavigate()
    const [activeBtn, setActiveBtn] = useState<AssetList>(AssetList.LIST)
    const handleClick = () => {
        nav('/addAsset')
    }
    const greet = getTimePeriodOfDay();
    const handleSelect = (id: AssetList) => {
        setActiveBtn(id)
        nav(`/assets/${id.toLowerCase()}`);
    }

    return (
        <>
            <div className="flex flex-col gap-6 mb-8">
                <h4 className="font-medium text-sm sm:text-lg text-gray-700">
                    Good {greet}, Admin!
                </h4>
                <div className="flex justify-between items-center flex-wrap gap-2">
                    <AssetInnterButton onSelect={handleSelect} />
                    {activeBtn === AssetList.LIST &&
                        <Button
                            label="New Asset"
                            type={ButtonType.BUTTON}
                            onClick={handleClick}
                            showAddIcon={true}
                            variant={ButtonVariant.DARK}
                        />}
                </div>
            </div>
        </>
    )
}
