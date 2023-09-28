import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { IComplaintData, IComplaintsInitialState } from "../../models";
import complaintService from "../../services/complaint-service";
import { RootState } from "../store";

const initialState: IComplaintsInitialState = {
  complaints: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// create complaint
export const createComplaints = createAsyncThunk(
  "complaints/createComplaints",
  async (complaintData: IComplaintData, thunkAPI) => {
    const user = (thunkAPI.getState() as RootState).auth.user;
    try {
      return await complaintService.createComplaint(
        complaintData,
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

const complaintSlice = createSlice({
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

export const { reset } = complaintSlice.actions;

export default complaintSlice.reducer;
