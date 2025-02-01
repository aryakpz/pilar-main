import { DateFormatType } from "../types"

type DateFormatProps = {
    handleSelectDateformat: (value: DateFormatType) => void
}

const dateFormatData = [
    { id: 1, value: DateFormatType.DMY },
    { id: 2, value: DateFormatType.MDY }
]

export const DateFromatSelectbox: React.FC<DateFormatProps> = ({ handleSelectDateformat }) => {
    return (
        <div className="flex-1 md:basis-1/2 pr-6">
            <div className="flex flex-col gap-2 w-full">
                <label className="font-medium text-sm text-gray-900">Choose date format</label>
                <div className="flex">
                    <div className="relative w-full">
                        <select
                            className="block w-full border rounded-lg p-2.5 text-sm appearance-none bg-slate-50 bg-down-arrow bg-no-repeat bg-size pr-5 bg-arrow-position"
                            onChange={(e) => handleSelectDateformat(e.target.value as DateFormatType)}
                        >
                            <option value="" hidden></option>
                            {dateFormatData.map((item) => (
                                <option value={item.value} key={item.id}>{item.value}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}