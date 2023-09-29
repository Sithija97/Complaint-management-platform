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

const getEmergencyHistory = async (token: string) => {
  const axiosInstance = createAxiosInstance(token);

  try {
    // const response = await axiosInstance.get("/emergency-history");
    const response = {
      data: [
        {
          id: 1,
          lat: "6.9123",
          long: "79.8829",
          userId: 3,
          createdAt: "2023-09-29T09:12:14.000Z",
          updatedAt: "2023-09-29T09:12:14.000Z",
        },
        {
          id: 2,
          lat: "6.4123",
          long: "79.8829",
          userId: 3,
          createdAt: "2023-09-29T09:12:28.000Z",
          updatedAt: "2023-09-29T09:12:28.000Z",
        },
        {
          id: 3,
          lat: "6.4123",
          long: "79.9829",
          userId: 3,
          createdAt: "2023-09-29T09:13:02.000Z",
          updatedAt: "2023-09-29T09:13:02.000Z",
        },
      ],
    };
    return response.data;
  } catch (error) {
    // Handle error here
    console.log(`error : ${error}`);
    throw error;
  }
};

const emergencyService = {
  notifyEmergency,
  getEmergencyHistory,
};
export default emergencyService;
