import { useNavigate } from "react-router-dom"
import { ButtonVariant, Language } from "../types"
import { Button } from "./Button"
import { Divider } from "./Divider"
import { InputLabel } from "./InputLabel"
import { LanguageSelector } from "./languageSelectbox"
import { SelectBox } from "./SelectBox"
import { SubHeading } from "./SubHeading"
import { useState } from "react"

export const AddAssetFormBody = () => {
    const nav = useNavigate();
    const [formData, setFormData] = useState({
        language: "",
        assetName: "",
        addressLine1: "",
        addressLine2: " ",
        city: "",
        state: "",
        country: "",
        zipcode: ""
    })
    const handleLanguageChange = (language: Language) => {
        setFormData({ ...formData, language })
    }
    const handleInputChange = (name: string, value: string) => {
        setFormData({ ...formData, [name]: value })
    }
    const handleCountrySelect = (country: string) => {
        setFormData({ ...formData, country })
    }
    const handleContinue = () => {
        // nav('/addAsset/nextpage')
    }

    return (
        <div className="py-8 px-56 ">
            <div>
                <LanguageSelector handleLanguage={handleLanguageChange} />
                <Divider style="mt-4 mb-8" />
            </div>
            <div>
                <SubHeading text="Asset name" />
                <div className="mt-5">
                    <InputLabel
                        value={formData.assetName}
                        onChange={(e) => handleInputChange("assetName", e)}
                    />
                </div>
                <Divider style="my-8" />
                <div>
                    <SubHeading text="Asset address" />
                    <div className="mt-5">
                        <div className="flex flex-col gap-6">
                            <InputLabel
                                text="Address line 1"
                                value={formData.addressLine1}
                                onChange={(e) => handleInputChange("addressLine1", e)} />
                            <InputLabel
                                text="Address line 2 (optional)"
                                value={formData.addressLine2}
                                onChange={(e) => handleInputChange("addressLine2", e)} />
                            <div className="flex flex-wrap gap-4 ">
                                <div className="flex-1">
                                    <InputLabel
                                        text="City"
                                        value={formData.city}
                                        onChange={(e) => handleInputChange("city", e)}
                                    />
                                </div>
                                <div className="flex-1">
                                    <InputLabel
                                        text="State"
                                        value={formData.state}
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
                                        value={formData.zipcode}
                                        onChange={(e) => handleInputChange("zipcode", e)}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Divider style="my-8" />
            </div>
            <div className="mt-14">
                <Button
                    label="Continue"
                    variant={ButtonVariant.DARK}
                    showAddIcon={false}
                    onClick={handleContinue}
                />
            </div>
        </div>
    )
}