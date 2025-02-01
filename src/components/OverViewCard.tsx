import { useNavigate } from "react-router-dom"
import { OverviewCard } from "../types"

type ItemProps = {
    item: OverviewCard
    index: number
    type?: boolean
    cardType:'portfolio' | 'asset'
}

export const OverViewCard: React.FC<ItemProps> = ({ item, index, type, cardType }) => {
    const nav =useNavigate()
    const handleCardClick=()=>{
     { cardType === 'portfolio' ? nav('/assets') : nav('/viewdetails')}
    }
    return (
        <div key={index} className="flex rounded-lg border border-grey-200 bg-white shadow-md flex-col w-60 " onClick={handleCardClick}>
            <img alt={item.image} className="p-4 h-44 w-full object-contain rounded-lg" src={item.image} />
            <div className="flex flex-col p-4 pt-0">
                <div className="flex items-center">
                    <span className="flex-1 font-semibold text-lg ">{item.title}</span>
                    {type === true &&
                        <button className="p-2">
                            <div className="w-fit">
                                <button className="text-gray-500 bg-white border border-gray-300 hover:bg-gray-400 p-0.5 pr-[0px] text-center  font-medium rounded-lg group flex h-min items-center justify-center">
                                    <span className="flex items-center rounded-md text-xs justify-center align-middle rotate-90 pl-3 pr-2 pb-1 pt-1  mr-[-4px] tracking-widest "> ...
                                    </span>
                                </button>
                            </div>
                        </button>}
                </div>
                <div className="text-sm text-gray-500 capitalize">
                    {item.city}
                </div>
            </div>
        </div>
    )
}


