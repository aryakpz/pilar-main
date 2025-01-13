import { SortSelect } from "../types"

type SelectProp = {
    handleSort: (value: SortSelect) => void
}

export const SortSelector: React.FC<SelectProp> = ({ handleSort }) => {
 
    return (
        <div className="w-16 flex">
            <select className="block w-full appearance-none bg-down-arrow bg-no-repeat bg-arrow-position text-sm p-2 rounded-lg border bg-white"
                onChange={(e)=>handleSort(e.target.value as SortSelect)} >
                <option value={SortSelect.ASC}>{SortSelect.ASC}</option>
                <option value={SortSelect.DES}>{SortSelect.DES}</option>
            </select>
        </div>
    )
}    

