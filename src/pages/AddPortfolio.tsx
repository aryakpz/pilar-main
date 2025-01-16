import { AddPortfolioFormBody } from "../components"
import { PortfolioFormNav } from "../components"

export const AddPortfolis = () => {
    return (
        <div className="bg-gray-100 h-full">
            <PortfolioFormNav />
            <AddPortfolioFormBody />
        </div>
    )
}