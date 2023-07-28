import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  predios: [],
};

export const prediosSlice = createSlice({
  name: "predios",
  initialState,
  reducers: {
    getPredios: (state, action) => {
      return { ...state, predios: action.payload };
    },
    addPredio: (state, action) => {
      console.log(action.payload);
      return { ...state, predios: [action.payload, ...state.predios] };
    },
    editPredio: (state, action) => {
      let auxArray = [...state.predios];
      console.log(auxArray, action.payload.id);
      let index = auxArray.findIndex((item) => item.id == action.payload.id);
      auxArray[index] = action.payload;
      return { ...state, predios: auxArray };
    },
    deletePredio: (state, action) => {
      const arrayAux = [...state.predios];
      const predios = arrayAux.filter((predio) => predio.id != action.payload);
      return { ...state, predios };
    },
  },
});

export const { getPredios, addPredio, editPredio, deletePredio } =
  prediosSlice.actions;

export default prediosSlice.reducer;
