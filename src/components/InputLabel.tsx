import React from "react"

type InputType = {
    text?: string;
    value?:string;
    restProps?: (value: string) => void;
    onChange: (value: string) => void;
}

export const InputLabel: React.FC<InputType> = ({ text, onChange,value, ...restprops }) => {
    return (
        <div className="flex flex-col gap-2 w-full">
            {text &&
                <label className="font-medium text-sm leading-5 text-gray-900">{text}</label>}
            <div className="relative w-full">
                <input
                    type="text"
                    value={value}
                    className="bg-slate-50 border block w-full rounded-lg text-sm p-2.5 "
                    onChange={(e) => onChange(e.target.value)}
                    {...restprops}
                />
            </div>
        </div>
    )
}            