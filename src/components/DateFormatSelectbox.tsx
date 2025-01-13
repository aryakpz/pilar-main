import { DateFormatType } from "../types"

type DateFormatProps = {
    handleDateformat: (value: DateFormatType) => void
}

export const DateFromatSelectbox: React.FC<DateFormatProps> = ({ handleDateformat }) => {
    return (
        <div className="flex-1 md:basic-1/2 pr-6">
            <div className="flex flex-col gap-2 w-full">
                <label className="font-medium text-sm text-gray-900">Choose date format</label>
                <div className="flex">
                    <div className="relative w-full">
                        <select
                            className="block w-full border rounded-lg p-2.5 text-sm appearance-none bg-white bg-down-arrow bg-no-repeat bg-size pr-5 bg-arrow-position"
                            onChange={(e) => handleDateformat(e.target.value as DateFormatType)}
                        >
                            <option value="" disabled selected></option>
                            <option value={DateFormatType.DMY}>{DateFormatType.DMY}</option>
                            <option value={DateFormatType.MDY}>{DateFormatType.MDY}</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}