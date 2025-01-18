import { useState } from "react"
import { Divider } from "./Divider"
import { OfficeDetails } from "./OfficeDetails"
import { OfficeStepNav } from "./OfficeStepNav"
import { TowerSelectBox } from "./TowerSelectBox"

export const OfficeHomePage = () => {
    const [tower, setTower] = useState<string>("")

    const handleClick = (value: String) => {
        console.log(value)
    }
    const handleTowerSelect = (value: string) => {
        setTower(value)
    }

    return (
        <div className="relative">
            <OfficeStepNav
                title="Office"
                buttonLabel="Add Office"
                onButtonClick={handleClick} />
            <div className="flex items-center">
                <TowerSelectBox handleTowerSelect={handleTowerSelect} />
            </div>
            <Divider style="my-6" />
            <OfficeDetails tower={tower} />
        </div>
    )
}