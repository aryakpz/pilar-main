import { AddPortfolioFormBody } from "../components"
import { StepperPageHeader } from "../components/StepperPageHeader"

export const AddPortfolios = () => {
    return (
        <div className="bg-gray-100 h-full">
            <StepperPageHeader text="Adding Portfolios" />
            <AddPortfolioFormBody />
        </div>
    )
}