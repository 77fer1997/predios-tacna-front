import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  usuarios: [],
};

export const usersSlice = createSlice({
  name: "usuarios",
  initialState,
  reducers: {
    getUsers: (state, action) => {
      return { ...state, usuarios: action.payload };
    },
    addUser: (state, action) => {
      return { ...state, usuarios: [action.payload, ...state.usuarios] };
    },
    editUser: (state, action) => {
      let auxArray = [...state.usuarios];
      let index = auxArray.findIndex((item) => item.id == action.payload.id);
      auxArray[index] = action.payload;
      return { ...state, usuarios: auxArray };
    },
    deleteUser: (state, action) => {
      const arrayAux = [...state.usuarios];
      const usuarios = arrayAux.filter(
        (usuario) => usuario.id != action.payload
      );
      return { ...state, usuarios };
    },
  },
});

export const { getUsers, addUser, editUser, deleteUser } = usersSlice.actions;

export default usersSlice.reducer;
