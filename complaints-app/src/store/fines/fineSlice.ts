import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { IFineData, IFineInitialState } from "../../models";
import { RootState } from "../store";
import fineService from "../../services/fine-service";

const initialState: IFineInitialState = {
  fines: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// create complaint
export const createFine = createAsyncThunk(
  "fines/createFine",
  async (fineData: IFineData, thunkAPI) => {
    const user = (thunkAPI.getState() as RootState).auth.user;
    try {
      return await fineService.createFine(fineData, user?.token!);
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

// get all complaint
export const getAllFines = createAsyncThunk(
  "fines/getAllFines",
  async (_, thunkAPI) => {
    const user = (thunkAPI.getState() as RootState).auth.user;
    try {
      return await fineService.getFines(user?.token!);
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

const fineSlice = createSlice({
  name: "fines",
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
      .addCase(getAllFines.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllFines.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.fines = action.payload!;
      })
      .addCase(getAllFines.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
      });
  },
});

export const { reset } = fineSlice.actions;

export default fineSlice.reducer;
