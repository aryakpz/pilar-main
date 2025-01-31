import { AddPortfolioFormBody, StepperPageHeader } from "../components"

export const AddPortfolios = () => {
    return (
        <div className="bg-gray-100 h-screen">
            <StepperPageHeader text="Adding Portfolios"/>
            <AddPortfolioFormBody />
        </div>
    )
}
//Currently, I am working on developing the news component for the portfolio. I was complete the API request to list the groups, but there is some issue. Anan told that she will check it today, and I am continuing the task to develop the news component

// The task that was given to me before the development of the AccessControl component