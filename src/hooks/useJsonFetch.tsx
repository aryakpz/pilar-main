import { useQuery } from "@tanstack/react-query"
import { getDetails } from "../utils"

export const useJsonFetch = () => {
    return useQuery({
        queryKey: ['datas'],
        queryFn: getDetails,
    })
}