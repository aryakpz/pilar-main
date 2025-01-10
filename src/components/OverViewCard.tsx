import React from "react";
import { CardType } from "../types";

export const OverViewCard: React.FC<{ item: CardType }> = ({ item }) => {
    return (
        <div className="flex rounded-lg border border-grey-200 bg-white shadow-md flex-col w-60">
            <img alt={item.image} className="p-4 h-44 w-full object-contain rounded-lg" src={item.image} />
            <div className="flex flex-col p-4 pt-0">
                <div className="flex items-center">
                    <span className="flex-1 font-semibold text-lg">{item.title}</span>
                    <button className="p-2 -rotate-90">
                        <div className="w-fit">
                            <button className="text-gray-500 bg-white border border-gray-300 hover:bg-gray-400 p-0.5 text-center font-medium rounded-lg group flex h-min items-center justify-center">
                                <span className="flex items-center rounded-md text-xs px-1 pb-2 justify-center align-middle">...</span>
                            </button>
                        </div>
                    </button>
                </div>
                <div className="text-sm text-gray-500 capitalize">
                    {item.city}
                </div>
            </div>
            <div></div>
        </div>
    );
};
