import axiosInstance from "@/helper/axiosInstance";

const API_URL = process.env.NEXT_PUBLIC_BASE_API_URL;

const fetchUsersById = async (id) => {
  try {
    const response = await axiosInstance.get(`/users/${id}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// const addUser = async (newUser) => {
//   const response = await axios.post(API_URL, newUser);
//   return response.data;
// };

// const updateUser = async (updatedUser) => {
//   const response = await axios.put(`${API_URL}/${updatedUser.id}`, updatedUser);
//   return response.data;
// };

// const deleteUser = async (userId) => {
//   await axios.delete(`${API_URL}/${userId}`);
// };

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  fetchUsersById,
  //   addUser,
  //   updateUser,
  //   deleteUser,
};
