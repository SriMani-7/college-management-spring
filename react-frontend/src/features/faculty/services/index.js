import axios from "axios";

const API_URL = "http://localhost:8888/api/faculty";

export const fetchFaculty = async () => {
  try {
    const response = await axios.get(API_URL);
    return response;
  } catch (e) {
    console.error("while fecthing faculty", e);
  }
};

export const createFaculty = async (department) => {
  try {
    let res = await axios.post(API_URL, department);
    return res;
  } catch (e) {
    console.error("while creating faculty", e);
  }
};