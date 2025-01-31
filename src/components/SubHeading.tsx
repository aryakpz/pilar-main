type SubHeadingProps = {
    text: string
}

export const SubHeading: React.FC<SubHeadingProps> = ({ text }) => (
    <div>
        <h5 className="font-semibold text-xl">{text}</h5>
    </div>
)