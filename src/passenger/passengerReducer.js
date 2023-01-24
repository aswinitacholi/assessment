import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import airlineApi from "../service/api/airlineApi";

export const fetchAsyncPassenger = createAsyncThunk(
  "passenger/fetchAsyncPassenger",
  async () => {
    const response = await airlineApi.get(`passenger`);
    return response.data;
  }
);

export const fetchPassengerById = createAsyncThunk(
    "passenger/fetchPassengerById",
    async({id}) => {
        const response = await airlineApi.get(`passenger/:{id}`);
        return response.data; 
    }
);

export const deletePassengerById = createAsyncThunk(
    "passenger/deletePassengerById",
    async({id}) => {
        const response = await airlineApi.delete(`passenger/:{id}`);
        return response.data; 
    }
);

export const createAsyncPassenger = createAsyncThunk(
    "passenger/createAsyncPassenger",
    async({passenger}) => {
        const response = await airlineApi.post(`{passenger}`);
        return response.data;
    }
);

export const updateAsyncPassenger = createAsyncThunk(
    "passenger/updateAsyncPassenger",
    async({id, passenger}) => {
        const response = await airlineApi.put(`{passenger}/:{id}`);
        return response.data;
    }
);

const initialState = {
  passengers: {},
};

const passengerlice = createSlice({
  name: "passenger",
  initialState,
  extraReducers: {
    [fetchAsyncPassenger.fulfilled]:(state,{payload}) => {
      return [...payload];
    },
    [fetchPassengerById.fulfilled]:(state,{payload}) => [...payload], 
    [deletePassengerById.fulfilled]:(state,{payload}) => {
        let index = state.findIndex(({id}) => id === payload.id);
        state.splice(index, 1);
    },
    [createAsyncPassenger.fulfilled]:(state,{payload}) => {
      state.push(payload);
    },
    [updateAsyncPassenger.fulfilled]:(state,{payload}) => {
      const index = state.findIndex(passenger => passenger.id === payload.id);
      state[index] = {
        ...state[index],
        ...payload,
      };
    },
  },
});

const { reducer } = passengerlice;
export default reducer;
