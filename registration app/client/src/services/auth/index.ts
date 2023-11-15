import axios from "axios";
import { registerInputs } from "../../models";

const BASE_URL = "/api/users/";

const register = async (payload: registerInputs) => {
  const response = await axios.post(`${BASE_URL}`, payload);
  return response;
};

const getUsers = async () => {
  const response = await axios.get(`${BASE_URL}`);
  return response;
};

const markAttendance = async (payload: registerInputs) => {
  const response = await axios.patch(`${BASE_URL}`, payload);
  return response;
};

const getAttendanceCount = async () => {
  const response = await axios.get(`${BASE_URL}count`);
  return response;
};

const authService = {
  register,
  getUsers,
  getAttendanceCount,
  markAttendance,
};

export default authService;
