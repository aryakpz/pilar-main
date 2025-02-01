import { ButtonType, ButtonVariant } from "./enum";

export type ButtonProps = {
    label: string;
    style?: string;
    type?: ButtonType
    variant?: ButtonVariant;
    onClick: () => void;
}

export type OverviewCard = {
    id: number;
    image: string;
    title: string;
    city: string;
}

export type CardOverViewType = {
    id: number,
    count: number,
    data: string,
    details?: string
}