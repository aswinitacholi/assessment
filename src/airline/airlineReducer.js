import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import airlineApi from "../service/api/airlineApi";

export const fetchAsyncAirlines = createAsyncThunk(
  "airlines/fetchAsyncAirlines",
  async () => {
    const response = await airlineApi.get(`airlines`);
    return response.data;
  }
);

export const createAsyncAirlines = createAsyncThunk(
  "airlines/createAsyncAirlines",
  async ({ airlines }) => {
    const response = await airlineApi.post(airlines);
    return response.data;
  }
);
export const fetchAsyncAirlinesByID = createAsyncThunk(
  "airlines/fetchAsyncAirlinesByID",
  async ({ id }) => {
    const response = await airlineApi.get(`/airlines/:{id}`);
    return response.data;
  }
);

const initialState = {
  airlines: {},
};

const airLineSlice = createSlice({
  name: "airlines",
  initialState,
  extraReducers: {
    [fetchAsyncAirlines.fulfilled]: (state,{payload}) => {
        return [...payload];
    },
    [createAsyncAirlines.fulfilled]: (state,{payload}) => {
        state.push(payload);
    },
    [fetchAsyncAirlinesByID.fulfilled]: (state,{payload}) => {
        return [...payload];
    },
  },
});

const {reducer} = airLineSlice;
export default reducer;
