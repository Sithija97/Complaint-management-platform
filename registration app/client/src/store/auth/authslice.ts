/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../../services/auth";
import { registerInputs } from "../../models";

const initialState = {
  users: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const register = createAsyncThunk(
  "users/register",
  async (payload: registerInputs, thunkAPI) => {
    try {
      const response = await authService.register(payload);
      return response.data;
    } catch (error: any) {
      const message = error.response.data.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const markAttendance = createAsyncThunk(
  "users/markAttendance",
  async (payload: registerInputs, thunkAPI) => {
    try {
      const response = await authService.markAttendance(payload);
      return response.data;
    } catch (error: any) {
      const message = error.response.data.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(register.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        state.message = payload as string;
      })
      .addCase(markAttendance.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(markAttendance.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(markAttendance.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        state.message = payload as string;
      });
  },
});

// export const {  } = authSlice.actions;

export default authSlice.reducer;
