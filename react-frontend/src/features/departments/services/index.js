import axios from "axios";

const API_URL = "http://localhost:8888/api/departments";

export const fetchDepartments = async () => {
  try {
    const response = await axios.get(API_URL);
    return response;
  } catch (e) {
    console.error("while fecthing departments", e);
  }
};

export const createDepartment = async (department) => {
  try {
    let res = await axios.post(API_URL, department);
    return res;
  } catch (e) {
    console.error("while creating department", e);
  }
};
