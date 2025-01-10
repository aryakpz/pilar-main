import { CurrencyType } from "../types"

type CurrecyProps = {
    handleCurrency: (value: CurrencyType) => void
}

export const CurrencySelectbox: React.FC<CurrecyProps> = ({ handleCurrency }) => {
    return (
        <div className="flex-1 md:basic-1/2 pr-6">
            <div className="flex flex-col gap-2 w-full">
                <label className="font-medium text-sm text-gray-900">Choose currency</label>
                <div className="flex">
                    <div className="relative w-full">
                        <select
                            className="block w-full border rounded-lg p-2.5 text-sm appearance-none bg-white bg-down-arrow bg-no-repeat bg-size pr-5 bg-arrow-position"
                            onChange={(e) => handleCurrency(e.target.value as CurrencyType)}
                        >
                            <option value={CurrencyType.USE}>{CurrencyType.USE}</option>
                            <option value={CurrencyType.GBP}>{CurrencyType.GBP}</option>
                            <option value={CurrencyType.INR}>{CurrencyType.INR}</option>
                            <option value={CurrencyType.EUR}>{CurrencyType.EUR}</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}