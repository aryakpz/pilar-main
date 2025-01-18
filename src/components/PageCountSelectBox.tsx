import { PageCountType, PageCountValueType } from "../types"
type PageSelectProps = {
    handelePageCount: (value: string) => void
}

export const PageCountSelectBox: React.FC<PageSelectProps> = ({ handelePageCount }) => {
    const PageCount = [
        { id: 1, value: PageCountType.TWENTYFFIVE },
        { id: 2, value: PageCountType.FIFTY },
        { id: 3, value: PageCountType.HUNDRED }
    ]
    return (
        <select className="w-[70px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 p-2.5  
         appearance-none bg-down-arrow bg-no-repeat pr-[21px] bg-[right_10px_center] bg-[length:1.5em_1.5em] "
            onChange={(e) => handelePageCount(e.target.value)}>
            {PageCount.map((item: PageCountValueType) => (
                <option value={item.value} key={item.id}>{item.value}</option>
            ))}
        </select>
    )
}