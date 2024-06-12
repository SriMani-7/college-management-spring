import axios from "axios"

const API_URL = "http://localhost:8888/api/programmes";

export const fetchProgrammes = async () => {
    return await axios.get(API_URL);
}

export const fetchAvailableDepts = async () => {
    return await axios.get(API_URL+"/departments");
}

export const createProgramme = async (programme) => {
    return await axios.post(API_URL, programme);
}