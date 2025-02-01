
import { Header, StepNavBar } from "../components"
import { AssetOverviewMain } from "../components/AssetOverviewMain"

export const AssetDetails=()=>{
    return(
        <div className="h-screen overflow-hidden flex flex-col">
            <Header/>
            <StepNavBar/>
            <AssetOverviewMain/>
        </div>
    )
}