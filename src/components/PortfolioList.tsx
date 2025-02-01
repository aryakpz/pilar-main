import { useJsonFetch } from "../hooks"
import { OverviewCard } from "../types";
import { OverViewCard } from "./OverViewCard";

type PortfolioListProps = {
    searchValue: string
}

export const PortfolioList: React.FC<PortfolioListProps> = ({ searchValue }) => {
    const { data } = useJsonFetch();
    const portfoliolist = data?.cards?.filter((item: OverviewCard) => (
        item.title.toLowerCase().includes(searchValue.toLowerCase())
    ))

    return (
        <div className="flex flex-wrap gap-5">
            {portfoliolist?.map((item: OverviewCard ,index:number) => (
                <OverViewCard item={item} index={index}  type={false} cardType ="portfolio" />
            ))}
        </div>
    )
}