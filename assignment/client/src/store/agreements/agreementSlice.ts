/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AgreementInputs } from "../../models";
import agreementService from "../../services/agreement";

const initialState = {
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const confirmAgreement = createAsyncThunk(
  "agreements/confirmAgreement",
  async (payload: AgreementInputs, thunkAPI) => {
    try {
      const response = await agreementService.confirmAgreement(payload);
      return response.data;
    } catch (error: any) {
      const message = error.response.data.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const agreementSlice = createSlice({
  name: "agreements",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(confirmAgreement.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(confirmAgreement.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = payload as string;
      })
      .addCase(confirmAgreement.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        state.message = payload as string;
      });
  },
});

export default agreementSlice.reducer;
