import { Divider } from "./Divider"
import { OfficeDetails } from "./OfficeDetails"
import { OfficeStepNav } from "./OfficeStepNav"
import { TowerSelectBox } from "./TowerSelectBox"

export const OfficeHomePage = () => {

    const handleClick = (value: String) => {
        console.log(value)
    }

    return (
        <div className="relative">
            <OfficeStepNav
                title="Office"
                buttonLabel="Add Office"
                onButtonClick={handleClick} />
            <div className="flex items-center">
                <TowerSelectBox />
            </div>
            <Divider style="my-6" />
            <OfficeDetails/>
        </div>
    )
}