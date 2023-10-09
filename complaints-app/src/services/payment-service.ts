import { IPaymentData } from "./../models/index";
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

// create payment
const createPayment = async (paymentData: IPaymentData, token: string) => {
  const axiosInstance = createAxiosInstance(token);

  try {
    const response = await axiosInstance.post("/create-payment", paymentData);
    return response.data;
  } catch (error) {
    // Handle error here
    console.log(`error : ${error}`);
    throw error;
  }
};

//get all payments
const getAllPayments = async (token: string) => {
  const axiosInstance = createAxiosInstance(token);
  try {
    // const response = await axiosInstance.get("/get-all-payments");
    const response = {
      data: [
        {
          id: 1,
          title: "Payment 1",
          description: "Payment 1 desc",
          fineId: 2,
          userId: 2,
          amount: 2000,
          policeStationId: 1,
          createdAt: "2023-10-09T10:46:58.000Z",
          updatedAt: "2023-10-09T10:46:58.000Z",
          User: {
            id: 2,
            firstName: "sithija",
            lastName: "shehara",
            PoliceStation: {
              id: 1,
              policeStationName: "Borella",
            },
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

// get payments by user
const getPaymentByUser = async (token: string) => {
  const axiosInstance = createAxiosInstance(token);
  try {
    // const response = await axiosInstance.get("/get-payments-by-user");
    const response = {
      data: [
        {
          id: 1,
          title: "Payment 1",
          description: "Payment 1 desc",
          fineId: 6,
          userId: 3,
          amount: 2000,
          createdAt: "2023-10-07T17:57:30.000Z",
          updatedAt: "2023-10-07T17:57:30.000Z",
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

const paymentService = {
  createPayment,
  getAllPayments,
  getPaymentByUser,
};

export default paymentService;
