import axios, { AxiosRequestConfig } from "axios";
import {
  IForgotPWData,
  ILoginData,
  IRegisterData,
  IUpdateData,
  IVerifyUserData,
} from "../models";

const BASE_URL = "http://192.168.8.100:3000/api"; // Replace with your backend API URL

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
          lastName: "Rathnayaka",
          nameWithInitials: "R.M.K.G.Rathnayaka",
          fullName: "Kaveesha Gayashan Rathnayaka",
          address: "Borella",
          contactNumber: "0765467890",
          email: "doyouknowyt31@gmail.com",
          nic: "978765435V",
          gender: 1,
          userRoleId: 1,
          policeStationId: 1,
          secretCode: null,
          password:
            "$2b$10$tjni9byrfZaZUxgXisE8YOVO/pdbnAVyC7yX37nr3Js5PCe1X07Qq",
          filename: null,
          createdAt: "2023-10-06T06:41:15.000Z",
          updatedAt: "2023-10-06T06:41:15.000Z",
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
const uploadProfilePicture = () => {};

// get dahsboard data
const getDashboardData = async (token: string) => {
  const axiosInstance = createAxiosInstance(token);

  try {
    // const response = await axiosInstance.get("/get-dasboard-data");
    const reponse = {
      data: {
        user: {
          userCount: 1,
          policeUserCount: 1,
        },
        complaint: {
          activeComplaints: 0,
          removedComplaints: 0,
        },
        fine: {
          activeFines: 2,
          complatedFines: 0,
        },
        policeReport: {
          policeReports: 1,
          allPoliceReportRequests: 1,
          pendingPoliceReportRequests: 0,
        },
        revenue: {
          pendingFineAmount: 6000,
          completedFineAmount: null,
          totalFineAmount: 6000,
        },
      },
    };
    return reponse.data;
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
