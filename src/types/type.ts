import { ButtonVariant } from "./enum";

export type ButtonProps = {
    label: string;
    style?: string;
    type?: "button" | "submit";
    btnType?: ButtonVariant;
    onClick: () => void;
}