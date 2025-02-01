import { AddAssetFormBody, StepperPageHeader } from "../components"

export const AddAsset=()=>{
    return(
        <div className="bg-gray-100">
            <StepperPageHeader
               text="Adding Asset"/>
            <AddAssetFormBody/>
        </div>
    )
}