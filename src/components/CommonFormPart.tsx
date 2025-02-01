import React from "react"
import { InputLabel } from "./InputLabel"
import { SelectBox } from "./SelectBox"
import { Divider } from "./Divider"

type CommonProps = {
    handleFormChange: (name: string, value: string) => void
}

export const CommonFormPart: React.FC<CommonProps> = ({ handleFormChange }) => {
    const handleCountrySelect = (country: string) => {
        handleFormChange("country", country)
    }
    const handleInputChange = (name: string, value: string) => {
        handleFormChange(name, value)
    }

    return (
        <>
            <div className="mt-5">
                <div className="flex flex-col gap-6">
                    <InputLabel
                        text="Address line 1"
                        onChange={(e) => handleInputChange("address1", e)} />
                    <InputLabel
                        text="Address line 2 (optional)"
                        onChange={(e) => handleInputChange("address2", e)} />
                    <div className="flex flex-wrap gap-4 ">
                        <div className="flex-1">
                            <InputLabel
                                text="City"
                                onChange={(e) => handleInputChange("city", e)}
                            />
                        </div>
                        <div className="flex-1">
                            <InputLabel
                                text="State"
                                onChange={(e) => handleInputChange("state", e)}
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-4 ">
                        <div className="flex-1">
                            <SelectBox onSelectChange={handleCountrySelect} />
                        </div>
                        <div className="flex-1">
                            <InputLabel
                                text="Zip code"
                                onChange={(e) => handleInputChange("zipcode", e)}
                            />
                        </div>
                    </div>
                </div>
                <Divider style="my-8" />
            </div>
        </>
    )
}                                                      
