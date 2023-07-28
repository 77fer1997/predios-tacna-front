import { createSlice } from "@reduxjs/toolkit";
import { persistLocalStorage } from "@/utilities/localStorage.utility";

const administradorEmptyState = {
  id: "",
  name: "",
  lastnames: "",
  email: "",
};
const initialState = () => {
  if (typeof window !== "undefined") {
    if (localStorage.getItem("admin")) {
      const adminInfo = JSON.parse(localStorage.getItem("admin"));
      return adminInfo;
    } else {
      return administradorEmptyState;
    }
  } else {
    return administradorEmptyState;
  }
};
const AdminKey = "admin";
export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    login: (state, action) => {
      console.log("hola");
      persistLocalStorage(AdminKey, action.payload);
      const { id, name, lastnames, email } = action.payload;
      state.id = id;
      state.name = name;
      state.email = email;
      state.lastnames = lastnames;
    },
    logOut: (state, action) => initialState,
  },
});

export const { login } = loginSlice.actions;

export default loginSlice.reducer;
