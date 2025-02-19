import { Language } from "../types/enum"

type LanguageProps = {
    handleLanguage: (value: Language) => void
}

export const LanguageSelector: React.FC<LanguageProps> = ({ handleLanguage }) => (
    <div className="w-1/2">
        <p className="font-medium text-sm text-grey-900 pb-2">Localize your details in</p>
        <div className="flex relative w-full">
            <select
                className="block w-full border bg-white border-gray-300 text-gray-900 rounded-lg p-2.5 appearance-none text-sm bg-down-arrow bg-no-repeat bg-size pr-5 bg-arrow-position"
                onChange={(e) => handleLanguage(e.target.value as Language)}>
                <option value={Language.ENG}>{Language.ENG}</option>
                <option value={Language.DUT}>{Language.DUT}</option>
            </select>
        </div>
        <span className="text-xs text-gray-500">Note: Add details in English and Dutch to publish.</span>
    </div>
)