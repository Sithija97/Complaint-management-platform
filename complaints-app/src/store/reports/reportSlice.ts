import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { IReportRequestData, IReportsInitialState } from "../../models";
import { RootState } from "../store";
import policeReportService from "../../services/police-reports-service";

const initialState: IReportsInitialState = {
  reports: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// create report request
export const createReportRequest = createAsyncThunk(
  "reports/createReportRequest",
  async (reportData: IReportRequestData, thunkAPI) => {
    const user = (thunkAPI.getState() as RootState).auth.user;
    try {
      return await policeReportService.requestReport(reportData, user?.token!);
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

// get all
export const getAllReports = createAsyncThunk(
  "reports/getAllReports",
  async (_, thunkAPI) => {
    const user = (thunkAPI.getState() as RootState).auth.user;
    try {
      return await policeReportService.getReports(user?.token!);
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

const reportSlice = createSlice({
  name: "reports",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllReports.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllReports.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.reports = action.payload!;
      })
      .addCase(getAllReports.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
      });
  },
});

export const { reset } = reportSlice.actions;

export default reportSlice.reducer;
