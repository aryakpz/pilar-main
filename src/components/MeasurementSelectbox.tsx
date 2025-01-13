import { MeasurementType } from "../types"

type MeasurementProps = {
    handleMeasurement: (value: MeasurementType) => void
}

export const MeasuremtSelectbox: React.FC<MeasurementProps> = ({ handleMeasurement }) => {
    return (
        <div className="flex-1 md:basic-1/2 pr-6">
            <div className="flex flex-col gap-2 w-full">
                <label className="font-medium text-sm text-gray-900">Choose Measurement</label>
                <div className="flex">
                    <div className="relative w-full">
                        <select
                            className="block w-full border rounded-lg p-2.5 text-sm appearance-none bg-white bg-down-arrow bg-no-repeat bg-size pr-5 bg-arrow-position"
                            onChange={(e) => handleMeasurement(e.target.value as MeasurementType)}
                        >
                            <option value="" disabled selected></option>
                            <option value={MeasurementType.METER}>{MeasurementType.METER}</option>
                            <option value={MeasurementType.INCH}>{MeasurementType.INCH}</option>
                            <option value={MeasurementType.FEET}>{MeasurementType.FEET}</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}