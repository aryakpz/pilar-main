import axios from "axios"

export const getDetails = async () => {
const res = await axios.get('/assets/data/data.json')
return res.data

}