
type OverviewProps = {
    count: number;
    data: string,
    details?: string
}

export const CardOverView: React.FC<OverviewProps> = ({ count, data, details }) => {
    return (
        <div className="flex-1 h-44">
            <div className="p-6 shadow-md rounded-lg h-full bg-white w-full flex flex-col">
                <div className="flex flex-col flex-1">
                    <span className="font-bold text-3xl leading-10 text-gray-900">{count}</span>
                    <span className="text-base font-normal leading-6 text-gray-500">{data}</span>
                    {details ? <>
                        <div className="h-px bg-gray-100 w-full mt-4 mb-6"></div>
                        <span className="text-sm font-medium leading-5 text-gray-500">
                            {details}
                        </span>
                    </> : ''}
                </div>
            </div>
        </div>
    )
}