import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  predios: [],
};

export const prediosSlice = createSlice({
  name: "predios",
  initialState,
  reducer: {
    getPredios: (state, action) => {
      return { ...state, predios: action.payload };
    },
    addPredio: (state, action) => {
      return { ...state, employees: [action.payload, ...state.employees] };
    },
  },
});
export const { getPredios, addPredio } = prediosSlice.actions;
