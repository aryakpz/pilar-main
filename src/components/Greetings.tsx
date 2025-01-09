import { useState } from "react"
import { ButtonType, ButtonVariant } from "../types"
import { Button } from "./Button"
import { SearchBar } from "./SearchBar"
import { getCurrentTime } from "../utils"

export const Greetings = () => {
    const [search, setSearch] = useState("")
    const handleClick = () => { }
    const onSearch = (value: string) => {
        setSearch(value)
    }
    const { greet } = getCurrentTime();

    return (
        <div className="flex flex-col gap-3 mb-6">
            <h4 className="font-medium text-sm sm:text-lg text-gray-700">
                Good {greet}, Admin!
            </h4>
            <div className="flex justify-between items-center flex-wrap gap-2">
                <h3 className="font-semibold text-3xl text-gray-900 ">All portfolio</h3>
                <Button
                    label="New portfolio"
                    type={ButtonType.BUTTON}
                    onClick={handleClick}
                    isImg={true}
                    variant={ButtonVariant.DARK}
                />
            </div>
            <div className="flex justify-between items-center gap-2 flex-wrap">
                <SearchBar onSearch={onSearch} />
            </div>
            <div className="my-1 h-px bg-gray-200"></div>
        </div>
    )
}


