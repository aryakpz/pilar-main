import { ButtonType, ButtonVariant } from "./enum";

export type ButtonProps = {
    label: string;
    style?: string;
    type?: ButtonType
    variant?: ButtonVariant;
    onClick: () => void;
}

export type AssetTypes={
    image:string;
    title:string;
    city:string;
}