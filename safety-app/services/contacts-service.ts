import axios, { AxiosRequestConfig } from "axios";
import { IContactPersonData } from "../models";

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

// create Contacts
const createContacts = async (
  contactData: { userContactPersonData: IContactPersonData[] },
  token: string
) => {
  const axiosInstance = createAxiosInstance(token);

  try {
    const response = await axiosInstance.post(
      "/create-user-contact-person",
      contactData
    );
    return response.data;
  } catch (error) {
    // Handle error here
    console.log(`error : ${error}`);
    throw error;
  }
};

// get contact person
const getContacts = async (token: string) => {
  const axiosInstance = createAxiosInstance(token);

  try {
    // const response = await axiosInstance.post("/get-all-contact-person");
    const response = {
      data: [
        {
          id: 1,
          userId: 2,
          contactPersonsName: "Sithija Shehara",
          address: "address 1",
          contactNumber: "0767854323",
          email: "nsithijashehara@gmail.com",
          updatedAt: "2023-09-28T05:15:12.102Z",
          createdAt: "2023-09-28T05:15:12.102Z",
        },
        {
          id: 2,
          userId: 2,
          contactPersonsName: "Kaveesha rathnayaka",
          address: "address 2",
          contactNumber: "0716567890",
          email: "kaveesha.rathnaka@gmail.com",
          updatedAt: "2023-09-28T05:15:12.170Z",
          createdAt: "2023-09-28T05:15:12.170Z",
        },
        {
          id: 3,
          userId: 2,
          contactPersonsName: "Kaveesha rathnayaka",
          address: "address 2",
          contactNumber: "0716567890",
          email: "kaveesha.rathnaka@gmail.com",
          updatedAt: "2023-09-28T05:15:12.170Z",
          createdAt: "2023-09-28T05:15:12.170Z",
        },
        {
          id: 4,
          userId: 2,
          contactPersonsName: "Kaveesha rathnayaka",
          address: "address 2",
          contactNumber: "0716567890",
          email: "kaveesha.rathnaka@gmail.com",
          updatedAt: "2023-09-28T05:15:12.170Z",
          createdAt: "2023-09-28T05:15:12.170Z",
        },
        {
          id: 5,
          userId: 2,
          contactPersonsName: "Kaveesha rathnayaka",
          address: "address 2",
          contactNumber: "0716567890",
          email: "kaveesha.rathnaka@gmail.com",
          updatedAt: "2023-09-28T05:15:12.170Z",
          createdAt: "2023-09-28T05:15:12.170Z",
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

const contactsService = {
  createContacts,
  getContacts,
};
export default contactsService;
