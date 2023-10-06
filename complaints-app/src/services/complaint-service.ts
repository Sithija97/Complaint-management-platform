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
          title: "Complaint 1",
          policeStationId: 1,
          complaint: "Complaint 3 Description",
          category: 1,
          statusId: 1,
          userId: 1,
          isDeleted: 0,
          updatedAt: "2023-10-06T06:44:41.219Z",
          createdAt: "2023-10-06T06:44:41.219Z",
        },
        {
          id: 2,
          title: "Complaint 2",
          policeStationId: 1,
          complaint: "Complaint 3 Description",
          category: 1,
          statusId: 1,
          userId: 1,
          isDeleted: 0,
          updatedAt: "2023-10-06T06:44:41.219Z",
          createdAt: "2023-10-06T06:44:41.219Z",
        },
        {
          id: 3,
          title: "Complaint 3",
          policeStationId: 1,
          complaint: "Complaint 3 Description",
          category: 1,
          statusId: 1,
          userId: 1,
          isDeleted: 0,
          updatedAt: "2023-10-06T06:44:41.219Z",
          createdAt: "2023-10-06T06:44:41.219Z",
        },
        {
          id: 4,
          title: "Complaint 4",
          policeStationId: 1,
          complaint: "Complaint 3 Description",
          category: 1,
          statusId: 1,
          userId: 1,
          isDeleted: 0,
          updatedAt: "2023-10-06T06:44:41.219Z",
          createdAt: "2023-10-06T06:44:41.219Z",
        },
        {
          id: 5,
          title: "Complaint 5",
          policeStationId: 1,
          complaint: "Complaint 3 Description",
          category: 1,
          statusId: 1,
          userId: 1,
          isDeleted: 0,
          updatedAt: "2023-10-06T06:44:41.219Z",
          createdAt: "2023-10-06T06:44:41.219Z",
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
const userSpecificComplaints = () => {};

// delete complaint
const deleteComplaint = () => {};

const complaintService = {
  createComplaint,
  getComplaints,
  removeComplaint,
  userSpecificComplaints,
  deleteComplaint,
};
export default complaintService;
