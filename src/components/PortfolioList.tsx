import { useJsonFetch } from "../hooks"
import { CardTypes } from "../types";
import { OverViewCard } from "./OverviewCard";

type PortfolioListProps = {
    searchValue: string
}

export const PortfolioList: React.FC<PortfolioListProps> = ({ searchValue }) => {
    const { data } = useJsonFetch();
    const filterData = data?.cards.filter((item: CardTypes) => (
        item.title.toLowerCase().includes(searchValue.toLowerCase())
    ))

    return (
        <div className="flex flex-wrap gap-5">
            {filterData && filterData.map((item: CardTypes, index: number) => (
                <OverViewCard item={item} index={index} />
            ))}
        </div>
    )
}