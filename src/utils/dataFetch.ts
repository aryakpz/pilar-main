import axios from "axios"

export const getDetails = async () => {
    const res = await axios.get('/assets/data/data.json')
    return res.data

}

export const getCurrentTime = () => {
    let greet = "";
    const hours = new Date().getHours();
    if (hours < 12) {
        greet = "Morning";
    } else if (hours < 16) {
        greet = "Afternoon";
    } else {
        greet = "Evening";
    }

    return { greet };
};
