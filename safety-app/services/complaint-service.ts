import axios, { AxiosRequestConfig } from "axios";
import localStorage from "react-native-expo-localstorage";
import { IComplaintData } from "../models";

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

// Create complaint
const createComplaint = async (
  complaintData: IComplaintData,
  token: string
) => {
  const axiosInstance = createAxiosInstance(token);

  try {
    const response = await axiosInstance.post(
      "/create-complaint",
      complaintData
    );
    return response.data;
  } catch (error) {
    // Handle error here
    console.log(`error : ${error}`);
    throw error;
  }
};

// get all complaints
const getComplaints = async (token: string) => {
  const axiosInstance = createAxiosInstance(token);

  try {
    // const response = await axiosInstance.get("/get-all-complaints");
    const response = {
      data: [
        {
          id: 1,
          title: "Complaint 1",
          complaint: "Complaint 1 Description",
          category: 3,
          userId: 3,
          isDeleted: "0",
          createdAt: "2023-09-29T09:15:31.000Z",
          updatedAt: "2023-09-29T09:15:31.000Z",
        },
        {
          id: 2,
          title: "Complaint 2",
          complaint: "Complaint 2 Description",
          category: 2,
          userId: 3,
          isDeleted: "0",
          createdAt: "2023-09-29T09:15:51.000Z",
          updatedAt: "2023-09-29T09:15:51.000Z",
        },
        {
          id: 3,
          title: "Complaint 3",
          complaint: "Complaint 3 Description",
          category: 1,
          userId: 3,
          isDeleted: "0",
          createdAt: "2023-09-29T09:16:07.000Z",
          updatedAt: "2023-09-29T09:16:07.000Z",
        },
        {
          id: 4,
          title: "Complaint 3",
          complaint: "Complaint 3 Description",
          category: 1,
          userId: 3,
          isDeleted: "0",
          createdAt: "2023-09-29T09:16:07.000Z",
          updatedAt: "2023-09-29T09:16:07.000Z",
        },
        {
          id: 5,
          title: "Complaint 3",
          complaint: "Complaint 3 Description",
          category: 1,
          userId: 3,
          isDeleted: "0",
          createdAt: "2023-09-29T09:16:07.000Z",
          updatedAt: "2023-09-29T09:16:07.000Z",
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

const complaintService = {
  createComplaint,
  getComplaints,
};
export default complaintService;
