import { ButtonVariant } from "../types"
import { Button } from "./Button"

export const AssetDashboard = () => {
  const handleClick = () => { }
  return (
    <div className="mb-12">
      <div className="flex items-center justify-between w-screen">
        <div>
          <h3 className="font-semibold text-3xl pb-2"> Overview</h3>
          <h5 className="font-medium text-base text-gray-500 pb-4"> Great to see you again</h5>
        </div>
        <div>
          <Button
            label="Reload"
            variant={ButtonVariant.DARK}
            showAddIcon={true}
            onClick={handleClick}
          />
        </div>
      </div>
      <div className="pb-8">
        <div className="bg-slate-200 p-4">
          <h3 className="font-medium text-base text-gray-900">Asset</h3>
        </div>
      </div>

    </div>
  )
}