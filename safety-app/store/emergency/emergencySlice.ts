import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { IEmergencyInitialState } from "../../models";
import { RootState } from "../store";
import emergencyService from "../../services/emergency-service";

const initialState: IEmergencyInitialState = {
  emergencies: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// notify emergency
export const notifyEmergencyAlert = createAsyncThunk(
  "complaints/createComplaints",
  async (emergencyData: { lat: string; long: string }, thunkAPI) => {
    const user = (thunkAPI.getState() as RootState).auth.user;
    try {
      return await emergencyService.notifyEmergency(
        emergencyData,
        user?.token!
      );
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const emergencySlice = createSlice({
  name: "complaints",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {},
});

export const { reset } = emergencySlice.actions;

export default emergencySlice.reducer;
