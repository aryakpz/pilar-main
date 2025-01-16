import React from "react"
import { useJsonFetch } from "../hooks"

type SelectboxProps = {
    onSelectChange: (value: string) => void
}

export const SelectBox: React.FC<SelectboxProps> = ({ onSelectChange }) => {
    const { data } = useJsonFetch();

    return (
        <div className="flex flex-col w-full gap-2">
            <label className="font-medium text-sm text-gray-900 ">Country</label>
            <div className="flex">
                <div className="relative w-full">
                    <select
                        className="block w-full border bg-slate-50 border-gray-300 text-gray-900 rounded-lg p-2.5 appearance-none text-sm bg-down-arrow bg-no-repeat bg-size pr-5 bg-arrow-position"
                        onChange={(e) => onSelectChange(e.target.value)}>
                        <option value=""></option>
                        {data?.countries.map((item: string) => (
                            <option key={item} value={item}>{item}</option>
                        ))}
                    </select>
                </div>

            </div>

        </div>
    )
}