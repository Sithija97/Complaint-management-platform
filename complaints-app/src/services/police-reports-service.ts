import axios, { AxiosRequestConfig } from "axios";
import { IReportRequestData, IReportStatus } from "../models";

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

// report request
const requestReport = async (
  requestData: IReportRequestData,
  token: string
) => {
  const axiosInstance = createAxiosInstance(token);
  try {
    const response = await axiosInstance.post(
      "/police-report-request",
      requestData
    );
    return response.data;
  } catch (error) {
    // Handle error here
    console.log(`error : ${error}`);
    throw error;
  }
};

// change report status
const changeReportStatus = async (statusData: IReportStatus, token: string) => {
  const axiosInstance = createAxiosInstance(token);
  try {
    const response = await axiosInstance.patch(
      "/change-report-status",
      statusData
    );
    return response.data;
  } catch (error) {
    // Handle error here
    console.log(`error : ${error}`);
    throw error;
  }
};

// upload police report

// { fileName, policeReportRequestId, userId }
const uploadPoliceReport = async () => {};

// get report by user
const getReportByUser = async (token: string) => {
  const axiosInstance = createAxiosInstance(token);
  try {
    const response = await axiosInstance.get("/get-police-reports-by-user");
    return response.data;
  } catch (error) {
    // Handle error here
    console.log(`error : ${error}`);
    throw error;
  }
};

// get all reports
const getReports = (token: string) => {
  const axiosInstance = createAxiosInstance(token);
  try {
    // const response = await axiosInstance.get("/get-police-reports");
    const response = {
      data: [],
    };
    return response.data;
  } catch (error) {
    // Handle error here
    console.log(`error : ${error}`);
    throw error;
  }
};

// police-report-request-list
const getReportRequestList = (token: string) => {
  const axiosInstance = createAxiosInstance(token);
  try {
    // const response = await axiosInstance.get("/police-report-request-list");
    const response = {
      data: [
        {
          id: 1,
          title: "Police repot one",
          category: 1,
          description: "Police repot one description",
          userId: 2,
          status: 2,
          policeStationId: 1,
          createdAt: "2023-10-07T19:11:17.000Z",
          updatedAt: "2023-10-07T19:12:01.000Z",
          User: {
            id: 2,
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

// police-report-request-list-by-user
const getReportRequestListByUser = (token: string) => {
  const axiosInstance = createAxiosInstance(token);
  try {
    // const response = await axiosInstance.get("/police-report-request-list-by-user");
    const response = {
      data: [
        {
          id: 1,
          title: "Police repot one",
          category: 1,
          description: "Police repot one description",
          userId: 2,
          status: 2,
          policeStationId: 1,
          createdAt: "2023-10-07T19:11:17.000Z",
          updatedAt: "2023-10-07T19:12:01.000Z",
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

const policeReportService = {
  requestReport,
  changeReportStatus,
  uploadPoliceReport,
  getReportByUser,
  getReports,
  getReportRequestList,
  getReportRequestListByUser,
};

export default policeReportService;
