import { useJsonFetch } from "../hooks"
import { AssetTypes } from "../types";
import { AssetCardView } from "./AssetCardView";

type AssetProps = {
    searchValue: string
}

export const AssetList: React.FC<AssetProps> = ({ searchValue }) => {
    const { data } = useJsonFetch();
    const assets = data?.assetCards.filter((item: AssetTypes) => (
        item.title.toLowerCase().includes(searchValue.toLowerCase())
    ))

    return (
        <div className="flex flex-wrap gap-x-4 gap-y-5">
            {assets && assets.map((item: AssetTypes) => (
                <AssetCardView item={item} key={item.id} />
            ))}
        </div>
    )
}


