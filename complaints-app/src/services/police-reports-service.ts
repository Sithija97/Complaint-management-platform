import axios, { AxiosRequestConfig } from "axios";
import { IReportRequestData } from "../models";

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

//change report status

const changeReportStatus = () => {};

// upload police report

const uploadPoliceReport = () => {};

// get report by user

const getReportByUser = () => {};

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

const policeReportService = {
  requestReport,
  changeReportStatus,
  uploadPoliceReport,
  getReportByUser,
  getReports,
};

export default policeReportService;
