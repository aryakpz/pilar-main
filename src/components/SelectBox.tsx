import React from "react"
import { useJsonFetch } from "../hooks/useJsonFetch"

export const SelectBox = () => {
    const { data } = useJsonFetch()
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        console.log(e.target.value)
    }

    return (
        <div className="flex flex-col w-40 p-5">
            <span className="font-medium text-sm text-gray-900 pb-4">Country</span>
            <select className="text-sm p-2 rounded-md block bg-white border w-max"
                onChange={handleChange}>
                <option value=""></option>
                {data?.countries.map((item: string) => (
                    <option value={item} >{item}</option>
                ))}
            </select>
        </div>
    )
}

