export type buttonProps = {
    label: string;
    classname?: string;
    type?: "button" | "submit";
    btntype?:"bg-black" | "bg-white"
    onClick: () => void;
}