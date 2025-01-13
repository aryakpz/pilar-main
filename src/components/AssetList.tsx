import { useJsonFetch } from "../hooks"
import { AssetTypes } from "../types";
import { AssetCardView } from "./AssetCardView";

type FilterProps = {
    searchValue: string
}

export const AssetList: React.FC<FilterProps> = ({ searchValue }) => {
    const { data } = useJsonFetch();
    const filterData = data?.assetCards.filter((item: AssetTypes) => (
        item.title.toLowerCase().includes(searchValue.toLowerCase())
    ))

    return (
        <div className="flex flex-wrap gap-x-4 gap-y-5">
            {filterData && filterData.map((item: AssetTypes, index: number) => (
                <AssetCardView
                    item={item}
                    index={index} />
            ))}
        </div>
    )
}