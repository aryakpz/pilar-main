import { useJsonFetch } from "../hooks/useJsonFetch"

export const SelectBox = () => {
const { data } = useJsonFetch()
console.log(data)
return (
<div className="flex flex-col w-40">
<span>Country</span>
<select className="text-lg p-2 rounded-md ">
{data?.countries.map((item: string) => (
<option value={item} >{item}</option>
))}
</select>
</div>
)
}