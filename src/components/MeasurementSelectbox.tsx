import { MeasurementType } from "../types"

type MeasurementProps = {
    handleSelectMeasurement: (value: MeasurementType) => void
}

const measurementTypeData = [
    { id: 1, value: MeasurementType.METER },
    { id: 2, value: MeasurementType.INCH },
    { id: 3, value: MeasurementType.FEET }
]

export const MeasuremtSelectbox: React.FC<MeasurementProps> = ({ handleSelectMeasurement }) => {
    return (
        <div className="w-full md:basis-1/2 pr-6">
            <div className="flex flex-col gap-2 w-full">
                <label className="font-medium text-sm text-gray-900">Measurements</label>
                <div className="flex">
                    <div className="relative w-full">
                        <select
                            className="block w-full border rounded-lg p-2.5 text-sm appearance-none bg-slate-50 bg-down-arrow bg-no-repeat bg-size pr-5 bg-arrow-position"
                            onChange={(e) => handleSelectMeasurement(e.target.value as MeasurementType)}
                        >
                            <option value="" hidden></option>
                            {measurementTypeData.map((item) => (
                                <option value={item.value} key={item.id}>{item.value}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}