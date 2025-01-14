import { AddAssetFormBody, StepperPageHeader } from "../components"

export const AddAsset=()=>{
    return(
        <div className="bg-gray-100 h-screen">
            <StepperPageHeader
               text="Adding Asset"/>
            <AddAssetFormBody/>
        </div>
    )
}