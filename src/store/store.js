import loginReducer from "./features/adminAuthSlice";
import usersReducer from "./features/usersSlice";
import vendedoresReducer from "./features/vendedoresSlice";
import prediosReducer from "./features/prediosSlice";
import predioImagesReducer from "./features/predioImagesSlice";
import { configureStore } from "@reduxjs/toolkit";
export const store = configureStore({
  reducer: {
    loginReducer,
    usersReducer,
    vendedoresReducer,
    prediosReducer,
    predioImagesReducer,
  },
});
