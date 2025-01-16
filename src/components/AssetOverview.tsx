import { useJsonFetch } from "../hooks"
import { CardOverViewType } from "../types"
import { CardOverView } from "./CardOverView"

export const AssetOverview: React.FC = () => {
    const { data } = useJsonFetch()

    return (
        <div className="my-8 flex flex-wrap gap-4">
            {data?.OverViewCardData.map((item: CardOverViewType) => (
                <CardOverView
                    key={item.id}
                    count={item.count}
                    data={item.data}
                    details={item.details} />
            ))}
        </div>
    )
}