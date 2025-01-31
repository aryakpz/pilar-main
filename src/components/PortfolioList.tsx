import { useJsonFetch } from "../hooks"
import { OverviewCard } from "../types";
import { OverViewCard } from "./OverViewCard";

type PortfolioListProps = {
    searchValue: string
}

export const PortfolioList: React.FC<PortfolioListProps> = ({ searchValue }) => {
    const { data } = useJsonFetch();
    const Portfoliolist = data?.cards.filter((item: OverviewCard) => (
        item.title.toLowerCase().includes(searchValue.toLowerCase())
    ))

    return (
        <div className="flex flex-wrap gap-5">
            {Portfoliolist && Portfoliolist.map((item: OverviewCard) => (
                <OverViewCard item={item} />
            ))}
        </div>
    )
}