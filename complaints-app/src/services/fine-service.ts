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
const getAllFines = async (token: string) => {
  const axiosInstance = createAxiosInstance(token);

  try {
    // const response = await axiosInstance.get("/get-all-fines");
    const response = {
      data: [
        {
          id: 2,
          title: "fine 2",
          category: 1,
          description: "fine 1 des",
          issuedDate: "2023-10-06T20:44:55.000Z",
          endDate: "2023-10-06T20:44:55.000Z",
          amount: 2000,
          inchargeId: 1,
          userId: 2,
          status: 1,
          tax: 100,
          otherCharges: 100,
          policeStationId: 1,
          createdAt: "2023-10-07T19:50:10.000Z",
          updatedAt: "2023-10-07T19:50:10.000Z",
          User: {
            id: 1,
            firstName: "kaveesha",
            lastName: "rathnayaka",
          },
        },
        {
          id: 3,
          title: "fine 1",
          category: 1,
          description: "fine 1 des",
          issuedDate: "2023-10-06T20:44:55.000Z",
          endDate: "2023-10-06T20:44:55.000Z",
          amount: 4000,
          inchargeId: 1,
          userId: 2,
          status: 1,
          tax: 100,
          otherCharges: 100,
          policeStationId: 1,
          createdAt: "2023-10-07T19:50:24.000Z",
          updatedAt: "2023-10-07T19:50:24.000Z",
          User: {
            id: 1,
            firstName: "kaveesha",
            lastName: "rathnayaka",
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

// user specific fines
const userSpecificFines = async (token: string) => {
  const axiosInstance = createAxiosInstance(token);
  try {
    // const response = await axiosInstance.get("/user-specific-fines");
    const response = {
      data: [
        {
          id: 2,
          title: "fine 2",
          category: 1,
          description: "fine 1 des",
          issuedDate: "2023-10-06T20:44:55.000Z",
          endDate: "2023-10-06T20:44:55.000Z",
          amount: 2000,
          inchargeId: 1,
          userId: 2,
          status: 1,
          tax: 100,
          otherCharges: 100,
          policeStationId: 1,
          createdAt: "2023-10-07T19:50:10.000Z",
          updatedAt: "2023-10-07T19:50:10.000Z",
        },
        {
          id: 3,
          title: "fine 1",
          category: 1,
          description: "fine 1 des",
          issuedDate: "2023-10-06T20:44:55.000Z",
          endDate: "2023-10-06T20:44:55.000Z",
          amount: 4000,
          inchargeId: 1,
          userId: 2,
          status: 1,
          tax: 100,
          otherCharges: 100,
          policeStationId: 1,
          createdAt: "2023-10-07T19:50:24.000Z",
          updatedAt: "2023-10-07T19:50:24.000Z",
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

const fineService = {
  createFine,
  getAllFines,
  userSpecificFines,
};

export default fineService;
