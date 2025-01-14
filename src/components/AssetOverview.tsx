import { OverViewCard } from "./OverviewCards"

export const AssetOverview: React.FC = () => {
    return (
        <div className="my-8 flex flex-wrap gap-4">
            <OverViewCard
                count={254}
                data="Total apartments"
                details="26 assets"
            />
            <OverViewCard
                count={68}
                data="Vacant"
            />
            <OverViewCard
                count={292}
                data="Moved in"
                details="270 waiting to move in"
            />
        </div>
    )
}