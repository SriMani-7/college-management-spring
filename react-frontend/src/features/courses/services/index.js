import axios from "axios"

const API_URL = "http://localhost:8888/api/courses";

export const fetchCourses = async () => {
    return await axios.get(API_URL);
}

export const createCourse = async (programme) => {
    return await axios.post(API_URL, programme);
}