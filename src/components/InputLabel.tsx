import React from "react"

type InputType = {
    text: string;
    onChange: (value: string) => void
}

export const InputLabel: React.FC<InputType> = ({ text, onChange }) => {
    return (
        <div className="flex flex-col gap-2 w-full">
            <label className="font-medium text-xs text-gray-900">{text}</label>
            <div className="relative w-full">
                <input
                    type="text"
                    className="bg-white border block w-full rounded-lg text-sm p-2"
                    onChange={(e) => onChange(e.target.value)}
                />
            </div>
        </div>
    )
}