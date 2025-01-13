import { AssetTypes } from "../types"

type AssetProps = {
    item: AssetTypes,
    index: number
}
export const AssetCardView: React.FC<AssetProps> = ({ item, index }) => {
    return (
        <div key={index} className="flex rounded-lg border border-grey-200 bg-white shadow-md flex-col w-60 ">
            <img alt={item.image} className="p-4 h-44 w-full object-contain rounded-lg" src={item.image} />
            <div className="flex flex-col p-4 pt-0">
                <div className="flex items-center">
                    <span className="flex-1 font-semibold text-lg ">{item.title}</span>
                </div>
                <div className="text-sm text-gray-500 capitalize">
                    {item.city}
                </div>
            </div>
        </div>
    )
}