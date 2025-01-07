import { btntype } from "./enum";

export type ButtonProps = {
    label: string;
    classname?: string;
    type?: "button" | "submit";
    btntype?: btntype;
    onClick: () => void;
}