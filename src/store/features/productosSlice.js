import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productos: [],
};

export const productosSlice = createSlice({
  name: "productos",
  initialState,
  reducers: {
    getProductos: (state, action) => {
      return { ...state, productos: action.payload };
    },
    addProducto: (state, action) => {
      console.log(action.payload);
      return {
        ...state,
        productos: [action.payload, ...state.productos],
      };
    },
    editProducto: (state, action) => {
      let auxArray = [...state.productos];
      console.log(auxArray, action.payload.id);
      let index = auxArray.findIndex((item) => item.id == action.payload.id);
      auxArray[index] = action.payload;
      return { ...state, productos: auxArray };
    },
    deleteProducto: (state, action) => {
      const arrayAux = [...state.productos];
      const productos = arrayAux.filter(
        (productos) => productos.id != action.payload.id
      );
      return { ...state, productos };
    },
  },
});

export const { getProductos, addProducto, editProducto, deleteProducto } =
  productosSlice.actions;

export default productosSlice.reducer;
