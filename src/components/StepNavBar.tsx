import { ButtonVariant } from "../types";
import { Button } from "./Button";

export const StepNavBar = () => {
    const handlechange = () => {
    }
    return (
        <div className="p-3 bg-gray-50 flex justify-between items-center h-16 z-20">
            <div className="flex">
                <div className="relative w-full">
                    <select
                        className="block w-full rounded-lg border-none bg-gray-50 appearance-none bg-down-arrow bg-[right_-5px_center] bg-[length:1.5em_1.5em] bg-no-repeat leading-[24px] p-2.5 pr-[64.4px] font-semibold  box-content">
                        <option value="">Houthaven</option>
                    </select>
                </div>
            </div>
            <Button
                label="Show all assets"
                variant={ButtonVariant.LIGHT}
                showAddIcon={false}
                style="border-zinc-300 bg-white p-0.5"
                onClick={handlechange}
            />
        </div>
    );
};