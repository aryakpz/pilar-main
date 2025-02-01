import { SortSelect } from "../types"

type SelectProp = {
    handleSort: (value: SortSelect) => void
}

export const SortSelector: React.FC<SelectProp> = ({ handleSort }) => {

    return (
        <div className="w-16 flex">
            <select
                className="block w-full border bg-white border-gray-300 text-gray-900 rounded-lg p-2.5 appearance-none text-sm bg-down-arrow bg-no-repeat bg-size pr-5 bg-arrow-position"
                onChange={(e) => handleSort(e.target.value as SortSelect)} >
                <option value={SortSelect.ASC}>{SortSelect.ASC}</option>
                <option value={SortSelect.DES}>{SortSelect.DES}</option>
            </select>
        </div>
    )
}