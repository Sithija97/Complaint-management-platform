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

const getCommunityPosts = async (token: string) => {
  const axiosInstance = createAxiosInstance(token);

  try {
    // const response = await axiosInstance.get("/get-community-posts");
    const response = {
      data: [
        [
          {
            id: 1,
            description: "My community post description",
            title: "My Community Post WW",
            userId: 2,
            createdAt: "2023-09-28T05:17:59.000Z",
            updatedAt: "2023-09-28T05:17:59.000Z",
            likeCount: 1,
            likedByCurrentUser: 1,
            CommunityPostComments: [
              {
                id: 1,

                communityPostId: 1,
                commentedBy: 2,
                comment: "My comment 1",
                createdAt: "2023-09-28T05:19:41.000Z",
                updatedAt: "2023-09-28T05:19:41.000Z",
                User: {
                  id: 2,
                  firstName: "Wonder",
                  lastName: "Woman",
                  fullName: "Wonder Woman",
                },
              },
            ],
          },
          {
            id: 2,
            description: "My community post description",
            title: "My Community Post WW",
            userId: 2,
            createdAt: "2023-09-28T05:17:59.000Z",
            updatedAt: "2023-09-28T05:17:59.000Z",
            likeCount: 1,
            likedByCurrentUser: 1,
            CommunityPostComments: [
              {
                id: 2,

                communityPostId: 1,
                commentedBy: 2,
                comment: "My comment 1",
                createdAt: "2023-09-28T05:19:41.000Z",
                updatedAt: "2023-09-28T05:19:41.000Z",
                User: {
                  id: 2,
                  firstName: "Wonder",
                  lastName: "Woman",
                  fullName: "Wonder Woman",
                },
              },
            ],
          },
        ],
      ],
    };
    return response.data;
  } catch (error) {
    // Handle error here
    console.log(`error : ${error}`);
    throw error;
  }
};

const communityService = {
  getCommunityPosts,
};

export default communityService;