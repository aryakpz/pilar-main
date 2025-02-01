type DividerProps = {
    style?: string
}
export const Divider: React.FC<DividerProps> = ({ style }) => (
    <div className={`h-px bg-gray-200 ${style}`}></div>
)