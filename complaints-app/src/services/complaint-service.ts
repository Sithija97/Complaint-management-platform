import axios, { AxiosRequestConfig } from "axios";
import { IComplaintData, IRemoveComplaintData } from "../models";

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
          title: "Complaint 2",
          policeStationId: 1,
          complaint: "Complaint 2 Description",
          category: 1,
          statusId: 1,
          userId: 3,
          isDeleted: 0,
          createdAt: "2023-10-07T16:11:30.000Z",
          updatedAt: "2023-10-07T16:11:30.000Z",
          User: {
            id: 3,
            firstName: "sithija",
            lastName: "shehara",
          },
        },
        {
          id: 2,
          title: "Complaint 2",
          policeStationId: 1,
          complaint: "Complaint 2 Description",
          category: 1,
          statusId: 1,
          userId: 3,
          isDeleted: 0,
          createdAt: "2023-10-07T16:11:30.000Z",
          updatedAt: "2023-10-07T16:11:30.000Z",
          User: {
            id: 3,
            firstName: "sithija",
            lastName: "shehara",
          },
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

// remove complaint
const removeComplaint = async (
  complaintData: IRemoveComplaintData,
  token: string
) => {
  const axiosInstance = createAxiosInstance(token);

  try {
    const response = await axiosInstance.post(
      "/remove-complaint",
      complaintData
    );
    return response.data;
  } catch (error) {
    // Handle error here
    console.log(`error : ${error}`);
    throw error;
  }
};

// user specific complaints
const userSpecificComplaints = async (token: string) => {
  const axiosInstance = createAxiosInstance(token);

  try {
    // const response = await axiosInstance.get("/user-specific-complaints");
    const response = {
      data: [
        {
          id: 1,
          title: "Complaint 2",
          policeStationId: 1,
          complaint: "Complaint 2 Description",
          category: 1,
          statusId: 1,
          userId: 3,
          isDeleted: 0,
          createdAt: "2023-10-07T16:11:30.000Z",
          updatedAt: "2023-10-07T16:11:30.000Z",
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
  removeComplaint,
  userSpecificComplaints,
};
export default complaintService;
