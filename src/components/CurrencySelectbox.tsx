import { CurrencyType } from "../types"

type CurrecyProps = {
    handleSelectCurrency: (value: CurrencyType) => void
}

const CurrencyDataType = [
    { id: 1, value: CurrencyType.USE },
    { id: 2, value: CurrencyType.GBP },
    { id: 3, value: CurrencyType.INR },
    { id: 4, value: CurrencyType.EUR },
]

export const CurrencySelectbox: React.FC<CurrecyProps> = ({ handleSelectCurrency }) => {
    return (
        <div className="flex-1 md:basis-1/2 pr-6">
            <div className="flex flex-col gap-2 w-full">
                <label className="font-medium text-sm text-gray-900">Choose currency</label>
                <div className="flex">
                    <div className="relative w-full">
                        <select
                            className="block w-full border rounded-lg p-2.5 text-sm appearance-none bg-slate-50 bg-down-arrow bg-no-repeat bg-size pr-5 bg-arrow-position"
                            onChange={(e) => handleSelectCurrency(e.target.value as CurrencyType)}
                        >
                            <option value="" hidden></option>
                            {CurrencyDataType.map((item) => (
                                <option value={item.value} key={item.id}>{item.value}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}