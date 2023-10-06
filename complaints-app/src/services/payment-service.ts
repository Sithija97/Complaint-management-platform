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

const createPayment = () => {};

//get all payments

const getPayments = () => {};

// get payments by user

const getPaymentByUser = () => {};

const paymentService = {
  createPayment,
  getPayments,
  getPaymentByUser,
};

export default paymentService;
