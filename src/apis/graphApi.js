import axios from "axios";

export const fetchData = async () => {
    try {
        const res = await axios.get("../db/data.json");
        return await res.data;
    } catch (error) {
        console.log(error);
    }
}