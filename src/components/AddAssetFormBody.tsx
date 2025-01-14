import { Language } from "../types"
import { Divider } from "./Divider"
import { InputLabel } from "./InputLabel"
import { LanguageSelector } from "./languageSelectbox"
import { SubHeading } from "./SubHeading"

export const AddAssetFormBody = () => {

    const getLanguageType = (value: Language) => { }
    const onInputChange = (value: string) => {
    }

    return (
        <div className="py-8 px-56"> 
            <div>
                <LanguageSelector handleLanguage={getLanguageType} />
                <Divider style="mt-4 mb-8" />
            </div>
            <div>
                <SubHeading text="Asset name" />
                <div className="mt-5">
                    <InputLabel
                        onChange={onInputChange}
                    />
                </div>
                <Divider style="my-8"/>
            </div>

        </div>
    )
}