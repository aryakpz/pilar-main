import { useJsonFetch } from "../hooks"
import { ButtonVariant, LeftSideBarType } from "../types"
import { Button } from "./Button"
import { SideBarItem } from "./SideBarItems"

export const LeftSideBar = () => {
    const { data } = useJsonFetch()
    const handleClick = () => {

    }
    return (
        
            <aside className="h-full w-64">
                <div className="h-full overflow-y-auto overflow-x-hidden rounded bg-white py-4 px-3 ">
                    <div className="h-full flex flex-col">
                        <div>
                            <ul className="mt-4 space-y-2 border-t border-gray-200 pt-4 first:mt-0 first:border-t-0 first:pt-0 dark:border-gray-700 bg-transparent">
                                {data?.leftBarItem.map((item: LeftSideBarType) => (
                                    <SideBarItem item={item} key={item.id} />
                                ))}
                            </ul>
                        </div>
                        <div className="flex flex-1 items-end ">
                            <div className="mt-6 rounded-lg p-4">
                                <div className="pb-6">
                                    <Button
                                        label="Get support"
                                        showAddIcon={true}
                                        variant={ButtonVariant.LIGHT}
                                        style="bg-transparent border"
                                        onClick={() => handleClick} />
                                </div>
                                <div className="text-xs text-gray-500">
                                     Version: v1.30.8-dev.97da96e3
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
        
    )
}

