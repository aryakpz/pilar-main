import { ProgressbarType } from '../types'
import { ProgressBar } from './FomProgress'
import arrow from '/assets/images/left-arrow.svg'

type StepperPageProps = {
    text: string;
}

export const StepperPageHeader: React.FC<StepperPageProps> = ({ text }) => (
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
                        <ProgressBar
                            isActive={true}
                            type={ProgressbarType.START}
                        />
                        <ProgressBar
                            isActive={false}
                            type={ProgressbarType.MID}
                        />
                        <ProgressBar
                            isActive={false}
                            type={ProgressbarType.END}
                        />
                    </div>
                </div>
            </div>
        </nav>
    </div>
)