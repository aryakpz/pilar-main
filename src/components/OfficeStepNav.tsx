import { ButtonVariant } from "../types"
import { Button } from "./Button"

type StepNavProps = {
    title: string;
    buttonLabel: string
    onButtonClick: (value: String) => void
}

export const OfficeStepNav: React.FC<StepNavProps> = ({ title, buttonLabel, onButtonClick }) => {
    return (
        <div className="flex flex-col gap-3 mb-6">
            <div className="flex justify-between items-center flex-wrap gap-2">
                <h3 className="font-semibold text-3xl leading-10 text-gray-900">{title}</h3>
                <Button
                    label={buttonLabel}
                    showAddIcon={true}
                    variant={ButtonVariant.DARK}
                    onClick={() => onButtonClick}
                />
            </div>
        </div>
    )
}