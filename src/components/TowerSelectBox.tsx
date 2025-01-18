import { useJsonFetch } from "../hooks"
import { OfficeDataType } from "../types"

export const TowerSelectBox = () => {
    const { data } = useJsonFetch()
    return (
        <div>
            <div className="flex">
                <div className="relative w-full">
                    <select className="block w-full border disabled:cursor-not-allowed appearance-none bg-down-arrow bg-no-repeat bg-arrow-position
                 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 rounded-lg p-2.5 text-sm">
                        <option value="" hidden>Select Tower</option>
                        {data?.officeData.map((item: OfficeDataType) => (
                            <option value={item.subAsset} key={item.id} >{item.subAsset}</option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    )
} 
