import { useJsonFetch } from "../hooks"
import { OverviewCard, SortSelect } from "../types";
import { OverViewCard } from "./OverViewCard";

type PortfolioListProps = {
    searchValue: string;
    sortType: SortSelect
}

export const PortfolioList: React.FC<PortfolioListProps> = ({ searchValue, sortType }) => {
    const { data } = useJsonFetch();
    const Portfoliolist = data?.cards
        ?.filter((item: OverviewCard) =>
            item.title.toLowerCase().includes(searchValue.toLowerCase())
        )
        ?.sort((a: OverviewCard, b: OverviewCard) => {
            if (sortType === SortSelect.DES) {
                return b.title.localeCompare(a.title);
            } else
                return a.title.localeCompare(b.title);
        });

    return (
        <div className="flex flex-wrap gap-5">
            {Portfoliolist && Portfoliolist.map((item: OverviewCard) => (
                <OverViewCard item={item} key={item.id} />
            ))}
        </div>
    )
}