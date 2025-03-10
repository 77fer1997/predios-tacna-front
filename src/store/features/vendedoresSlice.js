import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  vendedores: [],
};

export const vendedoresSlice = createSlice({
  name: "vendedores",
  initialState,
  reducers: {
    getVendedores: (state, action) => {
      return { ...state, vendedores: action.payload };
    },
    addVendedor: (state, action) => {
      return { ...state, vendedores: [action.payload, ...state.vendedores] };
    },
    editVendedor: (state, action) => {
      let auxArray = [...state.vendedores];
      let index = auxArray.findIndex((item) => item.id == action.payload.id);
      auxArray[index] = action.payload;
      return { ...state, vendedores: auxArray };
    },
    deleteVendedor: (state, action) => {
      const arrayAux = [...state.vendedores];
      const vendedores = arrayAux.filter(
        (vendedor) => vendedor.id != action.payload.id
      );
      return { ...state, vendedores };
    },
  },
});

export const { getVendedores, addVendedor, editVendedor, deleteVendedor } =
  vendedoresSlice.actions;

export default vendedoresSlice.reducer;
