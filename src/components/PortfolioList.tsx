import { useJsonFetch } from "../hooks"
import { OverViewCard } from "./OverViewCard"

export const PortfolioList = () => {
    const { data } = useJsonFetch()
    
    return (
        <div className="flex flex-wrap gap-5">
            {data?.cards.map((item: any) => (
             <OverViewCard item={item}/>
            ))}
        </div>
    )
}