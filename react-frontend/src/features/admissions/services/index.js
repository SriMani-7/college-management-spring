import axios from "axios";

const API_URL = "http://localhost:8888/api/admissions";

export const createStudent = async (data) => {
  return await axios.post(API_URL, data);
}

export const fetchAvailableCourses = async () => {
  return await axios.get(`${API_URL}/courses`);
}