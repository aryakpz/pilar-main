import { useState } from "react"
import { ButtonVariant, CurrencyType, DateFormatType, Language, MeasurementType } from "../types"
import { CurrencySelectbox } from "./CurrencySelectbox"
import { LanguageSelector } from "./languageSelectbox"
import { MeasuremtSelectbox } from "./MeasurementSelectbox"
import { DateFromatSelectbox } from "./DateFormatSelectbox"
import { Divider } from "./Divider"
import { SubHeading } from "./SubHeading"
import { InputLabel } from "./InputLabel"
import { CommonFormPart } from "./CommonFormPart"
import { Button } from "./Button"

export const AddPortfolioFormBody = () => {
    const [formData, setFormData] = useState({
        language: "",
        name: "",
        address1: "",
        address2: "",
        city: "",
        state: "",
        country: "",
        zipcode: "",
        currency: "",
        dateformat: "",
        measurement: ""

    })
    const handleLanguageSelect = (language: Language) => {
        setFormData({ ...formData, language })
    }
    const handleInputChange = (name: string, value: string) => {
        setFormData({ ...formData, [name]: value })
    }
    const handleCurrenySelect = (currency: CurrencyType) => {
        setFormData({ ...formData, currency })
    }
    const handleDateFormatSelect = (dateformat: DateFormatType) => {
        setFormData({ ...formData, dateformat })
    }
    const handleMeasurementSelect = (measurement: MeasurementType) => {
        setFormData({ ...formData, measurement })
    }
    const handleContinue = () => {
        console.log(formData)
    }
    return (
        <div className="py-8 px-56">
            <div>
                <LanguageSelector handleLanguage={handleLanguageSelect} />
                <Divider style="mt-4 mb-8" />
            </div>
            <div>
                <SubHeading text="Portfolio name" />
                <div className="mt-5">
                    <InputLabel
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e)} />
                    <Divider style="my-8" />
                </div>
                <CommonFormPart handleFormChange={handleInputChange} />
                <div>
                    <SubHeading text="Currency and time" />
                    <div className="mt-6">
                        <div className="flex flex-wrap gap-y-4">
                            <CurrencySelectbox handleSelectCurrency={handleCurrenySelect} />
                            <DateFromatSelectbox handleSelectDateformat={handleDateFormatSelect} />
                            <MeasuremtSelectbox handleSelectMeasurement={handleMeasurementSelect} />
                        </div>

                    </div>
                    <Divider style="my-8"/>
                </div>
            </div>
            <div className="mt-14">
                <Button
                    label="Continue: Customize"
                    variant={ButtonVariant.DARK}
                    showAddIcon={false}
                    onClick={handleContinue}
                />
            </div>
        </div>
    )
} 