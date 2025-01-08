import React from "react"
import { useJsonFetch } from "../hooks/useJsonFetch"
import { SelectboxProps } from "../types/type"


export const SelectBox: React.FC<SelectboxProps> = ({ onSelectChange }) => {
    const { data } = useJsonFetch();

    return (
        <div className="flex flex-col w-40 p-5">
            <span className="font-medium text-sm text-gray-900 pb-4">Country</span>
            <select className="text-sm p-2 rounded-md block bg-white border w-max appearance-none bg-down-arrow bg-no-repeat bg-arrow-position"
                onChange={(e)=>onSelectChange(e.target.value)}>
                <option value=""></option>
                {data?.countries.map((item: string) => (
                    <option key={item} value={item}>{item}</option>
                ))}
            </select>
        </div>
    )
}