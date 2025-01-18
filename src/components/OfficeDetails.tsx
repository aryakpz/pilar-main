import { useJsonFetch } from "../hooks"
import { OfficeDataType, TowersType } from "../types"
import { OfficeDataSection } from "./OfficeDataSection"

export const OfficeDetails: React.FC = () => {

    const { data } = useJsonFetch()

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-left text-sm text-gray-500 ">
                <thead className="bg-gray-50 text-xs uppercase text-gray-700 ">
                    <tr>
                        {data?.tableHead.map((item: TowersType) => (
                            <th className={`" ${item.position === "center" ? "px-6 py-3 text-center " : 'px-6 py-3'} `} key={item.id}  >
                                {item.title}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="divide-y">
                    {data?.officeData.map((item: OfficeDataType) => (
                        <tr className="bg-white" key={item.id}>
                            <OfficeDataSection item={item} />
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}