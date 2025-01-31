import { useState } from 'react';
import { ProgressbarType } from '../types'
import { ProgressBar } from './FomProgress'
import arrow from '/assets/images/left-arrow.svg'

type StepperPageProps = {
    text: string;
}
const progressBarData = [
    { id: 1, type: ProgressbarType.START },
    { id: 2, type: ProgressbarType.MID },
    { id: 3, type: ProgressbarType.END },
];

export const StepperPageHeader: React.FC<StepperPageProps> = ({ text }) => {
    const [activeBtn, setActiveBtn] = useState<number>(0);

    const handleProgressClick = (index: number) => {
        setActiveBtn(index);
    };

    return (
        <div className="sticky top-0 z-50">
            <nav className="border-gray-200 bg-white px-2 py-2.5 sm:px-4">
                <div className="mx-auto flex flex-wrap items-center justify-between">
                    <div className="flex-1 flex justify-between gap-5 py-5 px-52 items-center whitespace-nowrap">
                        <div className="flex gap-5 items-center text-xl font-semibold">
                            <button type="button">
                                <img src={arrow} />
                            </button>
                            <span>{text}</span>
                        </div>
                        <div className='flex relative'>
                            <div className="flex relative">
                                {progressBarData.map((item, index) => (
                                    <ProgressBar
                                        key={item.id}
                                        isActive={index === activeBtn}
                                        type={item.type}
                                        onClick={() => handleProgressClick(index)}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )

}