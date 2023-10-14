import axios, { AxiosRequestConfig } from "axios";
import {
  IForgotPWData,
  ILoginData,
  IRegisterData,
  IUpdateData,
  IVerifyUserData,
} from "../models";

// 192.168.1.4

const BASE_URL = "http://localhost:3000/api"; // Replace with your backend API URL

const createAxiosInstance = (token: string) => {
  const config: AxiosRequestConfig = {
    baseURL: BASE_URL,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return axios.create(config);
};

// Register a new user
const registerUser = async (userData: IRegisterData) => {
  try {
    const response = await axios.post(`${BASE_URL}/create-user`, userData);

    return response.data;
  } catch (error) {
    console.log(`error : ${error}`);
    throw error;
  }
};

// Login user
const loginUser = async (userData: ILoginData) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, userData);

    localStorage.setItem("user", JSON.stringify(response.data));

    return response.data;
  } catch (error) {
    console.log(`error : ${error}`);
    throw error;
  }
};

// get all users
const getAllUsers = async (token: string) => {
  const axiosInstance = createAxiosInstance(token);
  try {
    // const response = await axiosInstance.get("/get-all-users");
    const response = {
      data: [
        {
          id: 1,
          firstName: "kaveesha",
          lastName: "rathnayaka",
          nameWithInitials: "r.m.k.g.rathnayaka",
          fullName: "kaveesha rathnayaka",
          address: "borella",
          contactNumber: "0765467891",
          email: "doyouknowyt31@gmail.com",
          nic: "978765435V",
          gender: 1,
          userRoleId: 2,
          policeStationId: 1,
          secretCode: null,
          password:
            "$2b$10$C4nAKfLs13mgmCmIPMKUruyosZFCajrsoTFdo4cyHP/5aeYdmXeKO",
          filename: null,
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY5NjcwNzM3NCwiZXhwIjoxNzI4MjQzMzc0fQ.-5rT0Zefob8O95SJOc5mz66bhP5vEZmBpyjvKDzQwsc",
          createdAt: "2023-10-07T19:09:39.000Z",
          updatedAt: "2023-10-07T19:36:14.000Z",
        },
        {
          id: 2,
          firstName: "sithija",
          lastName: "shehara",
          nameWithInitials: "n.s.shehara",
          fullName: "sithija shehara",
          address: "maharagama",
          contactNumber: "0765467890",
          email: "nsithijashehara@gmail.com",
          nic: "978765435V",
          gender: 1,
          userRoleId: 1,
          policeStationId: 1,
          secretCode: null,
          password:
            "$2b$10$CRcFPwF7rVTgunozTwMqw.h91T638jV8mP94wFKKr7/tYBu7KbRWC",
          filename: null,
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsImlhdCI6MTY5NjcwNTgzNCwiZXhwIjoxNzI4MjQxODM0fQ.eIvtEBuH5usuYEsz_e-Vk0NAsbUhmnlrPzqo9olIq7E",
          createdAt: "2023-10-07T19:09:51.000Z",
          updatedAt: "2023-10-07T19:10:34.000Z",
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

// update user
const updateUser = async (userData: IUpdateData, token: string) => {
  const axiosInstance = createAxiosInstance(token);
  try {
    const response = await axiosInstance.patch(
      `${BASE_URL}/update-user`,
      userData
    );
    localStorage.setItem("user", JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    console.log(`error : ${error}`);
    throw error;
  }
};

// forgot password
const forgotUserPassword = async (data: IForgotPWData) => {
  try {
    const response = await axios.post(`${BASE_URL}/forgot-password`, {
      data,
    });
    return response.data;
  } catch (error) {
    console.log(`error : ${error}`);
    throw error;
  }
};

// verify user
const verifyUser = async (userData: IVerifyUserData) => {
  try {
    const response = await axios.post(`${BASE_URL}/verify-user`, userData);
    localStorage.setItem("user", JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    console.log(`error : ${error}`);
    throw error;
  }
};

// upload profile picture
const uploadProfilePicture = async (data: any, token: string) => {
  const axiosInstance = createAxiosInstance(token);
  try {
    const response = await axiosInstance.post(
      `${BASE_URL}/upload-profile-picture`,
      data
    );
    localStorage.setItem("user", JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    console.log(`error : ${error}`);
    throw error;
  }
};

// get dahsboard data
const getDashboardData = async (token: string) => {
  const axiosInstance = createAxiosInstance(token);

  try {
    const response = await axiosInstance.get("/get-dashboard-data");
    // const response = {
    //   data: {
    //     user: {
    //       userCount: 1,
    //       policeUserCount: 1,
    //     },
    //     complaint: {
    //       activeComplaints: 0,
    //       removedComplaints: 0,
    //     },
    //     fine: {
    //       activeFines: 2,
    //       complatedFines: 0,
    //     },
    //     policeReport: {
    //       policeReports: 1,
    //       allPoliceReportRequests: 1,
    //       pendingPoliceReportRequests: 0,
    //     },
    //     revenue: {
    //       pendingFineAmount: 6000,
    //       completedFineAmount: null,
    //       totalFineAmount: 6000,
    //     },
    //   },
    // };
    return response.data;
  } catch (error) {
    console.log(`error : ${error}`);
    throw error;
  }
};

const authService = {
  registerUser,
  loginUser,
  getAllUsers,
  updateUser,
  forgotUserPassword,
  verifyUser,
  uploadProfilePicture,
  getDashboardData,
};

export default authService;
