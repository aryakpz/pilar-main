import React from "react";
import { ButtonVariant, OccupanyType, OfficeDataType } from "../types"
import { Button } from "./Button";
import occupiedImg from "/assets/images/occupied.svg"

type OfficeDataProps = {
    item: OfficeDataType
}

export const OfficeDataSection: React.FC<OfficeDataProps> = ({ item }) => {
    const handleClick = () => { }
    return (
        <React.Fragment key={item.id}>
            <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900 ">{item.subAsset}</td>
            <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900 ">{item.number}</td>
            <td className="px-6 py-4 text-center">{item.volume}</td>
            <td className="px-6 py-4 text-center">{item.rooms}</td>
            <td className="px-6 py-4 text-center">{item.rent}</td>
            <td className="px-6 py-4 text-center">
                <div className="flex gap-3 items-center">
                    <img src={occupiedImg} />
                    <span className="capitalize">
                        {item.occupancy === true ? <>{OccupanyType.FULL}</> : <>{OccupanyType.PARTIL}</>}
                    </span>
                </div>
            </td>
            <td className="px-6 py-4 flex gap-4">
                <a>
                    <Button
                        variant={ButtonVariant.LIGHT}
                        label="View details"
                        onClick={handleClick}
                        showAddIcon={false}
                        style="text-black px-[8.9px] py-[5px] hover:text-blue-600"
                    />
                </a>
            </td>
        </React.Fragment>
    )
}