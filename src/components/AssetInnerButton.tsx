import { useState } from "react";
import { useJsonFetch } from "../hooks";
import { Button } from "./Button";
import { ButtonType, ButtonVariant } from "../types";

export const AssetInnterButton = () => {
    const { data } = useJsonFetch()
    const [activeButton, setActiveButton] = useState<string | null>("list");

    const handleClick = (id: string) => {
        setActiveButton(id);
        console.log(`Button ${id} clicked`);
    };

    return (
        <div className="flex tex-gray-500 ">
            {data?.assetview.map((item: any,) => (
                <a id={item.id} >
                    <Button
                        label={item.name}
                        type={ButtonType.BUTTON}
                        onClick={() => handleClick(item.id)}
                        showAddIcon={false}
                        variant={
                            activeButton === item.id
                                ? ButtonVariant.DARK
                                : ButtonVariant.LIGHT
                        }
                        style="text-gray-500 justify-center text-center"
                    />
                </a>
            ))}
        </div>
    )
}