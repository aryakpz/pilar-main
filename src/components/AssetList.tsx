import { useJsonFetch } from "../hooks"
import { OverviewCard } from "../types";
import { OverViewCard } from "./OverViewCard";

type FilterProps = {
    searchValue: string
}

export const AssetList: React.FC<FilterProps> = ({ searchValue }) => {
    const { data } = useJsonFetch();
    const AssetList = data?.assetCards.filter((item: OverviewCard) => (
        item.title.toLowerCase().includes(searchValue.toLowerCase())
    ))

    return (
        <div className="flex flex-wrap gap-x-4 gap-y-5">
            {AssetList && AssetList.map((item: OverviewCard, index: number) => (
                <OverViewCard
                    item={item}
                    index={index}
                    type={false} />
            ))}
        </div>
    )
}