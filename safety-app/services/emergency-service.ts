import axios, { AxiosRequestConfig } from "axios";

const BASE_URL = "http://192.168.8.100:3000/api";

const createAxiosInstance = (token: string) => {
  const config: AxiosRequestConfig = {
    baseURL: BASE_URL,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return axios.create(config);
};

// Notify Emergency
const notifyEmergency = async (
  emergencyData: { lat: string; long: string },
  token: string
) => {
  const axiosInstance = createAxiosInstance(token);

  try {
    const response = await axiosInstance.post(
      "/notify-emergency",
      emergencyData
    );
    return response.data;
  } catch (error) {
    // Handle error here
    console.log(`error : ${error}`);
    throw error;
  }
};

const emergencyService = {
  notifyEmergency,
};
export default emergencyService;
