import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  vendedores: [],
};

export const vendedoresSlice = createSlice({
  name: "vendedores",
  initialState,
  reducers: {
    getUsers: (state, action) => {
      return { ...state, vendedores: action.payload };
    },
    addUser: (state, action) => {
      console.log(action.payload);
      return { ...state, vendedores: [action.payload, ...state.vendedores] };
    },
    editUser: (state, action) => {
      let auxArray = [...state.vendedores];
      console.log(auxArray, action.payload.id);
      let index = auxArray.findIndex((item) => item.id == action.payload.id);
      auxArray[index] = action.payload;
      return { ...state, vendedores: auxArray };
    },
    deleteUser: (state, action) => {
      const arrayAux = [...state.vendedores];
      console.log(action.payload);
      const vendedores = arrayAux.filter(
        (vendedor) => vendedor.id != action.payload
      );
      console.log(vendedores);

      return { ...state, vendedores };
    },
  },
});

export const { getUsers, addUser, editUser, deleteUser } =
  vendedoresSlice.actions;

export default vendedoresSlice.reducer;
