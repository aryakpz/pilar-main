import { useState } from "react";
import { useJsonFetch } from "../hooks";
import { Button } from "./Button";
import { AssetList, ButtonType, ButtonVariant } from "../types";

type ButtonIdProps = {
    onSelect: (value: AssetList) => void;
};

export const AssetInnterButton: React.FC<ButtonIdProps> = ({ onSelect }) => {
    const { data } = useJsonFetch();
    const [activeButton, setActiveButton] = useState<AssetList>(AssetList.LIST);

    const handleClick = (id: AssetList) => {
        setActiveButton(id);
        onSelect(id);
    };

    return (
        <div className="flex text-gray-500">
            {data?.assetview.map((item: any) => (
                <Button
                    key={item.id}
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
            ))}
        </div>
    );
};

