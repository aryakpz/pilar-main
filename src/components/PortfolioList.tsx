import { useJsonFetch } from "../hooks"
import { Portfolio } from "../types";
import { OverViewCard } from "./OverviewCard";

type PortfolioListProps = {
    searchValue: string
}

export const PortfolioList: React.FC<PortfolioListProps> = ({ searchValue }) => {
    const { data } = useJsonFetch();
    const Portfoliolist = data?.cards.filter((item: Portfolio) => (
        item.title.toLowerCase().includes(searchValue.toLowerCase())
    ))

    return (
        <div className="flex flex-wrap gap-5">
            {Portfoliolist && Portfoliolist.map((item: Portfolio) => (
                <OverViewCard item={item} />
            ))}
        </div>
    )
}