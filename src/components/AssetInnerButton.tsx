import { useState } from "react";
import { useJsonFetch } from "../hooks";
import { Button } from "./Button";
import { ButtonType, ButtonVariant } from "../types";
import { useNavigate } from "react-router-dom";

type ButtonIdProps = {
    onSelect: (value: string) => void;
};

export const AssetInnterButton: React.FC<ButtonIdProps> = ({ onSelect }) => {
    const nav = useNavigate()
    const { data } = useJsonFetch();
    const [activeButton, setActiveButton] = useState<string | null>("list");

    const handleClick = (id: string) => {
        setActiveButton(id);
        onSelect(id);
        nav(id)
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

