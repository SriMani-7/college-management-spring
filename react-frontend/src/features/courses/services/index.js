import axios from "axios"

const API_URL = "http://localhost:8888/api/programmes";

export const fetchProgrammes = async () => {
    return await axios.get(API_URL);
}