import { AssetOverviewMain, Header, StepNavBar } from "../components"

export const AssetOverview = () => {
    return (
        <div className="h-screen overflow-hidden flex flex-col">
            <Header />
            <StepNavBar />
            <AssetOverviewMain />
        </div>
    )
}