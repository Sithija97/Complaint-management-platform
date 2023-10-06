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

// report request

const requestReport = () => {};

//change report status

const changeReportStatus = () => {};

// upload police report

const uploadPoliceReport = () => {};

// get report by user

const getReportByUser = () => {};

// get all reports

const getReports = () => {};

const policeReportService = {
  requestReport,
  changeReportStatus,
  uploadPoliceReport,
  getReportByUser,
  getReports,
};

export default policeReportService;
