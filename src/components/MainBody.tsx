import { useJsonFetch } from "../hooks"
import { Greetings } from "./Greetings"

export const MainBody = () => {
    const { data } = useJsonFetch()
    console.log(data?.cards)
    return (
        <div>
            <Greetings />
        </div>
    )
}