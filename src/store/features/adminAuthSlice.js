import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
const administradorEmptyState = {
  id: 0,
  name: "",
  lastnames: "",
  email: "",
};

const AdminKey = "admin";
export const loginSlice = createSlice({
  name: "login",
  initialState: administradorEmptyState,
  reducers: {
    login: (state, action) => {
      Cookies.set(AdminKey, action.payload.token);
      const { id, name, lastnames, email } = action.payload;
      state.id = id;
      state.name = name;
      state.email = email;
      state.lastnames = lastnames;
    },
    logOut: (state, action) => {
      Cookies.remove("admin");
      return administradorEmptyState;
    },
  },
});

export const { login, logOut } = loginSlice.actions;

export default loginSlice.reducer;
