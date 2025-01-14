import axios from "axios"

export const getDetails = async () => {
    const res = await axios.get('/assets/data/data.json')
    return res.data

}

export const getTimePeriodOfDay = () => {
    const hours = new Date().getHours();
    if (hours < 12) {
        return "Morning";
    } else if (hours < 16) {
        return "Afternoon";
    } else 
        return "Evening";
};