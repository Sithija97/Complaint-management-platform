import axios, { AxiosRequestConfig } from "axios";
import { IFineData } from "../models";

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

// create fine
const createFine = async (fineData: IFineData, token: string) => {
  const axiosInstance = createAxiosInstance(token);

  try {
    const response = await axiosInstance.post("/create-fine", fineData);
    return response.data;
  } catch (error) {
    // Handle error here
    console.log(`error : ${error}`);
    throw error;
  }
};

// get all fines
const getFines = async (token: string) => {
  const axiosInstance = createAxiosInstance(token);

  try {
    // const response = await axiosInstance.get("/get-all-fines");
    const response = {
      data: [
        {
          id: 1,
          title: "fine 1",
          category: 1,
          description: "fine 1 des",
          issuedDate: "2023-10-06T20:44:55.000Z",
          endDate: "2023-10-06T20:44:55.000Z",
          amount: 2000,
          inchargeId: 1,
          status: 1,
          userId: 2,
          tax: 100,
          otherCharges: 100,
          updatedAt: "2023-10-06T13:53:24.234Z",
          createdAt: "2023-10-06T13:53:24.234Z",
        },
        {
          id: 2,
          title: "fine 1",
          category: 1,
          description: "fine 1 des",
          issuedDate: "2023-10-06T20:44:55.000Z",
          endDate: "2023-10-06T20:44:55.000Z",
          amount: 2000,
          inchargeId: 1,
          status: 1,
          userId: 2,
          tax: 100,
          otherCharges: 100,
          updatedAt: "2023-10-06T13:53:24.234Z",
          createdAt: "2023-10-06T13:53:24.234Z",
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

// user specific fines
const fineByUser = () => {};

const fineService = {
  createFine,
  getFines,
  fineByUser,
};

export default fineService;
