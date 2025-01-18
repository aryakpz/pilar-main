import { useState } from "react";
import { PageCountSelectBox } from "./PageCountSelectBox"
import leftArrow from '/assets/images/left-arrow.svg';
import rightArrow from '/assets/images/right-arrow.svg';

type PaginationProps = {
    totalItems: number
}

export const PaginationComponent: React.FC<PaginationProps> = ({ totalItems }) => {
    const [itemPerPage, setItemperPage] = useState<number>(25)
    const handlePageCount = (count: string) => {
        setItemperPage(parseInt(count))
    }

    return (
        <div className="flex flex-row items-center justify-between text-center border rounded-lg p-3 shadow-md mt-4">
            <div className="flex flex-row items-center gap-2 w-1/2">
                <span className="text-sm">Rows per page</span>
                <PageCountSelectBox handelePageCount={handlePageCount} />
                <span>1-{totalItems} of {totalItems}</span>
            </div>
            <nav>
                <ul className="xs:mt-0 mt-2 inline-flex items-center -space-x-px">
                    <li>
                        <button className="ml-0 rounded-l-lg border border-gray-300 bg-white py-2 px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700  inline-flex">
                            <img src={leftArrow} className="fill-red-00" /> Previous
                        </button>
                    </li>
                    <li>
                        <button className="ml-0 rounded-r-lg border border-gray-300 bg-white py-2 px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700  inline-flex">
                            Next <img src={rightArrow} />
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}                         