import { createSlice } from "@reduxjs/toolkit";
import { fetchUserById } from "./userAction";
// import extraReducers from './usersExtraReducers';

const usersSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    loading: false, // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data;
      })
      .addCase(fetchUserById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default usersSlice.reducer;
