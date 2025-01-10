import clsx from "clsx"
import { ProgressbarType } from "../types"

type ProgressProps = {
    isActive: boolean,
    type: ProgressbarType,
}

export const ProgressBar: React.FC<ProgressProps> = ({ isActive, type }) => {
    const buttonClass = clsx("rounded-full flex justify-center items-center border-2  box-content",
        {
            "w-6 h-6 border-gray-800": isActive === true,
            "w-5 h-5 border-gray-300": isActive === false
        }
    )
    const divClass = clsx(
        {
            "w-2 h-2 rounded-full bg-gray-800": isActive === true,
            "w-2 h-2 rounded-full bg-gray-300": isActive === false
        }
    )

    return (
        <div className='flex w-full items-center my-auto h-full'>

            {type === ProgressbarType.END ? <div className='h-px w-6 bg-gray-300'></div> : ''}
            <div className='flex items-center'>
                <button className={buttonClass}>
                    <div className={divClass}></div>
                </button>
            </div>
            {type === ProgressbarType.START ? <div className='h-px w-6 bg-gray-300'></div> : ''}
        </div>
    )
}