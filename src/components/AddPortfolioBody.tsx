import { useState } from "react"
import { CurrencyType, DateFormatType, Language, MeasurementType } from "../types"
import { CurrencySelectbox } from "./CurrencySelectbox"
import { LanguageSelector } from "./languageSelectbox"
import { MeasuremtSelectbox } from "./MeasurementSelectbox"
import { DateFromatSelectbox } from "./DateFormatSelectbox"

export const AddPortfolioFormBody = () => {
    const [language, setLanguage] = useState<Language>(Language.ENG)
    const getLanguageType = (value: Language) => {
        setLanguage(value)
    }

    const getCurrencyType = (value: CurrencyType) => {
        console.log(value)
    }

    const getMeasurementType = (value: MeasurementType) => {
        console.log(value)
    }

    const getDateFormat = (value: DateFormatType) => {
        console.log(value)
    }

    return (
        <div className="py-8 px-56">
            <div>
                <LanguageSelector handleLanguage={getLanguageType} />
            </div>
            <div>
                <div>
                    <h5 className="font-semibold text-xl leading-7"></h5>
                </div>
                <div className="mt-6">
                    <div className="flex flex-wrap gap-y-4">
                        <CurrencySelectbox handleCurrency={getCurrencyType} />
                        <DateFromatSelectbox handleDateformat={getDateFormat} />
                        <MeasuremtSelectbox handleMeasurement={getMeasurementType} />
                    </div>
                </div>
            </div>
        </div>
    )
} 