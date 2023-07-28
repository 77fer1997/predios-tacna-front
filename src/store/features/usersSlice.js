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
      console.log(action.payload);
      return { ...state, usuarios: [action.payload, ...state.usuarios] };
    },
    editUser: (state, action) => {
      let auxArray = [...state.usuarios];
      console.log(auxArray, action.payload.id);
      let index = auxArray.findIndex((item) => item.id == action.payload.id);
      auxArray[index] = action.payload;
      return { ...state, usuarios: auxArray };
    },
    deleteUser: (state, action) => {
      const arrayAux = [...state.usuarios];
      console.log(action.payload);
      const usuarios = arrayAux.filter(
        (usuario) => usuario.id != action.payload
      );
      console.log(usuarios);

      return { ...state, usuarios };
    },
  },
});

export const { getUsers, addUser, editUser, deleteUser } = usersSlice.actions;

export default usersSlice.reducer;
