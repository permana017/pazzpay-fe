import { createAsyncThunk } from "@reduxjs/toolkit";
import userService from "./userService";

export const fetchUserById = createAsyncThunk(
  "users/fetchUsers",
  async (id) => {
    const response = await userService.fetchUsersById(id);
    return response;
  }
);
