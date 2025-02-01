import { ButtonType, ButtonVariant } from "../types"
import { Button } from "./Button"
import { getTimePeriodOfDay } from "../utils"
import { useNavigate } from "react-router-dom"

export const PortfolioHeader: React.FC = () => {
    const nav=useNavigate()
    const handleClick = () => {
        nav('/addportfolio')
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
        </div>
    )
}        