import { Language } from "../types/enum"

type SelectProps = {
    onSelectChange: (value: Language) => void
}

export const LanguageSelector: React.FC<SelectProps> = ({ onSelectChange }) => (
    <div className="w-1/2 flex flex-col">
        <p className="font-medium text-sm text-grey-900 pb-2">Localize your detials in</p>
        <div className="flex relative w-full">
            <select className="w-full border bg-transparent rounded-md text-sm p-2 appearance-none bg-down-arrow bg-no-repeat bg-[length:auto_1.4rem] pr-5 bg-arrow-position focus:ring-blue-500"
                onChange={(e) => onSelectChange(e.target.value as Language)}>
                <option value={Language.ENG}>{Language.ENG}</option>
                <option value={Language.DUT}>{Language.DUT}</option>
            </select>
        </div>
        <span className="text-xs text-gray-500 pt-2 ">Note: Add details in English and Dutch to publish.</span>
    </div>
)